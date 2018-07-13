import { Injectable } from '@angular/core';

@Injectable()
export class ObjectService {

    constructor() {
    }

    /*
    ObjectHelper

    A classe ObjectHelper auxilia na criação de um objeto a partir de um form 
    e toda sua converção (JSONString <-> JSObject);

    Por ser uma classe, deve ser instanciada para habilitar seu uso, veja exemplo:

    let nomeInstancia = new ObjectHelper();

    A partir da instância é possível acessar todos os seus métodos, veja exemplo:

    nomeInstancia.parseFormToObject(parametro);

 */

    /*
        parseFormToObject

        Converte um formulário para objeto (Ex: {nome: 'Fulano', idade: '18'})
        e o retorna;
        Espera como parametro um formulário, que pode ser pego via DOM, veja exemplo:

        const form = document.getElementById('form');
        * Para isso o formulário deve possuir no HTML a prorpiedade id igual a 'form';

        Depois de ter o form basta chamar a função passando esse form, veja exemplo:

        const retorno = nomeInstancia.parseFormToObject(form);

        **Exigencias:
            - O formulário deve possuir um id
            - Deve ser passado esse formulário como parametro
            - Todos os campos do formulário devem possuir um name definido, e exclusivo
    */
    public parseFormToObject(form): Object {
        const obj = {};
        let elements = form.querySelectorAll("input, select, textarea");
        for (let i = 0; i < elements.length; ++i) {
            const element = elements[i];
            const name = element.name;
            const value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return obj;
    }

    /*
        Converte um objeto JavaScript para uma string JSON, retornando o resultado
        Referencia: https://www.w3schools.com/js/js_json_stringify.asp
    */

    public stringifyObject(object): String {
        return JSON.stringify(object);
    }


    /*
        Converte uma string JSON para objeto JavaScript, retornando o resultado
        Referencia: https://www.w3schools.com/js/js_json_parse.asp
    */

    public toObject(JSONString): any {
        if (typeof JSONString === 'string') {
            return JSON.parse(JSONString);
        }

        console.error('O parametro informado deve ser uma string');
    }
}
