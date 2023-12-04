import styles from "./TextList.module.css"
import { MdAddToPhotos } from "react-icons/md";


function TextList({profileData , type , title , setProfileData}) {

    const addHandler = () => {
        setProfileData({...profileData, [type] : [...profileData[type], ""]})
    }


    const changeHandler = (e , index) => {
        const {value} = e.target
        const list = [...profileData[type]]
        list[index] = value
        setProfileData({...profileData, [type] : list})
    }


    const deleteHandler = (index) => {
        const list = [...profileData[type]]
        list.splice(index , 1)
        setProfileData({...profileData, [type] : list})
    }




    return (
        <div className={styles.container}>
           <p>{title}</p>
            {profileData[type].map((i , index) => (
                <div key={index} className={styles.card}>
                    <input type="text" value={i} onChange={e => changeHandler(e , index)}/>
                    <button onClick={() => deleteHandler(index)}>حذف</button>
                </div>
            ))}
            <button onClick={addHandler}>
                افزودن
                <MdAddToPhotos/>
            </button>
        </div>
    )
}

export default TextList
