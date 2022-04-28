const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const Homework = require('../../controllers/admin/homework');



const add_query_schema = {
    body: Joi.object({
        teacher_id: Joi.number().max(11).required(),
        subject_id: Joi.number().max(11).required(),
        deadline: Joi.date().required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        teacher_id: Joi.number().max(11),
        subject_id: Joi.number().max(11),
        deadline: Joi.date()
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', Homework.get);

router.post('/', validate_joi(add_query_schema), Homework.add);

router.put('/', validate_joi(update_query_schema), Homework.update);

router.delete('/', validate_joi(remove_query_schema), Homework.remove);

module.exports = router;