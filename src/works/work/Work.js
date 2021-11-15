import style from './Work.module.css';

function Skill(props) {
  return (
    <div className={style.work}>
      <div className={style.imgContainer}>
      <a className={style.button} href={props.link}>Watch</a>
      </div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  );
}

export default Skill;
