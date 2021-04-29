![logo-spc-png-3-Transparent-Images](https://user-images.githubusercontent.com/54897768/114814276-3e3a7c00-9d8a-11eb-851a-4d270374847c.png)![fatecsjc_400x192](https://user-images.githubusercontent.com/54897768/114814289-44305d00-9d8a-11eb-9486-a742419c575b.png)


# API-SPC: Projeto Integrador - SPC
## :dart: Situação atual e justificativa do projeto:
<p align="justify">A SPC possui atualmente uma segmentação de dados bem antiga, desde 2013, e que não expressa o mercado atual e também pouco utilizada. Logo dispõe de uma ferramenta de Market Share, que é importante para mensurar o tamanho e seu posicionamento de mercado, porém o modelo atual acabou ficando subutilizada, não seguimentando dados importantes para determinar o potencial financeiro, tendência de mercado e até mesmo o perfil de consumo de uma região. Hoje todo trabalho de análise e extração dos dados é feito manualmente pela equipe analítica da SPC, o projeto API da FATEC de São José dos Campos tem como objetivo automatizar o processo e a extração das análises.</p>


## Objetivos SMART e critérios de sucesso do projeto
<p align="justify">O projeto será considerado um sucesso se atender a todos os critérios de aceitação das entregas pelo cliente, respeitar as restrições e cumprir o cronograma de execução e principalmente atender os objetivos abaixo:</p>

- Através de estratégias de mercado e ferramentas desenvolvidas durante o projeto API da FATEC, o cliente deseja conhecer melhor seus clientes, automatizar a identificação de potencial de mercado, aprimorar recomendações de produtos e ações comerciais por perfil de Associado, pelo “SPC Recomenda” e direcionar as áreas comerciais em conhecer a base de associados ativos e prospects.

- Nível de Satisfação Geral do cliente maior que 70% medido através de pesquisa de satisfação respondida no término do projeto.

- Mapear o potencial financeiro de uma determinada região, com intuito de fornecer métricas aos nossos clientes.

- Aumentar o Market Share de nossa empresa com intuito de fornecer ao nosso cliente uma ampla visão dos nossos produtos e reconhecimento do mercado.

- Obter aprovação do cliente em relação às soluções e ferramentas desenvolvidas durante o projeto até o prazo final.


## :shopping: Produto e principais requisitos
<p align="justify">O novo produto da SPC, denominado “SPC Recomenda”, busca entregar para o usuário uma experiência mais ampla de visão de mercado, dando a ele mais informação sobre aspectos de consumo na região e potencial financeiro da região, auxiliando na tomada de decisão.</p>

REQUISITOS            | DESCRIÇÃO
---------             | :------
Transacional          |O sistema deve traçar o perfil transacional, informando os diferentes tipos de compras realizadas por um determinado consumidor
Região                |Segmentação dos dados culturais de consumo de uma determinada região
Potencial Financeiro  |Segmentação do poder aquisitivo de uma determinada região
Aderência             |Demonstrar o quanto o nosso negócio é relevante para vida de nossos consumidores
Porte                 |Discriminação das classe sociais de uma determinada região e averiguar o possível porte de consumo de bens e serviços
Verticais de Mercado  |Segmentar o tipo de mercado que atua em uma determinada região, mapeando os seus bens e/ou serviços ofertados
Seguimento de Mercado |Mapear o tipo de segmento mercado atua em uma determinada região, como Bens de Luxo até mesmo prestação de serviços exclusivos
Produto               |Quais diferentes produtos são ofertados pelo SPC

## Processos
![MAPA DO PROCESSO](https://user-images.githubusercontent.com/54897768/114814070-c9674200-9d89-11eb-8956-5e61cd92a1f9.jpg)

## :hammer_and_wrench: Tecnologia Aplicada

![logo_python](https://user-images.githubusercontent.com/54897768/114801243-b6e10e80-9d71-11eb-899d-9781ef29245b.png) O Python é uma linguagem de programação de alto nível e muito versátil. Ela suporta tanto a programação orientada a objetos quanto a programação estruturada.

![Jupyter_notebook_logo](https://user-images.githubusercontent.com/54897768/114801631-759d2e80-9d72-11eb-9f28-d822a5943567.jpeg) O Jupyter Notebook é um interfarce gráfica que permite a edição de notebooks que combina código ao vivo, gráficos, visualizações e texto em blocos de anotações compartilháveis que são executados em um navegador web, tais como Google Chrome ou Firefox.

![Angular_logo](https://user-images.githubusercontent.com/54897768/114801940-2277ab80-9d73-11eb-9dad-a2aee6c39021.jpg) Angular é uma plataforma e framework para construção da interface de aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google.

![mongodb-logo](https://user-images.githubusercontent.com/54897768/114802261-ca8d7480-9d73-11eb-8c06-f4db57c0103f.png) O MongoDB é um banco de dados opensource, de alta performance e flexível, sendo considerado o principal banco de dados NoSQL. Os banco de dados NoSQL apresentam algumas vantagens sobre os outros tipos, principalmente quando precisamos de escalabilidade, flexibilidade, bom desempenho e facilidade para consultas.

![logo-googleMaps](https://user-images.githubusercontent.com/54897768/116502595-5205d800-a88a-11eb-811d-46f93e878da6.png) Google Maps API é um serviço público e gratuito que qualquer pessoa pode usar em seus sites e aplicações. Desde que o usuário final não seja cobrado, pode-se usar este serviço, para isto existe a versão paga da API, mas não é o caso para este projeto que visa apenas o estudo e compreensão da mesma.


## :pushpin: Marcos do projeto

Marcos     | Descrição  | Previsão
---------- | :--------- | ----------
Kick-off do projeto|- Primeiro contato com o cliente, definição dos requisitos e casos de uso.|04/03/2021
1ª Sprint|- Situação atual e justificativa do projeto.<br>  - Objetivos SMART e critérios de sucesso do projeto.<br> - Produtos e principais requisitos.<br> - Definição dos Marcos do Projeto.<br> - Partes interessadas do Projeto.<br> - Definição das Restrições.<br> - Definição das Premissas.<br> - Definir os possiveis Riscos.<br> - Orçamento do Projeto.<br> - Mapa Estratégico.<br> - Elaboração da tela inicial do sistema - Protótipo.<br> - Análise de dados do dataset - Jupyter Notebook.|08/03 - 28/03
2ª Sprint|- Plano de Negócio - Parte 1.<br> - BSC (Balanced Scorecard).<br> - Declaração do escopo do projeto.<br> - Plano de gerenciamento dos custos.<br> - Plano de gerenciamento dos cronograma.<br> - Planejamento Estratégico de Tecnologia da Informação PETI - Parte 1.|29/03 - 18/04
3ª Sprint|- Plano de Negócio - Parte 2.<br> - Catalogo de serviço (Framework ITIL).<br> - Configuração do banco de dados MongoDB.<br> - Construção do Backend em Python.<br> - Configuração da API Google Maps Places.<br> - Mapeamento de condenadas, segmentação regional (IA).<br> - Segmentação do porte financeiro (IA).<br> - Mapeamento do tipo de pessoa física ou jurídica (IA).<br> - Matriz RACI.<br> - Matriz de Comunicação.<br> |26/04 - 16/05
4ª Sprint|- Plano de Negócio - Parte 3.<br> - Segmentação do potencial financeiro da região (IA).<br> - Rastrear do segmento de mercado de uma determinada região(IA).<br> - Mapeamento dos verticais de mercado (IA).<br> - CheckList das entregas.|17/05 - 05/06
Apresentação final||07/06 - 11/06
Feira de soluções||14/06 - 18/06

## Premissas
- Ao término de cada Sprint, disponibilizar para o cliente um relatório sobre o andamento do projeto;
- Todos os colaboradores deverão estar ativos e participantes durante todo o processo de desenvolvimento;
- Reuniões diárias abertas para discussões sobre dificuldades e possíveis aprimoramentos no projeto.


## :warning: Possíveis RISCOS

Descrição do Risco | Probabilidade | Impacto | Descrição do impacto | Ação | Descrição da Ação
:----------------- | :-----------: | :-----: | :------------------- | :--: | :----------------
Número de participantes abaixo do mínimo requerido |2|4|Acúmulo de tarefas, sobrecarregando os participantes|Prevenir|Realizações de reuniões diarias, além de sempre comunicar  possíveis ausências com antecedência.
Falha na comunicação com o cliente|4|5|Comprometimento das entregas, por falta de feedback.|Prevenir| Desenvolver um escopo bem definido desde o inicio, evitando constantes solicitações de validação com o cliente.
Falha na comunicação com o time|2|3|Falta de feedback em relação ao desenvolvimento do projeto|Prevenir|Manter sempre o time em conexão com o projeto, lista de atividade sempre bem estruturada e designada de forma adequada. 
Indisponibilidade do repositório remoto|1|5|Atraso nas entregas das tarefas|Mitigar|Manter sempre o repositório local atualizado.

## :octocat: Integrantes da Equipe

Participante      | Função            | Github     
:-----------      | :-------------:   | :------------:
Rodrigo Querino   | Scrum Master      | <a href="https://github.com/rodrigoqfcosta">GitHub</a>
Gustavo Robert    | Product Owner     | <a href="https://github.com/gusrobert">GitHub</a>
Stephanie Costa   | Analista de dados | <a href="https://github.com/Stephanie345">GitHub</a>
Pablo Gabriel     | Dev. Backend      | <a href="https://github.com/PGabriel-MB">GitHub</a>
Adriano de Aquino | Dev. Frontend     | <a href="https://github.com/adriianoakino">GitHub</a>

> Gerente de projeto: Prof Me Eduardo Sakaue
