
const { getHTML, getTwitterFollowers } = require ('./lib/scrapper.js');

async function go(){
    const html = await getHTML('https://www.twitter.com/wesbos');
    const twCount = await getTwitterFollowers(html);
    console.log(twCount);
}

go();