import style from './Header.module.scss';
import Nav from "./nav/Nav";
import MobiNav from "./mobiNav/MobiNav";

function Header() {
  return (
    <div className={style.header}>
      <Nav />
      <MobiNav />
    </div>
  );
}

export default Header;
