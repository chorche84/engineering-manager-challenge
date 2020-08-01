import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Main = props => (
  <main>
    <Header label={props.header.label} list={props.header.list} dropDown={props.header.dropDown} stickyBanner={props.stickyBanner}/>
    {props.children}
    <Footer {...props.footer} />
  </main>
);

export default Main;
