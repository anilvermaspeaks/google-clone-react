import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import Search from '../components/Search'

import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>

                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />

                </div>
            </div>
            <div className='home__body'>
                <center><img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png' alt='' /></center>

                <div className='home__inputController'>
                    <Search />

                </div>
            </div>
        </div>
    )
}


export default Home;