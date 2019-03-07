
var normal="abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXZY1234567890"
var balik="ɐqɔpǝⅎƃɥᴉɾʞʅɯuodbɹsʇnʌʍxzʎ∀ꓭϽᗡƎᖵ⅁HIᒋꓘ⅂ꟽNOԀꝹꓤSꓕՈɅϺXZ⅄⇂↊↋ߤ59𝘓860"
var bulat="ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓩⓨⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓏⓎ➊➋➌➍➎➏➐➑➒➓"
var bulat2="ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓩⓨⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓏⓎ➀➁➂➃➄➅➆➇➈➉"
var bulat3="ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓩⓨⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓏⓎ⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾"
var smallcap="ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxᴢʏABCDEFGHIJKLMNOPQRSTUVWXZY1234567890"
var symbol="ᗩᖲᑕᕍᗴℱᘐᖺᓮᒎḰᒪᗰﬡᗝᖰᕋᖇᔕ♈ᘎᐯᙡჯᔓ૪ᗩᗷᑕᗪᕮℱᘐᕼᓰᒎḰᒪᗰᘉ〇ᖘႳᖇᔕ☂ᘮⅤᙡ᙭ᔓᎩ1234567890"
var rusia="aЬcdєfgнїjкlмиоpqґšтцvшxzџABCDЄFБHЇJКLMИОPQЯ₴TЦVШЖZУ12З4567890"
var bold="ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｚｙＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＺＹ１２３４５６７８９０"

function cbulat(_in, _out){var s="";var n=_in.value.toLowerCase();for(i=0; i<n.length; i++){var c=n.charAt(i);for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);if (j<normal.length) {s+=bulat.charAt(j);} else {s+=c;} }_out.value=s;};
function cbulat2(_in, _out){var s="";var n=_in.value.toLowerCase();for(i=0; i<n.length; i++){var c=n.charAt(i);for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);if (j<normal.length) {s+=bulat2.charAt(j);} else {s+=c;}}_out.value=s; };
function cbulat3(_in, _out){var s="";var n=_in.value.toLowerCase();for(i=0; i<n.length; i++){var c=n.charAt(i);for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);if (j<normal.length) {s+=bulat3.charAt(j);} else {s+=c;}}_out.value=s;};
function csmallcap(_in, _out){var s="";var n=_in.value.toLowerCase();for(i=0; i<n.length; i++){var c=n.charAt(i);for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);if (j<normal.length) {s+=smallcap.charAt(j);} else {s+=c;}}_out.value=s;};
function csymbol(_in, _out){var s="";var n=_in.value.toLowerCase();for(i=0; i<n.length; i++){var c=n.charAt(i);for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);if (j<normal.length) {s+=symbol.charAt(j);} else {s+=c;}}_out.value=s;};
function crusia(_in, _out){var s="";var n=_in.value.toLowerCase();for(i=0; i<n.length; i++){var c=n.charAt(i);for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);if (j<normal.length) {s+=rusia.charAt(j);} else {s+=c;}}_out.value=s;};
function cbold(_in, _out){var s="";var n=_in.value.toLowerCase();for(i=0; i<n.length; i++){var c=n.charAt(i);for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);if (j<normal.length) {s+=bold.charAt(j);} else {s+=c;}}_out.value=s;};
function focusFirst() {if (els =oTD.getElementsByTagName("input")) {els[0].focus();}};
function highlight(field) {field.focus();field.select();};
function cbalik() { var result = flipString(document.colongan.colong.value.toLowerCase()); do cument.colongan.colongin.value = result;};
function flipString(aString) {var last = aString.length - 1;var result = new Array(aString.length); for (var i = last; i >= 0; --i) {   var c = aString.charAt(i); var r = flipTable[c]; result[last - i] = r != undefined ? r : c }; return result.join('')};
var flipTable = { 'a' : '\u0250','b' : 'q','c' : '\u0254','d' : 'p','e' : '\u01DD','f' : '\u025F','g' : '\u0183','h' : '\u0265','i' : '\u0131','j' : '\u027E','k' : '\u029E','l' : 'l','m' : '\u026F','n' : 'u','o' : 'o','p' : 'd','q' : 'b','r' : '\u0279','s' : 's','t' : '\u0287','u' : 'n','v' : '\u028C','w' : '\u028D','y' : '\u028E','z' : 'z','1' : '\u21C2','2' : '\u1105','3' : '\u1110','4' : '\u3123','5' : '\u078E', '6' : '9','7' : '\u3125','8' : '8','9' : '6','0' : '0','.' : '\u02D9',',' : "\'","\'" : ',',"\"" : ',,',"?" : ',',"`" : ',',';' : '\u061B','!' : '\u00A1','\u00A1' : '!','?' : '\u00BF','\u00BF' : '?','[' : ']',']' : '[','(' : ')',')' : '(','{' : '}','}' : '{','<' : '>','>' : '<','_' : '\u203E','\r' : '\n' };
for (i in flipTable) {flipTable[flipTable[i]] = i};

var str; function atas() {str = document.colongan.colongin.value; var chuncks = str.match(/.{1,1}/g);  var new_value1 = chuncks.join("̅");document.colongan.colongin.value=new_value1 ;};
function bawah() { str = document.colongan.colongin.value;  var chuncks = str.match(/.{1,1}/g);  var new_value2 = chuncks.join("̲"); document.colongan.colongin.value=new_value2 ;};
function coret() {  str = document.colongan.colongin.value; var chuncks = str.match(/.{1,1}/g);var new_value3 = chuncks.join("̶"); document.colongan.colongin.value=new_value3 ;};
function miring() {  str = document.colongan.colongin.value;var chuncks = str.match(/.{1,1}/g); var new_value4 = chuncks.join("̸");document.colongan.colongin.value=new_value4 ;};
function miring2() {str = document.colongan.colongin.value;  var chuncks = str.match(/.{1,1}/g);  var new_value5 = chuncks.join("̷"); document.colongan.colongin.value=new_value5 ;};
