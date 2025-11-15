import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';

const Typewrite = () => {
    const [text]=useTypewriter({
        words:["ML Enthusiast","Frontend Developer","Future Software Engineer","Tech Enthusiast"],
        loop:{},
        typespeed:123,
        deleteSpeed:78,
    });
  return (
    <h1 style={{margin:'20px', color:'white', fontSize:'40px'}}>
        I'm a {' '}
        <span style={{color:'#1D4ED8',fontWeight:'bold',fontSize:'44px'}}>
            {text}
        </span>
        <span style={{color:'red'}}>
            <Cursor/>
        </span>
    </h1>
  );
}

export default Typewrite;