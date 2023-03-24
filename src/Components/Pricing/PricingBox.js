import React from 'react'

export default function PricingBox(props) {
    return (
        <div className="box-price flex-center">
            <h1 className="title-box-price">{props.title}</h1>
            <ul className="ul-box-price">
                <li className="li-box-price">{props.spaceDisk}GB Disk Space</li>
                <li className="li-box-price">{props.emailAccount} Email Accounts</li>
                <li className="li-box-price">{props.bandwidth}GB Bandwidth</li>
                <li className="li-box-price">{props.maintenance}</li>
                <li className="li-box-price">{props.subdomains} Subdomains</li>
            </ul>
            <div className='cover-price-in-box-price'>
                <h1 className='number-price'>${props.price}</h1>
                <hr className='line-blue-price' />
            </div>
            <a href="#buy" className='link-price-box'>Choose Plan</a>
        </div>
    )
}
