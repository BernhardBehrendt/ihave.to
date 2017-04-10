# iHave.to 1

## End2End encrypted and real time enabled memoboard

[![Dependency Status](https://gemnasium.com/BernhardBezdek/ihave.to.svg)](https://gemnasium.com/BernhardBezdek/ihave.to)


iHave.to is a simple realtime synced memo board which is encrypted using AES.

**Features** 

- End2End encryption
- Drag&Drop image uploads on notes
- Custom workspaces and wallpapers
- Full change history
- Simple time line
- Translate youtube links in embedded youtube videos
- Show website icons for links
- Colors and custom categories


Author:
iHave.to/do was written and designed by Bernhard Behrendt all rights reserved.

Released under MIT License

## Dependencies

### Graphicsmagick
For creating thumbs and fix image rotations [graphicsmagick](http://www.graphicsmagick.org/)
is required.

**OSX**

Install graphicsmagick via e.g ``bower`` or ``mac ports``

```
bower install imagemagick
```

**Debian/Ubuntu**

Install graphicsmagick via ``apt-get``

```
sudo apt-get install graphicsmagick imagemagick
```

**Windows**

Visit the websites of graphicsmagick and install the windows version of that libraries.
Furthermore you maybe set graphicsmagicks path in ``$PATH`` system variable.


### Node.js

iHave.to requires [node.js](http://nodejs.org/ "The node.js environment") and [npm](http://npmjs.org/ "Node Packaged Modules").

### Install

``npm install ihave.to -g``

You now can start application by type in your terminal:

``ihaveto`` Without the dot ;)


You can change the port in ``server/settings/config.js``.

**CONFIG Settings**

    CONFIG = {
        PORT: 3000,
        
        PASS_REFERER: '*',          // Determine which domain referers are passed to uploaded data
                                    // (* means everything and domain without "http://www." (e.g. mydomain.com)
                                    // means only calls from given domain which is recommended)

        
        ROOT: __dirname + '/../',   // The servers root folder
        
        MAX_UPLOAD_SIZE: 16,        // Determine the max upload file size in MB
        
        MAX_DAYS_UNUSED: 60,        // Determine after how many days a non uses borad/image gets deleted by system
        
        IMG_ROOT: 'upload',         // The folder where image uploads are stored in
        
        THUMB_HGT: 128,             // The Thumb width (double size fox retina displays)
        
        THUMB_WID: 128,             // The Thumb width (double size fox retina displays)
        
        GM_QUALITY: 95,             // Set the quality level for image optimisations
        
        RUN_CLEANUP: 21600000,      // Means 4 times a day
        
        SSL_KEY: null,              // The absolute path to a ssl key file
        
        SSL_CERT: null,             // The absolute path to a ssl certificates
        
        SSL_CA: null,               // The intermediate CA certificate
        
        SSL_PORT: 4433,             // The port which provides SSL
        
        ALLOWED_UPLOAD_FILES: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'] // The allowed image upload formats