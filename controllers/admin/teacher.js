const {
    Op,
    Sequelize,
    Teacher
} = require('../../models');

const {
    SUCCESS,
    ERROR
} = require('../../utils');

const GETTER = require('../../utils/getter');


function get(req, res) {

    GETTER(Teacher, req, res, (options) => {
        options.include = {
            all: true
        };
    }, (data) => {
        SUCCESS(res, data, 200);
    });

}

function add(req, res) {



    Teacher.create(req.body)
        .then((data) => {
            SUCCESS(res, data, 200);
        })
        .catch(err => {
            ERROR(res, err.message);
        });

}

function update(req, res) {



    Teacher.update(req.body, {
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            SUCCESS(res, 'Updated', 200);
        })
        .catch(err => {
            ERROR(res, err.message);
        });

}

function remove(req, res) {

    let id = req.body.id.toString().split(',');

    Teacher.destroy({
            where: {
                id: {
                    [Op.in]: id
                }
            }
        })
        .then(() => {
            SUCCESS(res, 'Deleted', 200);
        })
        .catch(err => {
            ERROR(res, err.message);
        });

}


module.exports = {
    get,
    add,
    update,
    remove
}