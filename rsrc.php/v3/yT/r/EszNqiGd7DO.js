if (self.CavalryLogger) { CavalryLogger.start_js(["u4oYF"]); }

__d("ImageExtensions",[],(function a(b,c,d,e,f,g){f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best",PNG2JPG:"png2jpg"};}),null);
__d("PagesLikeFollowNotifActions",[],(function a(b,c,d,e,f,g){f.exports={INIT_DATA:"init_data",LIKE:"like",UNLIKE:"unlike",FOLLOW_CHANGED:"follow_changed",NOTIF_CHANGE:"notif_change",NOTIF_ALL_ON:"notif_all_on",NOTIF_ALL_OFF:"notif_all_off",NEWS_FEED_CHANGE:"news_feed_change"};}),null);
__d("VideoCreatorProductType",[],(function a(b,c,d,e,f,g){f.exports={LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,BIRTHDAY_VIDEO:9,STORYLINE:10,FRIENDS_DAY_2016:11,FRIENDVERSARY:12,STORYLINE_WITH_EXTERNAL_MUSIC:13,GOODWILL_VIDEO_BIRTHDAY:14,GOODWILL_VIDEO_ANNIVERSARY:15,GOODWILL_VIDEO_FACEVERSARY:16,GOODWILL_VIDEO_YIR16:17,GOODWILL_VIDEO_FRIENDSDAY17:18,GOODWILL_VIDEO_FRIEND_BIRTHDAY_VIDEO:19};}),null);
__d('md5',['str2rstr'],(function a(b,c,d,e,f,g){function h(u,v){var w=u[0],x=u[1],y=u[2],z=u[3];w=j(w,x,y,z,v[0],7,-680876936);z=j(z,w,x,y,v[1],12,-389564586);y=j(y,z,w,x,v[2],17,606105819);x=j(x,y,z,w,v[3],22,-1044525330);w=j(w,x,y,z,v[4],7,-176418897);z=j(z,w,x,y,v[5],12,1200080426);y=j(y,z,w,x,v[6],17,-1473231341);x=j(x,y,z,w,v[7],22,-45705983);w=j(w,x,y,z,v[8],7,1770035416);z=j(z,w,x,y,v[9],12,-1958414417);y=j(y,z,w,x,v[10],17,-42063);x=j(x,y,z,w,v[11],22,-1990404162);w=j(w,x,y,z,v[12],7,1804603682);z=j(z,w,x,y,v[13],12,-40341101);y=j(y,z,w,x,v[14],17,-1502002290);x=j(x,y,z,w,v[15],22,1236535329);w=k(w,x,y,z,v[1],5,-165796510);z=k(z,w,x,y,v[6],9,-1069501632);y=k(y,z,w,x,v[11],14,643717713);x=k(x,y,z,w,v[0],20,-373897302);w=k(w,x,y,z,v[5],5,-701558691);z=k(z,w,x,y,v[10],9,38016083);y=k(y,z,w,x,v[15],14,-660478335);x=k(x,y,z,w,v[4],20,-405537848);w=k(w,x,y,z,v[9],5,568446438);z=k(z,w,x,y,v[14],9,-1019803690);y=k(y,z,w,x,v[3],14,-187363961);x=k(x,y,z,w,v[8],20,1163531501);w=k(w,x,y,z,v[13],5,-1444681467);z=k(z,w,x,y,v[2],9,-51403784);y=k(y,z,w,x,v[7],14,1735328473);x=k(x,y,z,w,v[12],20,-1926607734);w=l(w,x,y,z,v[5],4,-378558);z=l(z,w,x,y,v[8],11,-2022574463);y=l(y,z,w,x,v[11],16,1839030562);x=l(x,y,z,w,v[14],23,-35309556);w=l(w,x,y,z,v[1],4,-1530992060);z=l(z,w,x,y,v[4],11,1272893353);y=l(y,z,w,x,v[7],16,-155497632);x=l(x,y,z,w,v[10],23,-1094730640);w=l(w,x,y,z,v[13],4,681279174);z=l(z,w,x,y,v[0],11,-358537222);y=l(y,z,w,x,v[3],16,-722521979);x=l(x,y,z,w,v[6],23,76029189);w=l(w,x,y,z,v[9],4,-640364487);z=l(z,w,x,y,v[12],11,-421815835);y=l(y,z,w,x,v[15],16,530742520);x=l(x,y,z,w,v[2],23,-995338651);w=m(w,x,y,z,v[0],6,-198630844);z=m(z,w,x,y,v[7],10,1126891415);y=m(y,z,w,x,v[14],15,-1416354905);x=m(x,y,z,w,v[5],21,-57434055);w=m(w,x,y,z,v[12],6,1700485571);z=m(z,w,x,y,v[3],10,-1894986606);y=m(y,z,w,x,v[10],15,-1051523);x=m(x,y,z,w,v[1],21,-2054922799);w=m(w,x,y,z,v[8],6,1873313359);z=m(z,w,x,y,v[15],10,-30611744);y=m(y,z,w,x,v[6],15,-1560198380);x=m(x,y,z,w,v[13],21,1309151649);w=m(w,x,y,z,v[4],6,-145523070);z=m(z,w,x,y,v[11],10,-1120210379);y=m(y,z,w,x,v[2],15,718787259);x=m(x,y,z,w,v[9],21,-343485551);u[0]=s(w,u[0]);u[1]=s(x,u[1]);u[2]=s(y,u[2]);u[3]=s(z,u[3]);}function i(u,v,w,x,y,z){v=s(s(v,u),s(x,z));return s(v<<y|v>>>32-y,w);}function j(u,v,w,x,y,z,aa){return i(v&w|~v&x,u,v,y,z,aa);}function k(u,v,w,x,y,z,aa){return i(v&x|w&~x,u,v,y,z,aa);}function l(u,v,w,x,y,z,aa){return i(v^w^x,u,v,y,z,aa);}function m(u,v,w,x,y,z,aa){return i(w^(v|~x),u,v,y,z,aa);}function n(u){var v=u.length,w=[1732584193,-271733879,-1732584194,271733878],x;for(x=64;x<=u.length;x+=64)h(w,o(u.substring(x-64,x)));u=u.substring(x-64);var y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(x=0;x<u.length;x++)y[x>>2]|=u.charCodeAt(x)<<((x&3)<<3);y[x>>2]|=128<<((x&3)<<3);if(x>55){h(w,y);for(x=0;x<16;x++)y[x]=0;}y[14]=v*8;h(w,y);return w;}function o(u){var v=[],w=0;while(w<64)v[w>>2]=u.charCodeAt(w++)|u.charCodeAt(w++)<<8|u.charCodeAt(w++)<<16|u.charCodeAt(w++)<<24;return v;}var p='0123456789abcdef'.split('');function q(u){var v='',w=0;for(;w<4;w++)v+=p[u>>(w<<3)+4&15]+p[u>>(w<<3)&15];return v;}function r(u){for(var v=0;v<u.length;v++)u[v]=q(u[v]);return u.join('');}var s=function u(v,w){return v+w&4294967295;};function t(u){if(null===u||undefined===u){return null;}else{for(var v=0;v<u.length;v++)if(u[v]>"\u007F"){u=c('str2rstr')(u);break;}return r(n(u));}}if(t('hello')!='5d41402abc4b2a76b9719d911017c592')s=function u(v,w){var x=(v&65535)+(w&65535),y=(v>>16)+(w>>16)+(x>>16);return y<<16|x&65535;};f.exports=t;}),null);
__d('WaterfallIDGenerator',['CurrentUser','md5'],(function a(b,c,d,e,f,g){function h(){var k=2147483647;return Math.random()*k;}function i(){return Math.floor(Date.now()/1000);}var j={generate:function k(){return c('md5')([c('CurrentUser').getID(),i(),h()].join(':'));}};f.exports=j;}),null);
__d('ChatTabViewEvents',['Arbiter'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('Arbiter'))();}),null);
__d('PagesEventObserver',['Banzai'],(function a(b,c,d,e,f,g){var h='pages_client_logging',i={VITAL_WAIT:c('Banzai').VITAL_WAIT,logData_DEPRECATED:function j(k,l){var m={delay:l||c('Banzai').VITAL_WAIT};c('Banzai').post(h,k,m);},notify:function j(event,k,l,m,n){var o=babelHelpers['extends']({},l,{event_name:event,page_id:k,dedupe:m!==false}),p={delay:n||c('Banzai').VITAL_WAIT};c('Banzai').post(h,o,p);}};f.exports=i;}),null);
__d('PagesBanzaiEventListener',['Event','PagesEventObserver','Run'],(function a(b,c,d,e,f,g){var h={registerLogEvent:function i(j,k,l){var m=c('Event').listen(j,'click',function(event){c('PagesEventObserver').logData_DEPRECATED(k,l);});c('Run').onLeave(function(){m.remove();});}};f.exports=h;}),null);
__d('PagesPostsByOthersUnit',['DOM'],(function a(b,c,d,e,f,g){var h;function i(j,k){'use strict';this.$PagesPostsByOthersUnit1=j;this.$PagesPostsByOthersUnit2=k;h=this;}i.prototype.getRoot=function(){'use strict';return this.$PagesPostsByOthersUnit1;};i.prototype.insertPost=function(j){'use strict';var k=this.getRoot();c('DOM').prependContent(k,j);if(k.children.length>this.$PagesPostsByOthersUnit2)c('DOM').remove(k.lastChild);if(this.$PagesPostsByOthersUnit3){c('DOM').remove(this.$PagesPostsByOthersUnit3);this.$PagesPostsByOthersUnit3=null;}};i.insertPostIntoCurrentInstance=function(j){'use strict';this.getInstance().insertPost(j);};i.initPlaceholderElement=function(j){'use strict';this.getInstance().$PagesPostsByOthersUnit3=j;};i.getInstance=function(){'use strict';return h;};f.exports=i;}),null);
__d('PagesLikeFollowNotifDispatcher',['Arbiter','ExplicitRegistrationReactDispatcher','PageLikeConstants','PagesLikeFollowNotifActions','SubscriptionsHandler'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;function j(k){i.constructor.call(this,k);var l=new (c('SubscriptionsHandler'))();l.addSubscriptions(c('Arbiter').subscribe(c('PageLikeConstants').LIKED,function(m,n){return this.dispatchLike(n.profile_id);}.bind(this)),c('Arbiter').subscribe(c('PageLikeConstants').UNLIKED,function(m,n){return this.dispatchUnlike(n.profile_id);}.bind(this)));}j.prototype.dispatchLike=function(k){this.dispatch({type:c('PagesLikeFollowNotifActions').LIKE,data:{pageID:k,likeStatus:true}});};j.prototype.dispatchUnlike=function(k){this.dispatch({type:c('PagesLikeFollowNotifActions').UNLIKE,data:{pageID:k,likeStatus:false}});};f.exports=new j({strict:true});}),null);
__d('PagesFollowStore',['FluxReduceStore','PagesLikeFollowNotifActions','PagesLikeFollowNotifDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.getInitialState=function(){return {};};j.prototype.reduce=function(k,l){var m=babelHelpers['extends']({},k);switch(l.type){case c('PagesLikeFollowNotifActions').INIT_DATA:if(l.data.pageID in k)return k;m[l.data.pageID]=l.data.followStatus;return m;case c('PagesLikeFollowNotifActions').FOLLOW_CHANGED:m[l.data.pageID]=l.data.followStatus;return m;}return k;};function j(){h.apply(this,arguments);}f.exports=new j(c('PagesLikeFollowNotifDispatcher'));}),null);
__d('PageLiveInsightsDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('ExplicitRegistrationReactDispatcher'))({strict:true});}),null);
__d('TimelineCommentsLoader',['Event','CommentPrelude','CSS','DOM','Parent','emptyFunction'],(function a(b,c,d,e,f,g){var h={init:function i(){h.init=c('emptyFunction');c('Event').listen(document.body,'click',function(j){var k=c('Parent').byClass(j.getTarget(),'fbTimelineFeedbackCommentLoader');if(k){j.kill();c('CommentPrelude').click(k,false,'timeline_comments_loader');var l=c('Parent').byTag(k,'form'),m=c('DOM').scry(l,'li.uiUfiViewAll input');if(!m.length)m=c('DOM').scry(l,'li.fbUfiViewPrevious input');if(!m.length)m=c('DOM').scry(l,'a.UFIPagerLink');m[0].click();c('CSS').show(c('DOM').find(l,'li.uiUfiComments'));c('CSS').removeClass(k,'fbTimelineFeedbackCommentLoader');}});}};f.exports=h;}),null);
__d("ManagedError",[],(function a(b,c,d,e,f,g){function h(i,j){Error.prototype.constructor.call(this,i);this.message=i;this.innerError=j;}h.prototype=new Error();h.prototype.constructor=h;f.exports=h;}),null);
__d('AssertionError',['ManagedError'],(function a(b,c,d,e,f,g){function h(i){c('ManagedError').prototype.constructor.apply(this,arguments);}h.prototype=new (c('ManagedError'))();h.prototype.constructor=h;f.exports=h;}),null);
__d('Assert',['AssertionError','sprintf'],(function a(b,c,d,e,f,g){function h(m,n){if(typeof m!=='boolean'||!m)throw new (c('AssertionError'))(n);return m;}function i(m,n,o){var p;if(n===undefined){p='undefined';}else if(n===null){p='null';}else{var q=Object.prototype.toString.call(n);p=/\s(\w*)/.exec(q)[1].toLowerCase();}h(m.indexOf(p)!==-1,o||c('sprintf')('Expression is of type %s, not %s',p,m));return n;}function j(m,n,o){h(n instanceof m,o||'Expression not instance of type');return n;}function k(m,n){l['is'+m]=n;l['maybe'+m]=function(o,p){if(o!=null)n(o,p);};}var l={isInstanceOf:j,isTrue:h,isTruthy:function m(n,o){return h(!!n,o);},type:i,define:function m(n,o){n=n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();k(n,function(p,q){h(o(p),q);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(m){k(m,i.bind(null,m.toLowerCase()));});f.exports=l;}),null);
__d('VideoUploadFile',['fileSlice','ImageExtensions','VideoCreatorProductType','VideoUploadFeatureDetector'],(function a(b,c,d,e,f,g){function h(i,j,k,l){'use strict';this.$VideoUploadFile1=i;this.$VideoUploadFile2=j;this.$VideoUploadFile3=k;this.$VideoUploadFile4=l;}h.fromFile=function(i){'use strict';var j=h.getExtensionFromFileName(i.name);return new this(null,i,i.size,j);};h.fromFileInput=function(i){'use strict';var j=null,k=null,l=h.getExtensionFromFileInput(i);if(c('VideoUploadFeatureDetector').supportsFileAPI()&&i.files.length){j=i.files[0];k=j.size;}return new this(i,j,k,l);};h.prototype.getFileInput=function(){'use strict';return this.$VideoUploadFile1;};h.prototype.getFile=function(){'use strict';return this.$VideoUploadFile2;};h.prototype.getSize=function(){'use strict';return this.$VideoUploadFile3;};h.prototype.getExtension=function(){'use strict';return this.$VideoUploadFile4;};h.prototype.getCreatorProduct=function(){'use strict';if(this.$VideoUploadFile4===c('ImageExtensions').GIF)return c('VideoCreatorProductType').ANIMATED_GIFS;return c('VideoCreatorProductType').CORE_VIDEOS;};h.prototype.getChunk=function(i,j){'use strict';return this.$VideoUploadFile2?c('fileSlice').call(this.$VideoUploadFile2,i,j):null;};h.getExtensionFromFileInput=function(i){'use strict';return this.getExtensionFromFileName(i.value);};h.getExtensionFromFileName=function(i){'use strict';return i.indexOf('.')!=-1?i.split('.').pop().toLowerCase():'';};f.exports=h;}),null);
__d("HubbleContext",[],(function a(b,c,d,e,f,g){var h={},i={get:function j(k){return h[k];},getPageID:function j(){return h.page&&h.page.id;},getEventToShow:function j(){return h.eventToShow;},setContext:function j(k){h=k;},setKey:function j(k,l){h[k]=l;},reset:function j(){h={};}};f.exports=i;}),null);
__d('HubbleLogger',['BanzaiLogger','ErrorUtils','HubbleContext','HubbleSurfaces','arrayContains'],(function a(b,c,d,e,f,g){var h=null,i=null,j=null,k=null,l=Object.keys(c('HubbleSurfaces')).map(function(n){return c('HubbleSurfaces')[n];}),m={getStatefulFields:function n(){return {pageid:c('HubbleContext').getPageID(),platform:j,prev_section:k,section:h,surface:i};},logAction:function n(o){c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{action:o}));},logMetric:function n(o,p){c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{metric:o,metric_value:p}));},logException:function n(o,p){var q=c('ErrorUtils').normalizeError(p);c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{error_message:o,stack_trace:q.stack.split('\n')}));},reset:function n(){h=null;i=null;j=null;k=null;},setActiveSection:function n(o){k=h;h=o;},setActiveSurface:function n(o){if(!c('arrayContains')(l,o)){c('ErrorUtils').reportError('Hubble: Invalid surface value: '+o);return;}i=o;},setPlatform:function n(o){j=o;}};f.exports=m;}),null);