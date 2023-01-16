import React from 'react'
import {  Button, Form, Input } from 'antd';
import {Link} from 'react-router-dom';

function Register() {
  const onfinish=(e) => { 
    console.log("return values" ,e);
  }
  return (
    <div className='authentication'>
        <div className='authentication-form card p-3' >
          <h1 className='card-title'>Nice to meet you</h1>
          <Form layout='vertical' onFinish={onfinish}>
            <Form.Item label="Name" name="name">
              <Input placeholder='Name'/>      
            </Form.Item> 
            <Form.Item label="Email" name="email">
              <Input placeholder='Email'/>      
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" placeholder='Password'/>      
            </Form.Item>
            <Button className='primary-button my-2 ' htmlType='submit'> REGISTER</Button>
            <Link className='anchor ' to="/login">CLICK HERE TO LOGIN</Link>
          </Form>
        </div>
    </div>
  )
}

export default Register