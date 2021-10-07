document.addEventListener(
  "DOMContentLoaded",
  function () {
    // format JSON method
    document.getElementById("submit").addEventListener(
      "click",
      function () {
        var jsonValue = null;
        try {
          if (document.getElementById("inputTxt").value) {
            jsonValue = document
              .getElementById("inputTxt")
              .value.replace('"{', "{")
              .replace('}"', "}");

            // condition check for format or deformat
            if (document.getElementById("deformat").checked) {
              document.getElementById("inputTxt").value = JSON.stringify(
                JSON.parse(jsonValue)
              );
            } else {
              document.getElementById("inputTxt").value = JSON.stringify(
                JSON.parse(jsonValue),
                null,
                2
              );
            }
            // copy the formatted content
            copyContent();
          } else {
            // error handler
            document.getElementById("copiedMsg").style.display = "none";
            document.getElementById("errorMsg").style.display = "block";
            setTimeout(function () {
              document.getElementById("errorMsg").style.display = "none";
            }, 6500);
          }
        } catch (err) {}
      },
      false
    );

    // loads google analytics scripts
    loadScript();
  },
  false
);

function copyContent() {
  if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var copyTextarea = document.getElementById("inputTxt");
    copyTextarea.select();

    try {
      document.execCommand("copy");
      document.getElementById("errorMsg").style.display = "none";
      document.getElementById("copiedMsg").style.display = "block";

      setTimeout(function () {
        document.getElementById("copiedMsg").style.display = "none";
      }, 6500);

      // to unselect the selection content
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  }
}

function gtag() {
  dataLayer.push(arguments);
}

function loadScript() {
  var scriptTag = document.createElement("script");
  scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=UA-102573905-3";
  scriptTag.async = true;
  document.querySelector("head").append(scriptTag);

  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", "UA-102573905-3");
}
