function MouseOverAndOut(){
    const hanldMouseOver = () =>{
        console.log("MouseOver");
        
    }
    const hanldMouseOut = () =>{
        console.log("MouseOut");
        
    }
    return(
        <>
        <div onMouseOver={hanldMouseOver} onMouseOut={hanldMouseOut}>
            Button
        </div>
        </>
    )
}
export default MouseOverAndOut