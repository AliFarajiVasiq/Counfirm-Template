import './LandingStyle.css'

function Landing(){
    return(
        <div className='container-landing' id='landing'>
            <img src="image/header_imag2.jpg" className='background-landing' alt=''/>
            <div className="father-cover-text-landing">
                <div className="cover-text-landing">
                    <h1 className='title-landing'>We Build Design <br /> Digital Brand Experience.</h1>
                    <p className="info-landing">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus perspiciatis aliquid amet quam asperiores quis nesciunt similique consequatur, accusamus omnis rerum blanditiis labore tempore.</p>
                    <button className='btn'>View Details</button>
                </div>
                <div className='cover-svg-back-white-landing'></div> 
            </div>
        </div>
    )
}

export default Landing