import style from './RemoteWork.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Fade from 'react-reveal/Fade';

function RemoteWork() {
  return (
    <div className={style.RemoteWorkBlock}>
      <Fade left>
      <div className={`${styleContainer.container} ${style.RemoteWorkContainer}`}>
        <h3 className={style.title}>About me</h3>
        <p>I am a web developer specializing in front-end development. Experience with JavaScript, React, Redux, TypeScript, HTML5, CSS.</p>
        <a className={styleContainer.button} href={"https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1S29kS6u4iT0XRTu-3QabJ2u6eZs7dAbd"}>Download my CV</a>
      </div>
      </Fade>
      </div>
  );
}

export default RemoteWork;
