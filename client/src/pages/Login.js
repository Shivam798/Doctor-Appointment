import React from 'react'
import {  Button, Form, Input } from 'antd';
import {Link} from 'react-router-dom';

function Login() {
  const onfinish=(e) => { 
    
    console.log("return values" ,e );
  }
  return (
    <div className='authentication'>
        <div className='authentication-form card p-3' >
          <h1 className='card-title'>Welcome back</h1>
          <Form layout='vertical' onFinish={onfinish}>
            
            <Form.Item label="Email" name="email">
              <Input placeholder='Email'/>      
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" placeholder='Password'/>      
            </Form.Item>
            <Button className='primary-button my-2 ' htmlType='submit'> LOGIN</Button>
            <Link className='anchor ' to="/register">CLICK HERE TO REGISTER</Link>
          </Form>
        </div>
    </div>
  )
}

export default Login