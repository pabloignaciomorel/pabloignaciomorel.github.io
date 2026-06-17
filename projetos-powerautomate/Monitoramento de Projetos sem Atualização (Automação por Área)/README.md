# ⚙️ Automação de Monitoramento de Projetos sem Atualização (SharePoint + Email)

## 🎯 Objetivo
Automatizar o monitoramento dos projetos sem atualização recente, identificando registros com mais de 7 dias sem atualização e enviando notificações semanais para os responsáveis por área.

## 🛠 Ferramentas
- Power Automate
- SharePoint Lists
- Outlook (Email)

## 🧠 Contexto
Projeto desenvolvido para melhorar o controle e a governança dos projetos cadastrados em uma lista consolidada no SharePoint.

A automação permite identificar automaticamente projetos desatualizados e garantir que os responsáveis por cada área sejam informados periodicamente, incentivando a atualização das informações.

## 🔄 Fluxo automatizado
- Execução automática com recorrência semanal
- Leitura dos itens da lista consolidada no SharePoint
- Filtragem dos projetos com mais de 7 dias sem atualização
- Identificação das áreas responsáveis
- Agrupamento das informações por área
- Iteração por cada área (Apply to each)
  - Filtragem dos projetos da área
  - Seleção dos e-mails dos responsáveis
  - Criação de tabela HTML com os projetos pendentes
  - Formatação do conteúdo do e-mail (HTML profissional)
  - Envio automático para os responsáveis da área

## 📊 Benefícios
- Controle automático de projetos desatualizados
- Redução da necessidade de acompanhamento manual
- Comunicação direcionada por área responsável
- Aumento da qualidade e atualização das informações
- Padronização do processo de notificação

## 🧠 Lógica aplicada
- Uso de gatilho por recorrência (scheduled flow)
- Filtro de dados com base em data de atualização
- Agrupamento por área responsável
- Loop “Apply to each” para processamento por área
- Geração dinâmica de tabela HTML
- Envio automatizado de e-mails com conteúdo estruturado

## 🚀 Desafios enfrentados
- Identificação correta dos projetos sem atualização
- Agrupamento dinâmico por área
- Construção de tabela HTML no Power Automate
- Envio de e-mails personalizados para múltiplos destinatários

## ✅ Soluções aplicadas
- Implementação de lógica de filtro baseada em data
- Criação de lista de áreas únicas para agrupamento
- Uso de ações “Selecionar” e “Filtrar” para estruturação dos dados
- Desenvolvimento de template HTML para e-mail
- Automação completa do envio por área responsável

## 📷 Imagens

![Fluxo da automação](imagem1.png) 
![Fluxo da automação2](imagem2.png)
![Envio de e-mails por área](imagem3.png)
