import React from "react";
import Button from "../../../utils/Button";
import { Link } from "react-router-dom";

const DropdownMenu = ({ menuLinks }) => {
  const sections = Object.keys(menuLinks);
  return (
    <div className='dropdown-menu'>
      <div className='dropdown-menu__container'>
        {sections.map(section => {
          return (
            <div className='dropdown-menu__section' key={section}>
              <h3>{section}</h3>
              <ul className='dropdown-menu__links'>
                {menuLinks[section].map(item => (
                  <Link to={item.path || "#!"} key={item.name}>
                    <li>{item.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          );
        })}

        <Button>Parcourir tous les sujets</Button>
      </div>
    </div>
  );
};

export default DropdownMenu;
