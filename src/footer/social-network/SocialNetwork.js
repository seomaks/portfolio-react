import style from './SocialNetwork.module.scss';

function SocialNetwork(props) {
  return (
      <a href={props.link} className={style.icon} style={props.style}/>
  );
}

export default SocialNetwork;
