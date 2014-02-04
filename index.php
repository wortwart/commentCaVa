<!doctype html>
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>Kommentartest</title>
  <script type="application/x-javascript" src="./commentCaVa.js"></script>
 </head>
 <body>
  <?php
if ($_POST['submit']) {
 $from = $_POST['email']? 'FROM: ' . $_POST['email'] : null;
 mail('wortwart@woerter.de', utf8_decode('Zeitverzögerte Kommentarfelder'), utf8_decode($_POST['Kommentar']), $from);
 echo "<p>Ihr Kommentar wurde mir per Mail zugestellt.</p>";
} else {
  ?>
  <div id="beitrag">
   <h2>Zeitverzögerte Kommentarfelder</h2>
   <h3>Ein Vorschlag für das Kommentar-Problem</h3>
   <p>Zunehmend nerven mich Kommentare, deren Autoren ganz offensichtlich den dazugehörigen Beitrag nicht gelesen haben, geschweige denn die bereits geschriebenen Kommentare. Um den Wunsch nach "erst denken, dann posten" Nachdruck zu verleihen, schlage ich vor, Kommentarfelder zeitverzögert freizuschalten. Ich glaube, dass dies die Qualität von Online-Diskussionen verbessern und vielen Trollen die Lust nehmen könnte.</p>
   <p>Diese Seite demonstriert das Verfahren in einer rudimentären Form, die eher als Proof of Concept zu verstehen ist. Nach dem Laden des Dokuments wird das Texteingabefeld deaktiviert (soweit die Browser das unterstützen) und der Absendebutton verschwindet. Die Kommentarfunktion wird nach einer Frist freigeschaltet, die von der Länge des darüber stehenden Beitrags und der Lesegeschwindigkeit abhängt &ndash; eingestellt sind 30 Zeichen pro Sekunde. Das Kommentieren dieses Beitrags ist nach ca. einer Minute möglich.</p>
   <p>Bonus-Feature: In Browsern, die dies unterstützen (aktuell: Firefox und Chrome; Stichwort Page Visibility API) erkennt die Seite, wenn sie in den Hintergrund verlagert wird, und hält den Countdown an.</p>
   <p>Das zugehörige JavaScript könnt ihr <a href="./commentCaVa.js">hier</a> herunterladen und nach Belieben zum Rumspielen und Weiterentwickeln verwenden. Wäre allerdings nett, wenn der Verweis auf mich erhalten bliebe &ndash; und wenn ihr die Früchte eurer Überlegungen und Arbeiten teilen würdet. Sorry für den krautigen Programmierstil, ich hab das Programmieren mit Perl angefangen.</p>
   <h4>Probleme, Murkeligkeiten &amp; zu tun</h4>
   <ul>
	<li>Der Autor des Beitrags, registrierte Kommentatoren und Kommentatoren, die schon einmal gepostet haben, sollten ohne Verzögerung kommentieren können. Das ließe sich am einfachsten über einen Eintrag im <code>localStorage</code> lösen.</li>
	<li>Das Skript läuft in der aktuellen Generation von Browsern, müsste aber noch abwärtskompatibel gemacht werden. In älteren Internet Explorern dürfte überhaupt nichts passieren (<code>addEventListener, DOMContentLoaded</code>).</li>
	<li>Die Anzahl der Kommentare wird bei der Lesezeitberechnung noch nicht berücksichtigt.</li>
    <li>Die Textlänge bezieht den Inhalt von HTML-Tags mit ein. Das spielt normalerweise keine große Rolle &ndash; außer jedoch, wenn Inline-Grafiken (oder sehr seltsamer Code) zum Einsatz kommen.</li>
	<li>Was tun mit Artikeln, die über mehr als eine Webseite gehen?</li>
	<li>Bei abgeschaltetem JavaScript ist Kommentieren möglich. Wer will, kann das natürlich ändern.</li>
	<li>Das Skript lahmzulegen, ist natürlich kinderleicht. Aber ich vermute, 90 Prozent aller Nutzer und 95 Prozent aller Trolle würden es nicht hinkriegen oder sich nicht die Mühe machen.</li>
   </ul>
   <p>Ach ja: Zu diesem Beitrag gibt es keine Kommentare :-) Der Inhalt des Textfeldes wird mir aber per Mail zugestellt &ndash; deshalb auch die Frage nach eurer Mail-Adresse.</p>
  </div>
  <h3>Kommentieren</h3>
  <form id="commentCaVa" action="<?php echo $_SERVER['SCRIPT_NAME']; ?>" method="post">
   <textarea rows="5" cols="50" name="Kommentar">
    Kommentieren ...
  </textarea><br/>
  <label for="email">Ihre E-Mail:</label><input type="name" id="email" name="email" value=""/>
  <input type="submit" name="submit" value="Kommentar abschicken"/>
 </form>
<?php } ?>
</body>
</html>