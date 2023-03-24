import './FeaturedWorksStyle.css';

function FeaturedWorks() {
    return (
        <div className='container-featured' id='featured'>
            <div className='cover-text-featured flex-center'>
                <h1 className='title-text-featured'>Featured Works</h1>
                <p className='info-text-featured'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut <br /> eligendi molestiae, ad dicta tempora.</p>
                <div className='line-blue-welcome'></div>
            </div>
            <div className='father-img-featured'>
                <div className="cover-img-featured item-1">
                    <img src="image/FeaturedWorksImage/img1.jpg" alt="" className="img-featured" />
                    <li className="fa fa-search icon-img-featured"></li>
                </div>
                <div className="cover-img-featured">
                    <img src="image/FeaturedWorksImage/img2.jpg" alt="" className="img-featured" />
                    <li className="fa fa-search icon-img-featured"></li>
                </div>
                <div className="cover-img-featured item-2">
                    <img src="image/FeaturedWorksImage/img3.jpg" alt="" className="img-featured" />
                    <li className="fa fa-search icon-img-featured"></li>
                </div>
                <div className="cover-img-featured item-3">
                    <img src="image/FeaturedWorksImage/img5.jpg" alt="" className="img-featured" />
                    <li className="fa fa-search icon-img-featured"></li>
                </div>
                <div className="cover-img-featured">
                    <img src="image/FeaturedWorksImage/img6.jpg" alt="" className="img-featured" />
                    <li className="fa fa-search icon-img-featured"></li>
                </div>
                <div className="cover-img-featured">
                    <img src="image/FeaturedWorksImage/img4.jpg" alt="" className="img-featured" />
                    <li className="fa fa-search icon-img-featured"></li>
                </div>
            </div>
        </div>
    )
}

export default FeaturedWorks