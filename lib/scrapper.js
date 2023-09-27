const axios = require('axios');
// const cheerio = require('cheerio');


async function getHTML(url){
    const { data } = await axios.get('https://www.twitter.com/wesbos');

    console.log(data);
};

module.exports = { getHTML };