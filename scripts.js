document.addEventListener('DOMContentLoaded',()=>{
	//  Background Scripting Begins
      var slide_indexx, slidess;
      function galleryy() {
        slide_indexx = 0;
        slidess = document.querySelectorAll(".image_holderr");
        slidess[slide_indexx].style.opacity = 1;
      }
      galleryy();

      intervall = null;
      function set_timerr() {
        intervall = setInterval(function () {
          increase_slidee(1);
        }, 3000);
      }
      set_timerr();

      function increase_slidee(addd) {
        to_move_slidee(slide_indexx + addd);
      }

      function to_move_slidee(nn) {
        var presentt, futuree;

        if (nn != slide_indexx) {
          if (nn == slidess.length) {
            nn = 0;
          }

          presentt = slidess[slide_indexx];
          futuree = slidess[nn];

          for (var g = 0; g < slidess.length; g++) {
            slidess[g].className = "image_holderr";
            slidess[g].style.opacity = 0;
          }

          presentt.classList.add("present_slide_go_leftt");
          futuree.classList.add("future_slide_come_leftt");
          slide_indexx = nn;
        }
      }

      //   End of Background Scripting
})