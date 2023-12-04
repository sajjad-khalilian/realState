import { FcHome } from "react-icons/fc";
import { MdApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { sp } from "@/utils/replaceNumber";
import styles from "./Card.module.css"
import Link from "next/link";


function Card({data: {category , _id , title , address , price}}) {

    const icons = {
        villa: <FcHome/>,
        apartment: <MdApartment/>,
        office: <GiOfficeChair/>,
        store: <FaStore/>
    }
    return (
        <div className={styles.container}>
            <div className={styles.icon}>{icons[category]}</div>
            <p className={styles.title}>{title}</p>
            <p className={styles.address}>
                <FaLocationDot/>
                {address}
            </p>
            <span>{sp(price)} تومان</span>
            <Link href={`/buy-resident/${_id}`}>
                مشاهده آگهی
                <FaArrowLeft/>
            </Link>
        </div>
    )
}

export default Card
