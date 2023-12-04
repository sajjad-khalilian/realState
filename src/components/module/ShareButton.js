"use client"


import { GiShare } from "react-icons/gi";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from "./ShareButton.module.css"
import { useEffect, useState } from "react";


function ShareButton() {
    const [url , setUrl] = useState("")

    useEffect(() => {
        setUrl(window.location.href)
    } , [])
    return (
        <CopyToClipboard text={url}>
            <div className={styles.container}>
                    <GiShare/>
                <button>
                    اشتراک گذاری
                </button>
            </div>
        </CopyToClipboard>
    )
}

export default ShareButton
