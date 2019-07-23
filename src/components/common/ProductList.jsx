import React from 'react';

import {Products} from './productsData';
 import ProductCard from './ProductCard';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        
        
    }
    render(){
        
        return(
            <div className="row mb-5">
                {Products.map((product)=>{
                    return <ProductCard product = {product}/>
                })}
            </div>
        )
    }
}
export default ProductList;