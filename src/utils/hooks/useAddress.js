import React, { useState } from 'react'

const useAddress = () => {
const [myAddress,setMyAddress]= useState(null)
const getAddress= async ()=>{
try {
    const Datas = await fetch('http://localhost:7000/fetchAddress')
        
        const json = Datas.json()
  console.log(json)
} catch (error) {
 console.log(error)   
}
}
  
}

export default useAddress