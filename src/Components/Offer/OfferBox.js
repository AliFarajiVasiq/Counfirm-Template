import React from 'react'

export default function OfferBox(props) {
    return (
        <div className={`box-offer ${props.isGray}`}>
            <img src={props.imageIcon} alt="" className="icon-box-offer" />
            <h2 className="title-box-offer">{props.title}</h2>
            <p className="info-box-offer">{props.info}</p>
        </div>
    )
}
