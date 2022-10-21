let dominiosConocidos = ['coderhouse.com']

function extraerDominio(email) {
    return email.split('@')[1]
}

export class Correo {
    #email

    constructor(email) {
        this.#setEmail(email)
    }
    asString() { 
        return this.#email
    }

    #setEmail(email) {
        if (!email.includes('@')) throw new Error('formato no válido')

        const dominio = extraerDominio(email)

        if (!dominiosConocidos.includes(dominio))
            throw new Error('dominio no permitido')

        this.#email = email
    }
}
