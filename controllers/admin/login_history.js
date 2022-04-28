const {
    Op,
    Sequelize,
    Login_history
} = require('../../models');

const {
    SUCCESS,
    ERROR
} = require('../../utils');

const GETTER = require('../../utils/getter');


function get(req, res) {

    GETTER(Login_history, req, res, (options) => {
        options.include = {
            all: true
        };
    }, (data) => {
        SUCCESS(res, data, 200);
    });

}

function add(req, res) {



    Login_history.create(req.body)
        .then((data) => {
            SUCCESS(res, data, 200);
        })
        .catch(err => {
            ERROR(res, err.message);
        });

}

function update(req, res) {



    Login_history.update(req.body, {
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

    Login_history.destroy({
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