import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title text={"Skills"}/>
        <div className={style.skills}>
          <Skill title={"JS"} description={"consectetur adipisicing elit. Aspernatur, atque" +
          "  beatae consequatur"}/>
          <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, atque" +
          "  beatae consequatur"}/>
          <Skill title={"React"} description={"Lorem ipsum dolor sit Aspernatur, atque" +
          "  beatae consequatur"}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
