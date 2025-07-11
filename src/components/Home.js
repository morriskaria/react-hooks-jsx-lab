// src/components/Home.js
import React from "react";
import { name, city } from "../data/data";

function Home() {
  const headingText = `${name} is a Web Developer from ${city}`;
  
  return (
    <div id="home">
      <h1 
        style={{ color: "firebrick" }}
        data-testid="home-heading"  // Add test ID
      >
        {headingText}
      </h1>
    </div>
  );
}

export default Home;