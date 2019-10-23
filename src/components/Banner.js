import React from 'react';

import '../index.css';
import logo from '../static/img/Logo.JPG';

class Banner extends React.Component {
    render(){
        return (
            <div class='banner'>
                <img src={logo} alt='Logo' class='logo' />
            </div>
        );
    }
}

export default Banner;