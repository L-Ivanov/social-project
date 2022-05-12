import React from 'react';
import {FaFacebook, FaGithub, FaPinterest, FaTelegram} from "react-icons/all";


function AdditionalNav(){
    return(<nav className='nav-links'>
        <h3 className= 'nav-links' style={{color:'green'}} >Additional links:</h3>
        <ul className='nav-links'>
            <a href ='https://telegram.org'>
                <li className='nav-links'>Telegram link<FaTelegram/></li>
            </a>
            <a href ='https://www.facebook.com'>
                <li className='nav-links'>Pinterest link<FaPinterest/></li>
            </a>
            <a href ='https://www.facebook.com'>
                <li className='nav-links'>Github link<FaGithub/></li>
            </a>
            <a href ='https://www.facebook.com'>
                <li className='nav-links'>Facebook link<FaFacebook/></li>
            </a>

        </ul>
    </nav>)
}

export default AdditionalNav;