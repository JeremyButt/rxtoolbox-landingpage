import React from 'react';

import '../index.css';
import logo from '../static/img/Logo.JPG';

class Banner extends React.Component {
    render(){
        return (
            <div className='banner'>
                <img src={logo} alt='Logo' className='logo' />
            </div>
        );
    }
}

export default Banner;