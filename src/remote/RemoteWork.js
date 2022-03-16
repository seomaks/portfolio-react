import style from './RemoteWork.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Fade from 'react-reveal/Fade';

function RemoteWork() {
  return (
    <div className={style.RemoteWorkBlock}>
      <Fade left>
      <div className={`${styleContainer.container} ${style.RemoteWorkContainer}`}>
        <h3 className={style.title}>I have a lot of remote work experience!</h3>
        <a className={styleContainer.button} href={"#"}>Hire Me</a>
      </div>
      </Fade>
      </div>
  );
}

export default RemoteWork;
