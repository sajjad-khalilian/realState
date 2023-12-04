import styles from "./DashboardPage.module.css"

function DashboardPage({createdAt}) {
    return (
        <div className={styles.container}>
            <h3>سلام</h3>
            <p>شما میتوانید آگهی خود را ثبت کنید تا بقیه آن را ببینند</p>
            <div className={styles.createdAt}>
                <p>تاریخ عضویت :</p>
                <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
            </div>
        </div>
    )
}

export default DashboardPage
