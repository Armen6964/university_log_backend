/**
 * homework
 * @typedef {object} homework 
 * @property {number} id.required 
 * @property {number} teacher_id.required 
 * @property {number} subject_id.required 
 * @property {string} deadline.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("homework", {
        teacher_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        subject_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        deadline: {
            type: dataType.DATE,
            allowNull: false,
            defaultValue: dataType.NOW,
        },
    });
}