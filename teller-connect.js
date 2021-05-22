document.addEventListener("DOMContentLoaded", function() {
    var tellerConnect = TellerConnect.setup({
        applicationId: "app_niva4bnsonc3orr178000",
        environment: 'development',
        onInit: function() {
          console.log("Teller Connect has initialized");
        },
        onSuccess: function(enrollment) {
          console.log("User enrolled successfully", enrollment.accessToken);
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

// import { atoken } from './views/test-page.html'

// console.log(aToken);