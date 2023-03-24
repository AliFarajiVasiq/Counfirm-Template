import './PricingStyle.css';
import { useState } from 'react';
import PricingBox from './PricingBox';

function PriceBox() {

    let [pricingBoxData, setPriceData] = useState([
        {
            id: 1,
            title: 'Basic',
            spaceDisk: 50,
            emailAccount: 50,
            bandwidth: 50,
            maintenance: 'Maintenance',
            subdomains: 15,
            price: 19,
        },
        {
            id: 2,
            title: 'Standard',
            spaceDisk: 100,
            emailAccount: 80,
            bandwidth: 68,
            maintenance: 'Maintenance',
            subdomains: 20,
            price: 39,
        },
        {
            id: 3,
            title: 'Premium',
            spaceDisk: 150,
            emailAccount: 100,
            bandwidth: 75,
            maintenance: 'Maintenance',
            subdomains: 35,
            price: 65,
        },
    ])

    return (
        <div className='container-price'>
            <div className='cover-text flex-center'>
                <h1 className='title-text'>Pricing Table</h1>
                <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut <br /> eligendi molestiae, ad dicta tempora.</p>
                <div className='line-blue'></div>
            </div>
            <div className='cover-box-price'>
                {
                    pricingBoxData.map(boxData=>(
                        <PricingBox {...boxData} key={boxData.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default PriceBox