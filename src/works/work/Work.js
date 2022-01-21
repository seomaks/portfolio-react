import style from './Work.module.css';

function Work(props) {
  return (
    <div className={style.work}>
      <div className={style.imgContainer} style={props.style}>
      <a className={style.button} href={props.link}>Watch</a>
      </div>
      <div className={style.projectInfo}>
      <h3 className={style.projectTitle}>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
}

export default Work;
