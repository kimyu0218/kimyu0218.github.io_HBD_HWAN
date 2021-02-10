'use strict';
/*야간모드 설정*/
function nightDayHandler(self){ //야간모드 설정
    var target = document.querySelector('body');
    if(self.value === 'night'){ //야간모드
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
      var alist = document.querySelectorAll('a'); //하이퍼링크 색상 변경
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = 'powderblue';
        i = i + 1;
      }
    } else { //낮 모드
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.value = 'night';
      var alist = document.querySelectorAll('a'); //하이퍼링크 색상 변경
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = 'blue';
        i = i + 1;
      }
    }
}
/*시간 여행*/
function change(self){ /*시간 여행*/
    var photo=document.getElementById("our_Photo");
    if(self.value === '12년 후'){ //12년 후
      photo.src="img/backToThePresent.jpg";
      self.value='12년 전';
    }
    else{ //12년 전
      photo.src="img/backToThePast.jpg";
      self.value='12년 후';
    }
}