import style from './RemoteWork.module.scss';
import styleContainer from "../common/styles/Container.module.scss";

function RemoteWork() {
  return (
    <div className={style.RemoteWorkBlock}>
      <div className={`${styleContainer.container} ${style.RemoteWorkContainer}`}>
        <h3 className={style.title}>I have a lot of remote work experience!</h3>
        <a className={styleContainer.button} href={"#"}>Watch</a>
      </div>
      </div>
  );
}

export default RemoteWork;
