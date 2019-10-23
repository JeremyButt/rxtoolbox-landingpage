import React from 'react';

import Banner from './Banner';
import Body from './Body';
import Footer from './Footer';

import '../index.css';

class App extends React.Component {
    render(){
        return (
            <div>
                <Banner/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default App;