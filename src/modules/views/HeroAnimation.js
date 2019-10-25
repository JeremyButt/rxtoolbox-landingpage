import React from 'react';

import animation from '../static/img/animation.gif';
import downarrow from '../static/img/downarrow.PNG';

export default function Banner () {

    return (
        <React.Fragment>
            <img alt="Pharmacy automatically sending texts to patients" 
                 src={animation} 
                 width="100%"
                 style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                }}/>
            <img
            style={{
                position: 'absolute',
                top: '65em',
                left: '48%',
            }}
            src={downarrow}
            height="50"
            width="47"
            alt="arrow down"
            />
        </React.Fragment>
    );
}