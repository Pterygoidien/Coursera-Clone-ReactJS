import Button from "../../../utils/Button";
import DropdownMenu from "./DropdownMenu";

import navLinks from "../../../navigation/exploreLinks.json";

const ExploreMenu = () => {
  return (
    <>
      <div className='header__explore'>
        <Button className='explore-btn btn--primary btn--sm'>
          Explorer <i className='fas fa-chevron-down'></i>
        </Button>
        <DropdownMenu menuLinks={navLinks} />
      </div>
      <div className='dropdown-overlay' />
    </>
  );
};
export default ExploreMenu;
