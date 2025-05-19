
import SearchBoxs from './SearchBox';

function Search(){
    const arr = ['Iphone' , 'MaxBook' , 'Ipad' ,'Inac'];
    const handleSearch = (keyword) => {
        const ProductSearch = arr.filter(product =>
            product.toLowerCase().includes(keyword.toLowerCase())
        );
    console.log("ket qua tim duoc",ProductSearch);
            
        
    }
    return(
        <>
        <SearchBoxs handleSearch={handleSearch}/>
        </>
    )
}
export default Search