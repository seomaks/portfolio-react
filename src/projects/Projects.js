import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todolists.jpg'
import socialNetworkImage from './../assets/images/social.jpg'
import Fade from 'react-reveal/Fade';

function Projects() {

  const todoList = {
    backgroundImage: `url(${todoImage})`
  }

  const socialNW = {
    backgroundImage: `url(${socialNetworkImage})`
  }

  return (
    <div className={style.worksBlock}>
      <Fade left>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
       <Title text={"My projects"}/>
        <div className={style.works}>
          <Project style={todoList} title={"ToDoList"} description={"consectetur adipisicing elit. Aspernatur, atque" +
          "  beatae consequatur"} link={"#"}/>
          <Project style={socialNW} title={"Social Network"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, atque" +
          "  beatae consequatur"} link={"#"}/>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Projects;
