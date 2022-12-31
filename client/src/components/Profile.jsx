import React from 'react'
import { Fragment } from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/profile.css'
import blob from '../img/blob.svg'
import {Button} from '@material-ui/core'

const Profile = () => {
    return (
        <Fragment>
          <a name="profile"></a>
          <p className='side-text-profile'>PROFILE</p>
          <h2 className="section-heading">About Me</h2>
          <h3 className="section-quote">"No Pressure, No Diamonds"</h3>
          <hr/>
        <Row>
          <Col lg={7} md={7} xs={12} className='profile-text'> 
          <p>Hi, I'm Pranshu Tewari , a pre-final year student at Rajiv Gandhi Institute of Petroleum Technology. I am a aspiring software developer from India</p>
          
          <ul>
            <li>I’m currently working on MERN stack projects</li>
            <li>I’m currently learning  Data Structures and Algorithms.</li>
            <li>I’m looking to collaborate on MERN stack projects</li>
            {/* <li>I’m looking  DSA and competitive programming</li> */}
            <li>Ask me about full stack development, I am happy to help</li>
            {/* <li>Fun Fact: There is something exciting coming in a month, stay tuned</li> */}
          </ul>
          </Col>
          <Col lg={5} md={5} className='profile-photo'>
            {/* <img src={blob} alt='' className='blob'/> */}
            <img src="https://res.cloudinary.com/dltloch4q/image/upload/v1672426793/profile-photo_coz7k8.png" alt="Pranshu Tewari" className="profile-img" />
            <br/><br/>
            <center><a href="https://drive.google.com/file/d/1NWGp2LUZ-mYPuvlXGIgHNaIhVVmdyS4w/view?usp=sharing" target="_blank">
                <Button className='project-btn'>Resume</Button>
            </a></center>
          </Col>
        </Row>
        
      </Fragment>
    )
}

export default Profile
