const axios = require('axios');
const cheerio = require('cheerio');


async function getHTML(url){
    const { data:html } = await axios.get('https://www.twitter.com/wesbos');

    return html;
};

async function getTwitterFollowers(html){
    // load up cheerio
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"].ProfileNav-value');
    return span.data('count');
}

async function getInstagramFollowers(username = 'wesbos'){
    const { data } = await axios.get(`https://www.instagram.com/${username}/?__a=1`)
    console.log(data);
}

module.exports = { getHTML, getTwitterFollowers, getInstagramFollowers };