const prompt = require('prompt-sync')();
const turno = require('./turno.js');
const db = [];
let ultimoId = 0;

const model = (id = ++ultimoId) => {

    const nome = prompt('Digite o nome do curso: ');
    const horas = parseInt(prompt('Digite o número de horas do curso: '));
    let idTurno = 0;

    if (turno.index()) {
        idTurno = parseInt(prompt('Digite o ID do turno: '));
    } else {
        console.log('Cadastre um turno antes de realizar essa ação!');
    }

    if (nome != '' &&
        horas > 0 &&
        turno.show(idTurno)) {
        return {
            id,
            nome,
            horas,
            idTurno
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
        console.log('Nenhum turno cadastrado.');
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