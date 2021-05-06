import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import M from 'materialize-css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

export type Data = {
        city: string,
        country: string
    }

function App() {


    const [data, setData] = useState<Data>({
        city: "",
        country: ""
    })

    useEffect(()=> {
        M.AutoInit();
    }, [])

  return (
    <>
        <Header />
        <div style={{marginTop: '1rem'}} className="container">
            <div className="row">
                <div className="col md6 s12">
                    <Form data={data} setData={setData}/> 
                </div>
                <div className="col md6 s12">

                </div>
            </div>
        </div>
    </>
  );
}

export default App;
