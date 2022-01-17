import style from './Works.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Work from './work/Work';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todolists.jpg'
import counterImage from './../assets/images/counter.jpg'
import socialNetworkImage from './../assets/images/social.jpg'

function Works() {

  const todoList = {
    backgroundImage: 'url(` + imgUlr + `)'
  }

  const counter = {
    backgroundImage: 'url(` + imgUlr + `)'
  }

  return (
    <div className={style.worksBlock}>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
       <Title text={"My works"}/>
        <div className={style.works}>
          <Work title={"ToDoList"} description={"consectetur adipisicing elit. Aspernatur, atque" +
          "  beatae consequatur"} link={"#"}/>
          <Work title={"Counter"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, atque" +
          "  beatae consequatur"} link={"#"}/>
        </div>
      </div>
    </div>
  );
}

export default Works;
