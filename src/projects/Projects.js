import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todolists.jpg'
import socialNetworkImage from './../assets/images/social.jpg'
import wordsImage from './../assets/images/words.jpg'
import linksImage from './../assets/images/links-checker.jpg'
import Fade from 'react-reveal/Fade';

function Projects() {

  const todoList = {
    backgroundImage: `url(${todoImage})`
  }

  const socialNW = {
    backgroundImage: `url(${socialNetworkImage})`
  }

  const wordMeaning = {
    backgroundImage: `url(${wordsImage})`
  }

  const linksChecker = {
    backgroundImage: `url(${linksImage})`
  }

  return (
    <div id="projects" className={style.worksBlock}>
      <Fade left>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
       <Title text={"My projects"}/>
        <div className={style.works}>
          <Project style={todoList} title={"ToDoList"} description={"Application for creating a to-do list. Used technologies: TypeScript, React, Redux, Redux Toolkit, Redux Thunk, Material-UI, Formik, Jest testing"} link={"https://seomaks.github.io/todolist-ver2/"}/>
          <Project style={socialNW} title={"Social Network"} description={"Social network application. Used technologies: TypeScript, React, Redux, Redux Thunk, Redux-form, Axios, Reselect"} link={"https://seomaks.github.io/social-network/"}/>
          <Project style={wordMeaning} title={"Words meaning"} description={"Application for learning English. Used technologies: TypeScript, React, Redux, Redux Thunk, Axios"} link={"https://seomaks.github.io/words-meaning/"}/>
          <Project style={linksChecker} title={"Backlinks checker"} description={"Application aimed at SEO-specialists to check the presence of a link in an article and indexing status in Google.. Used technologies: TypeScript, React, Redux, Redux Thunk, Axios, Material UI, Jest, XLSX"} link={"https://seomaks.github.io/backlinks-checker/"}/>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Projects;
