import style from './MobiNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";
import {useState} from "react";

function MobiNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onMenuBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <div className={style.mobiNav}>
      <div className={menuIsOpen ? `${style.mobiNavItems} ${style.show}` : style.mobiNavItems}>
        <Link
          activeClass={style.active}
          to="main"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Main</Link>
        <Link
          activeClass={style.active}
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Skills</Link>
        <Link
          activeClass={style.active}
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Projects</Link>
        <Link
          activeClass={style.active}
          to="contacts"
          spy={true}
          smooth={true}
          offset={1}
          duration={500}
        >Contacts</Link>
      </div>
      <button onClick={onMenuBtnClick} className={style.mobiBtn}></button>
    </div>
  );
}

export default MobiNav;
