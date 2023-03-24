import { useState } from 'react'
import './TeamStyle.css'
import User from './User'
function Team() {

    let [userInfo, setUserInfo] = useState([
        {
            id: 1,
            name: 'David Smith',
            userJob: 'Web Developer',
            photo: 'image/OurTeam/team1.jpg'
        },
        {
            id: 2,
            name: 'William Robert',
            userJob: 'Graphic Designer',
            photo: 'image/OurTeam/team2.jpg'
        },
        {
            id: 3,
            name: 'Jhone Doe',
            userJob: 'Web Designer',
            photo: 'image/OurTeam/team3.jpg'
        },
        {
            id: 4,
            name: 'Jhonason Smith',
            userJob: 'UI/UX Designer',
            photo: 'image/OurTeam/team4.jpg'
        },
    ])

    return (
        <div className='container-team' id='team'>
            <div className="cover-text flex-center">
                <h1 className='title-text'>Our Team</h1>
                <p className='info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut <br /> eligendi molestiae, ad dicta tempora.</p>
                <div className='line-blue'></div>
            </div>
            <div className="father-box-img-team">
                { userInfo.map(info=> <User {...info} key={info.id} />) }
            </div>
        </div>
    )
}

export default Team