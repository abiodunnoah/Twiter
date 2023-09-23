let tweetsHTML = '';

tweets.forEach((tweet) => {
  tweetsHTML += `
    <div class="tweet-preview">
      <div class="profile">
        <img class="profile-image" src="${tweet.userDetails.image}">
      </div>
      <div class="tweet-details">
        <div class="username">
          ${tweet.userDetails.username}
        </div>
        <div class="tweet-caption">
          ${tweet.userDetails.tweetCaption}
        </div>
        <div class="tweet-hashtag">
          ${tweet.tweetHashTag}
        </div>
        <div class="tweet-image">
          <img class="tweet-image-1" src="${tweet.tweetImages.tweetImage1}">
          <img class="tweet-image-2" src="${tweet.tweetImages.tweetImage2}">
        </div>
        <div class="tweet-button">
          <div class="button">
            <img class="icon" src="${tweet.icons.chatIconCount.chatIcon}">
            <div>${tweet.icons.chatIconCount.count}</div>
          </div>
          <div class="button">
            <img class="icon" src="${tweet.icons.retweetIconCount.retweetIcon}">
            <div>${tweet.icons.retweetIconCount.count}</div>
          </div>
          <div class="button">
            <img class="icon" src="${tweet.icons.heartIconCount.heartIcon}">
            <div>${tweet.icons.heartIconCount.count}</div>
          </div>
          <div class="button">
            <img class="icon" src="${tweet.icons.activityIconCount.activityIcon}">
            <div>${tweet.icons.activityIconCount.count}</div>
          </div>
          <div class="button">
            <img class="icon" src="${tweet.icons.arrowIcon}">
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-tweets')
  .innerHTML = tweetsHTML;