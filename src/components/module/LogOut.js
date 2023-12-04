"use client"

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import styles from "./LogOut.module.css"


function LogOut() {
    return (
        <button className={styles.button} onClick={signOut}>
            <MdLogout/>
            خروج
        </button>
    )
}

export default LogOut
