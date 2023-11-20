import {Vendas} from './svgComponents/Vendas';

export const Sale = (props) => {
    return (
        <div className="venda">
            <div className="sale">
                <Vendas />
            </div>
            {props.vendas}
        </div>
    );
}