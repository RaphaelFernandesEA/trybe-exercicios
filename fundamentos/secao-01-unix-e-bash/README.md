# Seção 01 - Unix e Bash 
Nesse módulo aprendi como funciona o Unix e como interagir com ele através do terminal, utilizando o Bash.
	
- Os principais pontos abordados foram:

	- Quais são seus principais componentes?
	- Quais são suas variações?
	- Arquivos e processos, o que são?
	- Qual sua estrutura de diretórios?
	- O que é o terminal?
	- Comandos executados no Shell.
	
- Para isso foram realizados os seguintes exercícios: 

	- Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
	- Crie um arquivo de texto com o nome trybe.txt .
	-Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
	- Renomeie o arquivo trybe.txt .
	- Dentro de unix_tests , crie um novo diretório chamado backup .
	- Mova o arquivo trybe_backup.txt para o diretório backup .
	- Dentro de unix_tests , crie um novo diretório chamado backup2 .
	- Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
	- Apague a pasta backup .
	- Renomeie a pasta backup2 para backup .
	- Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
	- Apague o diretório backup.
	- Limpe o terminal.
	- Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
	- Mostre na tela as 5 primeiras skills do arquivo skills.txt .
	- Mostre na tela as 4 últimas skills do arquivo skills.txt .
	- Apague todos os arquivos que terminem em .txt .
	- Navegue até a pasta unix_tests ;
	- Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.
	- Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
	- Conte quantas linhas tem o arquivo skills2.txt .
	- Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.
	- Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
	- Conte o número de linhas que contêm as letras br .
	- Conte o número de linhas que não contêm as letras br .
	- Adicione dois nomes de países ao final do arquivo phrases2.txt .
	- Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
	- Ordene o arquivo bunch_of_things.txt .
	- Navegue até a pasta unix_tests ;
	- Rode o comando ls -l e veja quais as permissões dos arquivos;
	- Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;
	- Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;
	- Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .
	- Liste todos os processos;
	- Agora use o comando sleep 30 & ;
	- Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;
	- Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;
	- Crie um processo em background que rode o comando sleep por 300 segundos.
	- Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
	- Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.
	- Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
	- Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.
	- Retome a execução do processo sleep 100 em background com o comando bg .
	- Termine a execução de todos os processos sleep (mate os processos) .
