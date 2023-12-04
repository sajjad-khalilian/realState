"use client"

const { default: Link } = require("next/link");
import styles from "../layout/Header.module.css"
import { FaRegUser } from "react-icons/fa";
import {FiLogIn} from "react-icons/fi"
import { useSession } from "next-auth/react";



function Header() {

    const {data} = useSession()


    return (
        <header className={styles.header}>
            <div>
                <ul>
                    <li>
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link href="/buy-resident">آگهی ها</Link>
                    </li>
                </ul>
            </div>
             {data ?
             (<div className={styles.login}>
                 <Link href="/dashboard">
                     <FaRegUser/>
                </Link>
             </div>)
             : 
            <div className={styles.login}>
                <Link href="/signup"><FiLogIn/><span>ورود</span></Link>
            </div>
         }
            
        </header>
    )
}

export default Header
