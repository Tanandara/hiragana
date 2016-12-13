// ตั้งค่าตัวอักษร
var hiragana;
var romanji;
function hiragana_level_change(level){
  switch (level) {
    case "1":
                hiragana =
                [
                    "あ",	"い",	"う",	"え",	"お",
                  	"か",	"き",	"く",	"け",	"こ",
                  	"さ",	"し",	"す",	"せ",	"そ"
                ];
                romanji =
                [
                  "a",   "i",   "u",    "e",    "o",
                  "ka",  "ki",  "ku",   "ke",   "ko",
                  "sa",  "shi", "su",   "se",   "so"
                ];
      break;
    case "2":
                hiragana =
                [
                  "た",	"ち",	"つ",	"て",	"と",
                	"な",	"に",	"ぬ",	"ね",	"の",
                	"は",	"ひ",	"ふ",	"へ",	"ほ"
                ];
                romanji =
                [
                  "ta",  "chi", "tsu",  "te",   "to",
                  "na",  "ni",  "nu",   "ne",   "no",
                  "ha",  "hi",  "fu",   "he",   "ho"
                ];
      break;
    case "3":
                hiragana =
                [
                  "ま",	"み",	"む",	"め",	"も",
                	"や",			   "ゆ",         "よ",
                	"ら",	"り",	"る",	"れ",	"ろ",
                	"わ",							        "を",  "ん"
                ];
                romanji =
                [
                  "ma",  "mi",  "mu",   "me",   "mo",
                  "ya",         "yu",           "yo",
                  "ra",  "ri",  "ru",   "re",   "ro",
                  "wa",                         "wo",  "nn"
                ];
      break;
    case "1-3" :
                hiragana =
                [
                  "あ",	"い",	"う",	"え",	"お",
                  "か",	"き",	"く",	"け",	"こ",
                  "さ",	"し",	"す",	"せ",	"そ",
                  "た",	"ち",	"つ",	"て",	"と",
                  "な",	"に",	"ぬ",	"ね",	"の",
                  "は",	"ひ",	"ふ",	"へ",	"ほ",
                  "ま",	"み",	"む",	"め",	"も",
                  "や",		  	 "ゆ",         "よ",
                  "ら",	"り",	"る",	"れ",	"ろ",
                  "わ",                       "を",  "ん"
                ];
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
                  "wa",                         "wo",  "nn"

                ];
       break;
    case "4":
                hiragana =
                [
                  "が",	"ぎ",	"ぐ",	"げ",	"ご",
                	"ざ",	"じ",	"ず",	"ぜ",	"ぞ",
                	"だ",	"ぢ",	"づ",	"で",	"ど",
                	"ば",	"び",	"ぶ",	"べ",	"ぼ",
                	"ぱ",	"ぴ",	"ぷ",	"ぺ",	"ぽ"
                ];
                romanji =
                [
                  "ga",	 "gi",	"gu",	"ge",	"go",
                  "za",	 "ji",	"zu",	"ze",	"zo",
                  "da",  "di",	"du",	"de",	"do",
                  "ba",	 "bi",	"bu",	"be",	"bo",
                  "pa",	 "pi",	"pu",	"pe",	"po"
                ];
       break;
    case "1-4":
                hiragana =
                [
                  "あ",	"い",	"う",	"え",	"お",
                  "か",	"き",	"く",	"け",	"こ",
                  "さ",	"し",	"す",	"せ",	"そ",
                  "た",	"ち",	"つ",	"て",	"と",
                  "な",	"に",	"ぬ",	"ね",	"の",
                  "は",	"ひ",	"ふ",	"へ",	"ほ",
                  "ま",	"み",	"む",	"め",	"も",
                  "や",		  	 "ゆ",         "よ",
                  "ら",	"り",	"る",	"れ",	"ろ",
                  "わ",                       "を",  "ん",
                  "が",	"ぎ",	"ぐ",	"げ",	"ご",
                	"ざ",	"じ",	"ず",	"ぜ",	"ぞ",
                	"だ",	"ぢ",	"づ",	"で",	"ど",
                	"ば",	"び",	"ぶ",	"べ",	"ぼ",
                	"ぱ",	"ぴ",	"ぷ",	"ぺ",	"ぽ"
                ];
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
                  "wa",                         "wo",  "nn",
                  "ga",	 "gi",	"gu",	  "ge",  	"go",
                  "za",	 "ji",	"zu",   "ze",  	"zo",
                  "da",  "di",	"du",   "de",  	"do",
                  "ba",	 "bi",	"bu",   "be",  	"bo",
                  "pa",	 "pi",	"pu",   "pe",  	"po"
                ];
       break;
    case "5":
                hiragana =
                [
                  "きゃ",			  "きゅ",			  "きょ",
                  "しゃ",			  "しゅ",			  "しょ",
                  "ちゃ",			  "ちゅ",			  "ちょ",
                  "にゃ",			  "にゅ",			  "にょ",
                  "ひゃ",			  "ひゅ",			  "ひょ",
                  "みゃ",			  "みゅ",			  "みょ",
                  "りゃ",			  "りゅ",			  "りょ",
                  "ぎゃ",			  "ぎゅ",			  "ぎょ",
                  "じゃ",			  "じゅ",			  "じょ",
                  "びゃ",			  "びゅ",			  "びょ",
                  "ぴゃ",			  "ぴゅ",			  "ぴょ"
                ];
                romanji =
                [
                  "kya",		    "kyu",			    "kyo",
                  "sha",	     	"shu",     			"sho",
                  "cha",	     	"chi",     			"cho",
                  "nya",	     	"nyu",     			"nyo",
                  "hya",	     	"hyu",     			"hyo",
                  "mya",	     	"myu",     			"myo",
                  "rya",    		"ryu",      		"ryo",
                  "gya",	     	"gyu",     			"gyo",
                  "ja",		     	"ju",      			"jo",
                  "bya",	     	"byu",     			"byo",
                  "pya",	     	"pyu",     			"pyo"
                ];
       break;
    default:
                hiragana =
                [
                  "あ",	"い",	"う",	"え",	"お",
                  "か",	"き",	"く",	"け",	"こ",
                  "さ",	"し",	"す",	"せ",	"そ",
                  "た",	"ち",	"つ",	"て",	"と",
                  "な",	"に",	"ぬ",	"ね",	"の",
                  "は",	"ひ",	"ふ",	"へ",	"ほ",
                  "ま",	"み",	"む",	"め",	"も",
                  "や",		  	 "ゆ",         "よ",
                  "ら",	"り",	"る",	"れ",	"ろ",
                  "わ",                       "を",  "ん",
                  "が",	"ぎ",	"ぐ",	"げ",	"ご",
                  "ざ",	"じ",	"ず",	"ぜ",	"ぞ",
                  "だ",	"ぢ",	"づ",	"で",	"ど",
                  "ば",	"び",	"ぶ",	"べ",	"ぼ",
                  "ぱ",	"ぴ",	"ぷ",	"ぺ",	"ぽ",
                  "きゃ",			  "きゅ",			  "きょ",
                	"しゃ",			  "しゅ",			  "しょ",
                	"ちゃ",			  "ちゅ",			  "ちょ",
                	"にゃ",			  "にゅ",			  "にょ",
                	"ひゃ",			  "ひゅ",			  "ひょ",
                	"みゃ",			  "みゅ",			  "みょ",
                	"りゃ",			  "りゅ",			  "りょ",
                	"ぎゃ",			  "ぎゅ",			  "ぎょ",
                	"じゃ",			  "じゅ",			  "じょ",
                	"びゃ",			  "びゅ",			  "びょ",
                	"ぴゃ",			  "ぴゅ",			  "ぴょ"
                ];
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
                  "wa",                         "wo",  "nn",
                  "ga",	 "gi",	"gu",	  "ge",  	"go",
                  "za",	 "ji",	"zu",   "ze",  	"zo",
                  "da",  "di",	"du",   "de",  	"do",
                  "ba",	 "bi",	"bu",   "be",  	"bo",
                  "pa",	 "pi",	"pu",   "pe",  	"po",
                  "kya",		    "kyu",			    "kyo",
                  "sha",	     	"shu",     			"sho",
                  "cha",	     	"chi",     			"cho",
                  "nya",	     	"nyu",     			"nyo",
                  "hya",	     	"hyu",     			"hyo",
                  "mya",	     	"myu",     			"myo",
                  "rya",    		"ryu",      		"ryo",
                  "gya",	     	"gyu",     			"gyo",
                  "ja",		     	"ju",      			"jo",
                  "bya",	     	"byu",     			"byo",
                  "pya",	     	"pyu",     			"pyo"
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
            "ระดับของตัวอักษรมีอยู่ 5 ระดับให้เลือก \r\n"+
            "======================= \r\n"+
            "แบบ 1 จะมีอยู่ 15 ตัวอักษรได้แก่ \r\n"+
            "あいうえおかきくけこさしすせそ \r\n"+
            "\r\n"+
            "แบบ 2 จะมีอยู่ 15 ตัวอักษรได้แก่ \r\n"+
            "たちつてとなにぬねのはひふへほ \r\n"+
            "\r\n"+
            "แบบ 3 จะมีอยู่ 16 ตัวอักษรได้แก่ \r\n"+
            "まみむめもやゆよらりるれろわをん \r\n"+
            "\r\n"+
            "แบบ 4 จะมีอยู่ 25 ตัวอักษรได้แก่ \r\n"+
            "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ \r\n"+
            "\r\n"+
            "แบบ 5 จะมีอยู่ 33 ตัวอักษรได้แก่ \r\n"+
            "きゃ,きゅ,きょ,しゃ,しゅ,しょ,\r\n"+
            "ちゃ,ちゅ,ちょ,にゃ,にゅ,にょ,\r\n"+
            "ひゃ,ひゅ,ひょ,みゃ,みゅ,みょ,\r\n"+
            "りゃ,りゅ,りょ,ぎゃ,ぎゅ,ぎょ,\r\n"+
            "じゃ,じゅ,じょ,びゃ,びゅ,びょ,\r\n"+
            "ぴゃ,ぴゅ,ぴょ \r\n"

    ,
    placement : "bottom"
  });

});

// ตรวจสอบผลลัพท์
function check_result(value,text){
  if(
    hiragana.indexOf(text) == romanji.indexOf(value) ||
    hiragana.indexOf(text) == hiragana.indexOf(value)
    ){
    speak(value);
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


function speak(value){
  value = !/[A-Za-z]+/gm.test(value) ? romanji[hiragana.indexOf(value)] : value ;
  toastr.info('play '+value+'.mp3');
  var audio = new Audio('speech/'+value+'.mp3');
  audio.play();
}
