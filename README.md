# Twitch Stream Overlay
This is a simple Twitch.tv stream overlay made with HTML and Javascript. It grabs your most recent follower and subscriber, and also the user who has gifted you the most bits.

The script was made using Twitch's new Helix API.

## Setup
Grab a Client-ID from [dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps). Add it to **line 19**, and then refresh the page.
```javascript 
const clientId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```
Click the _'get auth'_ button on the page. Once the new page is finshed loading, you will be given an auth token in the address bar of your browser. Copy it, and add it to **line 20**.
```javascript 
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```
Next, you'll need your user/broadcaster ID. Add it to **line 21**.
```javascript
const channelId = '123456789';
```
Once you've added all of those variables, you can hide the _'get auth'_ button. Add ***style="display:none;"*** to **line 11**.
```html
<a style="display:none;" href="#">get oauth</a>
```
Lastly, you can change the amount of time you'd like to refresh your data on **lines 86, 87, 88**. The default is 5 seconds (5000 milliseconds).
```javascript
setInterval(getTopBits(), 5000);
setInterval(getRecentSub(), 5000);
setInterval(getRecentFollower(), 5000);
```

## Finish
You're done setting up your Twitch stream overlay. The page should be displaying something like this:

![finished display](https://raw.githubusercontent.com/m3c/twitch-stream-overlay/main/images/finshed.jpg)

Now, all that's left to do is customize the display to your liking using CSS.
