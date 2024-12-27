//import React, { useState } from 'react'
import Mobilescard from './Mobilescard';
export default function Mobiles({isActivate,onActivate}) {
    if(isActivate){
      return  <Mobilescard/>
    }
    
  return (<div >
    <div className='shopping'> <table ><tr><td>
        <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" 
        height="100px" width="100px" alt="Mobiles" onClick={onActivate} />
        </td></tr>
        <tr><td>
        Mobiles
        </td></tr></table></div></div>
  )
}