  let tamanhoFonte = 1;
        function aumentarFonte() {
            tamanhoFonte += 0.1;
            document.getElementById("textoFonte").style.fontSize = tamanhoFonte + "em";
        }
        
        function diminuirFonte() {
            tamanhoFonte -= 0.1;
            document.getElementById("textoFonte").style.fontSize = tamanhoFonte + "em";
        }
