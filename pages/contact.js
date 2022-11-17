import style from 'pages/contact.module.scss'
import Navbar from 'src/components/commons/navbar';

const ContactUs = () => {
  const { contactContainer, contactDescription, contactTitle, contactText, contactForm, inputContainer, Input, imageBox, desktopImg } = style;
  return (
    <div className={contactContainer}>
      <Navbar />
      <div className={contactDescription}>
        <h1 className={contactTitle}>Contact Us</h1>
        <h2 className={contactText}>
          Feel free to contact us anytime. We will get <br />
          back to you as soon as we can !
        </h2>
      </div>
      <div className={imageBox}>
        <img src='/Media/desktopIcon.png' className={desktopImg} alt="" />
      </div>
      <form className={contactForm}>
        <div className={inputContainer}>
          <input type="text" className={Input} name="Name" placeholder='Name' id="" />
          <input type="email" className={Input} name="Email" placeholder='Email' id="" />
          <input type="text" className={Input} name="Number" placeholder='Phone' id="" />
          <input type="text" className={Input} name="Subject" placeholder='Subject' id="" />
          <input type="text" name="Text" className={Input} placeholder='How can we help ?' id="" />
          <br />
          <button className='sendButton' type='button'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
