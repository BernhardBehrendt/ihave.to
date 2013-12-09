#iHave.to#
##AES secured and realtime enabled plain memoboard##
[ ![Image](http://212.224.109.247/img/preview/desktop/8.png "Image title") ](http://www.ihave.to/do/)

Because iHave.to is moving you can find a working demo here.
You can find a working demo on http://212.224.109.247

Author:
iHave.to is written by Bernhard Bezdek all rights reserved.

Released under MIT License



###Install###
iHave.to requires [node.js](http://nodejs.org/ "The node.js environment") and [npm](https://npmjs.org/ "Node Packaged Modules").


To resolve all dependencies open iHave.to's server folder in a terminal and type following command:

``npm install -l``

After previous step was successful you can run iHave.to on serveral ways from terminal (**stay in server folder**):


###Standalone###
``node app.js``- Thats it you can open iHave.to in browser at ``http://localhost:3000``

**You can change the port in ``server/settings/config.js``.


###Daemon##
If you want to run iHave.to as a daemon I recommend [pm2](https://npmjs.org/package/pm2 "Modern CLI process manager for Node apps with a builtin load-balancer")

With following command inside server folder you can start the application:

``pm2 start app.js -i max``
 
###Developer##
If you want to change things or want to create new features a grunt task is shipped with this project.

Enter grunt folder from termina and install grunt and dependencies:

``npm install grunt``

``npm install -l``

You can start application now and let them watching your changes typing only

``grunt``

inside the grunt folder


###Apendix###
If you need some documentation you can install [yuidoc](https://npmjs.org/package/yuidocjs) in global context:

``npm install -g yuidocjs``

After yuidoc was installed just run:

`àpidoc.sh``

inside iHave.to's root folder and open index.html inside documentation folder. 
