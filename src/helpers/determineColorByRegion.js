function determineColorByRegion(region) {
    const region = "";

    switch (region.toLowerCase().trim()) {
        case 'africa':
        case 'afrika':
            //
            break;
        case 'americas':
        case 'amerika':
        case 'america':
        case 'usa':
        case 'united states':
        case 'united states of america':
            //
            break;
        case 'asia':
        case 'azie':
        case 'azië':
            //
            break;
        case 'europe':
        case 'europa':
        case 'eu':
            //
            break;
        case 'oceania':
        case 'oceanie':
        case 'oceanië':
        case 'australie':
        case 'australië':
        case 'australia':
        case 'nieuw-zeeland':
        case 'nieuw zeeland':
        case 'new zealand':
            //
            break;
        default:
        //
    }
}

export default determineColorByRegion;