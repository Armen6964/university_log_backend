/**
 * student
 * @typedef {object} student 
 * @property {number} id.required 
 * @property {string} full_name.required 
 * @property {string} birthday.required 
 * @property {string} profession.required 
 * @property {string} entery_date.required 
 * @property {number} university_id.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("student", {
        full_name: {
            type: dataType.STRING,
            allowNull: false,
        },
        birthday: {
            type: dataType.DATE,
            allowNull: false,
            defaultValue: dataType.NOW,
        },
        profession: {
            type: dataType.STRING,
            allowNull: false,
        },
        entery_date: {
            type: dataType.DATE,
            allowNull: false,
            defaultValue: dataType.NOW,
        },
        university_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
    });
}