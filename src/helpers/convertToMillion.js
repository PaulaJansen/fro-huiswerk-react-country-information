function convertToMillion (population) {
    const populationInMillion = (population / 1000000);
    if (populationInMillion > 1) {
        return `${populationInMillion.toFixed(0)} million`;
    } else {
        return  `${populationInMillion.toFixed(2)} million`;
    }
}

export default convertToMillion;