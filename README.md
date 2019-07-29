# Problema de Concorrência usando nodejs

Quando o endpoint `/users` é acessado o controller faz duas requisições:
- busca as permissões do usuário;
- busca os dados do usuário na API do backend;

Cada requisição feita usa o axios. Na raiz do projeto existe um middleware que intercepta todas as requisições feitas pelo axios então captura todos os headers passados pelo browser para enviar apenas alguns headers especificos nas requisições do axios dentro dos controllers.

Usuário A acessa o endpoint e passou o header.x-user-id = 1 e antes de terminar todas requisições do controller, Usuário B acessa o mesmo endpoint com header.x-user-id = 3. Os headers que serão passados pras próximas requisições do usuário A serão do usuário B.

Como resolver esse problema?