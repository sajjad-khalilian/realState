import { p2e } from "@/utils/replaceNumber"
import styles from "./TextInput.module.css"

function TextInput({title , name , profileData, setProfileData, textarea=false}) {

    const changeHandler = (e) => {
        const {name , value} = e.target
        setProfileData({...profileData, [name] : p2e(value)})
    }
    return (
        <div className={styles.container}>
            <p>{title}</p>
            {textarea 
            ? <textarea type="text" value={profileData[name]} name={name} onChange={changeHandler}/> 
            : <input type="text" value={profileData[name]} name={name} onChange={changeHandler}/>}
        </div>
    )
}

export default TextInput
