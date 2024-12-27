import React from 'react'

export default function Mobilescard() {
  return (
    <div className='image'>  
      <Mobile1/>
      <Mobile2/>
      <Mobile3/>
    </div>
  )
}
function Mobile1(){
    return(
        <div className='Shopping'>
        <table><tr><td>
        <img src="https://images.pexels.com/photos/17111837/pexels-photo-17111837/free-photo-of-apple-tech.jpeg?auto=compress&cs=tinysrgb&w=600" 
        height="100px" width="100px"  alt="Mobile"/>
        </td></tr>
        <tr><td>
       APPLE iphone
        </td></tr>
        <tr><td>
        PRICE 120000/-
        </td></tr></table></div>
    )
}function Mobile2(){
    return(
        <div className='Shopping'>
        <table><tr><td>
        <img src="https://images.pexels.com/photos/20013897/pexels-photo-20013897/free-photo-of-woman-holding-a-new-mobile-phone.jpeg?auto=compress&cs=tinysrgb&w=600" 
        height="100px" width="100px" alt="Mobile"/>
        </td></tr>
        <tr><td>
        Galaxy
        </td></tr>
        <tr><td>
        PRICE 18000/-
        </td></tr></table></div>
    )
}function Mobile3(){
    return(
        <div className='Shopping'>
        <table><tr><td>
        <img src="https://images.pexels.com/photos/21424632/pexels-photo-21424632/free-photo-of-modern-smartphone-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600" 
        height="100px" width="100px"  alt="Mobile"/>
        </td></tr>
        <tr><td>
        Oppo
        </td></tr>
        <tr><td>
        PRICE 22000/-
        </td></tr></table></div>
    )
}
