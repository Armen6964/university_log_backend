/**
 * teacher
 * @typedef {object} teacher 
 * @property {number} university_id.required 
 * @property {number} id.required 
 * @property {string} full_name.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("teacher", {
        university_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        full_name: {
            type: dataType.STRING,
            allowNull: false,
        },
    });
}