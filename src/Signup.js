import React from 'react'
    import { useState } from 'react';
    import './Signup.css';
    import axios from 'axios';
import { useNavigate } from 'react-router-dom';
    function Signup() {
        const initValues={name:'',email:'',mobile:'',password:''}
        const [formValues,setFormValues]=useState(initValues);
        const [formErrors,setFormErrors]=useState({});
        const [isSubmit,setIsSubmit]=useState(false);

        const handleChange=(event)=>{
            const{id,value}=event.target;
            setFormValues({...formValues,[id]:value});
            console.log(formValues);
        }
        const navigate=useNavigate();
        const handleSubmit=(event)=>{
            event.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true);
            axios.post('http://localhost:8081/api/v1/auth/register',formValues)
            navigate("/");
        }
        const validate=(values)=>{
            const errors={};
            const reg=new RegExp("[0-9]")
            const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

            if(!values.name)
            errors.name="Firstname is Required";
            else if(values.name.length<5)
            errors.name="Firstname must have minimum 5 characters";
            else if(reg.test(values.name))
            errors.name="Firstname must contain only alphabets";
            
            if(!values.email)
            errors.email="Email-Id is Required";

            if(!values.mobile)
            errors.mobile="MobileNumber is Required";
            else if(preg.test(values.mobile))
            errors.mobile="Mobile Number must contain only numbers";
            
            if(!values.password)
            errors.password="Password is Required";
            else if(values.password.length<5)
            errors.name="password must have minimum 5 characters";
            else if(!preg.test(values.password))
            errors.password="Password must contain Special Characters, a-z, A-Z, Numbers";
            return errors;
        }

        return ( 
            <body className='top'>
                <br></br>
                <br></br>
            <div className='topic'>
                <h1>SURVEY</h1>
            </div>
            <br></br>
            <div className='topic2'>
                <h1>GENERATOR</h1>
            </div>
            <div className='container'>
            <form onSubmit={handleSubmit}>
            <br></br>
                <br></br>
                <h1>REGISTER</h1>
                
                <div className='row3'><br></br>
                    <input type="text" id='name' required className='input2' placeholder='UserName' value={formValues.name}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.username}</p>

                <div className='row3'><br></br>
                    <input type="email" id='email' required className='input2' placeholder='Email-id...' value={formValues.email}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.email}</p>
                <div className='row3'><br></br>
                    <input type="tel" id='mobile' required className='input2' placeholder='MobileNumber' value={formValues.mobile}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.mobile}</p>

                <div className='row3'><br></br>
                    <input type="password" id='password' required className='input2' placeholder='Password' value={formValues.password}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.password}</p><br></br>

                <div className='row3'>
                    <button className='btn-btn-primary1'>CREATE</button>
                </div>
            </form>
            </div>
            </body>
        );
    }

    export default Signup