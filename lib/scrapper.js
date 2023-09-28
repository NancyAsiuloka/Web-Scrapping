const axios = require('axios');
const cheerio = require('cheerio');


async function getHTML(url){
    const { data:html } = await axios.get(url);

    return html;
};

async function getTwitterFollowers(html){
    // load up cheerio
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"].ProfileNav-value');
    return span.data('count');
}

async function getInstagramFollowers(html){
    const $ = cheerio.load(html);
    const dataInString = ($('script[type="application/Id+json"]').html());
    const pageObject = JSON.parse(dataInString);
    console.log(parseInt(pageObject.mainEntityOfPage.interactionStatistic.userInteractionCount));
    // const span = $('[data-nav="followers"].ProfileNav-value');
    // return span.data('count');
    // script type="application/cd+json"
}

module.exports = { getHTML, getTwitterFollowers, getInstagramFollowers };