import PaymentMethod from "./PaymentMethod";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function sendAlert(type, title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: type,
        confirmButtonColor: '#005103'
    });
};

function sendConfirm(type, title, text) {
    return Swal.fire ({
        title: title,
        text: text,
        icon: type,
        showCancelButton: true,
        confirmButtonColor: '#005103',
        cancelButtonColor: '#d10000',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não, mudei de ideia'
    });
};

function paymentAlert() {
    const MySwal = withReactContent(Swal)

    return MySwal.fire({
        title: 'Escolha a forma de pagamento',
        showCancelButton: true,
        confirmButtonColor: '#005103',
        cancelButtonColor: '#d10000',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Voltar',
        html:
        <PaymentMethod/>
    });
};

export {
    sendAlert,
    sendConfirm,
    paymentAlert
};