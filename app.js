const express = require('express');
const path = require('path');

const app = express();

app.use('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.use('/c', (req, res) => {
  console.log('path :- ', path.join(__dirname, 'interns', 'c.html'));
  res.sendFile(path.join(__dirname, 'interns', 'c.html'));
});

app.use('/ds', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'ds.html'));
});

app.use('/dts', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'dts.html'));
});

app.use('/java', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'java.html'));
});

app.use('/ml', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'ml.html'));
});
app.use('/python', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'python.html'));
});
app.use('/wt', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'wt.html'));
});
app.use('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'form.html'));
});
app.listen(3000, () => {
  console.log('server is running at 3000');
});
