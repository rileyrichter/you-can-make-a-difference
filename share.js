// Code to share an issue with an elected official
function tweetRep(twitterhandle) {
  const yourRep = "ARTISTPILL";
  const yourIssue = "SONGNAMEPILL";
  const repSlug = "SLUGPILL";
  const repUrl = "https://rapperradio.com/song/" + repSlug;
  const rep =
    "Hey, " +
    twitterhandle +
    "! I want to hear " +
    yourRep +
    "'s " +
    yourIssue +
    " on air!";
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
