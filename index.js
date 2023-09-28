
const { getHTML, getTwitterFollowers, getInstagramFollowers } = require ('./lib/scrapper.js');

async function go(){
    // const html = await getHTML('https://www.twitter.com/wesbos');
    // const twCount = await getTwitterFollowers(html);
    // console.log(`You have ${twCount} followers`);
    const followers = await getInstagramFollowers('wesbos');
    console.log(followers);

}

go();