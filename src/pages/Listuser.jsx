import './App.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Novousuario } from '../components/fundoComponents/Novousuario';
import { Usuario } from '../components/fundoComponents/Usuario';
import { Adduser } from '../components/verticalComponents/svgComponents/Adduser';
import { Backcad } from '../components/fundoComponents/Backcad';
import { Backuser } from '../components/fundoComponents/Backuser';
import { Register } from '../components/verticalComponents/Register';
import { Mensagens } from '../layout/Mensagens';
import { Listercard } from '../Cards/Listercard';
import { Bar } from '../Cards/Bar/Bar';




export const Listuser = () => {

  const [cadastros, setCadastros] = useState([])

  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/cadastros', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then((data) => {
        setCadastros(data)
      })
      .catch((err) => console.log(err))
  }, [])

  function removeProject(id) {

    fetch(`http://localhost:5000/cadastros/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setCadastros(cadastros.filter((project) => project.id !== id))
      //mensagem

      })
      .catch(err => console.log(err))
  }

  const cadastro = "CADASTROS"

  return (
    <div>
      <div className='usuario'>
      
      </div>
      <div className='usuario'>
      <div className="fundo_reg" ></div>
      <div className='messagens'>
            {message && <Mensagens 
            type="success"
            msg={message}
            />}
      </div>
      </div>
      
      <div className='usuario'>
        <div className='supbar'>
        <Bar />
        </div>
      </div>
      <div className="usuario">
        <Link to="/">
          <Backcad />
        </Link>

        
      </div>

      <div className="usuario">
        
        <Backuser />
        
      </div>
      

      <div className="usuario">
        <Adduser />
      </div>

      <div className="cadicon">
        <Usuario />
      </div>

      
            
      <div className="cadbut">
        <Link to="/Listuser/Cadastrouser">
          <Novousuario />
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
        
      
      <div className='borda'>
      
        <div className='mensagem'>
        
            
            
            
              <div className='bar'>
              {cadastros.length > 0 &&
                cadastros.map((project) => (
                  <Listercard
                    id={project.id} 
                    name={project.name}
                    celular={project.celular}
                    cpf={project.cpf}
                    email={project.email}
                    endereco={project.endereco}
                    cep={project.cep}
                    city={project.city}            
                    key={project.id}
                    handleRemove={removeProject}
                  />
              ))}
            </div>
          </div>
          </div>
        
          
    </div>
    
  );
}