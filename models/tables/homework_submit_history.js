/**
 * homework_submit_history
 * @typedef {object} homework_submit_history 
 * @property {number} id.required 
 * @property {number} student_id.required 
 * @property {number} homework_id.required 
 * @property {number} submit_id.required 
 * @property {number} university_id.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("homework_submit_history", {
        student_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        homework_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        submit_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        university_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
    });
}