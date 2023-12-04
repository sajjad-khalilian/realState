"use client"


import Card from "./Card"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styles from "./DashboradCard.module.css"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function DashboradCard({data}) {

    const router = useRouter()

    const editHandler = () => {
        router.push(`/dashboard/profile/${data._id}`)
    }



    const deleteHandler = async () => {
        const res = await fetch(`/api/profile/delete/${data._id}` , {
            method: "DELETE",
        })
        const result = await res.json()
        console.log(result)
        if(result.error) {
            toast.error(result.error)
        }else{
            toast.success(result.message)
            router.refresh()
        }
    }
    return (
        <div className={styles.container}>
            <Card data={data}/>
            <div className={styles.main}>
                <button onClick={editHandler}>
                    ویرایش
                    <FaRegEdit/>
                </button>
                <button onClick={deleteHandler}>
                    حذف
                    <MdDelete/>
                </button>
            </div>
        </div>
    )
}

export default DashboradCard
