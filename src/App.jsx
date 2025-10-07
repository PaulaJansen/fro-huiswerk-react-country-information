import './App.css';
import Button from "./components/Button/Button.jsx";
import axios from "axios";
import CountryInfo from "./components/CountryInfo/CountryInfo.jsx";
import {useEffect, useState} from "react";
import Globe from "./assets/search-globe.png";
import CountryCard from "./components/CountryCard/CountryCard.jsx";

function App() {

    const [view, setView] = useState("menu");
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchedCountry, setSearchedCountry] = useState(null);

    useEffect(() => {
        async function fetchCountries() {
            try {
                const result = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,borders');
                setCountries(result.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCountries();
    }, [])

    const sortedCountries = [...countries].sort((a, b) => a.population - b.population);

    const handleSearch = (e) => {
        e.preventDefault();
        const result = countries.find((country) => country.name.common.toLowerCase() === searchValue.toLowerCase());
        setSearchedCountry(result || null);
    }

    return (
        <>
            <header>
                <h1>World Regions</h1>
            </header>
            <main className="main-wrapper">
                {view === "menu" && (
                    <div className="main-button">
                        <Button type="button" className="button-primary" onClick={() => setView("allCountries")}>
                            <h3>Zoek alle landen</h3>
                        </Button>
                        <Button type="button" className="button-primary" onClick={() => setView("searchCountry")}>
                            <h3>Zoek een land</h3>
                        </Button>
                    </div>
                )}
                {view === "allCountries" && (
                    <div className="main-countries">
                        {sortedCountries.map((country, index) => (
                            <CountryInfo key={index}
                                         flag={country.flags.png}
                                         name={country.name.common}
                                         population={country.population}
                                         region={country.region}
                            />
                        ))}
                    </div>
                )}
                {view === "searchCountry" && (
                    <section className="search">
                        <h2>Search country information</h2>
                        <img src={Globe} alt="Globe" className="search-icon"/>
                        <form className="searchbar-wrapper" onSubmit={handleSearch}>
                            <input className="search-input"
                                   type="text"
                                   placeholder="Bijvoorbeeld Netherlands of Peru"
                                   value={searchValue}
                                   onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <Button type="submit" className="button-secondary">
                                <h3>Zoek</h3>
                            </Button>
                        </form>
                        {searchedCountry && (
                            <CountryCard url={searchedCountry.flags.png}
                                         title={searchedCountry.name.common}
                                         subRegion={searchedCountry.region}
                                         capital={searchedCountry.capital}
                                         population={searchedCountry.population}
                                         domain={searchedCountry.tld?.[0]}
                                         neighbors={searchedCountry.borders ? searchedCountry.borders.length : 0}
                            />
                        )}
                    </section>
                )}
            </main>
        </>
    )
}

export default App
