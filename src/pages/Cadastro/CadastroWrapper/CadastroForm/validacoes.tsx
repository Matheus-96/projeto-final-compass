export default {
    campoTamanhoMinimo: (valor: string, minimo: number) => {
        return valor.length >= minimo
    },

    campoLetraMaiuscula: (valor: string) => {
        const regex = new RegExp('[A-Z]', 'g')
        return regex.test(valor)
    },

    campoLetraMinuscula: (valor: string) => {
        const regex = new RegExp('[a-z]', 'g')
        return regex.test(valor)
    },

    campoNumero: (valor: string) => {
        const regex = new RegExp('[0-9]', 'g')
        return regex.test(valor)
    }
}