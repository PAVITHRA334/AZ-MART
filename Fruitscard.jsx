import React from 'react'

export default function Fruitscard() {
  return (
    <div className='image'>  
      <Fruit1/>
      <Fruit2/>
      <Fruit3/>
    </div>
  )
}
function Fruit1(){
    return(
        <div className='Shopping'>
        <table><tr><td>
        <img src="https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=600" 
        height="100px" width="100px"  alt="fruit"/>
        </td></tr>
        <tr><td>
       APPLE
        </td></tr>
        <tr><td>
        PRICE 120/-
        </td></tr></table></div>
    )
}function Fruit2(){
    return(
        <div className='Shopping'>
        <table><tr><td>
        <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600" 
        height="100px" width="100px" alt="fruit"/>
        </td></tr>
        <tr><td>
        Grapes
        </td></tr>
        <tr><td>
        PRICE 180/-
        </td></tr></table></div>
    )
}function Fruit3(){
    return(
        <div className='Shopping'>
        <table><tr><td>
        <img src="https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600" 
        height="100px" width="100px"  alt="fruit"/>
        </td></tr>
        <tr><td>
        Orange
        </td></tr>
        <tr><td>
        PRICE 220/-
        </td></tr></table></div>
    )
}
