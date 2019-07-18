import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="bar">
        <strong id="logo">Facebook</strong>
        <strong id="profile">Meu Perfil</strong>
      </div>
    );
  }
}

export default Header;
