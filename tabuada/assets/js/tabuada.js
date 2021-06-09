// ${variavel} --> template string 

function calculaTabuada() {

    // Obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    
    // Obtendo i do campo input number e convertendo em inteiro
    let i = parseInt(document.querySelector("#i").value);
    
    // Limpando o conteúdo do tbody
    tabuada.innerHTML = "";
    
    for (let j = 0; j <= 10; j++) {
        
        let resultado = i * j;
        
        let template = `
        <td>${i}</td>
        <td>x</td>
        <td>${j}</td>
        <td>=</td>
        <td>${resultado}</td>
        `;
        
        let tr = document.createElement("tr");
        
        tr.innerHTML = template;
        
        tabuada.append(tr);
    }
}

calculaTabuada();

document.querySelector("#i").addEventListener("change", calculaTabuada);