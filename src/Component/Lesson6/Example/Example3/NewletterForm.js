import { useState } from "react";
import EmailInput from "./EmailInput";

export default function NewleterterForm(){
    let [email, setEmail] = useState("")
    const handleEmail = (newEmail)=>{
        setEmail(newEmail)
    }
    const handleSubmit = ()=>{
        alert(`Email dk la:${email}`)
    }
    return(
        <>
        <h3>Đăng kí nhận tin</h3>
        <EmailInput onChangeEmail={handleEmail} email={email}/>
        <button onClick={handleSubmit}>Gửi</button>
        </>
    )

}