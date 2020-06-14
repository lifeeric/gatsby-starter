import React from "react"
import Header from '../components/header';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link to="/about">About</Link>
      <Link to="contact">Contact</Link>
      <Header title="Hello, Gatsby!" />
      <p>Love to have you!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="random unsplash" />
    </div>
  )
}
