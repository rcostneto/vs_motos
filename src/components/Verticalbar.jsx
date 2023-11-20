import {Principal} from './verticalComponents/Principal';
import {Ordemservice} from './verticalComponents/Ordemservice';
import {Sale} from './verticalComponents/Sale';
import {Buy} from './verticalComponents/Buy';
import {Servicos} from './verticalComponents/Servicos';


export const Verticalbar = () => {
    
    const nome = "PRINCIPAL"
    const ordem = "ORDEM SERVIÇO"
    const vendas = "VENDAS"
    const compras = "COMPRAS"
    const servico = "SERVIÇOS"
    
    
    return (

        
            <div  className="Verticalbar">

                
                
                
                <Principal 
                    nome={nome}
                />

                <Ordemservice
                    ordem={ordem}
                />
                <Sale
                    vendas={vendas}
                /> 
                <Buy
                    compras={compras}
                />
                <Servicos
                    servico={servico}
                />

                
                
                

            </div>
            
    );
}