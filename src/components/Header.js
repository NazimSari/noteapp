import React from "react";
import Search from "./Search";

function Header() {
  return (
    <>
      <div className="header">
        <h1>NotesApp</h1>
        <Search />
      </div>
    </>
  );
}

export default Header;
