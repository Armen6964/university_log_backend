const { ERROR } = require("./");

module.exports = (schema) => (req, res, next) => {

    let error_message = "";

    for (const key in schema) {

        const { error } = schema[key].validate(req[key]);

        if (error) {

            const { details } = error;
            error_message = details.map(i => i.message).join(',');

            break
        }

    }

    if (error_message) return ERROR(res, error_message);

    next();

}