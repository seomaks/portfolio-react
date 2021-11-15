import style from './RemoteWork.module.css';
import styleContainer from "../common/styles/Container.module.css";

function RemoteWork() {
  return (
    <div className={style.RemoteWorkBlock}>
      <div className={`${styleContainer.container} ${style.RemoteWorkContainer}`}>
        <h2 className={style.title}>Considering options for remote work </h2>
        <a className={style.button} href={"#"}>Watch</a>
      </div>
      </div>
  );
}

export default RemoteWork;
