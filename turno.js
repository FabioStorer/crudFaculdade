const prompt = require('prompt-sync')();
const db = [];
let ultimoId = 0;

const model = (id = ++ultimoId) => {

    const nome = prompt('Digite o turno: ');
    const inicio = parseInt(prompt('Digite o horário de início do turno(apenas números): '));
    const termino = parseInt(prompt('Digite o horário de término do turno(apenas números): '));

    if (nome != '' &&
        inicio > 0 &&
        inicio <= 24 &&
        termino > 0 &&
        termino <= 24) {
        return {
            id,
            nome,
            inicio,
            termino
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