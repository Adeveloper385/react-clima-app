import React, { ChangeEvent, FormEvent, useState, Dispatch, SetStateAction } from 'react'
import { Data } from '../App'

    interface Props {
        data: Data,
        setData: Dispatch<SetStateAction<Data>>
        setQuery: Dispatch<SetStateAction<boolean>>
    }

    type ChangeI = ChangeEvent<HTMLInputElement>
    type ChangeS = ChangeEvent<HTMLSelectElement>

export const Form: React.FC<Props> = ({data, setData, setQuery}: Props) => {

    const [error, setError] = useState(false)

    const handleChange = (e: ChangeI | ChangeS ) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        if(data.city === '' || data.country === ''){
            setError(true)
            return;
        }
            setError(false)
            setQuery(true)
    }

    return(
            <form onSubmit={handleSubmit} >
                {error ? <p className="card-panel white-text red darken-2">Campos Obligatorios!</p> : null}
                <div className="input-field col s12">
                    <input
                        type="text"
                        name="city"                     
                        id="city"
                        value={data.city}
                        onChange={handleChange}
                    />
                        <label htmlFor="city">Ciudad</label>
                </div>
                <div className="input-field col s12">
                    <select
                        id="country"
                        name="country"
                        defaultValue=""
                        value={data.country}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona un País</option>
                        <option value="VE">Venezuela</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>                            
                    </select>
                    <label>País</label>
                </div>                    
                <div className="col s12">
                <button
                    type="submit"
                    className="btn blue darken-1 waves-effect waves-light btn-block"
                    >Enviar
                    <i className="material-icons right">send</i> 
                </button>
                </div>
            </form>
    )
}
