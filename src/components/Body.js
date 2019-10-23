import React from 'react';

import background_image from '../static/img/8038e02ad3368b2064b90baf3678-1448009.jpg'

class Body extends React.Component{
    render(){
        return (
            <img className='body' src={background_image}/>
        );
    }
}

export default Body;