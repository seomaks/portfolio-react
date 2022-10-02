import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import {useState} from "react";

function Contacts() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const changeName = (e) => {
   setName(e.currentTarget.value)
  }

  const changeEmail = (e) => {
   setEmail(e.currentTarget.value)
  }

  const changeMessage = (e) => {
    setMessage(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      axios.post("https://smtp-mail-sendler.herokuapp.com/send", {
      name: name,
      email: email,
      message: message
    })
      .then(() => {
        setSuccessMessage("Your message has been sent!")
        setName("")
        setEmail("")
        setMessage("")
      })
  }

  return (
    <div id="contacts" className={style.contactsBlock}>
      <Fade left>
        <div className={style.container}>
          <Title text={"Contacts"}/>
          <form className={style.form} onSubmit={handleSubmit}>
            <input type="text" className={style.formArea} placeholder="Name"
                   value={name} id="name" onChange={changeName}/>
            <input type="text" className={style.formArea} placeholder="E-mail"
                   value={email} id="email" onChange={changeEmail}/>
            <textarea className={style.messageArea} placeholder="Message"
                      value={message} id="message" onChange={changeMessage}/>
            <div>{successMessage}</div>
            <button className={styleContainer.button} type="submit">Send
            </button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contacts
