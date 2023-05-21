import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIco from './../assets/icons/react.svg'
import reduxIco from './../assets/icons/redux.svg'
import jsIco from './../assets/icons/js.svg'
import tsIco from './../assets/icons/ts.svg'
import htmlIco from './../assets/icons/html.svg'
import cssIco from './../assets/icons/css.svg'
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
  const tsIcon = {
    backgroundImage: `url(${tsIco})`
  }
  const htmlIcon = {
    backgroundImage: `url(${htmlIco})`
  }
  const cssIcon = {
    backgroundImage: `url(${cssIco})`
  }

  return (
    <div id="skills" className={style.skillsBlock}>
      <Fade left>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title text={"Skills"}/>
        <div className={style.skills}>
          <Skill title={"JavaScript"} description={""} style={jsIcon}/>
          <Skill title={"TypeScript"} description={""} style={tsIcon}/>
          <Skill title={"React"} description={""} style={reactIcon}/>
        </div>
          <div className={style.skills}>

          <Skill title={"Redux"} description={""} style={reduxIcon}/>
          <Skill title={"HTML"} description={""} style={htmlIcon}/>
          <Skill title={"CSS"} description={""} style={cssIcon}/>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Skills;
