import styles from './Listercard.module.css';
import { Link } from 'react-router-dom';
import { Excluir } from './Bar/Excluir';
import { Editar } from './Bar/Editar';


export const  Listercard = ({id, name, celular, cpf, email, endereco, cep, city, handleRemove}) => {

    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
    } 

    return (
   
           

        <table>
            <thead>
                
{/*         
                    <p >
                        
                            <th >
                                
                            </th>
                            <th >
                                
                            </th>
                            <th >
                                       
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            
                
                    </p> */}
                
                <tr className={styles.container}>
                    
                <td className={styles.container_card_name}>{name}</td>
                <td className={styles.container_card_celular}>{celular}</td>
                <td className={styles.container_card_cpf}>{cpf}</td> 
                <td className={styles.container_card_email}>{email}</td>
                <td className={styles.container_card_endereco}>{endereco}</td>
                <td className={styles.container_card_cep}>{cep}</td>
                <td className={styles.container_card_city}>{city}</td>
                <td className={styles.container_card_editar}>
                <Link to={`/Listercard/${id}`}>
                        <Editar />
                    </Link> 
                </td>
                <td className={styles.container_card_remover}>
                    
                   <button onClick={remove}> 
                    <Excluir />
                    </button>
                </td>
                
                </tr>    
            </thead>  
       
        
        
        </table>
    );
}