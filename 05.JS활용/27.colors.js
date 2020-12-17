var Links = {
  setColor : function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i += 1;
    }
  }
}

var Body = {
  setColor : function(color){ document.querySelector('body').style.color = color },
  setBackGroundColor : function(color){ document.querySelector('body').style.backgroundColor = color }
}

//지금은 에러가 나지만 아래와 같이 객체.함수명 식으로 함수를 실행한다.
function nightDayHandler(self){ //2번. 넘어온 this를 self로 받는다.
  var target = document.querySelector('body')
  if(self.value === 'night'){
    Body.setBackGroundColor('black')
    Body.setColor('white')
    Links.setColor('powderBlue')
    self.value = 'day'
  }
  else{
    Body.setBackGroundColor('white')
    Body.setColor('black')
    Links.setColor('blue')
    self.value = 'night'
  }
}
