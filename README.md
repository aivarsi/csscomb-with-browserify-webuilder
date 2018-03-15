CSScomb modified to be bundled with browserify and work in WeBuilder
====================================================================

This is CSScomb modified for integrating with following editors:

Webuilder: http://www.webuilderapp.com/ <br>
RapidPHP: http://www.rapidphpeditor.com/

Original CSScomb: https://github.com/csscomb/csscomb.js

Changes from original
=====================

Folder [blumentals](blumentals/) contains files that are required for browserify bundling and running in browser. E.g. blumentals\emptyfs.js replaces fs with library that does nothing, just to avoid errors when CSScomb tries to look up config files and such.

Folder [blumentals/custom_plugins](blumentals/custom_plugins/) contains plugins (options) that are modified/bugfixed from original CSScomb plugins. Plugin remove-comments.js is completely new.

How to modify & compile
=======================

Requires node.js to be installed: https://nodejs.org/

1) Install csscomb.js: npm install csscomb
   The required node_modules will be created with this command.
   This command must be run from the folder where compile.bat is located.

2) Update blumentals\plugins.js if necessary (e.g. if you have added new plugins)

3) Make sure browserify is installed globally: npm install -g browserify

4) Run compile.bat; This will create bundle.js that WeBuilder uses.
