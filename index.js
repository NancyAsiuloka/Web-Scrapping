
const { getHTML, getTwitterFollowers, getInstagramFollowers } = require ('./lib/scrapper.js');

async function go(){
    const html = await getHTML('https://www.instagram.com/wesbos');
    const instagramCount = await getInstagramFollowers(html);
    // const twCount = await getTwitterFollowers(html);
    // console.log(`You have ${twCount} followers`);
    // const followers = await getInstagramFollowers('wesbos');

}

go();