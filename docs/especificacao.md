# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE


## 3.1 Objetivos deste documento
Descrever e especificar as necessidades que devem ser atendidas pelo projeto "Bombou" – uma plataforma de eventos personalizada. Este documento visa detalhar os requisitos do sistema, incluindo suas funcionalidades principais, limites e usuários, garantindo que a solução atenda às expectativas tanto dos consumidores quanto dos organizadores de eventos.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado "Bombou" e terá três componentes principais:

**Cadastro de eventos:** Permite que os organizadores criem e gerenciem seus eventos na plataforma.<br>
**Preferências personalizadas:** Relaciona os eventos aos interesses dos usuários, facilitando a busca por eventos que combinem com seus gostos.<br>
**Recomendação de eventos:** Sugere eventos personalizados aos usuários com base nas suas preferências e interesses..<br>

### 3.2.2 Missão do produto
Facilitar a descoberta e a participação em eventos que realmente interessem aos usuários, conectando suas preferências aos eventos adequados. Além disso, ajudar os organizadores a alcançarem o público certo, aumentando a relevância e o envolvimento com seus eventos. 

### 3.2.3 Limites do produto
O "Bombou" não gerencia pagamentos de ingressos, não retendo o dinheiro dos usuários. Todas as transações são realizadas em plataformas externas, garantindo que os organizadores recebam os pagamentos diretamente. Além disso, não possui um sistema para coletar avaliações; esse feedback deve ser feito em plataformas externas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Personalização na descoberta de eventos |	Essencial |
|2 | Alcance direcionado de eventos para o público correto	 | Essencial | 
|3 | Navegação intuitiva para encontrar eventos relevantes | Essencial | 
|4	| Maior eficiência para os organizadores dos eventos	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------|--------------------------------------|-------------------------------------------|
| RF1    | Comprar Ingressos                    | O sistema deve permitir que o Cliente compre ingressos. |
| RF2    | Filtrar Eventos                      | O sistema deve permitir que o Cliente filtre eventos. |
| RF3    | Avaliar Eventos                      | O sistema deve permitir que o Cliente avalie eventos. |
| RF4    | Consultar Histórico de Compras       | O sistema deve permitir que o Cliente consulte o histórico de compras. |
| RF5    | Realizar Cadastro                    | O sistema deve permitir que o Cliente realize cadastro. |
| RF6    | Realizar Login                       | O sistema deve permitir que o Cliente realize login. |
| RF7    | Realizar Logout                      | O sistema deve permitir que o Cliente realize logout. |
| RF8    | Escolher Método de Pagamento         | O sistema deve permitir que o Cliente escolha o método de pagamento durante a compra de ingressos. |
| RF9    | Gerenciar Eventos                    | O sistema deve permitir que o Organizador gerencie eventos (cadastrar, editar, excluir, consultar eventos). |
| RF10  | Cadastrar Novos Eventos              | O sistema deve permitir que o Organizador cadastre novos eventos. |
| RF11  | Editar Eventos                       | O sistema deve permitir que o Organizador edite eventos existentes. |
| RF12  | Excluir Eventos                      | O sistema deve permitir que o Organizador exclua eventos. |
| RF13  | Consultar Eventos                    | O sistema deve permitir que o Organizador consulte eventos. |
| RF14   | Criar Notificações Personalizadas    | O sistema deve permitir que o Organizador crie notificações personalizadas. |
| RF15   | Enviar Notificações                  | O sistema deve permitir que o sistema envie notificações. |
| RF16   | Enviar Recomendações                 | O sistema deve permitir que o sistema envie recomendações. |


### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional                | Descrição |
|--------|---------------------------------------|-------------------------------------------|
| RNF1   | Suporte a Usuários Simultâneos        | O sistema deve ser capaz de suportar até 10.000 usuários simultâneos, sem comprometer a performance. |
| RNF2 | Tempos de Resposta Adequados          | Deve garantir tempos de resposta adequados, mesmo durante picos de acesso, como o lançamento de eventos populares. |
| RNF3   | Segurança dos Dados                    | O sistema deve garantir a segurança dos dados dos usuários e transações financeiras, utilizando criptografia de ponta a ponta. |
| RNF4 | Autenticação de Dois Fatores (2FA)    | O login deve incluir autenticação de dois fatores (2FA) para aumentar a segurança. |
| RNF5 | Armazenamento Criptografado            | As informações sensíveis devem ser armazenadas de forma criptografada, garantindo a proteção contra acessos não autorizados. |
| RNF6   | Disponibilidade do Sistema             | A plataforma deve ter uma disponibilidade mínima de 99,5% ao longo do ano. |
| RNF7 | Manutenções Programadas                | Manutenções programadas devem ocorrer fora dos horários de pico e com comunicação prévia aos usuários. |
| RNF8 | Plano de Recuperação                   | O sistema deve ter um plano de recuperação para minimizar o impacto de falhas inesperadas. |
| RNF9   | Escalabilidade                         | O sistema deve ser escalável, permitindo a adição de novos servidores conforme o crescimento da base de usuários e eventos. |
| RNF10 | Escalabilidade sem Modificações        | A escalabilidade deve ser possível sem a necessidade de grandes modificações na arquitetura existente. |
| RNF11   | Compatibilidade de Navegadores e Dispositivos | A aplicação deve ser compatível com diferentes navegadores (Chrome, Firefox, Safari) e dispositivos (desktop, tablets e smartphones). |
| RNF12 | Interface Responsiva                   | A interface deve ser responsiva, garantindo uma experiência uniforme e acessível em diferentes resoluções de tela. |
| RNF13   | Interface Intuitiva                   | A interface deve ser intuitiva e de fácil navegação, respeitando os princípios de design centrado no usuário e acessibilidade. |
| RNF14 | Tempo de Resposta Inferior a 2 Segundos | O tempo de resposta para qualquer ação deve ser inferior a 2 segundos, proporcionando uma navegação fluida. |


### 3.3.3 Usuários 

| Ator             | Descrição |
|------------------|-------------------------------------|
| Coordenador      | Usuário gerente do sistema responsável pelo cadastro e manutenção de eventos, além da supervisão geral da plataforma. Possui acesso total às funcionalidades administrativas. |
| Organizador      | Usuário responsável pela criação, edição e gestão de eventos, incluindo o gerenciamento de inscrições e feedback dos participantes. |
| Cliente          | Usuário que navega na plataforma para pesquisar, comprar ingressos, avaliar eventos e consultar seu histórico de compras. |
| Suporte Técnico   | Usuário responsável por atender as demandas de suporte dos clientes e organizadores, solucionando problemas e fornecendo orientações sobre o uso do sistema. |
| Administrador    | Usuário que gerencia a infraestrutura da plataforma, garantindo a segurança, performance e disponibilidade do sistema. |
| Auditor          | Usuário que realiza verificações e auditorias no sistema, garantindo conformidade e segurança em processos financeiros e de dados. |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso


![dcu](/diagraamDeClasses.jpg)




### 3.4.3 Diagrama de Classes 

 
![dcu](/DIagramaDeCasosDeUso.jpg)


