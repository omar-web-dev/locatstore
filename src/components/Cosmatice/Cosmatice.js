import React, { useState } from 'react';
import { useEffect } from 'react';
import FakeDB from '../FakeDB/ProductCardSetLocal';
import './Cosmatice.css'

const Cosmatice = () => {
    
    return (
        <div>
            <h1>This is a cosmatice</h1>
            <LodData/> 
        </div>
    );
};

const LodData = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch(`api.json`)
        .then(res => res.json())
        .then(products => setProducts(products))
    },[])
    return(
        <div>
            {products.map(product => <Display product={product} />)}
        </div>
    )
}

const Display = (props) => {
    const {name,price} = props?.product
    return (
        <div className='product-cards'>
            <h2>Name : {name}</h2>
            <p>price : ${price}</p>
            <button onClick={()=>ProductAdded(props?.product)}>Buye Now</button>
        </div>
    );
}


const ProductAdded = (id) =>{
    FakeDB(id)
    console.log("product addad",id);
    return(
        <FakeDB id={id}>

        </FakeDB>
    )
}



export default Cosmatice;