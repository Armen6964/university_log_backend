const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const Student = require('../../controllers/admin/student');



const add_query_schema = {
    body: Joi.object({
        full_name: Joi.string().max(255).required(),
        birthday: Joi.date().required(),
        profession: Joi.string().max(255).required(),
        entery_date: Joi.date().required(),
        university_id: Joi.number().max(11).required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        full_name: Joi.string().max(255),
        birthday: Joi.date(),
        profession: Joi.string().max(255),
        entery_date: Joi.date(),
        university_id: Joi.number().max(11)
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', Student.get);

router.post('/', validate_joi(add_query_schema), Student.add);

router.put('/', validate_joi(update_query_schema), Student.update);

router.delete('/', validate_joi(remove_query_schema), Student.remove);

module.exports = router;