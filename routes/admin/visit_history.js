const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const Visit_history = require('../../controllers/admin/visit_history');



const add_query_schema = {
    body: Joi.object({
        student_id: Joi.number().max(11).required(),
        subject_id: Joi.number().max(11).required(),
        absent_count: Joi.number().max(11).required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        student_id: Joi.number().max(11),
        subject_id: Joi.number().max(11),
        absent_count: Joi.number().max(11)
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', Visit_history.get);

router.post('/', validate_joi(add_query_schema), Visit_history.add);

router.put('/', validate_joi(update_query_schema), Visit_history.update);

router.delete('/', validate_joi(remove_query_schema), Visit_history.remove);

module.exports = router;