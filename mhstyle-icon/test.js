try {
  function myFunction() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByClassName("mh-icons");
    for (var i = 0; i < li.length; i++) {
      var a = li[i].getElementsByClassName("mh-icon-name")[0];
      var txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        li[i].classList.add('mh-jihan');
      } else {
        li[i].style.display = "none";
        li[i].classList.remove('mh-jihan');
      }
    }
  }
} catch {}
try {
  function sortlist() {
    var list, i, switching, listitems, shouldSwitch;
    list = document.querySelector('.mh-icon-line');
    switching = true;
    while (switching) {
      switching = false;
      listitems = list.querySelector('.mh-icons .mh-icon');
      for (i = 0; i < (listitems.length - 1); i++) {
        shouldSwitch = false;
        if (listitems[i].innerHTML.toLowerCase() > listitems[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      listitems[i].parentNode.insertBefore(listitems[i + 1], listitems[i]);
      switching = true;
    }
  }
} catch {}
try {
  var mh_style = new mhstyle_copyboard('.copybutton');
  var scrollbtn = document.getElementById("scrollbtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      scrollbtn.style.display = "block";
    } else {
      scrollbtn.style.display = "none";

    }
  };

  function topFunction() {
    window.scrollTo({
      top: 0,
      right: 0,
      behavior: 'smooth'
    });
  }
} catch {}
try {
  var count_number = document.querySelectorAll(".mh-count-number span");
  var icon_number = document.querySelectorAll(".mh-icons").length;
  for (var i = 0; i < icon_number; i++) {
    count_number[i].innerText = icon_number;
  }
} catch {}
try {
  $(function ($) {
    $.supermodal({
      backButton: true,
      title: '',
      closeButtonIcon: 'mh mhi-times-circle',
      showTitle: true,

    });
  });
} catch {}