import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../Images/logo.svg'
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Switch from '@mui/material/Switch';

function Navbar() {

  return (
    <nav className='flex justify-around border-2 sticky shadow-md items-center z-10' style={{height:'70px'}}>
        <div className='flex w-2/3 justify-start items-center'>
            <div className='flex '>
                <Link to='/landings' className='flex '>
                    <img src={LogoImg} alt="silicon logo" style={{objectFit:'fill',height:'35px',width:'35px',marginRight:'10px'}}/>
                    <span className='text-2xl font-semibold'>Silicon</span>
                </Link>
            </div>

            <div className='flex justify-evenly w-1/2'>
                <div><Link to='/' className='text-md font-normal hover:text-blue-600' > 
                    Landings 
                </Link></div>
                <div><Link to='/' className='text-md font-normal hover:text-blue-600' > Pages </Link></div>
                <div><Link to='/account' className='text-md font-normal hover:text-blue-600' > Account </Link></div>
                <div><Link to='/uikit' className='text-md font-normal hover:text-blue-600' > UI Kit </Link></div>
                <div><Link to='/docs' className='text-md font-normal hover:text-blue-600' > Docs </Link></div>
            </div>

        </div>
        
        <div className='flex'>
            <div className='flex justify-center items-center mr-5'>
                <span className='text-md font-normal ml-2 mr-2'>Light</span>
                  <Switch onChange={() => console.log('switched')} />
                <span className='text-md font-normal ml-2 mr-2'>Dark</span>
            </div>

            <Button variant="contained" style={{textTransform: 'none',backgroundColor:'#4044ee'}} >
                <ShoppingCartIcon/>
                <span className='ml-2'>Buy Now</span>
            </Button>
        </div>
    </nav>
  );
}

export default Navbar;