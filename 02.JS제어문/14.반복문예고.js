
// a 태그가
// night 모드에서는 밝게
// day 모드에서는 어둡게 할 수는 없을까?

var target = document.querySelector('body')
if(this.value === 'night'){
  target.style.backgroundColor = 'black';
  target.style.color = 'white';
  this.value = 'day'

  var links = document.querySelectorAll('a');
  var i = 0;
  while (i<links.length) {
    links[i].style.color = 'powerblue';
    i=i+1;
  }
}
else{
  target.style.backgroundColor = 'white';
  target.style.color = 'black';
  this.value = 'night'

  var links = document.querySelectorAll('a');
  var i = 0;
  while (i<links.length) {
    links[i].style.color = 'blue';
    i=i+1;
  }

// 배열과 반본문 이용 
