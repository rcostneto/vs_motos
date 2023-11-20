import styles from './Bar.module.css';

export const Bar = () => {
    return (
        
            <table>
                
                <thead>
                
                    <tr className={styles.bar}>
                    
                    <td className={styles.conteiner_bar_nome}>
                        Nome
                    </td>

                    <td className={styles.conteiner_bar_celular}>
                        Celular
                    </td>

                    <td className={styles.conteiner_bar_cpf}>
                        CPF
                    </td>

                    <td className={styles.conteiner_bar_email}>
                        Email
                    </td>

                    <td className={styles.conteiner_bar_endereco}>
                        Endereço
                    </td>

                    <td className={styles.conteiner_bar_cep}>
                        CEP
                    </td>

                    <td className={styles.conteiner_bar_cidade}>
                        Cidade
                    </td>

                    <td className={styles.conteiner_bar_edit}>
                        Editar
                    </td>

                    <td className={styles.conteiner_bar_remove}>
                        Remover
                    </td>
                
                    
                                
                    </tr>
                    
                </thead>
                {/* <tbody>
                    
                </tbody> */}
                </table>
  

        
    );
}