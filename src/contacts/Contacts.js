import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/title/Title";

function Contacts() {
  return (
    <div className={style.ContactsBlock}>
      <div className={`${styleContainer.container} ${style.ContactsContainer}`}>
        <Title text={"Contacts"}/>
        <form action={"#"} className={style.form}>
          <input type="text" name=""/>
          <input type="text" name=""/>
          <textarea cols="30" rows="5"> </textarea>
          <a className={styleContainer.button} href={"#"}>Send</a>
        </form>
      </div>
    </div>
  );
}

export default Contacts
