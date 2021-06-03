// Main teller-connect connection code provided by the documenttion website from Teller
// Link: https://teller.io/docs/teller-connect
document.addEventListener("DOMContentLoaded", function() {
    var tellerConnect = TellerConnect.setup({
        applicationId: "app_niva4bnsonc3orr178000",
        environment: 'development',
        onInit: function() {
          console.log("Teller Connect has initialized");
        },
        onSuccess: function(enrollment) {
          console.log("User enrolled successfully", enrollment);
          console.log(enrollment);
          let aToken = enrollment.accessToken;
          console.log(aToken);
        },
        onExit: function() {
          console.log("User closed Teller Connect");
        }
      });

      var el = document.getElementById("teller-connect");
      el.addEventListener("click", function() {
        tellerConnect.open();
      });
    });

