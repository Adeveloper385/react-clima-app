import React from 'react'
import { weather } from '../App'

type Props = {
    result: weather 
}


export const Weather:React.FC<Props> = ({result}) => {

    const { name, main } = result

    const kelvin = 273.15
    
    return(
        <>
            <div className="row">
                <div className="card blue darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Clima {name}</span>
                        <p>
                            Temperatura: { (main.temp - kelvin).toFixed(2)}ºC
                        </p> 
                        <p>
                            Sentimiento: { (main.feels_like - kelvin).toFixed(2)}ºC
                        </p> 
                        <p>
                            Temp - Max: { (main.temp_max - kelvin).toFixed(2)}ºC
                        </p> 
                        <p>
                            Temp - Min: { (main.temp_min - kelvin).toFixed(2)}ºC
                        </p> 
                        <p>
                            Humedad: { main.humidity }
                        </p> 
                    </div>
                </div>
            </div>     
        </> 
    )
}
