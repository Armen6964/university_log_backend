/**
 * login_history
 * @typedef {object} login_history 
 * @property {number} student_id.required 
 * @property {number} id.required 
 * @property {string} device_type.required 
 * @property {string} university_id.required 
 */


module.exports = (sequelize, dataType) => {
    return sequelize.define("login_history", {
        student_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        device_type: {
            type: dataType.ENUM,
            allowNull: false,
            values: ["mobile", "web"],
            defaultValue: 'mobile',
        },
        university_id: {
            type: dataType.DATE,
            allowNull: false,
            defaultValue: dataType.NOW,
        },
    });
}