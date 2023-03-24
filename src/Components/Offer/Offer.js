import { useState } from 'react';
import './OfferStyle.css';
import OfferBox from './OfferBox';
function Offer() {
    let [boxOfferData, setBoxOfferData] = useState([
        {
            id: 1,
            imageIcon:'image/WhatWeOffer/icon1.png',
            title: 'Business Strategy',
            info: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur sequi neque perferendis ipsum tempora?`,
            isGray: 'gray-box-offer'
        },
        {
            id: 2,
            imageIcon:'image/WhatWeOffer/icon2.png',
            title: 'Resource Allocation',
            info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptatibus tempora fugit ratione, officiis tenetur!`,
            isGray: ''
        },
        {
            id: 3,
            imageIcon:'image/WhatWeOffer/icon3.png',
            title: 'Capital Markets',
            info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti esse saepe explicabo, numquam alias.`,
            isGray: 'gray-box-offer'
        },
        {
            id: 4,
            imageIcon:'image/WhatWeOffer/icon4.png',
            title: 'Secure platform',
            info: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur sequi neque perferendis ipsum tempora?`,
            isGray: ''
        },
        {
            id: 5,
            imageIcon:'image/WhatWeOffer/idea.png',
            title: 'Creative Idea',
            info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptatibus tempora fugit ratione, officiis tenetur!`,
            isGray: 'gray-box-offer'
        },
        {
            id: 6,
            imageIcon:'image/WhatWeOffer/growth.png',
            title: 'Business Growth',
            info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti esse saepe explicabo, numquam alias.`,
            isGray: ''
        },
    ])
    return (
        <div className='container-offer flex-center' id='offer'>
            <div className='cover-text flex-center'>
                <h1 className='title-text'>What we offer</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut <br /> eligendi molestiae, ad dicta tempora.</p>
                <div className='line-blue'></div>
            </div>
            <div className="father-box-offer">
                {
                    boxOfferData.map(boxData => <OfferBox {...boxData} key={boxData.id} />)
                }
            </div>
        </div>
    )
}

export default Offer