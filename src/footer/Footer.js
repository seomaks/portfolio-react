import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import SocialNetwork from "./social-network/SocialNetwork";

function Footer() {
  return (
    <div className={style.FooterBlock}>
      <div className={`${styleContainer.container} ${style.FooterContainer}`}>
        <h2 className={style.title}>Maksim Voevodin</h2>

        <div className={style.socialNetworks}>
          <SocialNetwork link={""}/>
          <SocialNetwork link={""}/>
          <SocialNetwork link={""}/>
          <SocialNetwork link={""}/>
        </div>
        <div>© All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
