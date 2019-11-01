import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './modules/theme';

import Banner from './modules/views/Banner';
import HeroAnimation from './modules/views/HeroAnimation';
import HeroText from './modules/views/HeroText';
import FeatureList from './modules/views/FeatureList';
import ContactUs from './modules/views/ContactUs';
import Footer from './modules/views/Footer';

export default function Home () {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Banner/>
                <HeroAnimation />
                <HeroText />
                <FeatureList />
                <ContactUs />
                <Footer/>
            </ThemeProvider>
        </React.Fragment>
    );
}
