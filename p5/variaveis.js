var backgroundColor = 35;
var nivel = 0;
var childCells =[];

//as variáveis nesse array são utilizadas para determinar que objetos aparacem no canvas
var toBeDisplayed = ['text',];

//contém a localizção da célula principal e suas velocidades
var cell = 
{
    x: 405,
    y: 250,
    velocidadeX: 0,
    velocidadeY: 0,
}

//objeto com informações sobre o texto que será exibido
var objetoTexto =
{
    texto: 'oh, que constrangedor',
    contagemPontos: 'energia: ',
    pontos: 0,
    x: 35,
    y: 263,
    xPoints: 30,
    yPoints: 25,
    tamanho: 70,
}

var objetoALimento =
{
    x:(Math.random() * 810),
    y: (Math.random() * 550),
}