/* 
   File Name: index.js
   Student's Name: Zhaoxing Chang
   Student ID: 301297266
   Date: September 30, 2023
*/
var express = require('express');
var router = express.Router();

// Define routes for various pages

router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme' );
});
router.get('/projects', function(req, res, next) {
  res.render('projects' );
});
router.get('/services', function(req, res, next) {
  res.render('services' );
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
