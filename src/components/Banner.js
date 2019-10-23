import React from 'react';

import '../index.css';
import logo from '../static/img/Logo.JPG';

class Banner extends React.Component {
    render(){
        return (
            <div>
                <img src={logo} alt="Logo" />
            </div>
        );
    }
}

export default Banner;