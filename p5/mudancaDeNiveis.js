function mudancaDeNivel()
{
    if (nivel == 0)
    {
        objetoTexto.texto = 'eu estava absorto no trabalho... mal te percebi chegar...';
        objetoTexto.tamanho = 32;
        objetoTexto.x = 10;
        nivel++;
    }

    else if(nivel == 1)
    {
        objetoTexto.texto = 'posso te mostrar o que fiz?';
        objetoTexto.x = 59;
        objetoTexto.y = 280;
        objetoTexto.tamanho = 50;
        nivel++;
    }

    else if(nivel == 2)
    {
        objetoTexto.texto = 'um ser unicelular!... ou pelo menos algo parecido com um';
        objetoTexto.tamanho = 30;
        objetoTexto.x = 10;
        objetoTexto.y = 130;
        toBeDisplayed += 'cells';
        nivel++;
    }

    else if(nivel == 3)
    {
        objetoTexto.texto = 'tente mover ele utilizando suas setas'
        objetoTexto.x = 120;
        nivel++;
    }

    else if(nivel == 4)
    {
        objetoTexto.texto = 'agora, guie-o para buscar alimento '
        toBeDisplayed += 'food'
        toBeDisplayed += 'points'
    }
}