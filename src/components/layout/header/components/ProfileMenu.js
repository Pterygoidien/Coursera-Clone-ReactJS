import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Button from "../../../utils/Button";

const ProfileMenu = () => {
  return (
    <div className='header__profile'>
      <nav>
        <ul className='flex-row flex-nowrap'>
          <li>
            <Link
              to={{
                pathname: "",
                search: "?authMode=login",
                hash: "#",
              }}
            >
              Connexion
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "",
                search: "?authMode=register",
                hash: "#",
              }}
            >
              <Button className='btn--primary btn--sm'>
                Inscrivez-vous gratuitement
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default ProfileMenu;
