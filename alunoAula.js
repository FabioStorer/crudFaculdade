const prompt = require('prompt-sync')();
const aula = require('./aula.js');
const aluno = require('./aluno.js');
const db = [];
let ultimoId = 0;

const model = (id = ++ultimoId) => {

    let idAula = 0;
    let idAluno = 0;

    if (aula.index()) {
        idAula = parseInt(prompt('Digite o ID do aula: '));
    } else {
        console.log('Cadastre uma aula antes de realizar essa ação!');
    }

    if (aluno.index()) {
        idAluno = parseInt(prompt('Digite o ID do aluno: '));
    } else {
        console.log('Cadastre um aluno antes de realizar essa ação!');
    }

    if (professor.show(idProfessor) &&
        materia.show(idMateria)) {
        return {
            id,
            idProfessor,
            idMateria,
        };
    }
    console.log('Dados inválidos!');
};

const store = () => {

    const novo = model();

    if (novo) {
        db.push(novo);
        console.log('Registro concluído com sucesso!')
    }
};

const index = () => {

    if (db.length == 0) {
        console.log('Nenhuma aula cadastrado.');
        return false;
    }

    db.forEach(el => console.log(el));
    return true;
};

const show = id => db.find(el => el.id == id);

const update = () => {

    if (index()) {
        const id = parseInt(prompt('Escolha pelo ID qual registro deseja atualizar: '));
        const indice = db.findIndex(el => el.id == id);

        if (indice != -1) {
            const novo = model();
            if (novo) {
                db[indice] = novo;
                console.log('Registro atualizado com sucesso!');
            }
        } else {
            console.log('ID incorreto!');
        }
    }
};

const destroy = () => {

    if (index()) {
        const id = parseInt(prompt('Escolha pelo ID qual registro deseja remover: '));
        const indice = db.findIndex(el => el.id == id);

        if (indice != -1) {
            db.splice(indice, 1);
            console.log('Registro removido com sucesso!');
        } else {
            console.log('ID incorreto!');
        }
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
};