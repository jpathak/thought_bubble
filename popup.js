function showError(error) {
  console.log("Error!: " + error);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("in the document event listener, now setting up the auth driver");


  document.getElementById("storeButton").addEventListener("click", function() {
    console.log("in click listener");
    var client = new Dropbox.Client({ key: "dczsijabcn73tty" });

    Dropbox.AuthDriver.ChromeExtension.oauthReceiver();
    client.authDriver(new Dropbox.AuthDriver.ChromeExtension({
    receiverPath: "oauth_receiver.html"}));

    /*
    client.authenticate(function(error, client) {
      if (error) {
        console.log("dropbox authentication error: " + error)
        return;
      }
      console.log("dropbox authenticated! Now you can use client to make other API calls");
    });
    */

    client.getAccountInfo(function(error, accountInfo) {
    if (error) {
      return showError(error);  // Something went wrong.
    }

    alert("Hello, " + accountInfo.name + "!");
  });
  });
});
