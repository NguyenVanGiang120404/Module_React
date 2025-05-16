function Child(props){
    return(
        <>
        <h1>Name: {props.Data.name}</h1>
        <h1>Tuoi: {props.Data.age}</h1>
        <h1>Height: {props.Data.height}</h1>
        </>
    )
}
export default Child