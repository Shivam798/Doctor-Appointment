import React from 'react'
import {  Button, Form, Input } from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'
import {useSelector} from "react-redux"

function Login() {
  const {loading} = useSelector((state)=>state.alerts)
  console.log(loading);
  const navigate=useNavigate(); 
  const onfinish=async(e) => { 
    
    try {
      const response = await axios.post('/api/user/login',e)
      if(response.data.success){
        toast.success(response.data.message)
        toast("Redirecting to home page")
        localStorage.setItem("token",response.data.data)
        navigate('/');
        
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