document.addEventListener("DOMContentLoaded", function(){
    const servicos = document.querySelectorAll(".servico");
    const dentro = document.querySelector(".dentro");
    const msg = document.getElementById("mensagem");
    const fechar = document.getElementById("fechar");

    const primario = document.getElementById("primario");
    const secundario = document.getElementById("secundario");
    const medioSuperior = document.getElementById("medio-superior");

    const serv1 = document.getElementById("serv1"); // botão/elemento serviço 1
    const serv2 = document.getElementById("serv2"); // botão/elemento serviço 2

    // efeitos visuais nas tabelas
    [primario, secundario, medioSuperior].forEach(function(tabela){
        tabela.addEventListener("mouseover", function(){
            tabela.style.boxShadow="0 0 15px rgba(0,0,0,0.3)";
        });
        tabela.addEventListener("mouseout", function(){
            tabela.style.boxShadow="none";
        });
    });

    // efeitos visuais nos serviços
    servicos.forEach(function(servico){
        servico.addEventListener("mouseover", function(){
            servico.style.boxShadow="0 0 15px rgba(0,0,0,0.3)";
        });
        servico.addEventListener("mouseout", function(){
            
            servico.style.boxShadow="none";
        });
    });

    // clique no serviço 1 (Acompanhamento Acadêmico)
    serv1.addEventListener("click", function(){
        dentro.style.display="block";
        msg.textContent = "Serviço de Acompanhamento Acadêmico!";

        // Restaurar cabeçalho "AULA"
        [primario, secundario, medioSuperior].forEach(function(tab){
            const cabecalho = tab.querySelector(".primeiro");
            if(cabecalho){
                cabecalho.textContent = "AULA";
            }
        });

        // Restaurar preços originais
        primario.rows[2].cells[1].textContent = "A partir de 1500 mts/mes";
        medioSuperior.rows[3].cells[1].textContent = "2000 mts/mes";
        medioSuperior.rows[4].cells[1].textContent = "Taxa fixa de 1500 mts/mes";
    });

    // clique no serviço 2 (Preparação para Exames)
    serv2.addEventListener("click", function(){
        dentro.style.display="block";
        msg.textContent = "Serviço de Preparação para Exames!";

        // Trocar cabeçalho "AULA" por "PREPARAÇÃO"
        [primario, secundario, medioSuperior].forEach(function(tab){
            const cabecalho = tab.querySelector(".primeiro");
            if(cabecalho){
                cabecalho.textContent = cabecalho.textContent.replace(/AULA/gi, "PREPARAÇÃO");
            }
        });

        // Primário: custo muda para 1150
        primario.rows[2].cells[1].textContent = "1150 mts/mes";

        // Primário: descrição do serviço
        primario.rows[2].cells[2].textContent = "Este serviço depende da localização do aluno. por isso o preço é negociável ate no minimo 1150 mts/mes";

        // Médio/Superior: preços especiais
        medioSuperior.rows[4].cells[1].innerHTML = 
            "900 mts (Exame de Admissão) / 1500 mts (Exames normais)";
        medioSuperior.rows[3].cells[1].innerHTML = 
            "1200 mts (Exame de Admissão) / 1500 mts (Exames normais)";
    });

    // fechar a mensagem
    fechar.addEventListener("click", function(){
        dentro.style.display="none";
    });
});
