import React from 'react'
    import { useState } from 'react';
    import './Signup.css';
    function Signup() {
        const initValues={firstname:'',lastname:'',email:'',no:'',password:''}
        const [formValues,setFormValues]=useState(initValues);
        const [formErrors,setFormErrors]=useState({});
        const [isSubmit,setIsSubmit]=useState(false);

        const handleChange=(event)=>{
            const{id,value}=event.target;
            setFormValues({...formValues,[id]:value});
            console.log(formValues);
        }

        const handleSubmit=(event)=>{
            event.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true);
        }
        const validate=(values)=>{
            const errors={};
            const reg=new RegExp("[0-9]")
            const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

            if(!values.firstname)
            errors.firstname="Firstname is Required";
            else if(values.firstname.length<5)
            errors.firstname="Firstname must have minimum 5 characters";
            else if(reg.test(values.firsttname))
            errors.firstname="Firstname must contain only alphabets";
            
            if(!values.lastname)
            errors.lastname="Lastname is Required";
            else if(reg.test(values.lastname))
            errors.lastname="Lastname must contain only alphabets";

            if(!values.email)
            errors.email="Email-Id is Required";

            if(!values.no)
            errors.no="MobileNumber is Required";
            else if(preg.test(values.no))
            errors.firstname="Mobile Number must contain only numbers";
            
            if(!values.password)
            errors.password="Password is Required";
            else if(!preg.test(values.password))
            errors.password="Password must contain Special Characters, a-z, A-Z, Numbers";
            return errors;
        }

        return ( 
            <>
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
            <div className='box'>
            <form onSubmit={handleSubmit}>
            <br></br>
                <br></br>
                <h1>REGISTER</h1>
                
                <div className='row1'><br></br>
                    <input type="text" id='firstname' placeholder='FirstName' value={formValues.firstname}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.firstname}</p>
                <div className='row1'><br></br>
                    <input type="text" id='lastname' placeholder='LastName' value={formValues.lastname}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.lastname}</p>

                <div className='row1'><br></br>
                    <input type="email" id='email' placeholder='Email-id...' value={formValues.email}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.email}</p>
                <div className='row1'><br></br>
                    <input type="number" id='no' placeholder='MobileNumber' value={formValues.no}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.no}</p>

                <div className='row1'><br></br>
                    <input type="password" id='password' placeholder='Password' value={formValues.password}
                        onChange={handleChange}/>
                </div>
                <p  style={{color:"red"}}>{formErrors.password}</p><br></br>

                <div className='row1'>
                    <button className='btn btn-primary'>CREATE</button>
                </div>
            </form>
            </div>
            </body>
            </>
        );
    }

    export default Signup