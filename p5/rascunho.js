function setup()
{
    canvas = createCanvas(810, 550);
    uxFill(250, 180, 235);
    botaoNivel = uxRect(765, 520, 40, 25).uxEvent('click', trigger);
}

//função chamada sempre que o botão é clicado
function trigger()
{
    mudancaDeNivel();
}

//função em loop. desenha no canvas
function draw()
{
    background(backgroundColor);
    display();
}

function display()
{
    if(toBeDisplayed.indexOf('text') > -1)
    {
        fill(216, 0, 127);
        textSize(objetoTexto.tamanho);
        text(objetoTexto.texto,  objetoTexto.x, objetoTexto.y);
        animateText();
    }

    if(toBeDisplayed.indexOf('cells') > -1)
    {
        stroke(255);
        strokeWeight(2);
        fill(216, 0, 127);
        circle(cell.x, cell.y, 25);
        move();
    }

    if(toBeDisplayed.indexOf('food') > -1)
    {
        fill(0, 240, 240);
        stroke(255);
        strokeWeight(1);
        circle(objetoALimento.x, objetoALimento.y, 8);
    }

    if(toBeDisplayed.indexOf('points') > -1)
    {
        fill(230, 230, 230);
        textSize(15);
        strokeWeight(0);
        text(objetoTexto.contagemPontos, objetoTexto.xPoints, objetoTexto.yPoints);
        text(objetoTexto.pontos, objetoTexto.xPoints + 63, objetoTexto.yPoints);
    }
    reachFood()
}

function reachFood()
{
    var distance = distancia(cell.x, cell.y, objetoALimento.x, objetoALimento.y)
    if(distance < 11)
    {
        objetoTexto.pontos += 1;
        noLoop();
        spawnFood();
    }
}

function spawnFood()
{
    objetoALimento.x = Math.random() * 800;
    objetoALimento.y = Math.random() * 520;
    toBeDisplayed += 'food';
    loop();
}






























