    import styles from './Edit.module.css';
    import { Link, useParams } from 'react-router-dom';
    import { useState, useEffect } from 'react';
    import { Register } from '../components/verticalComponents/Register';
    import { Usuarionovo } from '../components/verticalComponents/svgComponents/Usuarionovo';
    import { Edituse } from '../components/verticalComponents/svgComponents/Edituse';
    import { Editusuario } from '../components/fundoComponents/Editusuario';
    import { Backcad } from '../components/fundoComponents/Backcad';
    import { Backuser } from '../components/fundoComponents/Backuser';
    import { Backnewuser } from '../components/fundoComponents/Backnewuser';
    import { Form } from '../components/Form/Form';
    import { Mensagens } from '../layout/Mensagens';
    
    
    
    export const Edit = () => {

        const{id} = useParams()
      
        const [project, setProject] = useState([])
        const [showForm, setShowForm] = useState(false)
        const [message, setMessage] = useState()
        const [type, setType] = useState()

        useEffect(() => {
            fetch(`http://localhost:5000/cadastros/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application-json',

                },
            })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch(err => console.log(err))
        }, [id])

        const editPost = (project) => {
           
            fetch(`http://localhost:5000/cadastros/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project),
            })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setShowForm(false)
                //mensagem
                setMessage('Cadastro atualizado')
                setType('success')
            })
            .catch(err => console.log(err))
            setMessage()
        }

        const toggleForm = () => {           
            setShowForm(!showForm)
        }
            

        const cadastro = "CADASTROS"

        return (
            <div>

                <div className='usuario'>
                    <div className="fundo_reg" ></div>
                </div>

                <div className="cadicon">
                    <Editusuario />
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
                
                    <Backnewuser />
                
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
                
                    <Edituse />
                
                
                <div className={styles.msg}>
                
                    
                    
                        <div className={styles.direita}>
                            
                            <button className={styles.btn} onClick={toggleForm}>
                                {! showForm ? 'Editar Usuário' : 'Fechar'}
                                
                            </button>
                            {!showForm ? (
                                <div className={styles.item}>
                                    
                                    <div className={styles.bod}>
                                    <br />
                                    <div className={styles.space}>
                                    <span className={styles.cabecalho}>Nome:</span> {project.name}
                                    </div>
                                    <div className={styles.space}>
                                    <span className={styles.cabecalho}>Celular:</span> {project.celular}
                                    </div>
                                    <div className={styles.space}>
                                    <span className={styles.cabecalho}>CPF:</span> {project.cpf}
                                    </div>
                                    <div className={styles.space}>
                                    <span className={styles.cabecalho}>Email:</span> {project.email}
                                    </div>
                                    <div className={styles.space}>
                                    <span className={styles.cabecalho}>Endereço:</span> {project.endereco}
                                    </div>
                                    <div className={styles.space}>
                                    <span className={styles.cabecalho}>CEP:</span> {project.cep}
                                    </div>
                                    <div className={styles.space}>
                                    <span className={styles.cabecalho}>Cidade:</span> {project.city}
                                    </div>
                                    <hr></hr>
                                    </div>
                                    
                                </div>
                                
                            ) : (
                                
                                <div className={styles.campo}>
                                    <div className={styles.item}>
                                    <Form handleSubmit={editPost} 
                                    btnText="Concluir edição" 
                                    />
                                    </div>
                                </div>
                                
                            )}
                            <div className={styles.mensage}>
                            {message && <Mensagens type={type} msg={message}/>}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               
            
        );
    }