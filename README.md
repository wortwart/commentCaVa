commentCaVa.js - a script and a WordPress plugin for temporarily disabling comment fields

*First read, then comment:* CommentCaVa is a small JavaScript app that disables the comment field for a certain amount of time. This time is calculated from the length of the blog post. Reading speed is set to 30 characters per second; previous comments are not counted. If CommentCaVa detects that the browser tab it's running in is currently not visible to the user it pauses the timer. It will possibly only work with native comment fields, not with Disqus, Facebook comments etc.

This project was subject of my story about blog comments in c't Magazin 17/2013. More information about the project:

http://www.woerter.de/textverzeichnis/#filter/id=155

The detection of page visibility requires a modern browser (Firefox, Chrome, Opera, Safari 7+, Internet Explorer 10+) that supports the Page Visibility API. The basic functionality does not depend on that.

## General purpose version

commentCaVa.js expects the main text in an element with the ``id`` "beitrag" (story), the sending form hat the ``id`` "commentCaVa". Sending is done with an ``&lt;input type="submit"/&gt;``. Comments and variable names are in German. I'll gladly translate them if there is demand.

## WordPress plugin version

The source files for the WordPress plugin are in the subdirectory "wordpress", including the required SVN data. The plugin is hosted here:

http://wordpress.org/plugins/commentcava/

The waiting message is displayed in English (default) or German, according to the browser settings.

Wishlist:
*  add more languages, maybe via WordPress plugin i18n
*  use WordPress options for settings (reading speed, waiting messages, locked comment styling)
