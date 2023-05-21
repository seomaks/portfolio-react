import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import SocialNetwork from "./social-network/SocialNetwork";
import Title from "../common/components/title/Title";
import facebookIco from "../assets/icons/Facebook_black.svg";
import emailIco from "../assets/icons/Mail.ru_black.svg";
import linkedinIco from "../assets/icons/LinkedIn_black.svg";
import telegramIco from "../assets/icons/Telegram_black.svg";
import skypeIco from "../assets/icons/Skype_black.svg";
import Fade from 'react-reveal/Fade';

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

  const emailIcon = {
    backgroundImage: `url(${emailIco})`
  }

  return (
    <div id="contacts" className={style.FooterBlock}>
      <Fade bottom>
      <div className={`${styleContainer.container} ${style.FooterContainer}`}>
        <Title text={"Get in touch"}/>
        <div className={style.socialNetworks}>
          <SocialNetwork link={"https://www.facebook.com/voevodinmaks/"} style={facebookIcon}/>
          <SocialNetwork link={"mailto:m.voevodin88@gmail.com"} style={emailIcon}/>
          <SocialNetwork link={"https://www.linkedin.com/in/maks-voevodin/"} style={linkedinIcon}/>
          <SocialNetwork link={"http://t-do.ru/voevodin88"} style={telegramIcon}/>
          <SocialNetwork link={"skype:nu_meck?chat"} style={skypeIcon}/>
        </div>
        <div>© Maksim Voevodin - 2022</div>
      </div>
      </Fade>
      </div>
  );
}

export default Footer;
