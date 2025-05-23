import { useState } from "react"
import Input_Box from "./InputBox";

export default function Search_Box(){
    const user = ['giang', 'huy','le','quan','duc']
    const handleSearch = (keyWord)=>{
        const ProductSearch = user.filter((product)=>
            product.toLowerCase().includes(keyWord.toLowerCase())
        )
        console.log("ket qua tim duoc:", ProductSearch);
        
    }
    
    return(
        <>
            <div>
                <h1>Tìm kiếm người dùng:</h1>
                <Input_Box handleSearchs={handleSearch}/>
            </div>
        </>
    )
}