import Footer from 'src/components/commons/footer';
import style from 'pages/contact.module.scss';
import Navbar from 'src/components/commons/navbar';

const ContactUs = () => {
  const {
    contactContainer,
    contactContentDescription,
    contactTitle,
    contactText,
    Box,
    contentBoxContainer,
    formBox,
    Input,
    formButton,
    imgBox,
    desktopImage,
    contactInformation,
    info,
    Inputcomment
  } = style;
  return (
    <div className={contactContainer}>
      <Navbar />
      <div className={contactContentDescription}>
        <h1 className={contactTitle}>Contact Us</h1>
        <h2 className={contactText}>
          Feel free to contact us anytime. We will get <br /> back to you as soon as we can!
        </h2>
      </div>

      <div className={Box}>
        <div className={contentBoxContainer}>
          <form className={formBox}>
            <input type="text" placeholder="Name" className={Input} name="Name" required />
            <input type="email" placeholder="Email" className={Input} required />
            <input type="tel" placeholder="Phone" className={Input} required />
            <input type="text" placeholder="Subject" className={Input} required />
            <input type="text" placeholder='How can we help ?' className={Inputcomment} />
            <br />
            <button className={formButton} type="button">
              Send
            </button>
          </form>
          <div className={imgBox}>
            <img src="/Media/desktopIcon.png" className={desktopImage} alt="icon.png" />
          </div>
        </div>
      </div>
      <div className={contactInformation}>
        <h3 className={info}>
          <i className="far fa-location" /> Location goes here
        </h3>
        <h3 className={info}>
          <i className="far fa-envelope" /> info@metalab.business
        </h3>
        <h3 className={info}>
          <i className="far fa-phone" /> 00 971 123 456 789
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
