import Image from "next/image";
import style from 'src/components/style.module.scss'
const Cards = () => {
  const {cardContainer} = style;
  return (
    <div className={cardContainer}>
      <div className="cardBox">
        <div className="cardContent">
          <Image />
          <h1 className="">50+ Partners & Clients</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetuer adipiscing elit, sed <br />
            diam nonummy nibh euismod <br />
            tincidunt ut laoreet dolore magna <br />
            aliquam erat Lorem ipsum dolor sit <br />
            amet, consectetuer adipiscing elit, <br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cards;