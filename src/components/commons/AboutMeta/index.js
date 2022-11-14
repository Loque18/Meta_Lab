/* eslint import/newline-after-import: "off" */
import Image from "next/image";
const metaFooter = () => {
    return (
        <div>
            <div>
                <h1>
                    We Turn Ideas into a <br />
                    competitive business
                </h1>
                <p>
                    With over than 10 years of experience in technology, from<br />
                    business strategies to web development and brand design to<br />
                    IT solutions, we help you turn your innovative ideas into<br />
                    competitive market-ready solutions.
                </p>
                <span>{`> learn more about MetaLab`}</span>
                <Image 
                    src="/public/Media/Hand-Holding-Smart-Phone.png"
                    width={300}
                    height={100}
                />
            </div>
            
        </div>
    )
}

export default metaFooter;