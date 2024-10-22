import React from 'react';
import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            
      <h1 className='text-3xl font-bold'>React Knowladge cafe</h1>
      <img src={profile} alt="" />
        </header>
    );
};

export default Header;