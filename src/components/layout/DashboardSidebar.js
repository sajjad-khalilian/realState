import styles from "./DashboardSidebar.module.css"
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogOut from "../module/LogOut";



async function DashboardSidebar({children , role , email}) {
    const session = await getServerSession()
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <CgProfile/>
                {role === "ADMIN" ? "ادمین" : null}
                <p>{session?.user.email}</p>
                <span></span>
                <Link href="/dashboard/">حساب کاربری</Link>
                <Link href="/dashboard/profile">آگهی های من</Link>
                <Link href="/dashboard/add">ثبت آگهی</Link>
                {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
                <LogOut/>
            </div>
            <div className={styles.main}>{children}</div>
        </div>
    )
}

export default DashboardSidebar
