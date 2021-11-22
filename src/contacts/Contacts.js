import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
  return (
    <div className={style.ContactsBlock}>
      <div className={`${styleContainer.container} ${style.ContactsContainer}`}>
        <h2 className={style.title}>Contacts</h2>
        <form action={"#"} className={style.form}>
          <input type="text" name=""/>
          <input type="text" name=""/>
          <textarea cols="30" rows="5"> </textarea>
          <a className={style.button} href={"#"}>Submit</a>
        </form>
      </div>
    </div>
  );
}

export default Contacts
