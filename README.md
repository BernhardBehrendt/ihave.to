
iHave.to is a memoboard with realtime support and client side AES encription running on node.js.
================================================================================================
[ ![Image](http://cdn.alternativeto.net/s/baa06179-4709-e211-a334-0025902c7e73_6_full.png "Image title") ](http://www.ihave.to/do/)

You can find a working demo on http://www.ihave.to/

Author:
iHave.to is written by Bernhard Bezdek all rights reserved.

Released under MIT License




Startup:


To run the application a node runtime is required (http://nodejs.org/)

Create the folder boards (if not exists) on same level as server and public folder
Ensure that hte boards folder has write permissions for nodejs running user.

Now there are two ways possible to run the application:

1) Run the app as standalone



    - Enter server folder
    - type in your terminal node server-standalone.js

    - Finish (access the app via http://localhost:3000)

2) Run the app in your nginx via proxy pass

    - Create an nginx server block like this one

	server {
     listen 80;
     server_name mydomain.com www.mydomain.com default_server;
     access_log /var/log/nginx/mydomain.com.log;



     location / {
        root /path/to/public/folder/;
        error_page    404 = index.html;
     }

     location ~* \.(jpg|jpeg|gif|css|png|js|ico|html|woff|svg|ttf)$ {
       root /path/to/public/folder/;
       access_log off;
      # expires max;
     }

     location /socket.io/ {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
     }


     Then start the server.proxy_pass.js script inside the server folder by type in teminal
     node server.proxy_pass.js


