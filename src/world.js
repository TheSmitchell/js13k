var $ = function(eleId) { return document.getElementById(eleId); };
var doJump = function(e) { 
  e.stopPropagation();
  var cat = $('cat');
  if (e.charCode === 32 && cat.className.match(/jump/g) === null) { 
    var left = parseInt(cat.style.left,10);
    left = isNaN(left) ? 0 : left;

    if ((left === 31) || (left > 0 && cat.getAttribute('data-dir').match(/left/g))) {
      cat.setAttribute('data-dir','left');
      cat.className = "rjump";
    } else {
      cat.setAttribute('data-dir','right');
      cat.className = "jump";
    }
  }
};

$('cat').setAttribute('data-dir','right');

var ele = document;
ele.addEventListener('keypress',doJump,true);
      
var cat = $('cat');
cat.addEventListener('animationend',function(e) {
  var left = parseInt(cat.style.left,10);
  left = (isNaN(left) ? 0 : left);
  var add = cat.getAttribute('data-dir').match(/left/g)?-1:1;
  cat.style.left = Math.max(0,Math.min(left + add,31)) + "rem"; 
  cat.className='';
  },false);
