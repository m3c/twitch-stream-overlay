  const clientId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const channelId = '123456789';

  const authLink = 'https://id.twitch.tv/oauth2/authorize?client_id=' + clientId + '&redirect_uri=http://localhost&response_type=token&scope=channel:read:subscriptions%20bits:read';
  document.getElementsByTagName("a")[0].setAttribute("href", authLink);

  // https://dev.twitch.tv/docs/api/reference#get-bits-leaderboard
  function getTopBits(){
    $.ajax({
      url: "https://api.twitch.tv/helix/bits/leaderboard",
      type: "GET",
      headers: {
        "Client-ID": clientId,
        "Authorization": 'Bearer ' + authToken
      },
      success: function(data) {
        console.log(data)
        var id = data.data[0].user_name;
        $('.top-bits').html(id);
      },
      error: function(data) {
        $('.top-bits').html('error');
      }
    })
  }

  // https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions
  function getRecentSub(){
    $.ajax({
      url: "https://api.twitch.tv/helix/subscriptions?broadcaster_id=" + channelId,
      type: "GET",
      headers: {
        "Client-ID": clientId,
        "Authorization": 'Bearer ' + authToken
      },
      success: function(data) {
        console.log(data)
        var id = data.data[0].user_name;
        $('.recent-sub').html(id);
      },
      error: function(data) {
        $('.recent-sub').html('error');
      }
    })
  }

  // https://dev.twitch.tv/docs/api/reference#get-users-follows
  function getRecentFollower(){
    $.ajax({
      url: "https://api.twitch.tv/helix/users/follows?to_id=" + channelId,
      type: "GET",
      headers: {
        "Client-ID": clientId,
        "Authorization": 'Bearer ' + authToken
      },
      success: function(data) {
        console.log(data)
        var id = data.data[0].from_name;
        $('.recent-follower').html(id);
      },
      error: function(data) {
        $('.recent-follower').html('error');
      }
    })
  }

  setInterval(getTopBits(), 5000);
  setInterval(getRecentSub(), 5000);
  setInterval(getRecentFollower(), 5000);
