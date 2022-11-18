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
    commentInput,
    formButton,
    imgBox,
    contactInformation,
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
            <input type="text" placeholder="Name" className={Input} name="Name" />
            <input type="email" placeholder="Email" className={Input} />
            <input type="tel" placeholder="Phone" className={Input} />
            <input type="text" placeholder="Subject" className={Input} />
            <input type="text" className={commentInput} />
            <button className={formButton} type="button">
              Send
            </button>
          </form>
          <div className={imgBox}>
            <img src="/Media/desktopIcon.png" alt="icon.png" />
          </div>
        </div>
        <div className={contactInformation}>
          <span>Location goes here</span>
          <span>info@metalab.business</span>
          <span>00 971 123 456 789</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
