import React, { useState } from 'react'

const Contact = () => {
  const[userDetails, setUserDetails]=useState({firstName:'',
    lastName:'',
     email:'',
     password:'',
     phoneNumber:'',
  })

  const handleFormUpdate= (e) =>{

   setUserDetails({...userDetails,
    [e.target.name]: e.target.value,
   })
  }
  return (
    <div>
      <form action="">

      
      <div className='border mb-6'>
         First Name : <input type="text" name="firstName" value={userDetails.firstName} placeholder='enter your first name' onChange={handleFormUpdate}/> 
      </div>
     <div className='border mb-6'>
        last Name : <input type="text" name="lastName" value={userDetails.lastName} placeholder='enter your last name' onChange={handleFormUpdate}/>
     </div>
      <div className='border mb-6'>
        email : <input type="email" name="email" value={userDetails.email}  placeholder='enter your email' onChange={handleFormUpdate}/>
      </div>
      <div className='border mb-6'>
         password : <input type="password" name="password"  value={userDetails.password} placeholder='enter your password'onChange={handleFormUpdate}/>
      </div>
     <div className='border mb-6'>
      phoneNumber : <input type="tel" name="phoneNumber" value={userDetails.phoneNumber} placeholder='enter your phone number' onChange={handleFormUpdate} />
     </div>
     </form>
    </div>
  )
}

export default Contact