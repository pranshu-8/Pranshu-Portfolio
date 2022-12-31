import React from 'react'
import { Fragment } from 'react'
import{Row,Col} from 'react-bootstrap'
import '../css/education.css'
import learning from '../img/Learning-bro.svg'

const Education = () => {
    return (
        <Fragment>
        <p className="side-text-education">Education</p>
        <img src={learning} className='learning' alt='learning'/>
        <a name="skills"></a>
        <div className='education'>
            <h2 className="section-heading">Education</h2>
            <a name="education"></a>
            <h2 className="section-quote">"I don't like studying, I like learning. Learning is beautiful."</h2>
            <hr/>
            <Row>
        <Col xs={4} className="education-institute">
          <p className="institute-name">Rajiv Gandhi Institute of Petroleum Technology</p>
          <p className="time-spent">2020-2024</p>
        </Col>
        <Col xs={8} className="education-degree">
          <p className="degree-name">Bachelor of Technology(B.Tech)- Computer Science and Engineering ( CPI - 9.07 ) </p>
          <p className="degree-location"><i class="fa fa-map-marker-alt"></i>
         Jais, Rae Bareli, Uttar Pradesh, India</p>
         <p className="time-spent"></p>
        </Col>
      </Row>
      <Row class="row" >
        <Col xs={4} className="education-institute">
          <p className="institute-name">D.A.V Centenary Public School</p>
          <p className="time-spent">2020     (  Percentage : 92.8%)</p>
        </Col>
        <Col xs={8} className="education-degree">
          <p className="degree-name">Intermediate (Class XII) </p>
          <p className="degree-location"><i class="fa fa-map-marker-alt"></i>
         Jaipur, India</p>
        </Col>
      </Row>
      <Row class="row" >
        <Col xs={4} className="education-institute">
          <p className="institute-name">D.A.V Centenary Public School</p>
          <p className="time-spent">2018   (  Percentage : 95.4%)</p>
        </Col>
        <Col xs={8} className="education-degree">
          <p className="degree-name">Matriculate (Class X) </p>
          <p className="degree-location"><i class="fa fa-map-marker-alt"></i>
         Jaipur, India</p>
        </Col>
      </Row>
      
        </div>
       
        </Fragment>
    )
}

export default Education
