var ccv = {
 lesegeschwindigkeit: 30, // Zeichen pro Sekunde
 wartenachricht: 'Bitte nehmen Sie sich Zeit, den Beitrag und die bisherigen Kommentare zu lesen. Das Kommentarfeld wird rechtzeitig freigeschaltet.',
 beitrag_query = ["class", "entry-content"], // HTML-ID oder Class des Beitrags,
 formular_query = ["id", "commentform"], // HTML-ID oder Class des Kommentarformulars
 timeout: null
};

if (typeof document.hidden !== "undefined") {
 ccv.hidden = "hidden";
 ccv.visibilitychange = "visibilitychange";
 ccv.pagevisibility = true;
} else if (typeof document.mozHidden !== "undefined") {
 ccv.hidden = "mozHidden";
 ccv.visibilitychange = "mozvisibilitychange";
 ccv.pagevisibility = true;
} else if (typeof document.msHidden !== "undefined") {
 ccv.hidden = "msHidden";
 ccv.visibilitychange = "msvisibilitychange";
 ccv.pagevisibility = true;
} else if (typeof document.webkitHidden !== "undefined") {
 ccv.hidden = "webkitHidden";
 ccv.visibilitychange = "webkitvisibilitychange";
 ccv.pagevisibility = true;
} else if (typeof document.oHidden !== "undefined") {
 ccv.hidden = "oHidden";
 ccv.visibilitychange = "ovisibilitychange";
 ccv.pagevisibility = true;
}

if (ccv.hidden) ccv.pause = function() {
 if (document[ccv.hidden]) {
  var tmp = new Date();
  var stop = tmp.getTime();
  ccv.abgelaufen = stop - ccv.start;
  console.log('Countdown unterbrochen bei ' + ccv.abgelaufen + ' von ' + ccv.restzeit + ' Millisekunden');
  ccv.restzeit -= ccv.abgelaufen;
  window.clearTimeout(ccv.timeout);
 } else {
  var tmp = new Date();
  ccv.start = tmp.getTime();
  console.log('Noch ' + ccv.restzeit + ' Millisekunden bis zur Freigabe');
  ccv.timeout = window.setTimeout('ccv.outit()', ccv.restzeit);
 }
};

if (ccv.pagevisibility) document.addEventListener(ccv.visibilitychange, ccv.pause, true);

if (ccv.hidden) window.addEventListener('DOMContentLoaded', function() {

 ccv.textlaenge_ermitteln = function() {
 ccv.beitrag = (ccv.beitrag_query[0] == "id")?
  document.getElementById(ccv.beitrag_query[1]) :
  document.getElementsByClassName(ccv.beitrag_query[1])[0];
  var tl = ccv.beitrag.innerHTML;
  tl = tl.replace(/\W/g, '');
  return tl.length;
 };

 ccv.formular = (ccv.formular_query[0] == "id")?
  document.getElementById(ccv.formular_query[1]) :
  document.getElementsByClassName(ccv.formular_query[1])[0];
 ccv.eingabefeld = ccv.formular.getElementsByTagName('textarea')[0];
 var tmp = ccv.formular.getElementsByTagName('input');
 for (var i = 0; i<tmp.length; i++) {
  if (tmp[i].type == 'submit') break;
 }
 ccv.absendebutton = tmp[i];
 ccv.textlaenge = ccv.textlaenge_ermitteln();
 console.log('Errechnete Textlänge: ' + ccv.textlaenge);
 ccv.wartezeit = ccv.textlaenge / ccv.lesegeschwindigkeit * 1000;
 ccv.restzeit = ccv.wartezeit;

 ccv.init = function() {
  ccv.eingabefeld.setAttributeNode(document.createAttribute('readonly'));
  ccv.eingabefeld.style.backgroundColor = 'lightgrey';
  ccv.eingabefeld.style.color = 'darkgrey';
  ccv.eingabefeld.style.border = 'none';
  ccv.eingabefeld.firstChild.nodeValue = ccv.wartenachricht;
  ccv.absendebutton.style.display = 'none';
  var tmp = new Date();
  ccv.start = tmp.getTime();
  console.log(ccv.wartezeit + ' Millisekunden bis zur Freigabe');
  ccv.timeout = window.setTimeout('ccv.outit()', ccv.wartezeit);
 };

 ccv.outit = function() {
  if (ccv.pagevisibility) document.removeEventListener(ccv.visibilitychange, ccv.pause, true);
  console.log('Countdown abgelaufen: Freigabe');
  ccv.eingabefeld.removeAttributeNode(ccv.eingabefeld.getAttributeNode('readonly'));
  ccv.eingabefeld.style.backgroundColor = 'white';
  ccv.eingabefeld.style.color = 'black';
  ccv.eingabefeld.style.border = '1px solid black';
  ccv.eingabefeld.firstChild.nodeValue = '';
  ccv.absendebutton.style.display = 'block';
 };

 ccv.init();
}, false);
