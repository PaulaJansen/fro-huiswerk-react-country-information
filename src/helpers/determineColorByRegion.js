function determineColorByRegion(region) {

    switch (region.toLowerCase()) {
        case 'africa':
        case 'afrika':
            return "country-name-africa";
        case 'americas':
        case 'amerika':
        case 'america':
        case 'usa':
        case 'united states':
        case 'united states of america':
            return "country-name-america";
        case 'asia':
        case 'azie':
        case 'azië':
            return "country-name-asia";
        case 'europe':
        case 'europa':
        case 'eu':
            return "country-name-europe";
        case 'oceania':
        case 'oceanie':
        case 'oceanië':
        case 'australie':
        case 'australië':
        case 'australia':
        case 'nieuw-zeeland':
        case 'nieuw zeeland':
        case 'new zealand':
            return "country-name-oceania";
        default:
            return "country-name-default";
    }
}

export default determineColorByRegion;