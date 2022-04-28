/**
 * university
 * @typedef {object} university 
 * @property {number} id.required 
 * @property {string} name.required 
 * @property {string} country.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("university", {
        name: {
            type: dataType.STRING,
            allowNull: false,
        },
        country: {
            type: dataType.STRING(255),
            allowNull: false,
        },
    });
}