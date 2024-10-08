# HeartbeatSecurity

HeartbeatSecurity é uma aplicação móvel desenvolvida com React Native e Expo, projetada para monitorar e gerenciar os sinais vitais de pacientes em tempo real. Este aplicativo é ideal para profissionais de saúde que precisam acompanhar o estado de seus pacientes remotamente.

## Funcionalidades

- Autenticação de usuários (login e registro)
- Listagem de pacientes
- Detalhes do paciente com gráficos de sinais vitais em tempo real
- Adição e atualização de informações do paciente
- Monitoramento de BPM (batimentos por minuto) e SpO2 (saturação de oxigênio)
- Interface adaptável com suporte a tema claro e escuro

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 12 ou superior)
- npm ou yarn
- Expo CLI
- Um emulador iOS/Android ou o aplicativo Expo Go em seu dispositivo móvel

## Instalação

1. Clone o repositório:
    -git clone https://github.com/seu-usuario/heartbeat-security.git
    -cd heartbeat-security
2. Instale as dependências:
    -npm install
3. Inicie o servidor de desenvolvimento:
    -expo start
4. Use um emulador ou escaneie o QR code com o aplicativo Expo Go para visualizar o aplicativo em seu dispositivo.

## Estrutura do Projeto

- `/src`: Contém o código-fonte principal do aplicativo
- `/components`: Componentes reutilizáveis
- `/screens`: Telas principais do aplicativo
- `/services`: Serviços de API e socket
- `/contexts`: Contextos do React (autenticação e tema)
- `/hooks`: Hooks customizados
- `/utils`: Funções utilitárias e constantes

## Configuração do Backend

O aplicativo requer três servidores backend:

1. Servidor de Autenticação (porta 3001)
2. Servidor de Gerenciamento de Pacientes (porta 3002)
3. Servidor de Dados em Tempo Real (portas 5000 e 5001)

Certifique-se de que esses servidores estejam rodando e acessíveis. As URLs de conexão podem ser configuradas em `src/utils/constants.js`.

## Uso

Após iniciar o aplicativo:

1. Faça login ou registre uma nova conta
2. Na tela inicial, você verá a lista de pacientes
3. Toque em um paciente para ver detalhes e gráficos de sinais vitais
4. Use o botão "+" para adicionar um novo paciente
5. Os dados de sinais vitais são atualizados em tempo real


Link do Projeto: https://github.com/seu-usuario/heartbeat-security
