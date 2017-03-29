if (self.CavalryLogger) { CavalryLogger.start_js(["BOa\/5"]); }

__d("XPymkFunnelLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pymk\/funnel_logging\/",{event_ts:{type:"Int",required:true},query_id:{type:"Int"},candidate_id:{type:"Int",required:true},signature:{type:"Int"},loc:{type:"String",required:true},ref:{type:"String"},action:{type:"Enum",required:true,enumType:1}});}),null);
__d('PymkFunnelLogger',['AsyncRequest','DOMQuery','XPymkFunnelLoggingController'],(function a(b,c,d,e,f,g){var h={setupListeners:function i(j,k,l,m,n){this._setupForSingleElement(j,k,l,'add');this._setupForSingleElement(j,k,m,'click');this._setupForSingleElement(j,k,n,'click');},logImpression:function i(j,k,l){this._logEvent(j,'impression',k,l);},logXOut:function i(j,k,l){this._logEvent(j,'hide',k,l);},_logEvent:function i(j,event,k,l){var m=c('XPymkFunnelLoggingController').getURIBuilder().setInt('candidate_id',j).setInt('signature',k).setInt('event_ts',Math.floor(Date.now()/1000)).setEnum('action',event).setString('loc',l).getURI();new (c('AsyncRequest'))(m).setMethod('POST').send();},_setupForSingleElement:function i(j,k,l,m){Event.listen(l,'click',function(event){var n=j.getAttribute('data-signature'),o=c('DOMQuery').find(j,'input.friendBrowserID'),p=parseInt(o.value,10);this._logEvent(p,m,n,k);}.bind(this));}};f.exports=h;}),null);
__d("XFriendRequestIHEventLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/requests\/interaction_history_logging\/",{target_id:{type:"FBID",required:true},log_event:{type:"String",required:true}});}),null);
__d('FriendRequestIHEventLogger',['Event','AsyncRequest','XFriendRequestIHEventLoggingController'],(function a(b,c,d,e,f,g){var h={setupJewelListeners:function i(j,k,l){this._setupForJewelSingleElement(j,k,'click');if(l)this._setupForJewelSingleElement(j,l,'click');},logImpression:function i(j){this._logEvent(j,'impression');},_logEvent:function i(j,event){if(isNaN(j))return;var k=c('XFriendRequestIHEventLoggingController').getURIBuilder().setFBID('target_id',j).setString('log_event',event).getURI();new (c('AsyncRequest'))(k).setMethod('POST').send();},_setupForJewelSingleElement:function i(j,k,l){c('Event').listen(k,'click',function(event){var m=j.getAttribute('id');if(!m)return;var n=m.substring(0,m.length-6);this._logEvent(n,l);}.bind(this));}};f.exports=h;}),null);
__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){var i=1,j=2,k=3,l=4,m=15000,n=null,o={},p={},q={setActiveInstance:function r(s){n=s;},getActiveInstance:function r(){return n;},clearRHCplaceholder:function r(){o.pagelet_rhc_ticker=null;},registerInstance:function r(s,t){s||h(0);p[s]=t;q.setActiveInstance(t);},getInstance:function r(s){if(!s)return null;var t=c('Parent').byClass(c('$')(s),'fbFeedTicker');return p[t.id]||null;},isLoaded:function r(s){var t=o[s.id];return !t||t.status==k;},show:function r(s,t){t=t||c('emptyFunction');for(var u in p){var v=c('ge')(u);if(!v||v.parentNode.id==s.id)continue;q.hide(v.parentNode);}q._doPositionChange(s);c('CSS').show(s);var w=o[s.id];if(w&&w.status==i){var x=(c('Vector').getElementDimensions(s).y||0)>0,y=s.id==='pagelet_rhc_ticker'&&!c('CSS').hasClass(s,'hidden_rhc_ticker');if(x||y){var z=c('DOM').scry(s,'.tickerPlaceholderSpinner')[0];z&&c('CSS').show(z);q._fetchTickerForPlaceholder(s,t);}else c('Arbiter').subscribe('Ticker/resized',function(){if(w.status==i)q._fetchTickerForPlaceholder(s,t);});}else{var aa=c('DOM').scry(s,'.fbFeedTicker')[0],ba=q.getInstance(aa);n=ba;ba&&ba._poll();o[s.id]={status:l,callback:t};t();}c('Arbiter').inform('ticker/show',{node:s,callback:t});},_doPositionChange:function r(s){if(c('CSS').shown(s))return;new (c('AsyncSignal'))('/common/ods_endpoint.php',{k:'ticker.render.switch.'+s.id}).send();},hide:function r(s){var t=c('DOM').scry(s,'.fbFeedTicker')[0],u=q.getInstance(t);u&&u.hideActiveStory();c('CSS').hide(s);},hideStoriesByClass:function r(s){for(var t in p)c('DOM').scry(c('$')(t),s).forEach(c('CSS').hide);},hideStory:function r(s){var t=q.getInstance(s);t&&t.hideStory(s);},replaceStory:function r(s,t){var u=c('DOM').scry(document.body,'div.fbFeedTickerStory'),v=q.getInstance(u[0]);if(!v)return;var w=v._findStoryById(s);v.handleRemoveStory();c('CSS').hide(w);c('DOM').insertAfter(w,t);t.setAttribute('data-story-id',w.getAttribute('id'));var x=setTimeout(function(){return q.removeMarkup(t,w);},m);t.setAttribute('data-timeout-token',x);},removeMarkup:function r(s,t){c('Bootloader').loadModules(["Animation"],function(u){c('CSS').addClass(s,'removedStoryMarkup');new u(s).to('height',0).duration(500).ondone(function(){c('DOM').remove(s);}).go();},'TickerController');},undoHideStory:function r(s){var t=q.getInstance(s);t&&t.undoHideStory(s);},insertStoriesAtBottom:function r(s){n.insertStoriesAtBottom(s);},_fetchTickerForPlaceholder:function r(s,t){var u={handler:function v(){o[s.id].status=k;t();}};c('UIPagelet').loadFromEndpoint('TickerEntStoryPagelet',s.id,o[s.id].pageletData,u);o[s.id].status=j;},registerStoryDialog:function r(s,t){c('Arbiter').subscribe('ticker/init',function(){var u=c('ge')(s),v=q.getInstance(u);v&&v.registerStoryDialog(u,t);},c('Arbiter').SUBSCRIBE_ALL);},registerPlaceholder:function r(s,t){var u=o[s];o[s]={status:i,pageletData:t};if(u&&u.status==l){q.show(c('$')(s));u.callback();}}};f.exports=q;}),null);
__d('TickerRightColumnController',['csx','cx','Arbiter','CSS','DOM','Event','NavigationMessage','Parent','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],(function a(b,c,d,e,f,g,h,i){var j;function k(){var p=c('ge')('pagelet_rhc_ticker');p&&c('TickerController').show(p,m);}function l(){var p=c('ge')('pagelet_rhc_ticker');p&&c('TickerController').hide(p);}function m(){var p=c('ge')('pagelet_rhc_ticker'),q=c('DOM').scry(p,'.ticker_container')[0],r=c('DOM').scry(p,'.ticker_stream')[0],s=c('ge')('rightCol');if(!p||!q||!r||!s)return;c('Style').set(q,'height','0');var t=75,u=c('Vector').getViewportDimensions().y,v=c('Vector').getElementDimensions(s).y,w=u-v-t,x=c('Vector').getElementDimensions(r).y,y=Math.max(Math.min(w,x,j.tickerMaxHeight||425),j.tickerMinHeight||225);c('Style').set(q,'height',y+'px');}function n(p){var q=c('ge')('pagelet_rhc_ticker'),r=q&&c('Parent').bySelector(q,"._5zcc");if(r){c('CSS').conditionClass(r,"_5zcb",p);}else{var s=c('ge')('pagelet_reminders'),t=s&&c('DOM').scry(s,'div.tickerToggleWrapper')[0],u=q&&c('DOM').scry(q,'div.tickerToggleWrapper')[0];t&&c('CSS').conditionClass(t,'displayedTickerToggleWrapper',!p);u&&c('CSS').conditionClass(u,'displayedTickerToggleWrapper',p);}q&&c('CSS').conditionClass(q,'hidden_rhc_ticker',!p);if(p){m();var v=c('ge')('fbTickerClosedEd');v&&c('CSS').hide(v);}}var o={init:function p(q){j=q;var r=new (c('SubscriptionsHandler'))();if(j.enableSidebar)r.addSubscriptions(c('Arbiter').subscribe('sidebar/visibility',function(t,u){if(u){l();}else k();}),c('Arbiter').subscribe('minisidebar/show',k),c('Arbiter').subscribe('LitestandClassicRHC/loaded',m),c('Event').listen(window,'scroll',c('throttle')(function(){var t=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],u=c('TickerController').getInstance(t);u&&u.handleRemoveStory();})));if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){k();}else if(j.enableSidebar)l();var s=function t(){r.release();};c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,s);c('Run').onLeave(s);},initRHCTickerHider:function p(q){c('Event').listen(q,'click',this.hideRHCTicker);},showRHCTicker:function p(){n(true);},hideRHCTicker:function p(){n(false);}};f.exports=o;}),null);
__d('CompactTypeaheadRenderer',['BadgeHelper','DOM','emojiAndEmote','TypeaheadFacepile','isSocialPlugin'],(function a(b,c,d,e,f,g){function h(i,j){var k=[];if(i.xhp)return c('DOM').create('li',{className:'raw'},i.xhp);var l=i.photos||i.photo;if(l){if(l instanceof Array){l=c('TypeaheadFacepile').render(l);}else l=c('DOM').create('img',{alt:'',src:l});k.push(l);}var m=i.iconClass;if(m){var n=c('DOM').create('span',{className:m});k.push(n);}var o=i.debug_info;if(o)k.push(c('DOM').create('span',{className:'debugInfo'},o));if(i.text){var p=[i.text];if(!c('isSocialPlugin')())p=c('emojiAndEmote')(i.text);if(i.is_verified){p.push(c('BadgeHelper').renderBadge('xsmall','verified'));}else if(i.is_work_user){p.push(c('BadgeHelper').renderBadge('xsmall','work'));}else if(i.is_trending_hashtag)p.push(c('BadgeHelper').renderBadge('xsmall','trending'));k.push(c('DOM').create('span',{className:'text'},p));}var q=i.subtext,r=i.category;if(q||r){var s=[];q&&s.push(q);q&&r&&s.push(" \u00b7 ");r&&s.push(r);k.push(c('DOM').create('span',{className:'subtext'},s));}var t=c('DOM').create('li',{className:i.type||''},k);if(i.text){t.setAttribute('title',i.text);t.setAttribute('aria-label',i.text);}return t;}h.className='compact';f.exports=h;}),null);