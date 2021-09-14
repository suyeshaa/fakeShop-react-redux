import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2>FakeShop</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
