// jQuery를 적용해 코드 변경하기

var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i += 1;
    // }
    // 위의 코드를 jQuery로 변경하자
    $('a').css('color', color) //html 코드 안의 모든 a 태그를 관리하겠다는 의미
  }
}

var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color = color
    $('body').css('color', color)
  },
  setBackGroundColor : function(color){
    // document.querySelector('body').style.backgroundColor = color
    $('body').css('backgroundColor', color) 
  }
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
