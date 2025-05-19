function DemoOnSubmit(){
    const handleOnSubmit =(e)=>{
        e.preventDefault()
        alert("Form Submited!")
        
    }
    return (
        <>
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder="Type anyThing..."/>
            <button>Submit</button>
        </form>
        </>
    )
}
export default DemoOnSubmit