import { useNavigate } from 'react-router-dom';

import'./App.css';
import { Link } from 'react-router-dom';
import { Register } from '../components/verticalComponents/Register';
import { Usuarionovo } from '../components/verticalComponents/svgComponents/Usuarionovo';
import { Backcad } from '../components/fundoComponents/Backcad';
import { Backuser } from '../components/fundoComponents/Backuser';
import { Backnewuser } from '../components/fundoComponents/Backnewuser';
import { Titulousuario } from '../components/fundoComponents/Titulousuario';
import { Adicionausuario } from '../components/verticalComponents/svgComponents/Adicionausuario';
import {Form} from '../components/Form/Form';




export const Cadastrouser = () => {

    const navigate = useNavigate()

    function createPost(project) {

        // inicializando cadastro e servicos
        project.cad = 0
        project.services = []
        
        fetch('http://localhost:5000/cadastros', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            //redirect
            
            navigate("/Listuser", {state:{ message: "Cadastro criado com sucesso!" }})
            })
            .catch(err => console.log(err))

    }

    const cadastro = "CADASTROS"

    return (
        <div>

            <div className='usuario'>
                <div className="fundo_reg" >
                    
                </div>
            </div>

            <div className="cadicon">
                <Titulousuario />
            </div>

            <div className="usuario">
                
                <Backnewuser />
                
            </div>

            <div className="usuario">
                <Link to="/">
                    <Backcad />
                </Link>
            </div>

            <div className="usuario">
                <Link to="/Listuser">
                <Backuser />
                </Link>
            </div>

            <div className="usuario">
                <div className="newreg">
                    <Link to="/">
                        <Register
                            cadastro={cadastro}
                        />
                    </Link>
                </div>
            </div>

            <div className="usuario">
                <Link to="/Listuser">
                    <Usuarionovo />
                </Link>
            </div>

            <div className="cadicon">
                
                    <Adicionausuario />
                
            </div>

            <Form handleSubmit={createPost} btnText="CADASTRAR" />

        </div>
    );
}