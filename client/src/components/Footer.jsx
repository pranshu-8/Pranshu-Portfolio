import React, { useState } from 'react'
import axios from 'axios';
import { Fragment } from 'react'
import { Form } from 'react-bootstrap'
import {Button} from '@material-ui/core'
import {Row, Col} from 'react-bootstrap'
import contact from '../img/Mail sent-amico.svg'
import '../css/footer.css'

const Footer = () => {
  const [contacts, setContact] = useState({
    name:"",
    email: "",
    message: "",
    sent: false
  });
 const  onNameChange= (e)=>{
    setContact({...contacts, name: e.target.value})
}

const onEmailChange= (e)=> {
  setContact({...contacts, email: e.target.value})
}

const onMsgChange= (e)=>{
  setContact({...contacts, message: e.target.value})
}
  const submitHandler = (e) => {
    console.log("Pranshu Tewari")
   
    e.preventDefault()

    axios.post("https://excited-cyan-turkey.cyclic.app/contact_us",contacts).then((res)=>{}).catch((err)=> console.log(err))
    setContact({  name:"",
    email: "",
    message: "", sent: true})

    setTimeout(()=>{
      setContact({  name:"",
      email: "",
      message: "", sent: false})
    },2500)
  }
    return (
        <Fragment>
            <a name="footer"></a>
            <p className="side-text-contact">Contact</p>
            <h2 className="section-heading">Contact</h2>
            <h2 className="section-quote">"A simple hello could lead to a million things"</h2>
            <hr/>  
            <Row>
                <Col lg={4} md={4}>
                <img src={contact} alt="contact" className="contact-img"/>
                <p className="contact-text">© 2023 - Designed and built by Pranshu Tewari</p>
                <p>Background image and illustrations are property of <bold><a href="https://www.freepik.com/" target="blank" rel="noreferrer">Freepik</a></bold> and <bold><a href="https://storyset.com/" target="blank" rel="noreferrer">Storyset</a></bold> respectively</p>
                </Col>
                <Col>
                <div className="contact-form">
                <Form name="Contact" method="POST" onSubmit={submitHandler} netlify className='contact-form-form'>
                <Form.Group className="mb-2" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Enter name" value={contacts.name} onChange={onNameChange} />
  </Form.Group>
  <Form.Group className="mb-2" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" value={contacts.email} onChange={onEmailChange} />
  </Form.Group>
  <Form.Group className="mb-2" >
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" name='message' rows={4} type="text" placeholder="Enter message" value={contacts.message} onChange={onMsgChange} />
  </Form.Group>
  <center>
  <div className={ contacts.sent?'msg msgAppear':'msg'}> Message has been sent</div>
  <Button type="submit">
    Submit
  </Button>
  </center>
</Form>
                </div>
                </Col>
            </Row>

        </Fragment>
    )
}

export default Footer
