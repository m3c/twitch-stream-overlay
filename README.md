# Twitch Stream Overlay
This is a simple Twitch.tv stream overlay made with HTML and Javascript. It grabs your most recent follower and subscriber, and also the user who has gifted you the most bits. Customize it with some CSS to make it your own.

The script was made using Twitch's new Helix API.

## Setup
Grab a Client-ID from [dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps). Add it to **line 21**, and then refresh the page.
```javascript 
const clientId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```
Click the _'get auth'_ button on the page. Once the new page is finshed loading, you will be given an auth token in the address bar of your browser. Copy it, and add it to **line 22**.
```javascript 
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```
Lastly, you'll need your user/broadcaster ID. Add it to **line 23**.
```javascript
const channelId = '123456789';
```
Once you've added all of those variables, you can hide the _'get auth'_ button. Add ***style="display:none;"*** to **line 11**.
```html
<a style="display:none;" href="#">get oauth</a>
```
## Finish
You're done setting up your Twitch stream overlay. The page should be displaying something like this:
![finished display](/images/finished.jpg)
Now, all that's left to do is customize the display to your liking using CSS.
