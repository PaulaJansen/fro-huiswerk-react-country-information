import './CountryCard.css';

function CountryCard({flag, name, population}) {
    return (
        <article>
            <div className="header-wrapper">
                <img className="flag-image" src={flag} alt={`flag of ${name}`}/>
                <h3 className="country-name">{name}</h3>
            </div>
            <p className="population-info">Has a population of {population} people</p>
        </article>
    )
}

export default CountryCard;