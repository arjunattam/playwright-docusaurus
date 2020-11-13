console.log('redirection');

function param(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[#&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// TODO: use versions
// http://localhost:3000/#version=master&path=docs%2Femulation.md&q=geolocation
window.location.href = `${param('path').replace('.md', '')}#${param('q')}`;
