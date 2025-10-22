const priceFormatter = (value) => {
    if (isNaN(value)) return value;
    let formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedValue + ",00";
};

export default priceFormatter