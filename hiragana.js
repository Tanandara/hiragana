// ตั้งค่าตัวอักษร
/* var hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
   var romanji =
   [
     "a",   "i",   "u",    "e",    "o",
     "ka",  "ki",  "ku",   "ke",   "ko",
     "sa",  "shi", "su",   "se",   "so",
     "ta",  "chi", "tsu",  "te",   "to",
     "na",  "ni",  "nu",   "ne",   "no",
     "ha",  "hi",  "fu",   "he",   "ho",
     "ma",  "mi",  "mu",   "me",   "mo",
     "ya",         "yu",           "yo",
     "ra",  "ri",  "ru",   "re",   "ro",
     "wa",                         "wo","nn"

   ]
*/
var hiragana;
var romanji;
function hiragana_level_change(level){
  switch (level) {
    case "1":
                hiragana = "あいうえおかきくけこさしすせそ";
                romanji =
                [
                  "a",   "i",   "u",    "e",    "o",
                  "ka",  "ki",  "ku",   "ke",   "ko",
                  "sa",  "shi", "su",   "se",   "so"
                ];
      break;
    case "2":
                hiragana = "たちつてとなにぬねのはひふへほ";
                romanji =
                [
                  "ta",  "chi", "tsu",  "te",   "to",
                  "na",  "ni",  "nu",   "ne",   "no",
                  "ha",  "hi",  "fu",   "he",   "ho"
                ];
      break;
    case "3":
                hiragana = "まみむめもやゆよらりるれろわをん";
                romanji =
                [
                  "ma",  "mi",  "mu",   "me",   "mo",
                  "ya",         "yu",           "yo",
                  "ra",  "ri",  "ru",   "re",   "ro",
                  "wa",                         "wo","nn"
                ];
      break;
    default:
                hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
                romanji =
                [
                  "a",   "i",   "u",    "e",    "o",
                  "ka",  "ki",  "ku",   "ke",   "ko",
                  "sa",  "shi", "su",   "se",   "so",
                  "ta",  "chi", "tsu",  "te",   "to",
                  "na",  "ni",  "nu",   "ne",   "no",
                  "ha",  "hi",  "fu",   "he",   "ho",
                  "ma",  "mi",  "mu",   "me",   "mo",
                  "ya",         "yu",           "yo",
                  "ra",  "ri",  "ru",   "re",   "ro",
                  "wa",                         "wo","nn"

                ];

  }
  random_char();
}
hiragana_level_change("init");

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

  $('#hiragana_level').tooltip({
    title :
            "======================= "+
            "ระดับของตัวอักษรมีอยู่ 3 ระดับให้เลือก \r\n"+
            "======================= \r\n"+
            "ระดับ 1 จะมีอยู่ 15 ตัวอักษรได้แก่ \r\n"+
            "あいうえおかきくけこさしすせそ \r\n"+
            "\r\n"+
            "ระดับ 2 จะมีอยู่ 15 ตัวอักษรได้แก่ \r\n"+
            "たちつてとなにぬねのはひふへほ \r\n"+
            "\r\n"+
            "ระดับ 3 จะมีอยู่ 16 ตัวอักษรได้แก่ \r\n"+
            "まみむめもやゆよらりるれろわをん \r\n"
    ,
    placement : "bottom"
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
