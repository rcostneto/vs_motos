import {useState, useEffect} from 'react';
import { Input } from "./Componentsform/Input";
import './Componentsform/Input.css';
import {Submitbutton} from './Componentsform/Submitbutton';
import Validation from './Validation/Validation';

// import { yupResolver } from '@hookform/resolvers/yup';


export const Form = ({btnText, handleSubmit}) => {

    const [values, setValues] = useState({
        name: '',
        celular: '',
        email: '',
        cpf: '',
        endereco: '',
        cep: '',
        city: ''
    })
    const [errors, setErrors] = useState({})
    

    function handleInput (e) {
        setValues({...values, [e.target.name]: e.target.value})
        
    }

    function handleValidation (e) {
        e.preventDefault()

        if (values.name === '' || values.celular === '' || values.email === '' || values.cpf === '' || values.endereco === '' || values.cep === '' || values.city === '') {
            setErrors(Validation(values))
        }
       
        else {
            handleSubmit(values)
            }

    }
    
    return (
        
        <div className="usuario">
            <form onSubmit={handleValidation} className="formulario">
                <div className="esquerda">
                    <div>
                        <div>
                            <Input 
                            type="text"
                            text="Nome do Usuário"
                            name="name"
                            placeholder="Insira o seu nome"
                            handleOnChange={handleInput}
                            // register={register}
                            // error={errors.name}
                            // value={name}
                            
                            />
                            {errors.name && <p className="nome">{errors.name}</p>}
                            
                            
                        </div>
                        <div>
                            <Input 
                            type="text"
                            text="Celular"
                            name="celular"
                            placeholder="Insira o seu numero"
                            handleOnChange={handleInput}
                            
                            // register={register}
                            // error={errors.celular}
                            // value={celular}
                            
                            />
                            {errors.celular && <p className="nome">{errors.celular}</p>}
                            
                        </div>
                        <div>
                            <Input 
                            type="text"
                            text="CPF"
                            name="cpf"
                            placeholder="Insira o seu CPF"
                            handleOnChange={handleInput}
                            // value={project.cpf ? project.cpf : ''}
                            
                            />   
                            {errors.cpf && <p className="nome">{errors.cpf}</p>}
                        </div>
                    </div>
                        <div  className="lateral">
                            <div>   
                                <Input 
                                type="text"
                                text="Email"
                                name="email"
                                placeholder="Insira o seu email"
                                handleOnChange={handleInput}
                                // register={register}
                                // error={errors.email}
                                // value={email}
                                />
                                {errors.email && <p className="email">{errors.email}</p>}
                                
                            </div>
                            <div>
                                <Input 
                                type="text"
                                text="Endereço"
                                name="endereco"
                                placeholder="Insira o seu endereço"
                                handleOnChange={handleInput}
                                // value={email}
                                />
                                {errors.endereco && <p className="nome">{errors.endereco}</p>}
                            </div>
                                
                            <div>
                                <Input 
                                type="text"
                                text="CEP"
                                name="cep"
                                placeholder="Insira o seu cep"
                                handleOnChange={handleInput}
                                // value={project.cep ? project.cep : ''}
                                />
                                {errors.cep && <p className="nome">{errors.cep}</p>}
                            </div>
                            <div>
                                <Input 
                                type="text"
                                text="Cidade"
                                name="city"
                                placeholder="Insira o nome da sua cidade"
                                handleOnChange={handleInput}
                                // value={project.city ? project.city : ''}
                                />
                                {errors.city && <p className="nome">{errors.city}</p>}
                            </div>
                        </div>
                    <Submitbutton text={btnText}/>
                    {/* {error &&<p>{error}</p>} */}
                    
                </div>
                
            </form>
        </div>
        
    );
}