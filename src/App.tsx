import { Component, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import M from 'materialize-css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import { Info } from './components/Info'
import { Weather } from './components/Weather'
import { Error } from './components/Error'

export type Data = {
        city: string,
        country: string
    }

export type weather = {
        coord: object,
        weather: [],
        base: string,
        main: {
            temp: number,
            feels_like: number,
            temp_max: number,
            temp_min: number,
            pressure: number,
            humidity: number,
            sea_level: number,
            grnd_level: number
        },
        visibility: number,
        wind: object,
        clouds: object,
        dt: number,
        sys: object,
        timezone: number,
        id: number,
        name: string,
        cod: number
}

function App() {


    const [data, setData] = useState<Data>({
        city: "",
        country: ""
    })

    const [error, setError] = useState<boolean>(false)
    const [query, setQuery] = useState<boolean>(false)
    const [result, setResult] = useState<weather>({
        coord: {},
        weather: [],
        base: "",
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            sea_level: 0,
            grnd_level: 0
        },
        visibility: 0,
        wind: {},
        clouds: {},
        dt: 0,
        sys: {},
        timezone: 0,
        id: 0,
        name: '',
        cod: 0
    })

    //materialize 
    useEffect(()=> {
        M.AutoInit();
    }, [])

    //
    useEffect(()=>{
        const apiQuery = async() => {
            if(query) {
                const apiKey = "824650023f40a308eba5e971f45d0a91"
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${apiKey}`
                const response = await fetch(url)
                const result = await response.json()
                setResult(result)
                setQuery(false)
                
                if(result.cod === "404"){
                    setError(true)
                } else {
                    setError(false)
                }
            } 
        }
        apiQuery()
    }, [query])

    let component

    if(error){
         component = <Error />
    } else {
         component = <Weather result={result}/>
    }

  return (
    <>
        <Header />
        <div style={{marginTop: '2rem'}} className="container">
            <div className="row">
                <div className="col m6 s12">
                    <Form
                        data={data}
                        setData={setData}
                        setQuery={setQuery}
                    /> 
                </div>
                <div className="col m6 s12">
                   {result.cod === 0 ? null: component} 
                </div>
            </div>
            <Info />
        </div>
    </>
  );
}

export default App;
