const axios = require('axios');
const cheerio = require('cheerio');


async function getHTML(url){
    const { data:html } = await axios.get('https://www.twitter.com/wesbos');

    return html;
};

async function getTwitterFollowers(html){

}

module.exports = { getHTML };