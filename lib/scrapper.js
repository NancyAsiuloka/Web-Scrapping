const axios = require('axios');
// const cheerio = require('cheerio');


async function getHTML(url){
    const res = await axios.get('https://www.twitter.com/wesbos');

    console.log(res);
};

module.exports = { getHTML };