import {  TextField,Button } from '@mui/material'
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';

FormLabel
const Register = () => {
   const navigate = useNavigate(); // Initialize useNavigate
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [address,setAddress] = useState("")
    const [pincode,setPincode] = useState(0)
    const [phone,setPhone]  = useState(0)
    const [email,setEmail] =useState("")
    const [date,setDate]  = useState(0)
    const [gender,setGender] = useState(0)
    const [course,setCourse]  = useState(0)


    const [isFirstNameInvalid,setIsFirstNameInvalid] = useState(false)
    const [isLastNameInvalid,setIsLastNameInvalid] = useState(false)
    const [isAddressInvalid,setIsAddressInvalid] = useState(false)
    const [isPincodeValid,setIsPincodeValid] = useState(false)
    const [isPhoneValid,setIsPhoneValid] = useState(false)
    const [isEmailValid,setIsEmailValid] = useState(false)

    const userInputValidation = (inputTag)=>{
    const {name,value} = inputTag
    console.log(name,value);
    // firstname validation
    if(name == "firstName"){
      setFirstName(value)
      !!value.match(/^[a-zA-z]+$/) ? setIsFirstNameInvalid(false) : setIsFirstNameInvalid(true)
    }
    else if(name =="lastName"){
      setLastName(value)
      !!value.match(/^[a-zA-z]+$/) ? setIsLastNameInvalid(false) : setIsLastNameInvalid(true)
    }
    else if(name=="address"){
      setAddress(value)
      !!value.match(/^[a-zA-z]+$/) ? setIsAddressInvalid(false) : setIsAddressInvalid(true)

    }
    else if(name == "pincode"){
      setPincode(value)
      !!value.match(/^\d+$/) ? setIsPincodeValid(false) : setIsPincodeValid(true)
      const isValidPincode = /^\d+$/.test(value) && value.length === 6;
      setIsPincodeValid(!isValidPincode); 
    }
    else if (name === "phone") {
      setPhone(value);
      const isValidPhone = /^\d+$/.test(value) && value.length === 10;
      setIsPhoneValid(!isValidPhone); 
    }

    else if (name === "email") {
      setEmail(value);
    
      const emailPattern = /^[a-zA-Z][\w.-]*@\w+(\.\w{2,3})+$/;
    
      const isValidEmail = emailPattern.test(value);
    
      setIsEmailValid(!isValidEmail); 
    }
    else if(name =="gender"){
      setGender(value)
    }
    else if(name =="date"){
      setDate(value)
    }
    else if(name =="course" ){
      setCourse(value)
    }
    }

    //registration
    const handleRegistration =()=>{
    if(firstname && lastname && address  && pincode && phone && email && gender && date && course ){
      const userDetails = {
        firstname,
        lastname,
        address,
        pincode,
        phone,
        email,
        gender,
        date,
        course,
      };

      // Alert the user and redirect to UserDetails
      alert(`Successfully Registered!!`);
      navigate('/user-details', { state: { user: userDetails } }); // Navigate to UserDetails with user data
    }
    else{
      alert("Please Enter the Details!!")
    }
    }

    //resetdata
    const handleReset =()=>{
      setFirstName("")
      setLastName("")
      setAddress("")
      setPincode(0)
      setPhone(0)
      setEmail("")
      setGender(0)
      setDate(0)
      setCourse(0)
      
      
    }
  return (
    <>
      <div  className='d-flex bg-warning justify-content-center align-items-center  '>
        <div style={{width: "600px",height:"700px"}}   className='rounded shadow m-3 bg-white '>
          <h3 className='text-center fw-bolder m-4'>Registration Form</h3>
          <form className='mt-3 px-5'>
          <div className='mt-3 d-flex gap-3 '>
              <TextField value={firstname || ""}  onChange={e=>userInputValidation(e.target)} className='w-100' name='firstName' id="outlined-name" label="First-Name" variant="outlined" placeholder='Enter your first name' />
               
              <TextField  value={lastname || ""} onChange={e=>userInputValidation(e.target)} className='w-100' name='lastName' id="outlined-name" label="Last-Name" variant="outlined" placeholder='Enter your last name' />
              
          </div>
          {/* firstname validation msg */}
              {
                  isFirstNameInvalid && <div className="text-danger  fw-bolder">*Invalid name</div>
              }
          {/* lastname validation msg */}
          {
                  isLastNameInvalid && <div className="text-danger text-end fw-bolder">*Invalid name</div>
          }
          {/* address */}
          <div className='mt-3 '>
              <TextField className='w-100  '  value={address || ""} onChange={e=>userInputValidation(e.target)} name='address' id="outlined-address" label="Adress" variant="outlined" placeholder='Enter your address' />
          </div>
          {/* address validation msg */}
          {
                  isAddressInvalid && <div className="text-danger text-end fw-bolder">*Invalid address</div>
          }
  
          {/* pincode */}
          <div className='mt-3 '>
              <TextField className='w-100  ' value={pincode || ""} onChange={e=>userInputValidation(e.target)} name='pincode' id="outlined-pincode" label="Pincode" variant="outlined" placeholder='Enter your pincode' />
          </div>
          {
                  isPincodeValid && <div className="text-danger text-end fw-bolder">*Invalid pincode</div>
          }
          {/* PHONE NUMBER */}
          <div className='mt-3 '>
              <TextField value={phone || ""} onChange={e=>userInputValidation(e.target)} className='w-100 text-dark ' name='phone' id="outlined-phone" label="Phone-Number" variant="outlined" placeholder='Enter your phone number' />
          </div>
          {
                  isPhoneValid && <div className="text-danger text-end fw-bolder">*Invalid phone number</div>
          }
          {/* EMAIL */}
           <div className='mt-3 '>
              <TextField value={email || ""} onChange={e=>userInputValidation(e.target)} className='w-100 text-dark' name='email' id="outlined-email"  
   label="Email" variant="outlined" placeholder='Enter your email' />
          </div>
          {
                  isEmailValid && <div className="text-danger text-end fw-bolder">      *Invalid email address. Must start with a letter and follow a valid format.
  </div>
          }
          {/* GENDER */}
          <FormLabel id="demo-row-radio-buttons-group-label " className='mt-3 text-dark '>Gender</FormLabel>
          <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender"
          value={gender || ""}
           >
          <FormControlLabel onChange={e=>userInputValidation(e.target)} value="male" control={<Radio />} label="Male" />
          <FormControlLabel onChange={e=>userInputValidation(e.target)} value="female" control={<Radio />} label="Female" />
          
        </RadioGroup>
        {/* DOB */}
        <FormLabel id=" " className='mt-3 pe-4 text-dark' >Date of Birth  </FormLabel> 
  
        <input value={date || ""} required onChange={e=>userInputValidation(e.target)} name="date" type="date" className='' />
      
          {/* COURSE LIST */}
         <div> 
         <FormLabel id=" " className='mt-3 pe-4 text-dark' >Course</FormLabel> 
          <select value={course || ""} onChange={e=>userInputValidation(e.target)} name="course" id="" >
              <option value="" selected hidden  disabled name="" id="" >select a course</option>
              <option value="biology">Biology</option>
              <option  value="computer Science">Computer Science</option>
              <option  value="commerce">Commerce</option>
              <option value="humanities" id="">Humanities</option>
          </select>
          </div>
          {/* buttons */}
          <div className='d-flex justify-content-center align-item-center mx-4 my-5 gap-3'>
              <Button onClick={handleRegistration} disabled={isFirstNameInvalid || isLastNameInvalid || isAddressInvalid || isPincodeValid || isEmailValid || isPhoneValid  } variant="contained">Register</Button>
              <Button onClick={handleReset} variant="outlined">Cancel</Button>
          </div>
          </form>
        </div>
      </div>
      
    </>
   
  )
}

export default Register
