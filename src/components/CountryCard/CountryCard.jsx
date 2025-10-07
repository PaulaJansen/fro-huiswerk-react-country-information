import './CountryCard.css';

function CountryCard({url, title, subRegion, capital, population, neighbors, domain}) {
    return (
        <article className="card-wrapper">
            <img className="card-flag" src={url} alt="flag" />
            <h2>{title}</h2>
            <p className="card-line"></p>
            <p>{`${title} is situated in ${subRegion} and the capital is ${capital}`}</p>
            <p>{`The country has a population of ${population} people and it borders with ${neighbors} neighboring countries`}</p>
            <p>{`Websites can be found on ${domain} domains`}</p>
        </article>
    )
}

export default CountryCard;