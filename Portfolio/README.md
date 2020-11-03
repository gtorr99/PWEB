# Estrutura do Projeto

## Index
- Inicializa a página html e chama a raiz da aplicação

## Componentes
- Os componentes html, css e type script estão localizados em Portfolio/profile/src/

### App component
- Inicializa o header e chama as tags referentes à aba do perfil e ao controlador de slides.

### Content
- Onde estão localizados os conteúdos de todos os slides.

### Personal-data
- Contém as informação da aba lateral do perfil.

### Slide
- Inicializa a tag content e contém as funções que controlam o movimento dos slides.
- Funções onNext e onPrevious disponíveis em slide.component.ts.

### Slide-service
- Incrementa e decrementa o índice que controla os slides.
