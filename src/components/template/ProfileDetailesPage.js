"use client"


import { CiLocationOn } from "react-icons/ci";
import { SiHomebridge } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";
import { FcHome } from "react-icons/fc";
import { MdApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
import { e2p, sp } from "@/utils/replaceNumber";
import styles from "./ProfileDetailesPage.module.css"
import ShareButton from "../module/ShareButton";



function ProfileDetailesPage({data: {title , address , description  , realState , amenities , rules , phoneNumber , category, price , createdAt}}) {
    const icons = {
        villa: <FcHome/>,
        apartment: <MdApartment/>,
        office: <GiOfficeChair/>,
        store: <FaStore/>
    }
    const categories = {
        villa: "ویلا",
        apartment: "آپارتمان",
        office: "دفتر",
        store: "مغازه",
    }
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1>{title}</h1>
                <span>
                    <CiLocationOn/>
                    {address}
                </span>
                <h3 className={styles.title}>توضیحات</h3>
                <p>{description}</p>
                <h3 className={styles.title}>امکانات</h3>
                {amenities.length ? (
                    <ul>
                        {amenities.map((i , index) => (
                            <li key={index}>{i}</li>
                        ))}
                    </ul>
                ) : <p>موردی ذکر نشده است</p>}
                <h3 className={styles.title}>قوانین</h3>
                {rules.length ? (
                    <ul>
                        {rules.map((i , index) => (
                            <li key={index}>{i}</li>
                        ))}
                    </ul>
                ) : <p>موردی ذکر نشده است</p>}
            </div>
            <div className={styles.sidebar}>
                <div className={styles.realState}>
                    <SiHomebridge/>
                    <p>{realState}</p> 
                    <span>
                        <IoCallOutline/>
                        {e2p(phoneNumber)}
                    </span>
                </div>
                <ShareButton/>
                <div className={styles.price}>
                    <p>
                        {icons[category]}
                        {categories[category]}
                    </p>
                   <p>{sp(price)} تومان</p>
                   <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetailesPage
