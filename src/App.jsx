import './App.css';
import Button from "./components/Button/Button.jsx";
import axios from "axios";
import CountryCard from "./components/CountryCard/CountryCard.jsx";
import {useEffect, useState} from "react";

function App() {

    const [clicked, setClicked] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            try {
                const result = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region');
                setCountries(result.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCountries();
    }, [])

    const sortedCountries = [...countries].sort((a, b) => a.population - b.population);

    return (
        <>
            <header>
                <h1>World Regions</h1>
            </header>
            <main className="main-wrapper">
                {clicked ? (
                    <div className="main-button">
                        <Button type="button" onClick={() => setClicked(false)}>
                            <h2>Zoek landen</h2>
                        </Button>
                    </div>
                ) : (
                    <div className="main-countries">
                        {sortedCountries.map((country, index) => (
                            <CountryCard key={index}
                                         flag={country.flags.png}
                                         name={country.name.common}
                                         population={country.population}
                                         region={country.region}/>
                        ))}
                    </div>
                )}
            </main>
        </>
    )
}

export default App
