import './ContactStyle.css';
export default function Contact () {
    return (
        <div className='container-contact' id='contact'>
            <div className='blue-cover-contact'>
                <div className='cover-text flex-center'>
                    <h1 className='title-text'>Get in touch</h1>
                    <p className='info-text' id='info-text-contact'>We love to craft digital experiences for brands rather than crap <br /> and more lorem ipsums and do crazy skills.</p>
                    <div className='line-blue'></div>
                </div>
            </div>
            <div className='dark-cover-contact'>
                <div className='my-info-contact'>
                    <h1 className='cod-contact'>COD<span className='front-contact'>FRONT</span></h1>
                    <hr className='line-blue-bottom-contact'/>
                </div>
                <div className='cover-icon-link'>
                    <ul className='ul-icon-contact'>
                        <a target= "_blank" rel='noreferrer' href="https://www.instagram.com/codfront/" className='link-icon-contact'>
                            <li className="li-icon-contact">
                                <img src="image/iconContact/instagram.png" alt="instagram" className="icon-contact" />
                            </li>
                        </a>
                        <a target="_blank" rel='noreferrer' href="https://github.com/codfront" className='link-icon-contact'>
                            <li className="li-icon-contact">
                                <img src="image/iconContact/github.png" alt="github" className="icon-contact" />
                            </li>
                        </a>
                        <a target="_blank" rel='noreferrer' href="https://web.telegram.org/z/#5382045818" className='link-icon-contact'>
                            <li className="li-icon-contact">
                                <img src="image/iconContact/telegram.png" alt="telegram" className="icon-contact" />
                            </li>
                        </a>
                        <a target="_blank" rel='noreferrer' href="https://mail.google.com/mail/u/0/#search/codfrontyt%40gmail.com" className='link-icon-contact'>
                            <li className="li-icon-contact">
                                <img src="image/iconContact/gmail.png" alt="gmail" className="icon-contact" />
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}