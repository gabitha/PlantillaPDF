var fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('./node_modules/normalize.css/normalize.css', './assets/normalize.scss', (err) => {
    if (err) throw err;
    console.log('normalize.css was copied');
});

fs.copyFile('./node_modules/paper-css/paper.css', './assets/paper.scss', (err) => {
    if (err) throw err;
    console.log('paper.css was copied');
});