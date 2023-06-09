var express = require('express');
var router = express.Router();
var dashboardcontroler = require('../controllers/dashboardcontroler');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', await dashboardcontroler.dashboard(req, res, next));
});

router.get('/create', async function(req, res, next) {
  res.render('create', await dashboardcontroler.create(req, res, next));
});

router.get('/dashboard', async function(req, res, next) {
  res.render('dashboard', await dashboardcontroler.dashboard(req, res, next));
});

router.get('/remove', async function(req, res, next) {
  res.render('remove', await dashboardcontroler.remove(req, res, next));
});

module.exports = router;
