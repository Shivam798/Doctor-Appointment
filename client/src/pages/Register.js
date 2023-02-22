import React from 'react'
import {  Button, Form, Input } from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'


function Register() {
  const navigate = useNavigate();
  const onfinish=async(e) => { 
    
    try {
      const response = await axios.post('/api/user/register',e)
      if(response.data.success){
        toast.success(response.data.message)
        toast("Redirecting to login page")
        navigate('/login');
        
      }else{
        toast.error(response.data.message)
        
      }
    } catch (error) {
      toast.error('Something went wrong',error)
      
    }
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