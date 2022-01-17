import style from './RemoteWork.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

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
