const express = require('express');
const router = express.Router();

router.use('/student', require('./student'));

router.use('/teacher', require('./teacher'));

router.use('/homework', require('./homework'));

router.use('/source_download_history', require('./source_download_history'));

router.use('/visit_history', require('./visit_history'));

router.use('/subject', require('./subject'));

router.use('/homework_submit_history', require('./homework_submit_history'));

router.use('/login_history', require('./login_history'));

router.use('/university', require('./university'));

module.exports = router;