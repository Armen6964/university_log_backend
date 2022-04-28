let Sequelize = require('sequelize');

let {
    database,
    username,
    password,
    host,
    dialect
} = require("../config").db;

let sequelize = new Sequelize(database, username, password, {
    host,
    dialect
});

const Student = require('./tables/student')(sequelize, Sequelize);
const Teacher = require('./tables/teacher')(sequelize, Sequelize);
const Homework = require('./tables/homework')(sequelize, Sequelize);
const Source_download_history = require('./tables/source_download_history')(sequelize, Sequelize);
const Visit_history = require('./tables/visit_history')(sequelize, Sequelize);
const Subject = require('./tables/subject')(sequelize, Sequelize);
const Homework_submit_history = require('./tables/homework_submit_history')(sequelize, Sequelize);
const Login_history = require('./tables/login_history')(sequelize, Sequelize);
const University = require('./tables/university')(sequelize, Sequelize);

Student.belongsTo(University, { foreignKey: 'university_id', targetKey: 'id',  onDelete: 'cascade' });
University.hasMany(Student, { foreignKey: 'university_id', targetKey: 'id',  onDelete: 'cascade' });

Teacher.belongsTo(University, { foreignKey: 'university_id', targetKey: 'id',  onDelete: 'cascade' });
University.hasMany(Teacher, { foreignKey: 'university_id', targetKey: 'id',  onDelete: 'cascade' });

Homework.belongsTo(Teacher, { foreignKey: 'teacher_id', targetKey: 'id',  onDelete: 'cascade' });
Teacher.hasMany(Homework, { foreignKey: 'teacher_id', targetKey: 'id',  onDelete: 'cascade' });

Homework.belongsTo(Subject, { foreignKey: 'subject_id', targetKey: 'id',  onDelete: 'cascade' });
Subject.hasMany(Homework, { foreignKey: 'subject_id', targetKey: 'id',  onDelete: 'cascade' });

Source_download_history.belongsTo(Subject, { foreignKey: 'subject_id', targetKey: 'id',  onDelete: 'cascade' });
Subject.hasMany(Source_download_history, { foreignKey: 'subject_id', targetKey: 'id',  onDelete: 'cascade' });

Visit_history.belongsTo(Student, { foreignKey: 'student_id', targetKey: 'id',  onDelete: 'cascade' });
Student.hasMany(Visit_history, { foreignKey: 'student_id', targetKey: 'id',  onDelete: 'cascade' });

Visit_history.belongsTo(Subject, { foreignKey: 'subject_id', targetKey: 'id',  onDelete: 'cascade' });
Subject.hasMany(Visit_history, { foreignKey: 'subject_id', targetKey: 'id',  onDelete: 'cascade' });

Subject.belongsTo(Teacher, { foreignKey: 'teacher_id', targetKey: 'id',  onDelete: 'cascade' });
Teacher.hasMany(Subject, { foreignKey: 'teacher_id', targetKey: 'id',  onDelete: 'cascade' });

Subject.belongsTo(University, { foreignKey: 'unversity_id', targetKey: 'id',  onDelete: 'cascade' });
University.hasMany(Subject, { foreignKey: 'unversity_id', targetKey: 'id',  onDelete: 'cascade' });

Homework_submit_history.belongsTo(Student, { foreignKey: 'student_id', targetKey: 'id', as:'student_homework_submit_history', onDelete: 'cascade' });
Student.hasMany(Homework_submit_history, { foreignKey: 'student_id', targetKey: 'id', as:'student_homework_submit_history', onDelete: 'cascade' });

Homework_submit_history.belongsTo(Student, { foreignKey: 'homework_id', targetKey: 'id', as:'homework_homework_submit_history', onDelete: 'cascade' });
Student.hasMany(Homework_submit_history, { foreignKey: 'homework_id', targetKey: 'id', as:'homework_homework_submit_history', onDelete: 'cascade' });

Homework_submit_history.belongsTo(Student, { foreignKey: 'submit_id', targetKey: 'id', as:'submit_homework_submit_history', onDelete: 'cascade' });
Student.hasMany(Homework_submit_history, { foreignKey: 'submit_id', targetKey: 'id', as:'submit_homework_submit_history', onDelete: 'cascade' });

Homework_submit_history.belongsTo(University, { foreignKey: 'university_id', targetKey: 'id',  onDelete: 'cascade' });
University.hasMany(Homework_submit_history, { foreignKey: 'university_id', targetKey: 'id',  onDelete: 'cascade' });

Login_history.belongsTo(Student, { foreignKey: 'student_id', targetKey: 'id',  onDelete: 'cascade' });
Student.hasMany(Login_history, { foreignKey: 'student_id', targetKey: 'id',  onDelete: 'cascade' });



function init(next) {

    sequelize.authenticate()
        .then(() => {

            console.log('Connection has been established successfully.');

            sequelize.sync({
                    alter: true
                })
                .then(() => {
                    console.log('sync ended');
                    require('./seeder')();
                    if (next) next();
                })
                .catch(err => {
                    console.log("sync error");
                    console.log(err.message);
                });

        })
        .catch(err => {

            console.error('Unable to connect to the database:', err);

            setTimeout(() => {
                init(next)
            }, 1000);

        });

}

module.exports = {
    init,
    Op: Sequelize.Op,
    Sequelize,
    Student,
    Teacher,
    Homework,
    Source_download_history,
    Visit_history,
    Subject,
    Homework_submit_history,
    Login_history,
    University,
}