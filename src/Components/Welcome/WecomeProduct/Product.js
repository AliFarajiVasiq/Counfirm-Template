import './ProductStyle.css'

function Product(props){
    return(
        <div className='box-product-welcome flex-center'>
            <i className={`${props.icon} icon-product-welcome flex-center`}></i>
            <h3 className='title-product-welcome'>{props.title}</h3>
            <p className='info-product-welcome'>{props.info}</p>
            <a href="#id1" className='link-product-welcome'>Read More<li className='fa fa-angle-right icon-link-product-welcome'></li></a>
        </div>
    )
}

export default Product