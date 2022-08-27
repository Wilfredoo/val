import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/test1">test 1</Link>
      <Link to="/test2">test 2</Link>
    </nav>
  );
}
