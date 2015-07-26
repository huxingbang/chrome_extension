
function getThunderHref()
{
    var thunderhref = $("input");
    var len = thunderhref.length;
    for(var i=0; i<len; i++){
        var inputVal = $(thunderhref[i]).val(); 
        var match = inputVal.match("^xzurl=(.+)");
        if(match){
            return match[1];
        }
    }
}

console.log(getThunderHref());

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
        sendResponse({thunderhref:getThunderHref()});
});