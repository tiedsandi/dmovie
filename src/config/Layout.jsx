import React, { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Layout(props) {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    );
}

export default Layout;