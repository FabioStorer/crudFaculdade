const prompt = require('prompt-sync')();
const professor = require('./professor.js');
const sala = require('./sala.js');
const turno = require('./turno.js');
const curso = require('./curso.js');
const aluno = require('./aluno.js');
const materia = require('./materia.js');
const aula = require('./aula.js');
const alunoAula = require('./alunoAula.js');

const menuPrincipal = () => {

    console.log(`Gerenciamento de Faculdade`);

    while (true) {

        console.log(`
        Escolha pelo índice o que deseja gerenciar:
        1. Turno
        2. Curso
        3. Matéria
        4. Aluno
        5. Professor
        6. Sala
        7. Aula
        8. Aluno na Aula
        9. Finalizar`);
        const opcao = parseInt(professor(''));

        switch (opcao) {

            case 1:

                menuTurno();

                break;

            case 2:

                menuCurso();

                break;

            case 3:

                menuMateria();

                break;

            case 4:

                menuAluno();

                break;

            case 5:

                menuProfessor();

                break;

            case 6:

                menuSala();

                break;

            case 7:

                menuAula();

                break;

            case 8:

                break;

            case 9:

            process.exit();

                break;

            default:

                console.log('Opção inválida!');

                break;
        }
    };
};

const menuTurno = () => {

    console.log('Gerenciamento de Turnos');

    while (true) {

        console.log(`
        1. Cadastrar Turno
        2. Listar Turnos
        3. Atualizar Turno
        4. Remover Turno
        5. Voltar`)
        const opcao = parseInt(prompt(''));

        switch (opcao) {

            case 1:

                turno.store();

                break;

            case 2:

                turno.index();

                break;

            case 3:

                turno.update();

                break;

            case 4:

                turno.destroy();

                break;

            case 5:

                return

            default:

                console.log('Opção inválida!');

                break;
        }
    };

};

const menuCurso = () => {

    console.log('Gerenciamento de Cursos');

    while (true) {

        console.log(`
        1. Cadastrar Curso
        2. Listar Cursos
        3. Atualizar Curso
        4. Remover Curso
        5. Voltar`)
        const opcao = parseInt(prompt(''));

        switch (opcao) {

            case 1:

                curso.store();

                break;

            case 2:

                curso.index();

                break;

            case 3:

                curso.update();

                break;

            case 4:

                curso.destroy();

                break;

            case 5:

                return

            default:

                console.log('Opção inválida!');

                break;
        }
    };

};

const menuMateria = () => {

    console.log('Gerenciamento de Matérias');

    while (true) {

        console.log(`
        1. Cadastrar Matéria
        2. Listar Matérias
        3. Atualizar Matéria
        4. Remover Matéria
        5. Voltar`)
        const opcao = parseInt(prompt(''));

        switch (opcao) {

            case 1:

                materia.store();

                break;

            case 2:

                materia.index();

                break;

            case 3:

                materia.update();

                break;

            case 4:

                materia.destroy();

                break;

            case 5:

                return

            default:

                console.log('Opção inválida!');

                break;
        }
    };

};

const menuAluno = () => {

    console.log('Gerenciamento de Alunos');

    while (true) {

        console.log(`
        1. Cadastrar Aluno
        2. Listar Alunos
        3. Atualizar Aluno
        4. Remover Aluno
        5. Voltar`)
        const opcao = parseInt(prompt(''));

        switch (opcao) {

            case 1:

                aluno.store();

                break;

            case 2:

                aluno.index();

                break;

            case 3:

                aluno.update();

                break;

            case 4:

                aluno.destroy();

                break;

            case 5:

                return

            default:

                console.log('Opção inválida!');

                break;
        }
    };

};

const menuProfessor = () => {

    console.log('Gerenciamento de Professores');

    while (true) {

        console.log(`
        1. Cadastrar Professor
        2. Listar Professores
        3. Atualizar Professor
        4. Remover Professor
        5. Voltar`)
        const opcao = parseInt(prompt(''));

        switch (opcao) {

            case 1:

                professor.store();

                break;

            case 2:

                professor.index();

                break;

            case 3:

                professor.update();

                break;

            case 4:

                professor.destroy();

                break;

            case 5:

                return

            default:

                console.log('Opção inválida!');

                break;
        }
    };

};

const menuSala = () => {

    console.log('Gerenciamento de Salas');

    while (true) {

        console.log(`
        1. Cadastrar Sala
        2. Listar Salas
        3. Atualizar Sala
        4. Remover Sala
        5. Voltar`)
        const opcao = parseInt(prompt(''));

        switch (opcao) {

            case 1:

                sala.store();

                break;

            case 2:

                sala.index();

                break;

            case 3:

                sala.update();

                break;

            case 4:

                sala.destroy();

                break;

            case 5:

                return

            default:

                console.log('Opção inválida!');

                break;
        }
    };

};

const menuAula = () => {

    console.log('Gerenciamento de Aulas');

    while (true) {

        console.log(`
        1. Cadastrar Aula
        2. Listar Aulas
        3. Atualizar Aula
        4. Remover Aula
        5. Voltar`)
        const opcao = parseInt(prompt(''));

        switch (opcao) {

            case 1:

                aula.store();

                break;

            case 2:

                aula.index();

                break;

            case 3:

                aula.update();

                break;

            case 4:

                aula.destroy();

                break;

            case 5:

                return

            default:

                console.log('Opção inválida!');

                break;
        }
    };

};

menuPrincipal();