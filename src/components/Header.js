import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {FoodContext} from '../App'
import {Link} from'react-router-dom'

function Header() {
   let context =useContext(FoodContext)
  return (
    <div className='head-wrapper'>
      <div className='head-title'>
        Food Ordering Portal
      </div>
      <div className='head-cart'>
        <Link to ='./cart'>
        <ShoppingCartIcon/></Link> 
        <span className='count'>{context.cartValue}</span>
      </div>
    </div>
  )
}

export default Header; 
