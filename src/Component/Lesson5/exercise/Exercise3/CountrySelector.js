function CountrySelector({ handleSelectCountry }) {
    return (
        <select onChange={(e) => handleSelectCountry(e.target.value)}>
            <option value="">Mời chọn quốc gia</option>
            <option value="VN">Việt Nam</option>
            <option value="US">Mỹ</option>
            <option value="JP">Nhật</option>
        </select>
    );
}

export default CountrySelector;
