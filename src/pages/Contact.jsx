import React from 'react'

const Contact = () => {

  const handleFormUpdate= (e) =>{
    console.log(e.target.name, e.target.value, e.target.placeholder)
  }
  return (
    <div>
      <form action="">

      
      <div className='border mb-6'>
         First Name : <input type="text" name="firstName" value='' placeholder='enter your first name' onChange={handleFormUpdate}/> 
      </div>
     <div className='border mb-6'>
        last Name : <input type="text" name="lastName" value='' placeholder='enter your last name' onChange={handleFormUpdate}/>
     </div>
      <div className='border mb-6'>
        email : <input type="email" name="email" value=''  placeholder='enter your email' onChange={handleFormUpdate}/>
      </div>
      <div className='border mb-6'>
         password : <input type="password" name="password"  value='' placeholder='enter your password'onChange={handleFormUpdate}/>
      </div>
     <div className='border mb-6'>
      phoneNumber : <input type="tel" name="phoneNumber" value='' placeholder='enter your phone number' onChange={handleFormUpdate} />
     </div>
     </form>
    </div>
  )
}

export default Contact