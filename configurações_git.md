# GIT - Configurações

### Configurar usuario
    - Comandos
        git config --global user.name "nome sobrenome"
        git config --global user.email "pessoa@gmail.com"

### Baixar o repositorio do github
    - Comandos
        git clone link-repositorio

### Adicionar e subir alterações no repositorio
    - git add . | prepara arquivos para serem subidos no repositorio
    - git commit -m "MESSAGE" | Adiciona mensagem 
    - git push | sobe arquivos no repositorio

#### Criar branch e mudar de branch
    - git branch nome-da-branch | cria uma branch
    - git checkout nome-da-branch | muda de branch
    - git branch -a | listar todas as branches
    - git checkout -b nome-da-branch | cria uma branch e troca para a branch criada
    - git branch -d nome-da-branch | apaga uma branch
    - git pull | atualiza repositorio local