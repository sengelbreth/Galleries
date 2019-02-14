var d = new Date();
var n = d.getDay();

console.log("am a alive !!");

init();

function init() {
  if (n == 2) {
    document.querySelector("#image1").src =
      "http://baastrup.com/wp-content/uploads/200 x200 VIP 3 0.3.jpg";
    document.querySelector("#image2").src =
      "http://baastrup.com/wp-content/uploads/200 x200 VIP 1.jpg";
    document.querySelector("#image3").src =
      "http://baastrup.com/wp-content/uploads/200 x200 VIP 2.jpg";
    document.querySelector("#image4").src =
      "http://baastrup.com/wp-content/uploads/200 x200 VIP 4.jpg";
  } else if (n == 1) {
    document.querySelector("#image2").src = "200 x200 VIP 2.jpg";
  }

  console.log(n);
}
