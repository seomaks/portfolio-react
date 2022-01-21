import style from './RemoteWork.module.scss';
import styleContainer from "../common/styles/Container.module.scss";

function RemoteWork() {
  return (
    <div className={style.RemoteWorkBlock}>
      <div className={`${styleContainer.container} ${style.RemoteWorkContainer}`}>
        <h3 className={style.title}>Considering options for remote work </h3>
        <a className={style.button} href={"#"}>Watch</a>
      </div>
      </div>
  );
}

export default RemoteWork;
