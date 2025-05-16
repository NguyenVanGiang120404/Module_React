import React from "react"
import InputFile from "./InputFile"
import SubmitButton from "./Submit"

function FormRegister(){
    return (
        <form>
            <h1>Form Register</h1>
            <InputFile lable="Name" type="text" id="name"/>
            <InputFile lable="Email" type="email" id="email"/>
            <InputFile lable="password" type="password" id="password"/>
            <SubmitButton text="Register" />

        </form>
    )
}
export default FormRegister