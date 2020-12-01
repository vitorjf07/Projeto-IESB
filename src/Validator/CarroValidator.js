import mensagens from "./mensagens";


export default {
    nome: {
        required: mensagens.required,
        minLength: {value: 2, message: mensagens.minLength + ' (mínimo de 2 caracteres)' },
        maxLength: {value: 50, message: mensagens.maxLength + ' (máximo de 50 caracteres)' },
      },
    modelo: {required: mensagens.required    },
    marca: { required: mensagens.required },
    cambio: { required: mensagens.required },
    combustivel: { required: mensagens.required },
}