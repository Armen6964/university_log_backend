const express = require('express');
const router = express.Router();
const Joi = require("joi");



const validate_joi = require('../../utils/validate_joi');

const Source_download_history = require('../../controllers/admin/source_download_history');



const add_query_schema = {
    body: Joi.object({
        file_name: Joi.string().max(255).required(),
        subject_id: Joi.number().max(11).required(),
        download_count: Joi.number().max(11).required(),
        year: Joi.number().max(11).required()
    }),
};

const update_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
        file_name: Joi.string().max(255),
        subject_id: Joi.number().max(11),
        download_count: Joi.number().max(11),
        year: Joi.number().max(11)
    }),
};

const remove_query_schema = {
    body: Joi.object({
        id: Joi.number().required(),
    })
};

router.get('/', Source_download_history.get);

router.post('/', validate_joi(add_query_schema), Source_download_history.add);

router.put('/', validate_joi(update_query_schema), Source_download_history.update);

router.delete('/', validate_joi(remove_query_schema), Source_download_history.remove);

module.exports = router;