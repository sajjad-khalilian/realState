"use client"

import { useEffect, useState } from "react"
import RadioList from "../module/RadioList"
import TextInput from "../module/TextInput"
import TextList from "../module/TextList"
import styles from "./AddProfilePage.module.css"
import { ThreeDots } from "react-loader-spinner"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"



function AddProfilePage({data}) {
    const [profileData , setProfileData] = useState({
        title: "",
        description: "",
        address: "",
        phoneNumber: "",
        price: "",
        realState: "",
        category: "",
        rules: [],
        amenities: [],
    })
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        if(data) setProfileData(data)
    } , [])

    const router = useRouter()
    const submitHandler = async () => {
        setLoading(true)
        const res = await fetch("/api/profile" , {
            method: "POST",
            body: JSON.stringify(profileData),
            headers: {"Content-Type" : "application/json"}
        })
        const data = await res.json()
        setLoading(false)
        if(data.error){
            toast.error(data.error)
        }else{
            toast.success(data.message)
        }
    }

    const editHandler = async () => {
        setLoading(true);
        const res = await fetch("/api/profile" , {
            method: "PATCH",
            body: JSON.stringify(profileData),
            headers: {"Content-Type" : "application/json"}
        })
        const data = await res.json()
        setLoading(false)
        if(data.error){
            toast.error(data.error)
        }
        else{
            toast.success(data.message)
            router.refresh()
        }
    }
    return (
        <div className={styles.container}>
            <h3>{data 
                ? "آپدیت آگهی" 
                :"ثبت آگهی"}
            </h3>
            <TextInput 
            title="عنوان آگهی" 
            name="title" 
            profileData={profileData} 
            setProfileData={setProfileData}
            />
            <TextInput 
            title="توضیحات" 
            name="description" 
            profileData={profileData} 
            setProfileData={setProfileData}
            textarea={true}
            />
            <TextInput 
            title="آدرس" 
            name="address" 
            profileData={profileData} 
            setProfileData={setProfileData}
            />
            <TextInput 
            title="شماره تماس" 
            name="phoneNumber" 
            profileData={profileData} 
            setProfileData={setProfileData}
            />
            <TextInput 
            title="بنگاه" 
            name="realState" 
            profileData={profileData} 
            setProfileData={setProfileData}
            />
            <TextInput 
            title="قیمت(تومان)" 
            name="price" 
            profileData={profileData} 
            setProfileData={setProfileData}
            />


            <RadioList profileData={profileData} setProfileData={setProfileData}/>
            <TextList 
            title="امکانات رفاهی" 
            profileData={profileData} 
            setProfileData={setProfileData} 
            type="amenities"/>
            <TextList 
            title="قوانین" 
            profileData={profileData} 
            setProfileData={setProfileData} 
            type="rules"/>
            <Toaster/>
            {loading 
            ? (<ThreeDots height={45} 
                        color="#4fa94d" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{margin: "auto"}}
                        visible={true}/> )
            : data 
            ? (<button className={styles.submit} onClick={editHandler}>
                ویرایش آگهی
            </button>)
            : (<button className={styles.submit} onClick={submitHandler}>
                ثبت آگهی
            </button>)
            }
        </div>
    )
}

export default AddProfilePage
