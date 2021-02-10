$(document).ready(function(){
    $("#control_movie").on("click",function(){ /*영화 통제 버튼*/
      if($("#control_movie").val() === "Hide Movie"){ /*영화 숨기기*/
        $(".movie").hide(1000,function(){});
        $("#control_movie").val("Show Movie");
      }
      else{ /*영화 다시 보이기*/
        if($("#control_domestic").val() === "Hide Domestic"){ /*국내 콘텐츠 표시 상태인 경우*/
          $(".movie.domestic").show(1000,function(){});
        }
        if($("#control_foreign").val() === "Hide Foreign"){ /*해외 콘텐츠 표시 상태인 경우*/
          $(".movie.foreign").show(1000,function(){});
        }
        $("#control_movie").val("Hide Movie");
      }
    })
    $("#control_drama").on("click",function(){ /*드라마 통제 버튼*/
      if($("#control_drama").val() === "Hide Drama"){ /*드라마 숨기기*/
        $(".drama").hide(1000,function(){});
        $("#control_drama").val("Show Drama");
      }
      else{ /*드라마 다시 보이기*/
        if($("#control_domestic").val() === "Hide Domestic"){ /*국내 콘텐츠 표시 상태인 경우*/
          $(".drama.domestic").show(1000,function(){});
        }
        if($("#control_foreign").val() === "Hide Foreign"){ /*해외 콘텐츠 표시 상태인 경우*/
          $(".drama.foreign").show(1000,function(){});
        }
        $("#control_drama").val("Hide Drama");
      }
    })
    $("#control_domestic").on("click",function(){ /*국내 콘텐츠 통제 버튼*/
      if($("#control_domestic").val() === "Hide Domestic"){ /*국내 콘텐츠 숨기기*/
        $(".domestic").hide(1000,function(){});
        $("#control_domestic").val("Show Domestic");
      }
      else{ /*국내 콘텐츠 다시 보이기*/
        if($("#control_movie").val() === "Hide Movie"){ /*영화 표시 상태인 경우*/
          $(".movie.domestic").show(1000,function(){});
        }
        if($("#control_drama").val() === "Hide Drama"){ /*드라마 표시 상태인 경우*/
          $(".drama.domestic").show(1000,function(){});
        }
        $("#control_domestic").val("Hide Domestic");
      }
    })
    $("#control_foreign").on("click",function(){ /*해외 콘텐츠 통제 버튼*/
      if($("#control_foreign").val() === "Hide Foreign"){ /*해외 콘텐츠 숨기기*/
        $(".foreign").hide(1000,function(){});
        $("#control_foreign").val("Show Foreign");
      }
      else{ /*해외 콘텐츠 다시 보이기*/
        if($("#control_movie").val() === "Hide Movie"){ /*영화 표시 상태인 경우*/
          $(".movie.foreign").show(1000,function(){});
        }
        if($("#control_drama").val() === "Hide Drama"){ /*드라마 표시 상태인 경우*/
          $(".drama.foreign").show(1000,function(){});
        }
        $("#control_foreign").val("Hide Foreign");
      }
    })
    $("#Show_Action").on("click",function(){
      $("#action").show(1000,function(){});
      $("#best").hide(1000,function(){});
      $("#thriller").hide(1000,function(){});
      $("#criminal").hide(1000,function(){});
      $("#romance").hide(1000,function(){});
      $("#etc").hide(1000,function(){});
    })
    $("#Show_Thriller").on("click",function(){
      $("#thriller").show(1000,function(){});
      $("#best").hide(1000,function(){});
      $("#action").hide(1000,function(){});
      $("#criminal").hide(1000,function(){});
      $("#romance").hide(1000,function(){});
      $("#etc").hide(1000,function(){});
    })
    $("#Show_Criminal").on("click",function(){
      $("#criminal").show(1000,function(){});
      $("#best").hide(1000,function(){});
      $("#thriller").hide(1000,function(){});
      $("#action").hide(1000,function(){});
      $("#romance").hide(1000,function(){});
      $("#etc").hide(1000,function(){});
    })
    $("#Show_Romance").on("click",function(){
      $("#romance").show(1000,function(){});
      $("#best").hide(1000,function(){});
      $("#thriller").hide(1000,function(){});
      $("#criminal").hide(1000,function(){});
      $("#action").hide(1000,function(){});
      $("#etc").hide(1000,function(){});
    })
    $("#Show_Etc").on("click",function(){
      $("#etc").show(1000,function(){});
      $("#best").hide(1000,function(){});
      $("#thriller").hide(1000,function(){});
      $("#criminal").hide(1000,function(){});
      $("#romance").hide(1000,function(){});
      $("#action").hide(1000,function(){});
    })
});