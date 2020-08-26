import React from 'react';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for (let i =0 ; i<cart.length ;i++) {
        const product = cart[i];
        total=total+product.price;
         
        
    }
    let shipping=0;
    if (total>35){
        shipping=0;

    }
    else if(total>15){
        shipping=4.99;

    }else if(total>0){
        shipping=12.99;
    }
    const tax=(total/10).toFixed(2);
    const grandTotal=(total+shipping+Number(tax)).toFixed(2)
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Itemas Order:{cart.length}</h5>
           <p><small>Product Price:{total}</small></p>
            <p>Shipping cost:{shipping}</p>
             <p><small>Tax: {tax}</small></p>
             <p>Total Value ${grandTotal}</p>
         </div>
    );
};

export default Cart;