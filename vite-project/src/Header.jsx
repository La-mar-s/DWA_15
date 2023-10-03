//import React from "react";(dont need to have this line of code)

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="src\images\react-logo.png" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}