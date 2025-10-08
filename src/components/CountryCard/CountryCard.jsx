import './CountryCard.css';
import convertToMillion from "../../helpers/convertToMillion.js";

function CountryCard({url, title, subRegion, capital, population, neighbors, domain}) {
    const populationTrimmed = convertToMillion(population);
    return (
        <article className="card-wrapper">
            <div className='country-wrapper'>
                <img className="card-flag" src={url} alt="flag"/>
                <h2>{title}</h2>
            </div>
            <p className="card-line"></p>
            <p>{`${title} is situated in ${subRegion} and the capital is ${capital}`}</p>
            <p>{`The country has a population of ${populationTrimmed} people and it borders with ${neighbors} neighboring countries`}</p>
            <p>{`Websites can be found on ${domain} domains`}</p>
        </article>
    )
}

export default CountryCard;