import style from './Skill.module.scss';

function Skill(props) {
  return (
    <div className={style.skill}>
      <div className={style.icon} style={props.style}></div>
      <h3>{props.title}</h3>
      <p className={style.description}>{props.description}</p>
    </div>
  );
}

export default Skill;
