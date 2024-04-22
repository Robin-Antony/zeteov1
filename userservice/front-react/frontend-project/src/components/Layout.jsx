import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import { Provider } from 'react-redux'
import store from '../store/Store';

function Layout() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <Outlet/>
        <Footer/>
      </Provider>
    </>
  )
}

export default Layout
