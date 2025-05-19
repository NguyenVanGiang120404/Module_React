import CountrySelector from "./CountrySelector";

function Select(){
    const handleSelectCountry = (code) =>{
        const greeting ={
            VN: "Xin Chào",
            US: "Hello", 
            JP: "こんにちは"
        }
        console.log(greeting[code]);
        
    }
    return(
        <>
        <CountrySelector handleSelectCountry={handleSelectCountry}/>
        </>
    )
}
export default Select