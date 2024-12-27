//import React, { useState } from 'react'
import Fruitscard from './Fruitscard';
export default function Fruits({isActivate,onActivate}) {
    if(isActivate){
      return  <Fruitscard/>
    }
    
  return (<div >
    <div className='shopping' > <table ><tr><td>
        <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600" 
        height="100px" width="100px" alt="fruit" onClick={onActivate} />
        </td></tr>
        <tr><td>
        Fruits
        </td></tr></table></div></div>
  )
}