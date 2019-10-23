$(document).ready(function(){
  $("form#orderInfo").submit(function(event){

    var customerNoodleChoice = $("#product").val();
    var customerNameInput = $("input#nameInput").val();
    var customerAddressInput = $("input#addressInput").val();

    // console.log("Product is: ", customerNoodleChoice, " ordered by: ", customerNameInput, " at ", customerAddressInput);
    event.preventDefault();

    $(".customerName").text(customerNameInput);
    $("#receipt").show();
  });
});
