import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'

const PaymentScreen = ({ history }) => {
    const { shippingAddress } = useSelector(state => state.cart)

    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    if (!shippingAddress) {
        history.push('/shipping')
    }

    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>

                    <Col>
                        <Form.Check
                            type='radio'
                            label='Paypal or Credit Card'
                            id='Paypal'
                            name='paymentMehtod'
                            value='Paypal'
                            checked
                            full
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                        </Form.Check>
                        {/* Add another payment method: Stripe */}
                        {/* <Form.Check
                            type='radio'
                            label='Stripe'
                            id='Stripe'
                            name='paymentMehtod'
                            value='Stripe'

                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check> */}
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary' className='my-3'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen