//function confirmSelection() {
 //       var selectedOption = document.querySelector('input[name="candidate"]:checked');
  //      if (selectedOption) {
   //       alert("your selecction sucessfully submited");
          // Redirect to a new page
   //       window.location.href = "thankyou.html"; // Replace "thankyou.html" with your actual thank you page URL
   //     } else {
   //       alert("Please select a candidate before confirming.");
   //     }
   //   }



      function confirmSelection() {
        var selectedOption = document.querySelector('input[name="candidate"]:checked');
        if (selectedOption) {
          var candidateName = selectedOption.parentElement.textContent.trim();
          document.getElementById('selected-option').textContent = "You've selected: " + candidateName;
          document.getElementById('selected-option').style.display = "block";
          // Alert with selected candidate name
          alert("You have selected : " + candidateName);
          // Redirect to a new page
          window.location.href = "thankyou.html"; // Replace "thankyou.html" with your actual thank you page URL
        } else {
          alert("Please select a candidate before confirming.");
        }
      }//