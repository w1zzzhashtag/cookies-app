import React from 'react';
import {Header, Footer} from "../index";
import './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default Layout;