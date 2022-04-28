/**
 * visit_history
 * @typedef {object} visit_history 
 * @property {number} id.required 
 * @property {number} student_id.required 
 * @property {number} subject_id.required 
 * @property {number} absent_count.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("visit_history", {
        student_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        subject_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        absent_count: {
            type: dataType.INTEGER,
            allowNull: false,
        },
    });
}