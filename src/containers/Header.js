import React from "react";
import Logo from './Daisy1.png';

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <img height= '75px' src={Logo} alt="SimpleTut LOGO" />
      </div>
    </div>
  );
};

export default Header;
