import React,{Fragment} from 'react'
import '../css/workex.css'
import {Row,Col} from 'react-bootstrap'
import project from '../img/Project Stages-bro.svg'

const Workex = () => {
    return (
        <Fragment>
            <p className="side-text-workex">Experience</p>
            <h2 className="section-heading">Experience & Positions of Responsibility</h2>
            <h2 className="section-quote">"Every experience makes you grow"</h2>
            <hr className="hr-workex"/>

            <Row>
              <Col lg={8} md={12} sm={12} xs={12}>
              <section class="timeline">
              <div class="container">
    <div class="timeline-item">
      <div class="timeline-img"></div>

      <div class="timeline-content">
        <h2>Computer Programming (CS101) Tutor</h2>
        <div style={{background: "#ff4081", padding: "5px",display: "inline-block",color: "#ffffff"}} >Dept. of CSE, RGIPT </div>
        <div >Duration : November 2022- Present</div>
        <p>Teaching C,Python and MATLAB to a batch of 50 students of BTech Ist year.</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-img"></div>
      <div class="timeline-content">
        <h2>Secretary</h2>
        <div class="date">November 2022-Present</div>
        <p>Secretary at OWASP RGIPT , a student chapter  at Rajiv Gandhi Institute of Petroleum Technology</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-img"></div>
      <div class="timeline-content">
        <h2>Editorial Executive</h2>
        <div class="date">2022</div>
        <p>Core Editorial Executive  at Codechef RGIPT, a chapter of the international society of CODECHEF at Rajiv Gandhi Institute of Petroleum Technology</p>
      </div>
    </div>



    </div>
    </section>
              </Col>
              <Col>
              <img src={project} className='project-img' alt="project-img"/>
              </Col>
            </Row>
 
        </Fragment>
    )
}

export default Workex
