const NavBar = () => {
  return (
    <nav className='header__navbar'>
      <ul className=' flex-row collapse-md flex-nowrap '>
        <li>
          <a href='./'>Diplômes en ligne</a>
        </li>
        <li>
          <a href='./'>Rechercher des carrières</a>
        </li>
        <li>
          <a href='./'>Pour l'entreprise</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
