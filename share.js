// Code to share an issue with an elected official on state page
function tweetRep(repHandle) {
  const repUrl = "https://you-can-make-a-difference.webflow.io";
  const rep = `Hey, ${repHandle}! We need you to join us in the fight against Black voter suppression! Will you join the fight?`;
  const repUnescaped = rep
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/, "'");
  window.open(
    "http://twitter.com/share?url=" +
      encodeURIComponent(repUrl) +
      "&text=" +
      encodeURIComponent(repUnescaped).replace(/'/g, "%27")
  );
}
