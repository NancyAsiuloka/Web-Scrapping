
const { getHTML, getTwitterFollowers, getInstagramFollowers } = require ('./lib/scrapper.js');

async function go(){
    const iPromise =  getHTML('https://www.instagram.com/wesbos');
    const tPromise =  getHTML('https://www.twitter.com/wesbos');
    const [ instagramHTML, twitterHTML ] = await Promise.all([iPromise, tPromise]);

    const instagramCount = await getInstagramFollowers(instagramHTML);
    const twCount = await getTwitterFollowers(twitterHTML);
    console.log(`You have ${twCount} twitter followers and ${instagramCount} instagram followers`);
    // const followers = await getInstagramFollowers('wesbos');

}

go();