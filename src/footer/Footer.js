import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import SocialNetwork from "./social-network/SocialNetwork";
import Title from "../common/components/title/Title";
import facebookIco from "../assets/icons/facebook.svg";
import linkedinIco from "../assets/icons/linkedin.svg";
import telegramIco from "../assets/icons/telegram.svg";
import skypeIco from "../assets/icons/skype.svg";

function Footer() {
  const facebookIcon = {
    backgroundImage: `url(${facebookIco})`
  }
  const linkedinIcon = {
    backgroundImage: `url(${linkedinIco})`
  }
  const telegramIcon = {
    backgroundImage: `url(${telegramIco})`
  }

  const skypeIcon = {
    backgroundImage: `url(${skypeIco})`
  }

  return (
    <div className={style.FooterBlock}>
      <div className={`${styleContainer.container} ${style.FooterContainer}`}>
        <Title text={"Maksim Voevodin"}/>
        <div className={style.socialNetworks}>
          <SocialNetwork link={""} style={facebookIcon}/>
          <SocialNetwork link={""} style={linkedinIcon}/>
          <SocialNetwork link={""} style={telegramIcon}/>
          <SocialNetwork link={""} style={skypeIcon}/>
        </div>
        <div>© All rights reserved</div>
      </div>
      </div>
  );
}

export default Footer;
