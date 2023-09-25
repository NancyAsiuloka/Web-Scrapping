
const { getHTML } = require ('./lib/scrapper.js');

async function go(){
    console.log(await getHTML('https://www.instagram.com/wesbos/'))
}