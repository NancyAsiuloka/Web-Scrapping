
const { getHTML, getTwitterFollowers } = require ('./lib/scrapper.js');

async function go(){
    getTwitterFollowers(await getHTML('https://www.twitter.com/wesbos'));
}

go();