/**
 * source_download_history
 * @typedef {object} source_download_history 
 * @property {number} id.required 
 * @property {string} file_name.required 
 * @property {number} subject_id.required 
 * @property {number} download_count.required 
 * @property {number} year.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("source_download_history", {
        file_name: {
            type: dataType.STRING,
            allowNull: false,
        },
        subject_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        download_count: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        year: {
            type: dataType.INTEGER,
            allowNull: false,
        },
    });
}