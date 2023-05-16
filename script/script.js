
document.write("<h1 >Trabalho de Matrizes</h1>");

document.write("<h2 >Soma de Matrizes</h2>");
document.write("<p>A adição de matrizes é uma operação onde duas matrizes de mesmo tamanho são combinadas para formar uma terceira matriz resultante. Para que a adição seja possível, as matrizes devem ter as mesmas dimensões, ou seja, o mesmo número de linhas e colunas.</p>");
document.write("<p>A adição de matrizes é realizada somando os elementos correspondentes de cada matriz para obter o elemento correspondente na matriz resultante. Por exemplo, considere as matrizes A e B:</p>");
document.write("A = [a₁₁ a₁₂ a₁₃]<br>[a₂₁ a₂₂ a₂₃]");
document.write("<br>");
document.write("<br>");
document.write("B = [b₁₁ b₁₂ b₁₃]<br>[b₂₁ b₂₂ b₂₃]");
document.write("<p>A matriz resultante C da adição de A e B é obtida somando os elementos correspondentes:</p>");
document.write("C = [a₁₁ + b₁₁ a₁₂ + b₁₂ a₁₃ + b₁₃]<br>[a₂₁ + b₂₁ a₂₂ + b₂₂ a₂₃ + b₂₃]");
document.write("<br>");
document.write("<p>Portanto, cada elemento da matriz resultante é a soma dos elementos correspondentes das matrizes de entrada.</p>");
document.write("<p>Abaixo, vemos um exemplo de soma de matrizes. As matrizes que se somaram são de ordem 2x4 e foram digitadas pela autora da página, sendo o resultado gerado por um código em Javascript. Veja: </p>");
document.write("<br>");
document.write("<br>");

var MSoma = new Array();
var MSoma2 = new Array();

MSoma.push([444, 43, 9, 2]);
MSoma.push([100, 2, 45, 22]);

MSoma2.push([23, 56, 87, 41]);
MSoma2.push([34, 74, 89, 44]);

console.table(MSoma);
console.table(MSoma2);

//Tabela MSoma
document.write("<table border=1 class=soma>");
for (i = 0; i < MSoma.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < MSoma[i].length; x++) {
        linha = linha + "<td>" + MSoma[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");


document.write("<p class='sinais'> + </p>");



//Tabela MSoma2
document.write("<table border=3 class=soma>");
for (i = 0; i < MSoma2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < MSoma2[i].length; x++) {
        linha = linha + "<td>" + MSoma2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

//Matriz de Resultado e for para somar as matrizes 
var MatrizResultado = new Array();

for (var z = 0; z < 2; z++) {
    MatrizResultado[z] = new Array();

    for (var k = 0; k < 4; k++) {
        MatrizResultado[z][k] = MSoma[z][k] + MSoma2[z][k];
    }
}

console.table(MatrizResultado);


document.write("<p class='sinais'> = </p>");


// Tabela Resultado das Somas 
document.write("<table border=3 class=soma>");
for (i = 0; i < MatrizResultado.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < MatrizResultado[i].length; x++) {
        linha = linha + "<td>" + MatrizResultado[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

//Multiplicação de matriz por Escalar

document.write("<h2>Multiplicação de Matrizes por um Número Escalar</h2>");

document.write("<p>A multiplicação de uma matriz por um número escalar é uma operação em que cada elemento da matriz é multiplicado pelo número escalar. Resumidamente, o processo envolve a multiplicação de cada elemento da matriz pelo número escalar e a obtenção de uma nova matriz com os resultados dessas multiplicações.</p>");
document.write("<p>É importante destacar que a multiplicação de uma matriz por um número escalar é uma operação válida apenas entre um número e uma matriz, não entre duas matrizes. A multiplicação entre matrizes requer outras regras e propriedades.</p>");
document.write("<p>Abaixo veja um exemplo de uma multiplicação de matriz por um número escalar. A matriz multiplicada foi gerada aleatóriamente pela função Math.random, em Javascript, já o número que a multiplicou foi digitado por você ao acessar a página.</p>");

//número que vai multiplicar a matriz
var valor;
valor = prompt("Digite o número escalar para multiplicarmos uma matriz de ordem 3 gerada aleatóriamente: ");

document.write("<br>");
document.write("<p class='sinais'> </p>" + valor);

document.write("<p class='sinais'> x </p> ");


//matriz que vai ser multiplicada
var MatrizMultiplicaE = new Array();

MatrizMultiplicaE.push([parseInt(Math.random() * 2), parseInt(Math.random() * (-30)), parseInt(Math.random() * 7)]);
MatrizMultiplicaE.push([parseInt(Math.random() * 32), parseInt(Math.random() * (-100)), parseInt(Math.random() * (-5))]);

console.table(MatrizMultiplicaE);

//tabela com a MatrizMultiplicaE
document.write("<table border=1 class=soma>");
for (i = 0; i < MatrizMultiplicaE.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < MatrizMultiplicaE[i].length; x++) {
        linha = linha + "<td>" + MatrizMultiplicaE[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<p class='sinais'> = </p>")

//Multiplicação 
var MatrizEscalar = new Array();

for (q = 0; q < 2; q++) {
    MatrizEscalar[q] = new Array();
    for (w = 0; w < 3; w++) {
        MatrizEscalar[q][w] = MatrizMultiplicaE[q][w] * valor;
    }
}

console.table(MatrizEscalar)


//Tabela com o resultado da multiplicação da Matriz por um escalar 
//Tabela MatrizEscalar
document.write("<table border=1 class=soma>");
for (i = 0; i < MatrizEscalar.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < MatrizEscalar[i].length; x++) {
        linha = linha + "<td>" + MatrizEscalar[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");


//Multiplição de Matrizes
document.write("<h2>Multiplição de Matrizes</h2>");
document.write("<p>Resumidamente, a multiplicação de matrizes é um processo que combina os elementos de duas matrizes para obter uma nova matriz resultante.</p>");
document.write("<p>Para multiplicar duas matrizes, A e B, as dimensões devem ser compatíveis. A matriz A deve ter o número de colunas igual ao número de linhas da matriz B. Se A é uma matriz de dimensão m x n e B é uma matriz de dimensão n x p, então a matriz resultante C terá dimensão m x p.</p>");
document.write("<p>Veja na imagem o processo de como ocorre a multiplicações entre matrizes:</p>");
document.write("<img src='img/multiplicacaoMatrizes.png' class='multiplicacaoMatrizes'>");
document.write("<br>");
document.write("<p>Abaixo teremos uma multiplicação de matrizes com as matrizes que você mesmo digitou ao abrir a página. Caso você não tenha seguido as regras do número de colunas da primeira ser igual ao número de linhas da segunda, ou ainda não ter digitado todos os números, haverá erros na formação da tabela ou no resultado.</p>");


alert("Agora pediremos para você digitar duas matrizes que se multiplicaram futuramente")
var numeroLinhas = parseInt(prompt("Digite o número de linhas para a primeira matriz:"));
var numeroColunas = parseInt(prompt("Digite o número de colunas para a segunda matriz:"));

var MMultiplica = new Array();

for (var i = 0; i < numeroLinhas; i++) {
    MMultiplica[i] = new Array(numeroColunas);
    for (var j = 0; j < numeroColunas; j++) {
        var posicao = "a" + (i + 1) + (j + 1);
        MMultiplica[i][j] = parseInt(prompt("Digite o número para " + posicao + ":"));
    }
}

console.log(MMultiplica);


//Tabela MMultiplica 
document.write("<table border=1 class=soma>");
for (i = 0; i < MMultiplica.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < MMultiplica[i].length; x++) {
        linha = linha + "<td>" + MMultiplica[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

var numeroLinhas2 = parseInt(prompt("Digite o número de linhas para a segunda matriz:"));
var numeroColunas2 = parseInt(prompt("Digite o número de colunas para a segunda matriz:"));

var MMultiplica2 = new Array();

for (var i = 0; i < numeroLinhas2; i++) {
    MMultiplica2[i] = new Array(numeroColunas2);
    for (var j = 0; j < numeroColunas2; j++) {
        var posicao = "a" + (i + 1) + (j + 1);
        MMultiplica2[i][j] = parseInt(prompt("Digite o número para " + posicao + ":"));
    }
}

console.log(MMultiplica2);


document.write("<p class='sinais'> X </p>")


//Tabela MMultiplica2
document.write("<table border=1 class=soma>");
for (i = 0; i < MMultiplica2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < MMultiplica2[i].length; x++) {
        linha = linha + "<td>" + MMultiplica2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<p class='sinais'> = </p>");

if (MMultiplica.length == MMultiplica2.length) {
    var ResultadoMultiplicacao = new Array();

    for (var c = 0; c < MMultiplica.length; c++) {
        ResultadoMultiplicacao[c] = new Array(numeroColunas2);

        for (var l = 0; l < numeroColunas2; l++) {
            ResultadoMultiplicacao[c][l] = 0;

            for (var k = 0; k < MMultiplica2.length; k++) {
                ResultadoMultiplicacao[c][l] += MMultiplica[c][k] * MMultiplica2[k][l];
            }
        }
    }
} else {
    alert("Não é possível realizar a multiplicação, pois o número de colunas da primeira matriz é diferente do número de linhas da segunda");
}

console.table(ResultadoMultiplicacao);

//Tabela ResultadoMultiplicacao
document.write("<table border=1 class=soma>");
for (i = 0; i < ResultadoMultiplicacao.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < ResultadoMultiplicacao[i].length; x++) {
        linha = linha + "<td>" + ResultadoMultiplicacao[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<br>");
document.write("<br>");














