function animateText()
{
    objetoTexto.x += random(-0.17, 0.17);
    objetoTexto.y += random(-0.17, 0.17);
}

function move()
{
    cell.x = cell.x + random(-0.95, 0.95) + cell.velocidadeX;
    cell.y = cell.y + random(-0.95, 0.95) + cell.velocidadeY;
}

function direction(x, y)
{
    cell.velocidadeX = x;
    cell.velocidadeY = y;
}

function distancia(x, y, z, a)
{
    pontox = z - x;
    pontoy = a - y; 
    distance = Math.sqrt((pontox **2) + (pontoy **2));
    return distance;
}
