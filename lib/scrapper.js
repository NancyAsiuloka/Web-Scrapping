const axios = require('axios');
const cheerio = require('cheerio');


async function getHTML(url){
    const { data:html } = await axios.get('https://www.twitter.com/wesbos');

    return html;
};

async function getTwitterFollowers(html){
    // load up cheerio
    const $ = cheerio.load(html);
    const span = $('.css-901oao');
    console.log(span.html());
}

module.exports = { getHTML, getTwitterFollowers };