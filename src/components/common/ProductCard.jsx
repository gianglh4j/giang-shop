import React from 'react';


class ProductCard extends React.Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        
    }

    addToCart(){

    }
    render(){
        let {product} = this.props 
        return(
            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                      <figure className="block-4-image">
                        <a href="shop-single.html"><img src={product.imageURL} alt="Image placeholder" className="img-fluid" /></a>
                      </figure>
                      <div className="block-4-text p-4">
                        <h3><a href="shop-single.html">{product.name}</a></h3>
                        <p className="mb-0">{product.description}</p>
                        <p className="text-primary font-weight-bold">{product.price}</p>
                        <button>Thêm vào giỏ hàng</button>
                      </div>
                    </div>
                  </div>
        )
    }
}
export default ProductCard ;