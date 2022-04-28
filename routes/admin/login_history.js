const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const Login_history = require('../../controllers/admin/login_history');



const add_query_schema = {
    body: Joi.object({
        student_id: Joi.number().max(11).required(),
        device_type: Joi.string().required(),
        university_id: Joi.date().max(11).required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        student_id: Joi.number().max(11),
        device_type: Joi.string(),
        university_id: Joi.date().max(11)
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', Login_history.get);

router.post('/', validate_joi(add_query_schema), Login_history.add);

router.put('/', validate_joi(update_query_schema), Login_history.update);

router.delete('/', validate_joi(remove_query_schema), Login_history.remove);

module.exports = router;