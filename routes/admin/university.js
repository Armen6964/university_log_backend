const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const University = require('../../controllers/admin/university');



const add_query_schema = {
    body: Joi.object({
        name: Joi.string().max(255).required(),
        country: Joi.string().max(255).required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        name: Joi.string().max(255),
        country: Joi.string().max(255)
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', University.get);

router.post('/', validate_joi(add_query_schema), University.add);

router.put('/', validate_joi(update_query_schema), University.update);

router.delete('/', validate_joi(remove_query_schema), University.remove);

module.exports = router;