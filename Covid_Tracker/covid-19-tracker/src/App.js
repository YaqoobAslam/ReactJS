import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem, Card, CardContent} from "@material-ui/core";
import "./App.css";
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import {sortData} from './util';
import LineGraph from './LineGraph'
import "leaflet/dist/leaflet.css"

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
 const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
 const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  //  const [casesType, setCasesType] = useState('cases') 

  useEffect(()=> {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
    })
  }, [])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(" https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data)
          setTableData(sortedData)
          setMapCountries(data)
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    
    const countryCode = event.target.value
    console.log(countryCode)
    setCountry(countryCode)
    const url = countryCode ==='worldwide' ? 'https://disease.sh/v3/covid-19/all':`https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode)
      // All of the data...
     // from the response
     setCountryInfo(data)
     setMapCenter([data.countryInfo.lat, data.countryInfo.long])
     setMapZoom(8)
    })
  }
  console.log(countryInfo)

  return (
    <div className='app'>
      <div className="app__left">
        <div className='app__header'>
        <h1>COVID-19-TRACKER</h1>
        <FormControl className='app__dropdown'>
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="app__stats">              
         <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}></InfoBox>
         <InfoBox title="Recoved"  cases={countryInfo.todayRecovered} total={countryInfo.recovered}></InfoBox>
         <InfoBox title="Death" cases={countryInfo.todayDeaths} total={countryInfo.deaths}></InfoBox>
      </div>
      {/* <div className="app__map">
      </div> */}
      <Map countries={mapCountries} center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="app__right">              
         <CardContent>
           <h3>Live Cases by Country</h3>
           <Table countries={tableData}></Table>
           <h3>Worldwide new cases</h3>
           <LineGraph ></LineGraph>
         </CardContent>
      </Card>
    </div>
  );
}
export default App;