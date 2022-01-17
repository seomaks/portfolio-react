import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import SocialNetwork from "./social-network/SocialNetwork";
import Title from "../common/components/title/Title";

function Footer() {
  return (
    <div className={style.FooterBlock}>
      <div className={`${styleContainer.container} ${style.FooterContainer}`}>
        <Title text={"Maksim Voevodin"}/>
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
