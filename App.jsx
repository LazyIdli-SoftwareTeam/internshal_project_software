import React, { Component } from "react";
import Layout from "./layout";
import Component from "./component";
import Index from "./";
export default class App extends Component
{
    render()
    {
        return(
            <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" exact element={<Login/>}></Route>
                <Route path="http://localhost:3001/layout" exact element={<Layout/>}></Route>
                <Route path="http://localhost:3001/component" exact element={<Component/>}></Route>
            </Routes>
            </BrowserRouter>
        );
    }
}