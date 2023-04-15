import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';
import { CustomButtonContainer } from '../../components/custom-button/custom-button.styles';
import CustomButton from '../../components/custom-button/custom-button.component';



const CheckoutPage = ({ cartItems, total }) => {
  
  const [verifiedCart,setVerifiedCart]=useState(false);


  const verifyCart = async (cartItems) =>{

    console.log(JSON.stringify(cartItems));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'apid' :'7a641664-1185-4c82-b2f8-f947617ad4fb' 
    },
      body: JSON.stringify({    "cart_id": "CART-ID-9",    "bpp_uri": "https://api.test.esamudaay.com/external/v1/ondc/retail/bpp",    "bpp_id": "agri.ondc.esamudaay.com",    "city_code": "std:080",    "business_id": "6bea1626-daca-4a83-9c9f-17f5726b7bda",    "fulfillment_type": "DA_DELIVERY",    "items": [        {            "id": "14249",            "quantity": 1,            "location_id": "6595b205-cdef-4942-9cd5-632bb41d6d9d"        },        {            "id": "14248",            "quantity": 1,            "location_id": "6595b205-cdef-4942-9cd5-632bb41d6d9d"        }    ],    "business_location_ids": [        "6595b205-cdef-4942-9cd5-632bb41d6d9d"    ],    "delivery_info": {        "location": {            "lat": 13.343300703689293,            "lon": 74.79207370430231        },        "address": {            "name": "WORK",            "building": "177 swathi",            "locality": "rajarajeshwari nagar",            "city": "bengaluru",            "state": "karnataka",            "country": "india",            "area_code": "560098"        }    },    "billing_info": {        "name": "Bharath",        "email": "bharath@gogappi.com",        "phone": "+917259814228",        "address": {            "name": "HOME",            "building": "255, Nivas",            "locality": "Jayanagar",            "city": "Bengaluru",            "state": "Karnataka",            "country": "India",            "area_code": "560098"        }    },    "customer_info": {        "name": "Arvind Shekar",        "phone": "+917411511053",        "email": "arvind.shekar.1@gmail.com"    }})
  };
  fetch('https://api.test.esamudaay.com/api/v1/ondc/sdk/buyer/carts', requestOptions)
      .then(response => response.status == 200 ?? setVerifiedCart(true))
      .then(data=>setVerifiedCart(data));
  
    }

  return (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: Rs. {total}</TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
    </WarningContainer>
    {verifiedCart
    ?
    <StripeCheckoutButton price={total} />
      :
      <CustomButton onClick={async () => await verifyCart(cartItems)}> Verify Cart </CustomButton>
    }
  </CheckoutPageContainer>
)};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
