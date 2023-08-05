import React,{useState} from 'react'
import Axios from 'axios';
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SignUp = (props) => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [conpass,setConPass] = useState("");

  const onRegister = (event)=>{
    event.preventDefault();

    Axios.post("https://restaurency-app-1meh.onrender.com/User/register",{
      name:name,
      email:email,
      password:password,
      conpass:conpass,
      
    }).then((result)=>{
      alert("Registeration Successful");
      props.setregister(false);
      props.setlogin(true);
    }).catch((err)=>{
      console.log(err);
    })

  }

  return (
    <>

      <Container className="justify-content-md-center mt-3" >
       
        <Row>
          <Form>
            <Form.Group as={Row} className="mb-3 sup" style={{maxWidth:"120%"}} controlId="formHorizontalName">
              <Col>
                <Form.Control class = "fcontrol" type="text" placeholder="Name"  value = {name} onChange = {(event)=>{
                                    setName(event.target.value);
                                }}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 sup" style={{maxWidth:"120%"}} controlId="formHorizontalEmail">
              <Col>
                <Form.Control  type="email" placeholder="Email"  value = {email} onChange = {(event)=>{
                                    setEmail(event.target.value);
                                }}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 sup" style={{maxWidth:"120%"}} controlId="formHorizontalPassword">
              <Col>
                <Form.Control type="password" placeholder="Password"  value = {password} onChange = {(event)=>{
                                    setPassword(event.target.value);
                                }}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 sup" style={{maxWidth:"120%"}} controlId="formHorizontalcPassword">
              <Col>
                <Form.Control type="password" placeholder="Confirm Password"  value = {conpass} onChange = {(event)=>{
                                    setConPass(event.target.value);
                                }}/>
              </Col>
            </Form.Group>

          </Form>
        </Row>
      </Container>
      <div style = {{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

        <Form.Group as={Row} className="mb-3">
                        
                        <Col>
                        
                        <Button className="btn custom-btn" type="submit" onClick = {onRegister}>Sign Up</Button>
                     
                           
                        </Col>
                      
                    </Form.Group>

        </div>
            

            <div style = {{float:"right"}}>
    <Link to = "#"  style = {{textDecoration:"none"}} onClick ={()=>{
   props.setlogin(true);
   props.setregister(false);
 }}><span style = {{color:"black",textDecoration:"none"}}>Already a User?</span></Link>
 </div>
    </>
  )
}


export default SignUp;
