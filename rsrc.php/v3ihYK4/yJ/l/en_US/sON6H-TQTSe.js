if (self.CavalryLogger) { CavalryLogger.start_js(["pUZrZ"]); }

__d("TimelineAppCollectionAddObjectActions",[],(function a(b,c,d,e,f,g){f.exports={ADD:"add",HIDE:"hide",MOVE:"move",REMOVE:"remove",UNARCHIVE:"unarchive",UNDO_HIDE:"undo hide",UNDO_MOVE:"undo move",HIGHLIGHT:"highlight"};}),null);
__d('PYMABoostedComponentUtils',['AsyncRequest','Event','tidyEvent'],(function a(b,c,d,e,f,g){'use strict';var h={listenForClick:function i(j,k,l){c('tidyEvent')(c('Event').listen(j,'click',function(m){new (c('AsyncRequest'))().setURI(k).setMethod('POST').send();if(l)new (c('AsyncRequest'))().setURI(l).setMethod('POST').send();}));}};f.exports=h;}),null);
__d('ReactionUnitInteractionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ReactionUnitInteractionsLoggerConfig',this.$ReactionUnitInteractionsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ReactionUnitInteractionsLoggerConfig',this.$ReactionUnitInteractionsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ReactionUnitInteractionsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ReactionUnitInteractionsTypedLogger1=babelHelpers['extends']({},this.$ReactionUnitInteractionsTypedLogger1,j);return this;};h.prototype.setComponentTrackingData=function(j){this.$ReactionUnitInteractionsTypedLogger1.component_tracking_data=j;return this;};h.prototype.setImpressionInfoRaw=function(j){this.$ReactionUnitInteractionsTypedLogger1.impression_info_raw=j;return this;};h.prototype.setInteractionType=function(j){this.$ReactionUnitInteractionsTypedLogger1.interaction_type=j;return this;};h.prototype.setSessionID=function(j){this.$ReactionUnitInteractionsTypedLogger1.session_id=j;return this;};h.prototype.setSurface=function(j){this.$ReactionUnitInteractionsTypedLogger1.surface=j;return this;};h.prototype.setUnitType=function(j){this.$ReactionUnitInteractionsTypedLogger1.unit_type=j;return this;};h.prototype.setVC=function(j){this.$ReactionUnitInteractionsTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$ReactionUnitInteractionsTypedLogger1=babelHelpers['extends']({},this.$ReactionUnitInteractionsTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={component_tracking_data:true,impression_info_raw:true,interaction_type:true,session_id:true,surface:true,unit_type:true,vc:true};f.exports=h;}),null);
__d('ContextRowEventLogger',['Event','BanzaiLogger'],(function a(b,c,d,e,f,g){var h={registerContextRowClickAction:function i(j,k){c('Event').listen(j,'click',function(){c('BanzaiLogger').log('PageContextRowEventsLoggerConfig',k);});}};f.exports=h;}),null);
__d('PagesContextualRecommendationsContextualContentActionLogger',['Event','ReactionUnitInteractionsTypedLogger'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l,m,n,o,p){c('Event').listen(j,'click',function(event){new (c('ReactionUnitInteractionsTypedLogger'))().setComponentTrackingData(k).setImpressionInfoRaw(l).setInteractionType(m).setSessionID(n).setSurface(o).setUnitType(p).log();});}};f.exports=h;}),null);
__d('PagesContextualRecommendationsFooterActionLogger',['Event','ReactionUnitInteractionsTypedLogger','PagesEventObserver'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l,m,n,o,p,q,r,s){p.ref='contextual_recommendations';c('Event').listen(j,'click',function(event){if(o)c('PagesEventObserver').notify(o,n,p);new (c('ReactionUnitInteractionsTypedLogger'))().setComponentTrackingData(k).setImpressionInfoRaw(l).setInteractionType(m).setSessionID(q).setSurface(r).setUnitType(s).log();});}};f.exports=h;}),null);
__d('PagesContextualRecommendationsMessageFooterActionLogger',['ReactionUnitInteractionsTypedLogger','ChatOpenTab','PagesEventObserver'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l,m,n,o,p,q,r,s){p.ref='contextual_recommendations';c('ChatOpenTab').listenOpenPageTabDEPRECATED(j,n,null,'contextual_recommendations');j.addEventListener('click',function(event){if(o)c('PagesEventObserver').notify(o,n,p);new (c('ReactionUnitInteractionsTypedLogger'))().setComponentTrackingData(k).setImpressionInfoRaw(l).setInteractionType(m).setSessionID(q).setSurface(r).setUnitType(s).log();});}};f.exports=h;}),null);
__d('PagesContextualRecommendationsNextPagerLogger',['Event','ReactionUnitInteractionsTypedLogger'],(function a(b,c,d,e,f,g){var h,i,j,k,l,m,n,o={init:function p(q,r,s,t,u,v,w){h=q;i=r;j=s;k=t;l=u;m=v;n=w;c('Event').listen(h,'click',function(event){o.log(h);});},log:function p(q){new (c('ReactionUnitInteractionsTypedLogger'))().setComponentTrackingData(i).setImpressionInfoRaw(j).setInteractionType(k).setSessionID(l).setSurface(m).setUnitType(n).log();}};f.exports=o;}),null);
__d('PagesContextualRecommendationsPrevPagerLogger',['Event','ReactionUnitInteractionsTypedLogger'],(function a(b,c,d,e,f,g){var h,i,j,k,l,m,n,o={init:function p(q,r,s,t,u,v,w){h=q;i=r;j=s;k=t;l=u;m=v;n=w;c('Event').listen(h,'click',function(event){o.log(h);});},log:function p(q){new (c('ReactionUnitInteractionsTypedLogger'))().setComponentTrackingData(i).setImpressionInfoRaw(j).setInteractionType(k).setSessionID(l).setSurface(m).setUnitType(n).log();}};f.exports=o;}),null);
__d("XTogglePagesActionsUnitMenuItemCurationController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/timeline\/app\/collection\/item\/curation\/togglemenu\/pages\/",{collection_token:{type:"String"},object_id:{type:"String"},action_type:{type:"Enum",enumType:1},mechanism:{type:"Enum",enumType:1},surface:{type:"Enum",enumType:1},save_context:{type:"String"},privacy:{type:"IntToStringMap"},backdate_time:{type:"Int"},suppress_notifications:{type:"Bool",defaultValue:false}});}),null);
__d('PagesContextualRecommendationsSaveButton',['fbt','AsyncRequest','Button','XTogglePagesActionsUnitMenuItemCurationController','TimelineAppCollectionAddObjectActions'],(function a(b,c,d,e,f,g,h){var i={registerButton:function j(k,l,m,n,o){k.subscribe('change',function(p,q){var r=q.selected?c('TimelineAppCollectionAddObjectActions').ADD:c('TimelineAppCollectionAddObjectActions').REMOVE,s=c('XTogglePagesActionsUnitMenuItemCurationController').getURIBuilder().setString('collection_token',l).setString('object_id',m).setEnum('action_type',r).setEnum('surface',n).setEnum('mechanism',o).getURI();new (c('AsyncRequest'))().setURI(s).setMethod('POST').setHandler(function(t){var u=k.isSelected();c('Button').setLabel(k.getRoot(),u?h._("Saved"):h._("Save"));}).send();});}};f.exports=i;}),null);
__d('PagesContextualRecommendationsXOutButton',['cx','csx','CSS','Event','DOM','Parent'],(function a(b,c,d,e,f,g,h,i){var j=500,k={init:function l(m){c('Event').listen(m,'click',function(event){k.close(m);});},close:function l(m){var n=c('Parent').bySelector(m,"._31qw"),o=n.parentNode;if(n){c('CSS').addClass(n,"_31r1");setTimeout(function(){var p=c('Parent').bySelector(m,".uiList"),q=c('Parent').bySelector(m,"._31qy");c('DOM').remove(o);if(p.children.length===0)c('DOM').remove(q);},j);}}};f.exports=k;}),null);
__d('PagesContextualRecommendationsXOutLogger',['Event','ReactionUnitInteractionsTypedLogger'],(function a(b,c,d,e,f,g){var h,i,j,k,l,m,n,o={init:function p(q,r,s,t,u,v,w){h=q;i=r;j=s;k=t;l=u;m=v;n=w;c('Event').listen(h,'click',function(event){o.log(h);});},log:function p(q){new (c('ReactionUnitInteractionsTypedLogger'))().setComponentTrackingData(i).setImpressionInfoRaw(j).setInteractionType(k).setSessionID(l).setSurface(m).setUnitType(n).log();}};f.exports=o;}),null);
__d('ScrollUnitPagerArrows',['cx','csx','Animation','Arbiter','CSS','DOMQuery','Ease','Event','Locale','Run','TidyArbiterMixin','TrackingNodes','TrackingNodeTypes','CarouselDynamicSlideshowController','mixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j,k,l=285,m=8,n=1,o=350,p=500;j=babelHelpers.inherits(q,c('mixin')(c('TidyArbiterMixin')));k=j&&j.prototype;function q(r){'use strict';k.constructor.call(this);this.$ScrollUnitPagerArrows1=r.node;this.$ScrollUnitPagerArrows2=r.grid;this.$ScrollUnitPagerArrows3=r.prev_pager;this.$ScrollUnitPagerArrows4=r.next_pager;this.$ScrollUnitPagerArrows5=r.disable_pager_arrow_timeout;this.$ScrollUnitPagerArrows6=r.item_width||l;this.$ScrollUnitPagerArrows7=r.num_visible_items||n;this.$ScrollUnitPagerArrows8=null;this.$ScrollUnitPagerArrows9=0;this.$ScrollUnitPagerArrows10=m;this.$ScrollUnitPagerArrows11=c('Locale').isRTL()?'right':'left';this.$ScrollUnitPagerArrows2.style[this.$ScrollUnitPagerArrows11]=this.$ScrollUnitPagerArrows10+'px';this.$ScrollUnitPagerArrows12();if(r.slideshow_ids){this.$ScrollUnitPagerArrows13=r.slideshow_ids;var s={slideshow_ids:r.slideshow_ids,carousel:this};this.$ScrollUnitPagerArrows14=new (c('CarouselDynamicSlideshowController'))(s);}r.extensions.forEach(function(t){t.init(this);},this);this.subscribe('autoscroll',this.$ScrollUnitPagerArrows15.bind(this));c('tidyEvent')([c('Event').listen(this.$ScrollUnitPagerArrows3,'click',this.$ScrollUnitPagerArrows16.bind(this)),c('Event').listen(this.$ScrollUnitPagerArrows4,'click',this.$ScrollUnitPagerArrows15.bind(this))]);this.init_pagers();if(this.$ScrollUnitPagerArrows17)this.$ScrollUnitPagerArrows8=c('Arbiter').subscribe(['carousel-composer/carousel_card_change'],this.$ScrollUnitPagerArrows18.bind(this));c('Run').onLeave(function(){this.$ScrollUnitPagerArrows8&&this.$ScrollUnitPagerArrows8.remove();}.bind(this));}q.prototype.getVisibleIndex=function(){'use strict';return this.$ScrollUnitPagerArrows9;};q.prototype.$ScrollUnitPagerArrows18=function(){'use strict';this.$ScrollUnitPagerArrows9=0;this.$ScrollUnitPagerArrows10=m;this.$ScrollUnitPagerArrows2.style[this.$ScrollUnitPagerArrows11]=this.$ScrollUnitPagerArrows10+'px';this.refresh();};q.prototype.$ScrollUnitPagerArrows19=function(){'use strict';if(this.$ScrollUnitPagerArrows17){return this.$ScrollUnitPagerArrows20()-this.getLastVisibleIndex();}else return this.$ScrollUnitPagerArrows2.childNodes.length-this.getLastVisibleIndex();};q.prototype.$ScrollUnitPagerArrows21=function(){'use strict';return this.$ScrollUnitPagerArrows9;};q.prototype.$ScrollUnitPagerArrows22=function(){'use strict';return this.$ScrollUnitPagerArrows21()>0;};q.prototype.$ScrollUnitPagerArrows23=function(){'use strict';return this.$ScrollUnitPagerArrows19()>0;};q.prototype.$ScrollUnitPagerArrows15=function(){'use strict';if(!this.$ScrollUnitPagerArrows23())return;this.$ScrollUnitPagerArrows24(1,this.$ScrollUnitPagerArrows22());this.$ScrollUnitPagerArrows12();};q.prototype.$ScrollUnitPagerArrows16=function(){'use strict';if(!this.$ScrollUnitPagerArrows22())return;this.$ScrollUnitPagerArrows24(-1,this.$ScrollUnitPagerArrows23());this.$ScrollUnitPagerArrows12();};q.prototype.$ScrollUnitPagerArrows25=function(){'use strict';return this.$ScrollUnitPagerArrows23()&&this.$ScrollUnitPagerArrows22();};q.prototype.$ScrollUnitPagerArrows12=function(){'use strict';if(this.$ScrollUnitPagerArrows23())c('TrackingNodes').addDataAttribute(this.$ScrollUnitPagerArrows4,c('TrackingNodeTypes').MULTI_ATTACHMENT_PAGER_NEXT,this.getLastVisibleIndex()+1);};q.prototype.$ScrollUnitPagerArrows26=function(r){'use strict';var s=r?"_3dm4":"_3dm5",t=r?"_3rvy":"_3rv-",u=r?this.$ScrollUnitPagerArrows22():this.$ScrollUnitPagerArrows23(),v=!this.$ScrollUnitPagerArrows25()&&!u;if(v){c('CSS').addClass(this.$ScrollUnitPagerArrows1,t);setTimeout(function(){c('CSS').addClass(this.$ScrollUnitPagerArrows1,s);}.bind(this),this.$ScrollUnitPagerArrows5);}else{c('CSS').removeClass(this.$ScrollUnitPagerArrows1,t);c('CSS').removeClass(this.$ScrollUnitPagerArrows1,s);}};q.prototype.getLastVisibleIndex=function(){'use strict';return this.$ScrollUnitPagerArrows9+this.$ScrollUnitPagerArrows7;};q.prototype.init_pagers=function(){'use strict';c('CSS').conditionClass(this.$ScrollUnitPagerArrows1,"_3dm4",!this.$ScrollUnitPagerArrows22());};q.prototype.refresh=function(){'use strict';this.$ScrollUnitPagerArrows26(true);this.$ScrollUnitPagerArrows26(false);c('CSS').conditionClass(this.$ScrollUnitPagerArrows1,"_3o-b",this.$ScrollUnitPagerArrows25());};q.prototype.getID=function(){'use strict';var r=c('DOMQuery').find(this.$ScrollUnitPagerArrows1,"^._5pat");return r.id;};q.prototype.$ScrollUnitPagerArrows20=function(){'use strict';var r=0,s=0;for(;s<this.$ScrollUnitPagerArrows2.childNodes.length;s++)if(!c('CSS').hasClass(this.$ScrollUnitPagerArrows2.childNodes[s],'hidden_elem'))r++;return r;};q.prototype.$ScrollUnitPagerArrows24=function(r,s){'use strict';this.$ScrollUnitPagerArrows9+=r;var t=(p-this.$ScrollUnitPagerArrows6-2*m)/2;if(this.$ScrollUnitPagerArrows9===1&&r>0||this.$ScrollUnitPagerArrows9+2===this.$ScrollUnitPagerArrows2.childNodes.length&&r<0){this.$ScrollUnitPagerArrows10-=(this.$ScrollUnitPagerArrows6-t+m)*r;}else if(this.$ScrollUnitPagerArrows9+1===this.$ScrollUnitPagerArrows2.childNodes.length&&r>0||this.$ScrollUnitPagerArrows9===0&&r<0){this.$ScrollUnitPagerArrows10-=(this.$ScrollUnitPagerArrows6+2*m+t-(p-this.$ScrollUnitPagerArrows6-m))*r;}else this.$ScrollUnitPagerArrows10-=(m+this.$ScrollUnitPagerArrows6)*r;var u=this.$ScrollUnitPagerArrows1;c('CSS').addClass(u,"_3dm6");new (c('Animation'))(this.$ScrollUnitPagerArrows2).to(this.$ScrollUnitPagerArrows11,this.$ScrollUnitPagerArrows10).duration(o).ease(c('Ease').sineOut).ondone(function(){c('CSS').removeClass(u,"_3dm6");this.refresh();}.bind(this)).go();this.$ScrollUnitPagerArrows27.slide();if(this.$ScrollUnitPagerArrows14)this.$ScrollUnitPagerArrows14.slide();};f.exports=q;}),null);
/**
 * @providesModule PayWithMyBank_JS
 * @preserve-header
 */__d("PayWithMyBank_JS",[],(function a(b,c,d,e,f,g){"use strict";var h=(function(){var i=window.document,j=window.navigator,k=j.userAgent||"",l=function(){var dc;try{dc=localStorage.getItem("PayWithMyBank.grp");if(!dc||dc>=100||dc<0){dc=Math.floor(Math.random()*100);localStorage.setItem("PayWithMyBank.grp",dc);}}catch(ec){dc=0;}return dc;}(),m=function(dc,ec){var fc=window.PayWithMyBankOptions;return (fc&&fc[dc]!==undefined)?fc[dc]:ec;},n={closeButton:m("closeButton",true),dragAndDrop:m("dragAndDrop",true),mobilePopup:m("mobilePopup",true),containerId:m("containerId",null)},o=false,p,q=[],r=function(){return undefined;},s={ENV_BANK_PANEL_ORIGIN:"https://paywithmybank.com",ENV_PAYMENT_PANEL_ORIGIN:"https://paywithmybank.com",ENV_PAYMENT_PANEL_URL:"https://paywithmybank.com/start",accessId:"se97xciKYWzyN5EYnwuU",project:{version:"1.27.4"}},t=function(){var dc;if(!o){o=true;if(q!==null){for(dc=0;dc<q.length;dc+=1)q[dc].call();q=[];}}},u=function(dc){if(typeof dc==="function"){if(o){dc.call();}else q.push(dc);return dc;}return i.getElementById(dc);},v=function(dc){var ec,fc,gc,hc={};if(window.getComputedStyle){ec=window.getComputedStyle(dc,null);for(fc=0;fc<ec.length;++fc){gc=ec[fc];hc[gc]=ec.getPropertyValue(gc);}}else if(dc.currentStyle){ec=dc.currentStyle;for(gc in ec)if(ec.hasOwnProperty(gc))hc[gc]=ec[gc];}else if(dc.style){ec=dc.style;for(gc in ec)if(ec.hasOwnProperty(gc))if(typeof ec[gc]!=='function')hc[gc]=ec[gc];}return hc;},w=function(dc,ec){var fc=typeof dc==="object"?dc:u(dc),gc=" "+ec+" ";if((" "+fc.className+" ").replace(/[\n\t]/g," ").indexOf(gc)>-1)return true;return false;},x=function(dc,ec){var fc=[],gc,hc;for(hc=0;hc<dc.length;hc+=1){gc=parseInt("0"+dc[hc],10);if((ec===undefined)||(gc>=ec))fc.push(gc);}return Math.min.apply(null,fc);},y=function(){var dc,ec,fc=i.querySelectorAll("body > *");for(dc=0;dc<fc.length;dc++)try{ec=fc[dc];if(ec&&(!ec.id||ec.id!=="paywithmybank-lightbox"))ec.style.display="none";}catch(gc){}},z=(function(){var dc,ec={},fc,gc=function(){return i.querySelector("meta[name=viewport]");};return {exists:function(){var hc=gc();return (hc!=null);},set:function(){var hc='width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=0',ic=gc(),jc=i.querySelector("meta[id=paywithmybank-viewport]"),kc;if(jc||ic)return false;fc=i.getElementsByTagName('head')[0];kc=i.createElement('meta');kc.setAttribute('id','paywithmybank-viewport');kc.setAttribute('name','viewport');kc.setAttribute('content',hc);fc.appendChild(kc);},restore:function(){var hc=u('paywithmybank-viewport');if(hc&&fc)fc.removeChild(hc);}};}()),aa=(function(){var dc=k.toLowerCase(),ec=/(chrome)[\/]([\w.]+)/.exec(dc)||/(webkit)[\/]([\w.]+)/.exec(dc)||/(opera)(?:.*version)?[\/]([\w.]+)/.exec(dc)||/(msie) ([\w.]+)/.exec(dc)||(dc.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(dc))||[],fc=((/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(k))||(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(k.substr(0,4)))),gc=x([screen.width,window.innerWidth,window.outerWidth],1),hc=(gc<640),ic=/i(Phone|Pod)/i.test(k),jc=/iPad/i.test(k),kc=/CriOS/i.test(k),lc=/(os 8).*(applewebkit)/i.test(k),mc=/(os ).*(applewebkit)/i.test(k),nc={};nc[ec[1]||"unknown"]=true;nc.version=parseFloat(ec[2])||0;nc.iOS=mc;nc.iOS8Webkit=(lc&&nc.webkit);nc.iOS8Safari=(nc.iOS8Webkit&&!kc);nc.supported=(!nc.msie&&!nc.mozilla&&!nc.webkit&&!nc.chrome)||(nc.msie&&nc.version>=8)||(nc.mozilla&&nc.version>=1.9)||(nc.webkit&&nc.version>=534)||(nc.chrome&&nc.version>=4)||(ic&&nc.version>=533.17)||(jc&&nc.version>=531.21);nc.mobile=(ic&&!jc)||(fc&&hc);nc.popupCompatible=!((nc.msie)||(nc.mozilla)||(ic&&kc));if((nc.iOS8Safari)&&(!jc))if(z.exists()){nc.mobile=true;nc.popupCompatible=false;}else nc.mobile=false;nc.desktop=!nc.mobile;return nc;}()),ba=[],ca=ba.indexOf||function(dc){var ec,fc=this.length;for(ec=0;ec<fc;ec+=1)if(this[ec]===dc)return ec;return -1;},da=function(dc,ec,fc){return ca.call(dc,ec,fc);},ea=Array.isArray||function(dc){return Object.prototype.toString.call(dc)==="[object Array]";},fa=function(dc){return Object.prototype.toString.call(dc)==="[object Object]";},ga=i.addEventListener?function(dc,ec,fc){if(dc)dc.addEventListener(ec,fc,false);}:function(dc,ec,fc){if(dc)dc.attachEvent("on"+ec,fc);},ha=i.removeEventListener?function(dc,ec,fc){if(dc)dc.removeEventListener(ec,fc,false);}:function(dc,ec,fc){if(dc)dc.detachEvent("on"+ec,fc);},ia=function(dc){if(!dc)return;if(dc.preventDefault){dc.preventDefault();}else dc.returnValue=false;return false;},ja=function(dc){if(!dc)return;if(dc.stopPropagation)dc.stopPropagation();dc.cancelBubble=true;return false;},ka=function(dc){dc=dc||window.event;if(!window.scrollX)return {x:dc.clientX+i.documentElement.scrollLeft+i.body.scrollLeft,y:dc.clientY+i.documentElement.scrollTop+i.body.scrollTop};return {x:dc.clientX+window.scrollX,y:dc.clientY+window.scrollY};},la=function(dc){return !isNaN(parseFloat(dc))&&isFinite(dc);},ma=/alpha\([^)]*\)/i,na=/\S/,oa=na.test("\xA0")?/^[\s\xA0]+/:/^\s+/,pa=na.test("\xA0")?/[\s\xA0]+$/:/\s+$/,qa=String.prototype.trim?function(dc){return dc===null?"":String.prototype.trim.call(dc);}:function(dc){return dc===null?"":dc.toString().replace(oa,"").replace(pa,"");},ra=function(dc,ec){if(!dc.attachEvent){dc.style.opacity=ec;return dc.style.opacity;}var fc=dc.style,gc=dc.currentStyle,hc=la(ec)?"alpha(opacity="+ec*100+")":"",ic=(gc&&gc.filter)||fc.filter||"";fc.zoom=1;if(ec>=1&&qa(ic.replace(ma,""))===""){if(fc.removeAttribute)fc.removeAttribute("filter");if(gc&&!gc.filter)return;}fc.filter=ma.test(ic)?ic.replace(ma,hc):ic+" "+hc;},sa=function(){var dc={};dc.width=dc.height=0;if(typeof(window.innerWidth)==="number"){dc.width=window.innerWidth;dc.height=window.innerHeight;}else if(i.documentElement&&(i.documentElement.clientWidth||i.documentElement.clientHeight)){dc.width=i.documentElement.clientWidth;dc.height=i.documentElement.clientHeight;}else if(i.body&&(i.body.clientWidth||i.body.clientHeight)){dc.width=i.body.clientWidth;dc.height=i.body.clientHeight;}dc.width-=17;return dc;},ta=null,ua=false,va=null,wa=[],xa=function(){var dc=wa.slice(0),ec=arguments,fc;setTimeout(function(){for(fc=0;fc<dc.length;fc+=1)dc[fc].apply(null,ec);},0);},ya=null,za=function(dc){if(ya&&dc!=="establish"){ya.postMessage(dc,"*");}else u('paywithmybank-iframe').contentWindow.postMessage(dc,"*");},ab=function(dc){ia(dc);return false;},bb=function(dc){dc.style.display='block';},cb=function(dc){dc.style.display='none';},db=false,eb=true,fb=function(){eb=true;z.restore();cb(ta);},gb=function(){return s.ENV_PAYMENT_PANEL_URL+"/?grp="+l+"&widgetId="+bc.getWidgetId()+"&v="+s.project.version+"&accessId="+s.accessId;},hb=null,ib=function(dc){var ec=n.redirectTarget;if(typeof ec=="string"&&u(ec))ec=u(ec);if(typeof ec=="string")ec=window[ec];if(!ec)ec=window;window.focus();if(dc!==undefined&&dc!=null&&(dc.indexOf("https://")==0||dc.indexOf("http://")==0||dc.indexOf("/")==0||dc.indexOf("#")==0||dc.indexOf("review")==0||dc.indexOf("cancel")==0||dc.indexOf("return")==0||dc.indexOf("pw")==0)){if(ec.location){ec.location=dc;}else ec.src=dc;}else dc=null;if(!eb){if(hb!==null){hb=null;u('paywithmybank-iframe').src=gb();}if(ya&&ya.close)ya.close();ya=null;fb();xa("close",dc);}},jb=function(){if(!db)ib();},kb=function(dc){ja(dc);if(aa.supported){setTimeout(function(){jb();},1000);za("closePanel");}else setTimeout(function(){jb();},0);},lb={},mb=function(dc){var ec=sa(),fc=u("paywithmybank-outer-panel"),gc=ka(dc),hc=gc.x-lb.x,ic=gc.y-lb.y,jc,kc,lc;if(hc<-(3*fc.offsetWidth/4))hc=-(3*fc.offsetWidth/4);if(ic<0)ic=0;if(hc>(ec.width-(fc.offsetWidth/4)))hc=ec.width-(fc.offsetWidth/4);if(ic>(ec.height-(fc.offsetHeight/4)))ic=ec.height-(fc.offsetHeight/4);if(hc<lb.left)hc=lb.left;if(ic<lb.top)ic=lb.top;if(fc){fc.style.position='absolute';fc.style.left=hc+'px';fc.style.top=ic+'px';}},nb=function(){u('paywithmybank-panel-header').style.cursor='default';ra(u("paywithmybank-panel"),1);ha(i,"mousemove",mb);ha(i,"mouseup",nb);},ob=function(dc){var ec=ka(dc),fc,gc=u("paywithmybank-panel");if(n.dragAndDrop===false)return false;ra(gc,.5);u('paywithmybank-panel-header').style.cursor='move';ga(i,"mousemove",mb);ga(i,"mouseup",nb);lb.x=ec.x-u("paywithmybank-outer-panel").offsetLeft;lb.y=ec.y-u("paywithmybank-outer-panel").offsetTop;try{fc=v(gc);lb.top=Math.abs(parseInt(fc.top||0));lb.left=Math.abs(parseInt(fc.left||0));}catch(dc){lb.top=0;lb.left=0;}ia(dc);ja(dc);},pb=function(dc,ec){dc=String(dc).split('');while(dc.length<ec)dc.unshift(0);return dc.join('');},qb=function(dc){if(dc.origin!=s.ENV_PAYMENT_PANEL_ORIGIN&&dc.origin!=s.ENV_BANK_PANEL_ORIGIN)return;var ec=dc.data.split("|"),fc;fc=ec[0]||"";if(fc==="PayWithMyBank.closePanel"){ib(ec[1]);}else if(fc==="PayWithMyBank.preventClose"){db=true;}else if(fc==="PayWithMyBank.setPaymentProviderId"){hb=pb(parseInt(ec[1],10),9);}else if((fc==="PayWithMyBank.loaded")||(fc==="PayWithMyBank.selectBankLoaded")){ua=true;if(va!==null)va.call();}else if(fc==="PayWithMyBank.event"){xa(ec[1],{page:ec[2],transactionId:ec[3],merchantReference:ec[4],type:ec[5],data:ec[6]});}else if(fc==="PayWithMyBank.changePanelSize")if(aa.desktop){if(la(ec[1]))u("paywithmybank-panel").style.width=parseInt(ec[1])+"px";if(la(ec[2]))u("paywithmybank-panel").style.height=parseInt(ec[2])+"px";}},rb=function(){var dc,ec=x([screen.height,window.innerHeight,window.outerHeight],1);if(!p||ec!==p){p=ec;dc=parseInt(p)+"px";u("paywithmybank-lightbox").style.height=dc;u("paywithmybank-panel").style.height=dc;u("paywithmybank-iframe").style.height=dc;}},sb=function(){if(aa.mobile){rb();}else tb();return true;},tb=function(){var dc=u("paywithmybank-outer-panel"),ec=u('paywithmybank-panel'),fc=u('paywithmybank-lightbox');if(w(fc,'paywithmybank-mobile')||w(fc,'paywithmybank-lightbox-widget'))return false;if(aa.supported){dc.style.position='relative';dc.style.left='50%';dc.style.top='50%';}else{ec.style.top='50px';dc.style.position='absolute';dc.style.top='0px';dc.style.margin='0 auto';i.body.scrollTop=i.documentElement.scrollTop=0;}return true;},ub=function(){var dc,ec,fc;ta=u("paywithmybank-lightbox");if(ta)return;if(n.containerId)ec=u(n.containerId);if(!ec)ec=i.body;ta=i.createElement("div");ta.setAttribute("id","paywithmybank-lightbox");fb();var gc="";if(aa.mobile&&aa.iOS8Webkit)gc+="-webkit-overflow-scrolling: touch; overflow-y: scroll; ";ta.innerHTML="<div id='paywithmybank-outer-panel'>"+"<div id='paywithmybank-panel' class='paywithmybank-panel' style='"+gc+"'>"+"<iframe id='paywithmybank-iframe' name='paywithmybank-iframe' src='"+gb()+"' sandbox='allow-forms allow-scripts allow-same-origin allow-popups' frameborder='0' scrolling='"+(aa.mobile?"yes":"no")+"'></iframe>"+"<div id='paywithmybank-panel-header' class='paywithmybank-panel-header'></div>"+"<div id='paywithmybank-close' class='paywithmybank-close' title='Close this window'></div>"+"</div></div>"+"<div id='paywithmybank-mask' class='paywithmybank-mask' ></div>";fc=i.createElement("div");fc.setAttribute("id","paywithmybank-form-container");cb(fc);fc.innerHTML="<form id='PayWithMyBankForm' class='paywithmybank-form' target='paywithmybank-iframe'>"+"</form>";i.body.appendChild(fc);if(aa.desktop){ga(u("paywithmybank-panel"),"mousedown",ob);ga(ta,"mousewheel",ab);ga(ta,"DOMMouseScroll",ab);}dc=u("paywithmybank-close");ga(dc,"mousedown",ja);ga(dc,"click",kb);ga(window,"message",qb);ga(window,"resize",sb);ga(window,"orientationchange",sb);ta=ec.appendChild(ta);},vb=function(){return u("PayWithMyBankForm");},wb=function(){if(!eb){za("closePanel|true");fb();}},xb=function(){if(aa.mobile){ga(window,"unload",wb);ga(window,"focus",function(){if(!eb)try{if(!ya.location)ib();}catch(dc){ib();}});ga(u("paywithmybank-mask"),"click",function(){if(!eb){try{if(!ya.location)ya=null;}catch(dc){ya=null;}if(ya){ya.focus();}else ib();}});}},yb=function(dc){cb(u("paywithmybank-panel"));bb(u("paywithmybank-mask"));xb();vb().target=dc;},zb=function(){var dc=u("paywithmybank-outer-panel");if(dc)dc.className="";if(!aa.iOS)i.body.style.overflow="hidden";y();z.set();rb();},ac=function(dc){var ec;if(!dc&&!aa.supported&&aa.mobile){alert("Sorry, but you are using a browser version we do not support for this type of transaction.");return false;}eb=false;if(!dc&&aa.supported&&aa.mobile){if(aa.popupCompatible&&n.mobilePopup){ec="PWMB"+Math.random();if(!ya)ya=window.open("about:blank",ec);}if(ya){yb(ec);}else zb();}bb(ta);xa("open");return true;},bc=(function(){var dc=["<div class='paywithmybank-widget-bar'><div><strong>In a rush? Don't leave your chair!</strong></div><div>&#8226;&nbsp;No bank account number or debit card needed.</div><div>&#8226;&nbsp;All you need is your online banking ID & password.</div><div class='paywithmybank-disclaimer'><span class='paywithmybank-widget-lock-icon'></span> When you click Continue, a box will appear to securely connect to your bank to complete your payment.</div></div>"],ec=function(){return 3;},fc=function(){return "<div class='paywithmybank-widget-"+ec()+"'>"+dc[0]+"</div>";};return {getWidgetId:function(){return "361."+ec();},create:function(gc,hc){var ic=u(gc),jc;hc=hc||{};ic.setAttribute("class",ic.getAttribute("class")?ic.getAttribute("class")+" paywithmybank-widget":"paywithmybank-widget");jc=i.createElement("div");jc.setAttribute("class","paywithmybank-widget-clear paywithmybank-widget-"+(aa.mobile?"mobile":"desktop"));jc.innerHTML=fc();ic.appendChild(jc);}};}());u(function(){ub();});(function(dc){var ec,fc=i.addEventListener?function(){i.removeEventListener("DOMContentLoaded",fc,false);dc();}:function(){if(i.readyState==="complete"){i.detachEvent("onreadystatechange",fc);dc();}},gc=function(){try{i.documentElement.doScroll("left");}catch(ic){setTimeout(gc,1);return;}dc();};if(i.readyState==="complete")return setTimeout(dc,1);if(i.addEventListener){i.addEventListener("DOMContentLoaded",fc,false);window.addEventListener("load",dc,false);}else if(i.attachEvent){i.attachEvent("onreadystatechange",fc);window.attachEvent("onload",dc);ec=false;try{ec=window.frameElement===null;}catch(hc){}if(i.documentElement.doScroll&&ec)gc();}}(t));var cc=(function(){var dc=(aa.mobile?0:34),ec=[];if(aa.iOS)ec.push("body, html { height: 100% }",".paywithmybank-mobile #paywithmybank-outer-panel { border: 0px solid green!important; box-sizing: border-box!important; min-height: 100%!important; height:auto!important;position:relative!important;}",".paywithmybank-mobile #paywithmybank-panel { border: 0px solid blue!important; box-sizing: border-box!important;0 min-height: 100%!important; height:auto!important;position:relative!important;}",".paywithmybank-mobile #paywithmybank-iframe { border: 0px solid yellow!important; box-sizing: border-box!important; min-height: 100%!important; height:auto!important;position:relative!important;}",".paywithmybank-mobile { border: 0px solid red!important; box-sizing: border-box; min-height: 100%!important; height:auto!important; position:relative!important; }");ec.push(".paywithmybank-lightbox.paywithmybank-desktop .paywithmybank-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.4; -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\"; }",".paywithmybank-lightbox.paywithmybank-desktop { display: none; position: relative; width: 100%; height: 100%; z-index: 2147483648; }",".paywithmybank-lightbox.paywithmybank-desktop #paywithmybank-outer-panel { display:block; position: relative!important; width: 100%!important; height: 100%!important; top: 0!important; left: 0!important; }",".paywithmybank-lightbox.paywithmybank-desktop .paywithmybank-panel { display: block; z-index: 9002; position: absolute; width: 665px; height: 411px; overflow: hidden; background: #fff none !important;}",".paywithmybank-lightbox.paywithmybank-desktop .paywithmybank-panel iframe { display: block; width: 100%; height: 100%; }",".paywithmybank-lightbox.paywithmybank-desktop .paywithmybank-panel .paywithmybank-panel-header { display: block; background-color: #fff; opacity: 0.00; filter: alpha(opacity=0); width: 100%; height: "+dc+"px; position: absolute; top: 0; z-index: 9003; left: 0; }",".paywithmybank-lightbox.paywithmybank-desktop .paywithmybank-panel .paywithmybank-close { display: block; width: 15px; height: 15px; background: url("+s.ENV_PAYMENT_PANEL_URL+"/images/button-close.png) no-repeat 0 0; position: absolute; top: 10px; right: 10px; z-index: 9004; cursor: pointer; }",".paywithmybank-lightbox.paywithmybank-desktop .paywithmybank-mask { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: white; z-index: 9001; display: none; }",".paywithmybank-lightbox.paywithmybank-desktop .paywithmybank-panel.ui-draggable-dragging { opacity: 0.9; filter: alpha(opacity=90); }",".paywithmybank-lightbox.paywithmybank-mobile #paywithmybank-outer-panel { position: relative; top: 0; left: 0; width: 100%; height: 100%; }",".paywithmybank-lightbox.paywithmybank-mobile .paywithmybank-panel { position: absolute; top: 0; left: 0; -moz-border-radius: 0px; -webkit-border-radius: 0px; border-radius: 0px; border: none; width: 100%; height: 110%; }",".paywithmybank-lightbox.paywithmybank-mobile .paywithmybank-paymenttype-retrieval iframe { width: 100% !important; height: 100% !important; }",".paywithmybank-lightbox.paywithmybank-mobile .paywithmybank-mask { display: none }");var fc=function(){var jc=i.createElement("style");jc.setAttribute("type","text/css");jc.setAttribute("id","paywithmybank-styles");i.getElementsByTagName("head")[0].appendChild(jc);return jc;},gc=fc(),hc=function(jc){if(gc.sheet&&gc.sheet.insertRule){gc.sheet.insertRule(jc,0);return;}var kc=(gc.styleSheet||gc.sheet);if(!(kc||{}).addRule||jc.indexOf("@media")>-1)return;var lc=jc.split("{"),mc=lc.shift(),nc=lc.join(""),oc=nc.lastIndexOf("}"),pc;if(oc>0)nc=nc.substring(1,oc);mc=mc.split(",");for(var qc=0;qc<mc.length;qc++){pc=mc[qc];kc.addRule(pc,nc);}};for(var ic=0;ic<ec.length;ic++)hc(ec[ic]);})();return {establish:function(dc,ec){var fc,gc,hc=i.body,ic=!(("createTransaction" in dc)&&!dc.createTransaction),jc=function(rc){var sc=0,tc,uc;for(uc=0;uc<rc.length;uc++){tc=rc.charCodeAt(uc);sc=((sc<<5)-sc)+tc;sc=sc&sc;}return sc;},kc=function(rc,sc){if(sc)if(ea(sc)){if(jc(rc)==-1307559318){kc(rc,sc.join(","));}else for(var tc=0;tc<sc.length;tc++)kc(rc,sc[tc]);}else if(fa(sc)){if((sc.name||sc.key)&&sc.value){if(rc){kc(rc+"."+(sc.name||sc.key),sc.value);}else kc((sc.name||sc.key),sc.value);}else for(var uc in sc)if(rc){kc(rc+"."+uc,sc[uc]);}else kc(uc,sc[uc]);}else{var vc=i.createElement("input");vc.type="hidden";vc.name=rc;vc.value=sc;vb().appendChild(vc);}};ub();if(!dc){window.alert("No payment data!\nPlease revise PayWithMyBank integration code.");return;}if(!o){u(function(){h.establish(dc,ec);});return;}if(!aa.supported&&!ic){var lc=s.ENV_PAYMENT_PANEL_URL+"/message/invalid_browser?&grp="+l+"theme=facebook&v="+s.project.version;u('paywithmybank-iframe').src=lc;ac();return;}if(!ua&&ic){va=function(){h.establish(dc,ec);va=null;};return;}if(ec)for(var mc in ec)try{n[mc]=ec[mc];}catch(nc){}if(n.containerId&&u(n.containerId)&&(!ic||aa.desktop))hc=u(n.containerId);if(dc.paymentType==="Disbursement")dc.version=2;if(!dc.version||dc.version<2){dc.currency=dc.currency||"USD";dc.amount=dc.amount||"0.00";}dc.deviceType=aa.mobile?"mobile":"desktop";dc.widgetId=bc.getWidgetId();dc.grp=l;if(n.skipWelcomeScreen)dc.skipWelcomeScreen=n.skipWelcomeScreen;ta.setAttribute("class","paywithmybank-lightbox"+(ic?"":"-widget")+" paywithmybank-"+dc.deviceType);if(dc.paymentType){gc=(dc.paymentType.toLowerCase?dc.paymentType.toLowerCase():dc.paymentType);fc=u("paywithmybank-panel");fc.setAttribute("class","paywithmybank-panel paywithmybank-paymenttype-"+dc.paymentType.toLowerCase());}if((aa.mobile)||(n&&n.closeButton===false)){u("paywithmybank-close").style.display="none";}else u("paywithmybank-close").style.display="block";if((aa.mobile)||(n&&n.dragAndDrop===false)){u("paywithmybank-panel-header").style.display="none";}else u("paywithmybank-panel-header").style.display="block";if(ta.parentNode!==hc){ta.parentNode.removeChild(ta);hc.appendChild(ta);if(hc===i.body){ta.removeAttribute("style");u("paywithmybank-mask").removeAttribute("style");}else if(ic){ta.style.position="absolute";u("paywithmybank-mask").style.position="absolute";u("paywithmybank-mask").style.height="100%";}}var oc=vb(),pc=oc.firstChild;while(pc){var qc=pc;pc=pc.nextSibling;qc.parentNode.removeChild(qc);}if(!ic){oc.method="get";oc.action=s.ENV_PAYMENT_PANEL_URL+"/selectBank/widget?v="+s.project.version;kc(null,{accessId:dc.accessId,merchantId:dc.merchantId,paymentType:dc.paymentType,widgetId:dc.widgetId,grp:dc.grp});}else{oc.method="post";if((hb)&&(!n.verify)&&(!dc.account)&&(!dc.paymentProviderId)){dc.paymentProviderId=hb;oc.action=s.ENV_PAYMENT_PANEL_URL+"/selectBank/selectBank?v="+s.project.version;}else oc.action=s.ENV_PAYMENT_PANEL_URL+"/selectBank/index?v="+s.project.version;kc(null,dc);}tb();ac(!ic);setTimeout(function(){vb().submit();if(ya)ya.focus();},0);},verify:function(dc,ec){ec=ec||{};ec.verify=true;if(dc.paymentType&&dc.paymentType!==5&&dc.paymentType!=="5"&&dc.paymentType!=="Verification"){window.alert("Invalid paymentType!\nPlease revise PayWithMyBank integration code.");return;}dc.paymentType="Verification";dc.version="2";h.establish(dc,ec);},authorize:function(dc){if(!dc){window.alert("No authorization data!\nPlease revise PayWithMyBank integration code.");return;}if(!dc.accessId){window.alert("No accessId value on authorization data!\nPlease revise PayWithMyBank integration code.");return;}if(!dc.transactionId){window.alert("No transactionId value on authorization data!\nPlease revise PayWithMyBank integration code.");return;}if(!dc.accessId){window.alert("No accessId value on authorization data!\nPlease revise PayWithMyBank integration code.");return;}if(dc.callback&&typeof(dc.callback)==="function"){setTimeout(function(){dc.callback(true);},0);}else{window.alert("No callback function on authorization data!\nPlease revise PayWithMyBank integration code.");return;}},payWithMyBank:function(dc){u(function(){h.establish(dc);});},widget:function(dc,ec){u(function(){bc.create(dc,ec);});return {widgetId:bc.getWidgetId()};},content:function(){var dc=[{line1:"Pay with",line2:"Online Banking",headline:"Pay with online bank account",percentage:100}],ec=0;for(var fc=0;fc<dc.length;fc++){var gc=dc[fc];ec=ec+gc.percentage;if(l<=ec)return dc[fc];}return dc[0];},selectBankLightBox:function(dc,ec){dc.createTransaction=false;return h.establish(dc,ec);},isPanelOpen:function(){return !eb;},group:function(){return l;},addPanelListener:function(dc){if(da(wa,dc)<0)wa.push(dc);},removePanelListener:function(dc){var ec=da(wa,dc);if(ec>=0)wa.splice(ec,1);}};}());f.exports=h;}),null);