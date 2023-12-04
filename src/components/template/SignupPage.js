"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import styles from "./SignupPage.module.css"




function SignupPage() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [rePassword , setRePassword] = useState("")
    const [loading , setLoading] = useState(false)

    const router = useRouter()

    const signupHandler = async (e) => {
        e.preventDefault();

        if(password !== rePassword) {
            toast.error("رمز و تکرار آن برابر نیست")
            return;
        }
        setLoading(true)
        const res = await fetch("/api/auth/signup" , {
            method: "POST",
            body: JSON.stringify({email , password}),
            headers: {"Content-Type" : "application/json"}
        })
        const data = await res.json()
        setLoading(false)
        if(res.status === 201){
            router.push("/login")
        }else{
            toast.error(data.error)
        }
    }

    return (
        <div className={styles.form}>
            <h4>فرم ثبت نام</h4>
            <form>
                <label>ایمیل: </label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <label>رمز عبور: </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <label>تکرار رمز عبور: </label>
                <input type="password" value={rePassword} onChange={e => setRePassword(e.target.value)}/>
                {loading ? (<ThreeDots 
                            height={45} 
                            color="black" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{margin: "auto"}}
                            visible={true}
                            />) : (<button type="submit" onClick={signupHandler}>ثبت نام</button>)}
            </form>
            <p>
                حساب کاربری دارید؟
                <Link href="/login">ورود</Link>
            </p>
            <Toaster/>
        </div>
    )
}

export default SignupPage
