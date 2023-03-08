import './Product.css';

const Product = (props) => {

    //console.log(props.items)

    return (
        <div className='product_box'>
            {
                props.items.map((item, index)=>(
                    <div key={index} className="single_product">
                        <div>
                            <div className='name_price'>
                                <h3 className='product_name'>{item.name}</h3>
                                <h3 className="product_price">{item.price} $</h3>
                            </div>
                            <img src={item.imageUrl} alt="product_image" className='product_image'></img>
                        </div>
                        <p className="product_description">{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Product