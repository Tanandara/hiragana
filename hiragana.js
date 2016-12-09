
// ตั้งค่าตัวอักษร
var hiragana = "あいうえおかきくけこさしすせそ";
var romanji =
[
  "a","i","u","e","o",
  "ka","ki","ku","ke","ko",
  "sa","shi","su","se","so"
]

// คะแนน
var score = 0;

// jquery event
$(function(){
  $("#hiragana-button input[type=button]").click(function(){
    check_result($(this)[0].value,$("#random_char").text());
  });

  $('#romanji_textbox').keypress(function (e) {
    if (e.which == 13) {
      var text_value = $(this)[0].value;
      if(romanji.indexOf(text_value)==-1){
        toastr.error("character not found");
        $(this)[0].value = "";
      }else{
        check_result(text_value,$("#random_char").text());
        $(this)[0].value = "";
      }
      return false;    //<---- Add this line
    }
  });

  $('#hiragana_textbox').keypress(function (e) {
    if (e.which == 13) {
      var text_value = $(this)[0].value;
      if(hiragana.indexOf(text_value)==-1){
        toastr.error("character not found");
        $(this)[0].value = "";
      }else{
        check_result(text_value,$("#random_char").text());
        $(this)[0].value = "";
      }
      return false;    //<---- Add this line
    }
  });

});

// ตรวจสอบผลลัพท์
function check_result(button_value,text){
  if(
    hiragana.indexOf(text) == romanji.indexOf(button_value) ||
    hiragana.indexOf(text) == hiragana.indexOf(button_value)
    ){
    count+=3;
    toastr.success("+1 score");
    toastr.success("+2 seconds");
    score += 1;
    $("#score").val(score);
    random_char();
  }else{
    toastr.error("-2 score");
    score -= 2;
    if(score <= -1){
      gameover();
    }
    $("#score").val(score);
  }
}

// สุ่มตัวอักษร
function random_char(){
  // สุ่มตัวเลข
  var rand_i = Math.floor((Math.random() * hiragana.length));
  // นำตัวเลขที่สุ่มมัน set ค่าลงไปใน element
  $("#random_char").text(hiragana[rand_i]);
}

// set ข้อความเริ่มต้น
random_char();

// ตั้งค่า toastr
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}









var count=11;
var counter=setInterval(timer, 1000);
function timer()
{
  count=count-1;
  if (count <= -1)
  {
    clearInterval(counter);
  　gameover();
    return;
  }
 document.getElementById("timer").innerHTML= count + " secs";
}



function newgame(){
  count=11;
  score=0;
  clearInterval(counter);
  counter=setInterval(timer, 1000);
  $("#score").val(score);
  random_char();
}

function gameover(){
  score=0;
  $("#score").val(score);
  $('#myModal').modal('show');
}
