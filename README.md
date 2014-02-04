commentCaVa.js - a script for temporarily disabling comment fields

First read, then comment: CommentCaVa disables the comment field for a certain amount of time. This time is calculated from the length of the blog post. Reading speed is set to 30 characters per second. Previous comments are not counted.

CommentCaVa is only a small JavaScript file that also runs outside of WordPress with minor modifications. This project was subject of my story about blog comments in c't Magazin 17/2013. More information about the project: www.woerter.de/textverzeichnis/#filter/id=155

This script expects the main text in an element with the ID "beitrag" (story), the sending form hat the ID "commentCaVa". Sending is done with an <input type="submit"/>. Comments and variable names are in German. I'll gladly translate them if there is demand.

I made a WordPress plugin based on this project:
http://wordpress.org/plugins/commentcava/