import CountterButton from "./CounterButton";

function Couter(){
    let count = 0;
    const handleIncrease = () =>{
        count+=2;
        console.log(count);
    }
    const handleDecrease = () =>{
        count-=2;
        console.log(count);
    }
    return(
        <>
        <CountterButton handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
        </>
    )
}
export default Couter