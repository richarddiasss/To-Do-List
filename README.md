A aplicação apresenta uma sessão de login e cadastro para o usuário se estabelecer no banco de dados da aplicação. Nesse sentido, o usuário pode ser beneficiar da funcionalidade do programa, que é inserir tarefas que vão ser estabelecidas pelo usuário e poder marcar se já foram realizadas ou não. (checklist)
Realizei esse trabalho, pois queria treinar e obter mais conhecimento na parte de backend para realização de projetos, como o uso do Express, JWT, banco de dados(MongoDB) e outras tecnologias. 

IMPORTANTE!
Até o momento, com a obtenção do token no login, somente é possível realizar as funções da aplicação por até 5 minutos, pois esse é o tempo de expiração do token. Nesse contexto, para continuar utilizando as funcionalidades é preciso realizar o login novamente, ou somente mudar o valor da propriedade 'expiresIn' dentro da função 'jwt.sign' que está na controllers "userControllers" dentro da função "loginUser".
