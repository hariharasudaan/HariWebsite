window.onscroll = function() {
  var el = document.getElementsByClassName('header')[0];
  var className = 'small';
  if (el.classList) {
    if (window.scrollY > 10)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};

var applyScrolling = function (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb.call(null, i, arr[i])
  }
}

var anchors = document.querySelectorAll("a[href^='#']")
if (window.scrollTo) {
  applyScrolling(anchors, function (index, el) {
    var target = document.getElementById(el.getAttribute('href').substring(1))
    el.addEventListener('click', function (e) {
      console.log(target)
      e.preventDefault()
      window.scrollTo(0, target.offsetTop)
    })
  })
}
