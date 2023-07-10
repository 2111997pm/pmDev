import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const readpage = useNavigate()
  const [email, setEmail] = useState()
  const [Name, setName] = useState()



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post('https://63dba5e5b8e69785e4875188.mockapi.io/prahalad', {
      name: Name,
      email: email
    })
    if(data.data){
      readpage('/read')
    }
  }




  return (
    <>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} required/>
        <input type="text" onChange={(e) => setName(e.target.value)}  required/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Create