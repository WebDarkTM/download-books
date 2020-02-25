//COPY FROM HERE

/* WEBDARK */
/* Modify below with your preferences */
var book 		= '425';
var initialPage = '1';
var finalPage   = '500';
var format	    = '.jpg';
/* ---------------------------------- */

var link = 'https://files.site.com/book/' + book + '/p_';
var urls = []
for(var i=initialPage; i<=finalPage; i++) urls[i] = link + i + format;
var interval = setInterval(download, 10, urls);
function download(urls) {
  var url = urls.pop();
  var a = document.createElement("a");
  a.setAttribute('href', url);
  a.setAttribute('download', '');
  a.setAttribute('target', '_blank');
  a.click();
}

// TO HERE
