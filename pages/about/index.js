import Navbar from "src/components/commons/navbar";
import style from 'pages/about/about.module.scss'

const about = () => {
    const { aboutContainer, contentContainer } = style;
    return (
        <div className={aboutContainer}>
            <Navbar />
            <div className={contentContainer}>
                <h1 className={contentHeader}>
                    MetaLab is one of the<br />
                    top world Learders of<br />
                    Web3 technology.
                </h1>
            </div>
        </div>
    )
}

export default about;