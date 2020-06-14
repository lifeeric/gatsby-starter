import React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';

export default function contact() {
    return (
        <div style={{color: "purple"}}>
            <Link to="/">Home</Link>
            <Header title="Contact" />
            <p>Email: gatsby@gatsby.gatsby</p>
        </div>
    )
}
