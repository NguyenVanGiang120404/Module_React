import Child from "./Child"

function Parent(){
    const data = {
        name : "Nguyen Van Giang",
        age: 21,
        height: 1.75
    }
    return(
        <>
        <Child Data={data}/>

        </>
    )
}
export default Parent