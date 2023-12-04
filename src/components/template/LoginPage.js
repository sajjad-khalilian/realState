"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {signIn} from "next-auth/react"
import { ThreeDots } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import styles from "./SignupPage.module.css"




function LoginPage() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [loading , setLoading] = useState(false)

    const router = useRouter()

    const loginHandler = async (e) => {
        e.preventDefault();
        const res = await signIn("credentials" , {
            email,
            password,
            redirect: false
        })
        if(setLoading === false){
            toast.error(res.error)
        }
        else{
            router.push("/")
        }
    }

    return (
        <div className={styles.form}>
            <h4>فرم ورود</h4>
            <form>
                <label>ایمیل: </label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <label>رمز عبور: </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                {loading ? (<ThreeDots 
                            height={45} 
                            color="black" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{margin: "auto"}}
                            visible={true}
                            />) : (<button type="submit" onClick={loginHandler}>ورود</button>)}
            </form>
            <p>
                حساب کاربری ندارید؟
                <Link href="/signup">ثبت نام</Link>
            </p>
            <Toaster/>
        </div>
    )
}

export default LoginPage
