import React, { useState } from 'react';
import fakeDate from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10=fakeDate.slice(0,10);
    const [products,setProducts]=useState(first10); 
    const [cart,setCart]=useState([]);

    const handleAddproduct=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);

    }  
    return (
        <div className="shop-continer">
            <div className="product-continer">
              {
                products.map(pd=><Product 
                    handleAddproduct={handleAddproduct}
                    product={pd}>              
                    </Product>)
              }
            </div>
                    <div className="card-container">
                       <Cart cart={cart}></Cart>

                    </div>
           
        </div>
    );
};

export default Shop;