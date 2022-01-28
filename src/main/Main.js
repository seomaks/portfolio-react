import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'

function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.lefSide}>
          <h1>Frontend Developer</h1>
          <p>You'll love REACT as much as I love it...</p>
          <span>Maks Voevodin</span>
        </div>


        <div className={style.rightSide}>

          <div className={style.photo}></div>
          <div className={style.rectangle}></div>


        </div>


        </div>
      </div>
  );
}

export default Main;
