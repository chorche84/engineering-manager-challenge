import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Main = props => (
  <main>
    <Header label={props.header.label} list={props.header.list} dropDown={props.header.dropDown}/>
    {props.children}
    <Footer />
  </main>
);

export default Main;
