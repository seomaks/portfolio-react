import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Particles from "react-tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

function Main() {

  return (
    <div id="main" className={style.mainBlock}>
      <Particles
        params={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#6667ab"
            },
            links: {
              enable: true,
              color: "#6667ab",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
      <div className={styleContainer.container}>
        <Fade top>
          <div className={style.lefSide}>
            <h1>Frontend Developer</h1>
            <ReactTypingEffect
              text={["You'll love REACT as much as I love it..."]}
            />
            <p>Maks Voevodin</p>
          </div>
          <div className={style.rightSide}>
            <div className={style.photo}>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Main;