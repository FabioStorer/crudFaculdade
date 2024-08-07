const prompt = require('prompt-sync')();
const professor = require('./professor.js');
const materia = require('./materia.js');
const sala = require('./sala.js');
const db = [];
let ultimoId = 0;

const model = (id = ++ultimoId) => {

    let idProfessor = 0;
    let idMateria = 0;
    let idSala = 0;

    if (professor.index()) {
        idProfessor = parseInt(prompt('Digite o ID do professor: '));
    } else {
        console.log('Cadastre um professor antes de realizar essa ação!');
    }

    if (materia.index()) {
        idMateria = parseInt(prompt('Digite o ID do matéria: '));
    } else {
        console.log('Cadastre um matéria antes de realizar essa ação!');
    }

    if (sala.index()) {
        idMateria = parseInt(prompt('Digite o ID do sala: '));
    } else {
        console.log('Cadastre um sala antes de realizar essa ação!');
    }

    if (professor.show(idProfessor) &&
        materia.show(idMateria) &&
        sala.show(idSala)) {
        return {
            id,
            idProfessor,
            idMateria,
            idSala
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