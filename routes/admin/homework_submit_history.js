const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const Homework_submit_history = require('../../controllers/admin/homework_submit_history');



const add_query_schema = {
    body: Joi.object({
        student_id: Joi.number().max(11).required(),
        homework_id: Joi.number().max(11).required(),
        submit_id: Joi.number().max(11).required(),
        university_id: Joi.number().max(1).required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        student_id: Joi.number().max(11),
        homework_id: Joi.number().max(11),
        submit_id: Joi.number().max(11),
        university_id: Joi.number().max(1)
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', Homework_submit_history.get);

router.post('/', validate_joi(add_query_schema), Homework_submit_history.add);

router.put('/', validate_joi(update_query_schema), Homework_submit_history.update);

router.delete('/', validate_joi(remove_query_schema), Homework_submit_history.remove);

module.exports = router;