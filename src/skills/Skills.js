import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIco from './../assets/icons/react.svg'
import reduxIco from './../assets/icons/redux.svg'
import jsIco from './../assets/icons/js.svg'
import Fade from 'react-reveal/Fade';

function Skills() {

  const reactIcon = {
    backgroundImage: `url(${reactIco})`
  }
  const reduxIcon = {
    backgroundImage: `url(${reduxIco})`
  }
  const jsIcon = {
    backgroundImage: `url(${jsIco})`
  }

  return (
    <div id="skills" className={style.skillsBlock}>
      <Fade left>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title text={"Skills"}/>
        <div className={style.skills}>
          <Skill title={"JS"} description={"consectetur adipisicing elit. Aspernatur, atque" +
          "  beatae consequatur"} style={jsIcon}/>
          <Skill title={"React"} description={"Lorem ipsum dolor sit Aspernatur, atque" +
          "  beatae consequatur"} style={reactIcon}/>
          <Skill title={"Redux"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, atque" +
            "  beatae consequatur"} style={reduxIcon}/>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Skills;
