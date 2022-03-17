import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';

function Contacts() {
  return (
    <div id="contacts" className={style.contactsBlock}>
      <Fade left>
        <div className={style.container}>
          <Title text={"Contacts"}/>
          <form className={style.form}>
            <input type="text" className={style.formArea} placeholder="Name"/>
            <input type="text" className={style.formArea} placeholder="e-mail"/>
            <textarea className={style.messageArea} placeholder="Message"/>
            <button className={styleContainer.button} type="submit">Send
            </button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contacts
