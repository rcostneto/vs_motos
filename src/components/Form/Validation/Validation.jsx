// import * as Yup from 'yup';
export default function Validation (values) {
    const errors = {}

    
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const celular_pattern = /^[(]?[0-9]{2}[)]?[\s.]?[0-9]{5}[/\s.]?[0-9]{4}$/;
    const cpf_pattern = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
    const cep_pattern = /^[0-9]{2}\.?[0-9]{3}\-?[0-9]{3}$/;

    if (values.name === "") {
        errors.name = "Campo usuário obrigatório";
    }
    if (values.endereco === "") {
        errors.endereco = "Campo endereço obrigatório";
    }
    if(values.celular === ""){
        errors.celular = "Campo celular obrigatório";
    }
    else if(!celular_pattern.test(values.celular)) {
        errors.celular = "Número de celular inválido"
    }
    if(values.email === "") {
        errors.email = "Campo email obrigatório";
    }
    else if(!email_pattern.test(values.email)) {
        errors.email = "Email nao bate"
    }
    if(values.cpf === "") {
        errors.cpf = "Campo cpf obrigatório";
    }
    else if(!cpf_pattern.test(values.cpf)) {
        errors.cpf = "Digite o cpf com ponto e traço"
    }
    if(values.cep === "") {
        errors.cep = "Campo cep obrigatório";
    }
    else if(!cep_pattern.test(values.cep)) {
        errors.cep = "Digite o cep com ponto e traço"
    }
    if (values.city === "") {
        errors.city = "Campo cidade obrigatório";
    }

    return errors;
}


  






















// export const UservalidationSchema = Yup.object().shape({
//     name: Yup.string().required('Digite o nome'),
//     celular: Yup.string().required('Digite o celular'),
//     email: Yup.string().email().required('Digite o nome'),
// })