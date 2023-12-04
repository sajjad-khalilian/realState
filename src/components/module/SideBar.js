import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import styles from "./SideBar.module.css"

function SideBar() {
    return (
        <div className={styles.container}>
            <p>
                <FaFilter/>
                دسته بندی
            </p>
            <Link href="/buy-resident">همه</Link>
            <Link href={{pathname: "/buy-resident" , query: {category: "villa"}}}>ویلا</Link>
            <Link href={{pathname: "/buy-resident" , query: {category: "store"}}}>مغازه</Link>
            <Link href={{pathname: "/buy-resident" , query: {category: "office"}}}>دفتر کار</Link>
            <Link href={{pathname: "/buy-resident" , query: {category: "apartment"}}}>آپارتمان</Link>
        </div>
    )
}

export default SideBar
