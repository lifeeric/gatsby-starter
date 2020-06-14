import React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';

export default () => (
    <div style={{color: 'teal'}}>
        <Link to="/">Home</Link>
        <Header title="About Me!" />
        <p>Wooh, Gatsby Is friendly!</p>
    </div>
)