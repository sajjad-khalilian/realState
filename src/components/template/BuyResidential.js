"use client"

import Card from "../module/Card"
import SideBar from "../module/SideBar"
import styles from "./BuyResidential.module.css"

function BuyResidential({data}) {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <SideBar/>
            </div>
            <div className={styles.main}>
                {data.length ? null : (<p className={styles.text}>هیچ آگهی ثبت نشده است</p>)}
                {data.map(profile => (<Card key={profile._id} data={profile}/>))}
            </div>
        </div>
    )
}

export default BuyResidential
