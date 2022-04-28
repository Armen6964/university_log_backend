/**
 * subject
 * @typedef {object} subject 
 * @property {number} teacher_id.required 
 * @property {number} unversity_id.required 
 * @property {number} id.required 
 * @property {string} name.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("subject", {
        teacher_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        unversity_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        name: {
            type: dataType.STRING,
            allowNull: false,
        },
    });
}