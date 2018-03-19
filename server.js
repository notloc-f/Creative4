
"use strict";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let Monday = [];
let Tuesday= [];
let Wednesday=[];
let Thursday=[];
let Friday= [];
let Saturday=[];
let Sunday=[];
let eventer = '';
let time = '';
let day ='';

app.get('/api/Monday', (req, res) => {

	  res.send(Monday);
});
app.get('/api/Tuesday', (req, res) => {

	  res.send(Tuesday);
});
app.get('/api/Wednesday', (req, res) => {

	  res.send(Wednesday);
});
app.get('/api/Thursday', (req, res) => {

	  res.send(Thursday);
});
app.get('/api/Friday', (req, res) => {

	  res.send(Friday);
});
app.get('/api/Saturday', (req, res) => {

	  res.send(Saturday);
});
app.get('/api/Sunday', (req, res) => {

	  res.send(Sunday);
});
app.post('/api/Monday', (req, res) => {
	  let item = {eventer:req.body.eventer, time:req.body.time, day: req.body.day};
	  Monday.push(item);
	  res.send(item);
  // res.send(Monday);
});

app.post('/api/Tuesday', (req, res) => {
	  let item = {eventer:req.body.eventer, time:req.body.time, day: req.body.day};
	  Tuesday.push(item);
	  res.send(item);
  // res.send(Monday);
});

app.post('/api/Wednesday', (req, res) => {
	  let item = {eventer:req.body.eventer, time:req.body.time, day: req.body.day};
	  Wednesday.push(item);
	  res.send(item);
  // res.send(Monday);
});

app.post('/api/Thursday', (req, res) => {
	  let item = {eventer:req.body.eventer, time:req.body.time, day: req.body.day};
	  Thursday.push(item);
	  res.send(item);
  // res.send(Monday);
});

app.post('/api/Friday', (req, res) => {
	  let item = {eventer:req.body.eventer, time:req.body.time, day: req.body.day};
	  Friday.push(item);
	  res.send(item);
  // res.send(Monday);
});

app.post('/api/Saturday', (req, res) => {
	  let item = {eventer:req.body.eventer, time:req.body.time, day: req.body.day};
	  Saturday.push(item);
	  res.send(item);
  // res.send(Monday);
});

app.post('/api/Sunday', (req, res) => {
	  let item = {eventer:req.body.eventer, time:req.body.time, day: req.body.day};
	  Sunday.push(item);
	  res.send(item);
  // res.send(Monday);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))
