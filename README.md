#iHave.to/do#
##AES secured and real time enabled plain memoboard##

iHave.to was created to be creative focusing ideas as they come and bring the tools to follow how those ideas were grown.
It's also possible to be creative in a collaborative way via realtime multiuser support.
Your memo data is strongly protected using AES on your device until any authenticated endpoint.
If you're using iHave.to in a collaborative way only the encryptet data difference is broadcasted to any user who's actually
on the memo board.

**And YES, you can customize your memo board with custom wallpapers ;-)**.

[ ![Image](http://www.ihave.to/img/preview/desktop/8.png "iHave.to memoboard view") ](http://www.ihave.to/)

[ ![Image](http://www.ihave.to/img/preview/desktop/7.png "iHave.to edit view") ](http://www.ihave.to/)

[ ![Image](http://www.ihave.to/img/preview/desktop/6.png "iHave.to workspaces view") ](http://www.ihave.to/)

[ ![Image](http://www.ihave.to/img/preview/mobile/mobile.png "iHave.to on a mobile device") ](http://www.ihave.to/)

You can find a working demo [here](http://www.ihave.to).

Author:
iHave.to/do is written and designed by Bernhard Bezdek all rights reserved.

Released under MIT License

###Dependencies###
For creating thumbs and fix image rotations [graphicsmagick](http://www.graphicsmagick.org/) and [imagemagick](http://www.imagemagick.org/script/index.php)
is required on system running iHave.to/do

In Debain/Ubuntu you can install imagemagick and graphicsmagick via ``apt``
```
sudo apt-get install graphicsmagick imagemagick
```

iHave.to requires [node.js](http://nodejs.org/ "The node.js environment") and [npm](https://npmjs.org/ "Node Packaged Modules").

###Install###
To resolve all direct dependencies open projects server folder in a terminal and type:
``npm install -l``

After previous step was successful you can run iHave.to on several ways from terminal (**stay in server folder**):


###Standalone###
``node app.js``- That's it. You now can open iHave.to in browser at ``http://localhost:3000``

You can change the port in ``server/settings/config.js``.


###Daemon##
If you want to run iHave.to as a daemon I recommend using [pm2](https://npmjs.org/package/pm2 "Modern CLI process manager for Node apps with a builtin load-balancer").

With following command inside server folder you can start the application:

``pm2 start app.js -i max``- Thats it. You now can open iHave.to in browser at ``http://localhost:3000``

You can change the port in ``server/settings/config.js``.
 
###Developer##
If you want to change things or want to create new features a grunt task is shipped with this project.

Enter grunt folder from termina and install grunt and dependencies:

``npm install grunt``

``npm install -l``

You can start application now and let them watching your changes typing inside grunt folder:

``grunt``

You now can open iHave.to in browser at ``http://localhost:3000``

You can change the port in ``server/settings/config.js``.


###Apendix###
If you need some documentation you can install [yuidoc](https://npmjs.org/package/yuidocjs) in global context:

``npm install -g yuidocjs``

After yuidoc was installed just run following command inside the apps root folder:

`àpidoc.sh``

Now open index.html file inside documentation folder in your browser.
