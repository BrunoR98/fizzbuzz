const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz", () =>{
    test('deberia devolver el num ingresado si no es multiplo de 3 o de 5', () =>{
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test('deberia mostrar fizz cuando el num sea multiplo de 3', ()=>{
        const expected = 'fizz';
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    })

    test('deberia mostrar buzz cuando el num sea multiplo de 5', ()=>{
        const expected = 'buzz';
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    })

    test('deberia mostrar fizzbuzz cuando el num sea multiplo de 3 y de 5',()=>{
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })

    test('debe mostrar un mensaje de error si el tipo ingresado no es number', ()=>{
        const expected = 'Lo siento, debe ingresar un numero';
        const result = fizzbuzz("15");
        expect(expected).toBe(result);
    })
});