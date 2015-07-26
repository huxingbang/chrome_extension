chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendRequest(tab.id, {}, function(response) {
    $("#thunderhref").val(response.thunderhref);
  });
});



