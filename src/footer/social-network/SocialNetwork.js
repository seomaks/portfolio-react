import style from './SocialNetwork.module.scss';

function SocialNetwork(props) {
  return (
      <a className={style.image}>
        {props.link}
      </a>
  );
}

export default SocialNetwork;
