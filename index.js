const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "name" and "date" property.
*/
let DATA = {
  name: 'wingstako',
  date: new Date().toLocaleDateString('zh-HK', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Asia/Hong_Kong',
  }),
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);

    console.log(DATA);
    fs.writeFileSync('README.md', output);
  });
}

generateReadMe();