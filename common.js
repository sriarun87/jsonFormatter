document.addEventListener('DOMContentLoaded', function() {

  // format JSON method
  var formatButton = document.getElementById('format');
  formatButton.addEventListener('click', function() {

    var jsonValue = document.getElementById('inputTxt').value.replace('"{', '{').replace('}"', '}');
    document.getElementById('inputTxt').value = JSON.stringify(JSON.parse(jsonValue), null, 2);

    copyContent();

  }, false);

  // format JSON method
  var deFormatButton = document.getElementById('deformat');
  deFormatButton.addEventListener('click', function() {

    var jsonValue = document.getElementById('inputTxt').value.replace('"{', '{').replace('}"', '}');
    document.getElementById('inputTxt').value = JSON.stringify(JSON.parse(jsonValue));

    copyContent();

  }, false);

  // clear the textarea or reset the value
  var resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', function() {

    document.getElementById('inputTxt').value = "";

  }, false);

}, false);

function copyContent() {

  if( document.queryCommandSupported && document.queryCommandSupported("copy") )  {

    var copyTextarea = document.getElementById('inputTxt');
    copyTextarea.select();

    try {
      document.execCommand('copy');
      document.getElementById('copiedMsg').style.display = 'block';

      setTimeout(function() {
        document.getElementById('copiedMsg').style.display = 'none';
      }, 6500);

      // to unselect the selection content
      if ( window.getSelection ) {
        window.getSelection().removeAllRanges();
      }
    } 
    catch (err) {
    }
  }
}