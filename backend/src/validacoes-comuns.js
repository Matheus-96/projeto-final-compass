const { InvalidArgumentError } = require('./erros');


module.exports = {
    campoStringNaoNulo: (valor, nome) => {
        if (typeof valor !== 'string' || valor === 0)
            throw new InvalidArgumentError(`É necessário preencher o campo ${nome}!`);
    },


    campoTamanhoMaximo: (valor, nome, maximo) => {
        if (valor.length > maximo)
            throw new InvalidArgumentError(
                `O campo ${nome} precisa ser menor que ${maximo} caracteres!`
            );
    },

    campoTamanhoMinimo: (valor, nome, minimo) => {
        if (valor.length < minimo)
            throw new InvalidArgumentError(
                `O campo ${nome} precisa ser maior que ${minimo} caracteres!`
            );
    },

    campoLetraMaiuscula: (valor, nome) => {
        regex = new RegExp('[A-Z]', 'g')
        if (!regex.test(valor))
            throw new InvalidArgumentError(
                `O campo ${nome} precisa precisa conter ao menos 1 caractere maiúsculo!`
            );
    },

    campoLetraMinuscula: (valor, nome) => {
        regex = new RegExp('[a-z]', 'g')
        if (!regex.test(valor))
            throw new InvalidArgumentError(
                `O campo ${nome} precisa precisa conter ao menos 1 caractere minusculo!`
            );
    },

    campoNumero: (valor, nome) => {
        regex = new RegExp('[0-9]', 'g')
        if (!regex.test(valor))
            throw new InvalidArgumentError(
                `O campo ${nome} precisa precisa conter ao menos 1 caractere numerico!`
            );
    }
};