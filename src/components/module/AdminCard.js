"use client"


import { sp } from "@/utils/replaceNumber"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import styles from "./AdminCard.module.css"


function AdminCard({data: { _id , title , description , price , realState}}) {

    const router = useRouter()

    const publishHandler = async () => {
        const res = await fetch(`/api/profile/publish/${_id}` , {
            method: "PATCH"
        })
        const result = await res.json()
        if(result.message){
            toast.success(result.message)
            router.refresh()
        }
        else{
            toast.error(result.error)
        }
    }

    const editHandler = async () => {
        const res = await fetch(`/api/profile/edit/${_id}` , {
            method: "PATCH",
        })
        const result = await res.json()
    }

    const deleteHandler = async () => {
        const res = await fetch(`/api/profile/delete/${_id}` , {
            method: "DELETE"
        })
        const result = await res.json()
        if(result.message){
            toast.success(result.message)
            router.refresh()
        }
        else{
            toast.error(result.error)
        }
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p>{description}</p>
            <div className={styles.properties}>
                <span>{realState}</span>
                <span>{sp(price)} تومان</span>
            </div>
            <button onClick={publishHandler}>انتشار</button>
            <Link href={`/edit/${_id}`}><button onClick={editHandler}>جزییات آگهی</button></Link>
            <button onClick={deleteHandler}>حذف آگهی</button>
            <Toaster/>
        </div>
    )
}

export default AdminCard
