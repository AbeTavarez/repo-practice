const render = data => {
    data.forEach(item => {
      const $listItem = $("<div>").text(item.descriptor);
      const $whatPoliceDoButton = $("<button>").attr("type", "button").text("WHAT DID THE POLICE DO");
      const $resolutionDescription = $("<p>").text(item.resolution_description).addClass("hidden").addClass("show");
      $listItem.append($whatPoliceDoButton, $resolutionDescription);
      $(".container").append($($listItem));
      $whatPoliceDoButton.on("click", event => {
          $resolutionDescription.toggleClass("hidden")
          $resolutionDescription.toggleClass("show")
      })
    })
  }
  const clearContainer = () => {$(".container").empty()}
  $(() => {
      $("button").on("click", event => {
      clearContainer();
      const $borough = $(event.currentTarget).val();
      $borough.toUpperCase()
      const $inputValue = $("#input-box").val();
      console.log($inputValue)

      let $numComplaints = 10;
      if ($inputValue) {
          $numComplaints = $inputValue;
      };

      const $promiseCity = $.ajax({
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
        type: "GET",
        data: {
          $limit: $numComplaints,
          $$app_token: "QstcBdZReElTLIDJ7XF2Ne8gl",
          agency: "NYPD",
          borough: $borough
        }
      });
      console.log($promiseCity)
      $promiseCity.then(function(data) {
        render(data);
      });
    });
  });