import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { createStructuredSelector } from 'reselect';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const StripeCheckoutButton = ({ price,...props }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    console.log(token);
    props.cartItems?.map(item => {
      props.clearItem(item)
    })
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='eSamudaay.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is Rs.${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(StripeCheckoutButton));