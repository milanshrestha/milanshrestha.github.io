    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");


    menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }

    

    /* //Scroll To An Element  */
    jQuery.fn.a = function(selctor){  $('html, body').animate({ scrollTop: $(this).offset().top}, 500);}
                                                      function scrollte(){  $('.secondary-section').a()};
    $("#tpBtn").click(function(){
      $('html, body').animate({scrollTop: '0px'}, 500);
    });
  
  /* //Scroll To  Top  */
  var btn = $('#tpBtn');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 900) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });