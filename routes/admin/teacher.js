const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const Teacher = require('../../controllers/admin/teacher');



const add_query_schema = {
    body: Joi.object({
        university_id: Joi.number().max(11).required(),
        full_name: Joi.string().max(255).required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        university_id: Joi.number().max(11),
        full_name: Joi.string().max(255)
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', Teacher.get);

router.post('/', validate_joi(add_query_schema), Teacher.add);

router.put('/', validate_joi(update_query_schema), Teacher.update);

router.delete('/', validate_joi(remove_query_schema), Teacher.remove);

module.exports = router;