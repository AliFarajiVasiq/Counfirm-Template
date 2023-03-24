import './WelcomeStyle.css';
import Product from './WecomeProduct/Product'
import { useState } from 'react';

function Welcome() {
    let [productInfo, setProduct] = useState([
        {
            id:1,
            title: 'Fully Customizable',
            info: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.',
            icon: 'fa fa-cogs',
        },
        {
            id:2,
            title:'Awesome Features',
            info:'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.',
            icon:'fa fa-magic',
        },
        {
            id:3,
            title:'Fully Responsive',
            info:'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.',
            icon:'fa fa-mobile',
        },
        
    ])
    return (
        <div className='container-welcome flex-center' id='welcome'>
            <div className="cover-text-welcome flex-center">
                <h1 className='title-welcome'>Welcome to the Counfirm</h1>
                <h3 className='info-welcome'>Get expert consultancy and support with Counfirm, an advisory <br /> firm that stand by your side always.</h3>
                <div className='line-blue-welcome'></div>
            </div>
            <div className='cover-product-welcome'>
                {
                    productInfo.map(info => (
                        <Product {...info} key={info.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Welcome