var i = 0;
var videoSource = new Array();
videoSource[0] =
  "../vids/mixkit-playful-boy-in-consultation-with-the-dentist.mp4";
videoSource[1] =
  "../vids/mixkit-young-man-in-consultation-with-the-dentist.mp4";
var videoCount = videoSource.length;

// document.getElementById("myVideo").setAttribute("src", videoSource[0]);
// Create a function to load and play the videos.

$(document).ready(function () {
  console.log("hwody");
  $("#myVideo").attr("src", videoSource[i]);
  $("#myVideo").on("ended", myHandler);

  function videoPlay(videoNum) {
    $("#myVideo").attr("src", videoSource[videoNum]);
  }
  function myHandler() {
    //   console.log(i);
    i++;
    if (i == videoCount) {
      i = 0;
      videoPlay(i);
    } else {
      videoPlay(i);
    }
  }
});

// document
//   .getElementById("myVideo")
//   .addEventListener(
//     "ended",
//     document.getElementById("myVideo").setAttribute("src", videoSource[1]),
//     false
//   );
// function videoPlay(videoNum) {
// //   document.getElementById("myVideo").setAttribute("src", videoSource[videoNum]);
//   //   document.getElementById("myVideo").load();
//   //   document.getElementById("myVideo").play();
// }

// function myHandler() {
//   //   console.log(i);

//   i++;
//   if (i == videoCount) {
//     i = 0;
//     videoPlay(i);
//   } else {
//     videoPlay(i);
//   }
// }
// document.getElementById("myVideo").addEventListener("ended", myHandler, false);
