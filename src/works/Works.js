import style from './Works.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";

function Works() {
  return (
    <div className={style.worksBlock}>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
        <h2 className={style.title}>My works</h2>
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
