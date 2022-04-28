const {
    Op,
    Sequelize,
    Homework
} = require('../../models');

const {
    SUCCESS,
    ERROR
} = require('../../utils');

const GETTER = require('../../utils/getter');


function get(req, res) {

    GETTER(Homework, req, res, (options) => {
        options.include = {
            all: true
        };
    }, (data) => {
        SUCCESS(res, data, 200);
    });

}

function add(req, res) {



    Homework.create(req.body)
        .then((data) => {
            SUCCESS(res, data, 200);
        })
        .catch(err => {
            ERROR(res, err.message);
        });

}

function update(req, res) {



    Homework.update(req.body, {
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

    Homework.destroy({
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