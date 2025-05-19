function DemoFocusAndBlur(){
    const handleonFocus = () =>{
        console.log("onFocus ");
    }
    const handleonBlur = () =>{
        console.log("onBlur");
    }
    return(
        <>
        <input onFocus={handleonFocus} onBlur={handleonBlur} placeholder="Type anyThing..."/>
        </>
    )
}
export default DemoFocusAndBlur