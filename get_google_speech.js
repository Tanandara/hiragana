var token = require('google-translate-token');
var hiragana =
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
  "ja",		     	"ji",      			"jo",
  "bya",	     	"byu",     			"byo",
  "pya",	     	"pyu",     			"pyo"
];

var exec = require('child_process').exec;

hiragana.forEach((n,i)=>{
  token.get(n).then(x=>{
      console.log(n,i,romanji[i],x.value);
      exec(`curl "https://translate.google.com/translate_tts?ie=UTF-8&q=`+encodeURI(hiragana[i])+`&tl=ja&total=1&idx=0&textlen=`+hiragana[i].length+`&tk=`+x.value+`&client=t&prev=input" -H 'Referer: https://translate.google.com/' -H 'Accept-Encoding: identity;q=1, *;q=0' -H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36' -H 'Range: bytes=0-' --compressed -o `+romanji[i]+`.mp3`, function(error, stdout, stderr) {
          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
      });
  });
});
