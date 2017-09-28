/*
  This snippet is esssentially the same as being in the Twitter longer tweets test, for tweetdeck.
  The Tweet length counter is fixed by tricking TweetDeck into counting up to 140 characters, twice, so you'll see 140
  instead of 280 in the counter but going over 140 will give you another set of 140 charactrs.
*/
TD.services.TwitterClient.prototype.makeTwitterCall=function(b,e,f,g,c,d,h){c=c||function(){};d=d||function(){};b=this.request(b,{method:f,params:Object.assign(e,{weighted_character_count:!0}),processor:g,feedType:h});return b.addCallbacks(function(a){c(a.data)},function(a){d(a.req,"",a.msg,a.req.errors)}),b};
twttrTxt=Object.assign({},twttr.txt,{isInvalidTweet:function(){return!1},getTweetLength:function(x){return x=twttr.txt.getTweetLength.apply(this,arguments),x<140||x/140>2?x:x%140}});