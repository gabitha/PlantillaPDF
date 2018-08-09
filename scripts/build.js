const { inlineSource } = require('inline-source');
const fs = require('fs');
const path = require('path');
const directory = path.resolve(__dirname, '..');
const htmlpath = path.resolve(__dirname, '..', 'index.html');

inlineSource(htmlpath, {
    compress: true,
  }).then(html => {
    var timestamp = new Date().getTime();
    var filename = 'file' + timestamp + '.html';
    fs.writeFile(path.resolve(directory, filename), html, err => {
      if (err) throw err;
      console.log('El archivo ha sido compilado.');
    });
  }).catch(err => {
    console.log(err)
  });

