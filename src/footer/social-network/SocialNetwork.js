import style from './SocialNetwork.module.css';

function SocialNetwork(props) {
  return (
      <a className={style.image}>
        {props.link}
      </a>
  );
}

export default SocialNetwork;
