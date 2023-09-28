
const { getHTML, getTwitterFollowers } = require ('./lib/scrapper.js');

async function go(){
    const html = await getHTML('https://www.twitter.com/wesbos');
    const twCount = getTwitterFollowers(html)
}

go();