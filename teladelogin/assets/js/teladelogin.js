/*
Um atributo do tipo 'const' é uma constante. Seu valor não muda durante a aplicação. Como, por exemplo, um atributo do tipo final em Java.
Um atributo do tipo 'var' é uma variável do tipo global. Seu valor pode mudar durante a aplicação. Pode ser acessada em qualquer escopo dentro do documento. Ela pode ser um numero ou uma string.
Um atributo do tipo 'let' é uma variável do tipo local. Seu valor pode mudar durante a aplicação. Pode ser acessada somente dentro do escopo que foi criada. Ela pode ser um numero ou uma string
*/

const greeting = "Hello World";
console.log("The greeting is '" + greeting + "'");

let email = "joadoteste@teste.com"
console.log(`O seu e-mail é: ${email}`);

/*
A forma acima é para poder se escrever o valor de variáveis, chamando a variável sem ter que concatenar strings
Veja que todo o conteúdo dento do parentêses está dentro de 'crase' (`) e não entre aspas (")
${nome_da_variavel} --> template string
*/

document.getElementById("btn-submit").addEventListener("click", e => {
    console.log("O botao foi clicado");
});

document.getElementById("form-login").addEventListener("mouseenter", e => {
    console.log("Mouse entrou no formulario");
});

document.querySelector("#form-login").addEventListener("mouseleave", e => {
    console.log("Mouse saiu do formulario");
});

document.querySelector("#form-login").addEventListener("submit", e => {
    e.preventDefault();

    console.log("Formulario Enviado! Aqui vai o Ajax");

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log(email,password);

    let json = {
        email_atributo: email,
        password_atributo: password
    };
    console.log(json);
    
    /*O codigo abaixo transforma um objeto JASON em string*/
    let stringJSON = JSON.stringify(json);
    console.log(stringJSON);

    /*O codigo abaixo transforma uma string em objeto JASON*/
    let jsonParse = JSON.parse(stringJSON);
    console.log(jsonParse);

    /*O codigo abaixo valida os campos de formulario*/
    /*É possível trabalhar com os atributos de um JSON utilizando o ponto, como é feiot em C e em Java*/
    /*No if abaixo, json.email volta true caso ele contenha alguma coisa. Se ele é vazio, retonar false. Como queremos os valores contrários para este comportamento para a aplicação entrar no programa, estamos utilizando a negação !*/
    /*Para testar este if na prática, abra as ferramentas de desenvolvedor no navegador e remova a opção required dos campos de input do formulário*/
    if(!json.email_atributo) {
        console.error("O campo de email deve ser preenchido");
    } else if (!json.password_atributo) {
        console.error("O campo de senha deve ser preenchido");
    } else {
        console.info("Dados validados com sucesso");
    }

});

/*
JSON - JavaScript Object Notation

{
    email: "joaodoteste@teste.com",
    password: "abcd"
};

Se o atributo de um objeto JSON recebe uma variável que tem o mesmo nome do próprio atributo, não precisa fazer a atribuição, utilizando um sinal de igual. Basta escrever o nome do atributo (que é o meso nome da variável) que a atribuição já é feita

*/

