import { FaRegCircle } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import CategoryCard from "../module/CategoryCard";
import styles from "./HomePage.module.css"

function HomePage() {
    const services = ["خرید" , "فروش" , "رهن" , "اجاره"]
    const cities = ["تهران" , "تبریز" , "سنندج" , "کرمان" , "اصفهان" , "اراک" , "خوزستان" , "ساری"]
    return (
        <div>
            <div className={styles.banner}>

                <div className={styles.desc}>
                    <h1>سامانه خرید و اجاره املاک</h1>
                    <ul>
                        {services.map(i => (
                            <li key={i}>
                                <FaRegCircle/>
                                <span>{i}</span>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.categories}>
                <CategoryCard title="خانه ویلایی" name="villa"/>
                <CategoryCard title="آپارتمان" name="apartment"/>
                <CategoryCard title="دفتر کار" name="office"/>
                <CategoryCard title="مغازه" name="store"/>
            </div>
            <div className={styles.city}>
                <h3>شهرهای پربازدید</h3>
                <ul>
                    {cities.map(i => (
                        <li key={i}>
                            <MdApartment/>
                            <span>{i}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomePage
