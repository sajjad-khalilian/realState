import DashboradCard from "../module/DashboradCard"
import styles from "./MyProfilePage.module.css"

function MyProfilePage({profiles}) {
    return (
        <div>
            {profiles.length ? null : <p className={styles.text}>هیچ آگهی ثبت نشده است</p>} 
            {
                profiles.map(i => (<DashboradCard key={i._id} data={JSON.parse(JSON.stringify(i))}/>
                ))}
        </div>
    )
}

export default MyProfilePage
