import logo from '../images/Rick_and_Morty_logo.png';

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="logo rick and morty" />
    </header>
  );
}
export default Header;
