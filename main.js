const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="images/aprovado.png" alt="emogi celebrando"/>';
const imgReprovado ='<img src="images/reprovado.png" alt="emogi triste"/>';
const spanAprov = '<span class="resultado aprovado">Aprovado</span>';
const spanReprov = '<span class="resultado reprovado">Reprovado</span>'
const notas = [];
const atividades = [];
const notaMinima = parseFloat(prompt("Insira qual deve ser a nota Minima"));
let linhas ='';

form.addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinhas();
    atualizaLinhas();
})

function adicionaLinhas(){

    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida, tente inserir outra`)
    }
    else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >=7 ? imgAprovado : imgReprovado}</td>`
        linha +='</tr>';

        linhas += linha;

        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }
}

function atualizaLinhas(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;

    const media = somaNotas();
    const resultadoMediaFinal = document.getElementById('resultadoMediaFInal');
    const resultadoAprovacao = document.getElementById('resultadoDaAprovacao');

    resultadoMediaFinal.innerHTML = media;
    resultadoAprovacao.innerHTML = media >=notaMinima ? spanAprov : spanReprov;
}

function somaNotas(){
    let soma=0;
    for(let i=0;i<notas.length;i++){
        soma+=notas[i];
    }
   return soma/notas.length;
}