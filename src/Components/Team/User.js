import React from 'react'

export default function User(props) {
    return (
        <div className="box-img-team">
            <img src={props.photo} alt="" className="img-team" />
            <div className="cover-text-in-box-team">
                <ul className='ul-icon-team'>
                    <li className="li-icon-team facebook">
                        <img src="image/iconTeam/facebook.svg" alt="" className='img-icon-team' />
                    </li>
                    <li className="li-icon-team twitter">
                        <img src="image/iconTeam/twitter.svg" alt="" />
                    </li>
                    <li className="li-icon-team google">
                        <img src="image/iconTeam/google-plus.svg" alt="" />
                    </li>
                    <li className="li-icon-team youtube">
                        <img src="image/iconTeam/youtube.svg" alt="" />
                    </li>
                </ul>
                <div className='cover-info-user-team'>
                    <h1 className='name-user-team'>{props.name}</h1>
                    <h3 className='job-user-team'>{props.userJob}</h3>
                </div>
            </div>
        </div>
    )
}
