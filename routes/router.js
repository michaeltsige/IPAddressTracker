const express = require('express');
const { sendIp, getIp } = require('./../controllers/controllers');


const router = express.Router();

router
  .route('/ip')
  .get(getIp);

router
  .route('/api/v1')
  .get(sendIp);


module.exports = router;