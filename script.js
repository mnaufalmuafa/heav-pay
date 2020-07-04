$(document).ready(function(){
  document.getElementById("form").reset();
  setPaymentMethodOnChangeListener();
});

function setPaymentMethodOnChangeListener() {
  $("#paymentMethod").change(function() {
    var paymentMethod = $("#paymentMethod").val();
    console.log(paymentMethod);
    if (paymentMethod == "BNI") {
      $("#paymentCodeLabel").html("No Virtual Account");
    }
    else {
      $("#paymentCodeLabel").html("Kode Pembayaran");
    }
  });
}