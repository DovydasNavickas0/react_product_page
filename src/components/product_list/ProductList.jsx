//react komponentai
import Product from '../product/Product';

//stiliukas
import './ProductList.css'

//duomenys
import data from '../../data/data';

const ProductList = () => {

    //console.log(data, "tevinis elementas");

    return (
        <div className='div_list'>
            <Product items={data}/>
        </div>
    )
}

export default ProductList