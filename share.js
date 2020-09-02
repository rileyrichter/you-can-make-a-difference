// Code to share an issue with an elected official on state page
// declare a funtion called tweetRep
function tweetRep(repHandle) {
  //set the url that will be shared in the tweet
  const repUrl = "https://you-can-make-a-difference.webflow.io";
  // set the copy that will be shared in the tweet
  const rep = `Hey, ${repHandle}! We need you to join us in the fight against Black voter suppression! Will you join the fight?`;
  // unescape the copy so that it doesn't bork Twitter
  const repUnescaped = rep
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/, "'");
  // open a Twitter share window and add the copy and the url
  window.open(
    "http://twitter.com/share?url=" +
      encodeURIComponent(repUrl) +
      "&text=" +
      encodeURIComponent(repUnescaped).replace(/'/g, "%27")
  );
}
