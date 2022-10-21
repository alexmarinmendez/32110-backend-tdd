import assert from 'assert'
import {Correo} from '../src/main.js'

const test1 = () => {
    let direccion = 'profesor@coderhouse.com'
    const correo = new Correo(direccion)
    assert.strictEqual(correo.asString(), direccion)
}

const test2 = () => {
    let direccion = 'estudiantes@coderhouse.com'
    const correo = new Correo(direccion)
    assert.strictEqual(correo.asString(), direccion)
}

const test3 = () => {
    try {
        let direccion = 'proveedores'
        const correo = new Correo(direccion)
    } catch(err) {
        const mensajeDeError = 'formato no válido'
        assert.strictEqual(err.message, mensajeDeError)
    }
}

const test4 = () => {
    try {
        const direccion = 'marian@gmail.com'
        new Correo(direccion)
        throw new Error('fallo el test 4')
    } catch(err) {
        const mensajeDeError = 'dominio no permitido'
        assert.strictEqual(err.message, mensajeDeError)
    }
}

test1()
test2()
test3()
test4()