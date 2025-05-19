function DemoOnChange(){
    const handleOnchange =(e)=>{
        e.preventDefault();
        console.log("Toi ten la: ",e.target.value);
        
    }
    return(
       <>
        <input onChange={handleOnchange} placeholder="Type anyThing..."/>
       </>
    )
}
export default DemoOnChange