import {Service} from './svgComponents/Service';

export const Ordemservice = (props) => {
    return (
        <div className="ordem">
            <div className="service">
                <Service />
            </div>
            {props.ordem}
        </div>
    );
}