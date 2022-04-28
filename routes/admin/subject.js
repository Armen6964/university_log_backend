const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const Subject = require('../../controllers/admin/subject');



const add_query_schema = {
    body: Joi.object({
        teacher_id: Joi.number().max(11).required(),
        unversity_id: Joi.number().max(255).required(),
        name: Joi.string().max(255).required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        teacher_id: Joi.number().max(11),
        unversity_id: Joi.number().max(255),
        name: Joi.string().max(255)
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', Subject.get);

router.post('/', validate_joi(add_query_schema), Subject.add);

router.put('/', validate_joi(update_query_schema), Subject.update);

router.delete('/', validate_joi(remove_query_schema), Subject.remove);

module.exports = router;