import './CountryCard.css';
import determineColorByRegion from "../../helpers/determineColorByRegion.js";

function CountryCard({flag, name, population, region}) {

    const regionClass = determineColorByRegion(region);

    return (
        <article>
            <div className="header-wrapper">
                <img className="flag-image" src={flag} alt={`flag of ${name}`}/>
                <h3 className={regionClass} >{name}</h3>
            </div>
            <p className="population-info">Has a population of {population} people</p>
        </article>
    )
}

export default CountryCard;