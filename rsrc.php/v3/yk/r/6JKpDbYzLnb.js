if (self.CavalryLogger) { CavalryLogger.start_js(["KIpFM"]); }

__d("QEGatekeeperForEntUniverse",[],(function a(b,c,d,e,f,g){f.exports={example_entuniverse_user_id:"Example Universe GK Project",express_wifi_customer_id:"Express Wi-Fi GK Project",flash_id:"Flash GK Project",oculus_user_id:"Oculus GK Project",onavo_user_id:"Onavo GK Project"};}),null);
__d('JSONArea',['Arbiter','CSS','DOM','DOMQuery','Event','Parent','TextMetrics','Vector','getOrCreateDOMID','isScalar'],(function a(b,c,d,e,f,g){var h={string:['"','"'],number:['',''],boolean:['',''],array:['Array [',']'],object:['Object {','}'],nullval:['<','>']},i=[],j={},k=false,l=null,m={},n=1,o=function fa(){return n++;},p=function fa(ga){return m[parseInt(ga.getAttribute('data-meta'),10)];},q=function fa(ga,ha){var ia;if(!ga.getAttribute('data-meta')){ia=o();ga.setAttribute('data-meta',ia);}m[parseInt(ga.getAttribute('data-meta'),10)]=ha;},r=function fa(ga,ha,ia,ja){if(ga!==''&&ia!=null){if(ia!=='')ia+=',';ia+=ga;}else ia='';var ka=u(ha);if(ga==null)ga=ka;var la='',ma=typeof ga=='string';if(ma&&ga!==''&&ja){la=c('DOM').create('input',{type:'text','data-sigil':'prop-name-editor',value:'"'+ga+'"'},'');q(la,{route:ia});ga=c('DOM').create('span',{'data-sigil':'prop-name'},'"'+ga+'"');q(ga,{route:ia});c('CSS').addClass(ga,'prop-name-display');}if(typeof ga=='number')ga=c('DOM').create('span',{className:'array-position'},ga.toString());var na=ga!==''?c('DOM').create('span',{className:'separator'},':'):'',oa=c('DOM').create('div',{'data-sigil':la?'prop-name-container':''},ga);la&&c('DOM').appendContent(oa,la);na&&c('DOM').appendContent(oa,na);c('CSS').addClass(oa,'prop-name-container');var pa=[];pa.push(c('DOM').create('div',{className:'delimiter'},h[ka][0]));if(c('isScalar')(ha)){pa.push(c('DOM').create('span',{className:'primitive'},ha.toString()));}else if(ha===null){pa.push(c('DOM').create('span',{className:'nullval'},'null'));}else if(Array.isArray(ha)){for(var qa=0;qa<ha.length;qa++)pa.push(fa(qa,ha[qa],ia,ja));}else Object.keys(ha).sort().forEach(function(va){pa.push(fa(va,ha[va],ia,ja));});pa.push(c('DOM').create('div',{className:'delimiter'},h[ka][1]));var ra=c('DOM').create('div',{'data-sigil':'value-display'},pa);c('CSS').addClass(ra,'value-display');var sa='';if(ja){if(ha===null||ha===undefined){ha='null';}else ha=z(JSON.stringify(ha));var ta=c('DOM').create('textarea',{'data-sigil':'value-editor'},ha);q(ta,{route:ia});c('CSS').addClass(ta,'value-editor');sa=c('DOM').create('div',{'data-sigil':'value-editor-controls'},ta);}var ua=c('DOM').create('div',{className:'json-node'},[oa,c('DOM').create('div',{className:'value-block value-'+ka},[ra,sa])]);q(ua,{route:ia});c('CSS').addClass(ua,'node');return ua;},s=function fa(ga){ga.value=JSON.stringify(y(ga));ga.blur();},t=function fa(ga){var ha=p(ga).route;ha=ha.split(',');ga.value=JSON.stringify(ha.pop());ga.blur();},u=function fa(ga){if(ga===null){return 'nullval';}else if(c('isScalar')(ga)){return typeof ga;}else if(Array.isArray(ga)){return 'array';}else return 'object';},v=function fa(ga){c('CSS').addClass(ga,'editing-name');var ha=c('DOM').scry(ga,'input')[0];ha.focus();l&&l.destroy();l=new (c('TextMetrics'))(ha);x(ha);return ha;},w=function fa(ga){if(k)c('CSS').removeClass(k,'editing');c('CSS').addClass(ga,'editing-value');var ha=c('DOMQuery').scry(ga,'textarea.value-editor'),ia=ha[ha.length-1];ia.focus();ia.value=ia.value;l&&l.destroy();l=new (c('TextMetrics'))(ia);x(ia);return ia;},x=function fa(ga){var ha=c('Vector').getElementDimensions(ga),ia=l.measure();ha.x=Math.max(16,ia.width);ha.y=Math.max(20,ia.height);ha.setElementDimensions(ga);},y=function fa(ga){var ha=p(ga);if(ha.route==null)throw new Error('Attempting to access the node value of an element '+'with no route.');ga=ca(ga,'editable-json-container');if(!ga)throw new Error('JSONEditorLib: The json-container element for '+'the element '+ga+' could not be found.');var ia=p(ga),ja=ia.json,ka=ha.route.split(',');for(var la=0;la<ka.length;la++)if(ka[la]!=='')ja=ja[ka[la]];return ja;},z=function fa(ga,ha){if(ha===undefined)ha=2;var ia=new Array(ha+1).join(' '),ja=ga.toString().split(''),ka='',la=false,ma=false;for(var na=0;na<ja.length;na++){var oa=ja[na];if(!la&&(oa=='['||oa=='{')){ja[na]=oa+"\n";ka+=ia;ja[na]+=ka;}else if(!la&&(oa==']'||oa=='}')){ka=ka.substr(ha);ja[na]="\n"+ka+oa;}else if(oa=='"'&&!ma){la=!la;}else if(oa==','&&!la){ja[na]=oa+"\n"+ka;}else if(oa==':'&&!la){ja[na]=': ';}else if(oa=="\n")ja[na]="\\n";ma=oa=='\\'&&!ma;}return ja.join('');},aa=function fa(ga){if(ga.getAttribute('data-sigil')==='prop-name-editor'){var ha=ga.value;try{JSON.parse('{ '+ha+':1 }');}catch(ia){alert(ha+' is not a valid JSON property name. '+"\n"+'Did you forget to wrap it in quotes?');return false;}}else{var ja=ga.value.replace(/\n/g,' ');try{JSON.parse('{ "_$" : '+ja+'}');}catch(ia){alert("The value: \n\n"+ja+'\n\n is not a valid JSON value.\n'+'Did you forget to enclose strings in double quotes?');return false;}}return true;},ba=function fa(ga){if(!aa(ga))return false;var ha=p(ga).route,ia=ca(ga,'editable-json-container'),ja=p(ia).json,ka=ja;if(ha!==''){var la=ha.split(','),ma=la.length,na=la[ma-1];for(var oa=0;oa<ma-1;++oa)ka=ka[la[oa]];la=null;}if(ga.getAttribute('data-sigil')==='prop-name-editor'){var pa=ga.value.replace(/"(.*)"/,'$1');if(na!=pa){ka[pa]=ka[na];delete ka[na];}}else{var qa=ga.value.replace(/\n/g,"");qa=JSON.parse(qa);if(ha!==''){ka[na]=qa;}else ja=qa;}var ra=ia.parentNode,sa=JSON.stringify(ja),ta=c('DOM').find(j[ra.id],'textarea.jsonFormField');ta.value=ta.innerText=sa;var ua=c('DOM').find(ra.parentNode,'div[data-sigil="jsonarea-container"]');c('Arbiter').inform('JSONArea.save',{target:j[ra.id],display_element_id:ra.id,str_value:sa,container:ua,json:ja});new ea(j[ra.id],ja,ra);},ca=function fa(ga,ha){while(ga&&ga.getAttribute){if(ga.getAttribute('data-sigil')===ha)return ga;ga=ga.parentNode;}return null;},da=function fa(ga){c('Event').listen(ga,'click',function(ha){if(k)return;var ia=ha.getTarget(),ja=c('Parent').byClass(ia,'json-node');if(!ja)return;var ka=c('Parent').byClass(ia,'prop-name-container')?v(ja):w(ja);k=ja;c('Event').listen(ka,'blur',function(la){ba(la.getTarget());k=false;ha.kill();});});c('Event').listen(ga,'keydown',function(ha){var ia=ha.getTarget(),ja=ia.getAttribute('data-sigil');if(ja!=='value-editor'&&ja!=='prop-name-editor')return;if(ha.keyCode===27){if(ja==='prop-name-editor'){t(ia);}else s(ia);ha.kill();}if(document.selection)return false;if(ha.keyCode===9&&ia.nodeName==='TEXTAREA')if(ia.selectionStart){var ka=ia.selectionStart,la=ia.selectionEnd,ma=ia.value.substring(0,ka),na=ia.value.substring(la);ia.value=ma+'  '+na;ia.setSelectionRange(ka+2,ka+2);ha.kill();}});c('Event').listen(ga,'keypress',function(ha){var ia=ha.getTarget(),ja=ia.getAttribute('data-sigil');if(ja!=='prop-name-editor'&&ja!=='value-editor')return;setTimeout(function(){var ka=c('Parent').byClass(ia,'prop-name-editor');if(ka&&ha.keyCode==13){ba(ka);ha.kill();return;}x(ia);},50);});},ea=function fa(ga,ha,ia,ja){if(i.indexOf(ga)!==-1)return;var ka='json-container';ha=ha||ga.innerText;var la=['json-container'],ma=ga.firstChild.nodeName==='TEXTAREA';if(ma){ka='editable-'+ka;la.push('editable');la.push('cleafix');if(!ia){ia=c('DOM').create('div',{'data-sigil':'raw-json'});var na=c('getOrCreateDOMID')(ia);ga.parentNode.insertBefore(ia,ga);j[na]=ga;c('CSS').hide(ga);}ga=ia;}i.push(ga);var oa;if(ja){var pa='Large amount of JSON click to active editor';oa=c('DOM').create('a',{},pa);c('CSS').addClass(oa,'largeJson');}else oa=r('',ha,'',ma);var qa={json:ha};if(ga.id)qa.id=ga.id;var ra=c('DOM').create('div',{'data-sigil':ka},oa);q(ra,qa);for(var sa=0;sa<la.length;sa++)c('CSS').addClass(ra,la[sa]);c('DOM').setContent(ga,ra);if(ja){c('Event').listen(oa,'click',function(){var ta=r('',ha,'',ma);c('DOM').setContent(ra,ta);if(ma)da(ra);});}else if(ma)da(ra);this.clearRenderedElements=function(){i=[];};};ea.tidyPlainText=z;f.exports=ea;}),null);
__d('XUIErrorDialogImpl',['cx','ContextualDialog','ContextualLayerAutoFlip','ContextualLayerUpdateOnScroll','JSXDOM','LayerRefocusOnHide'],(function a(b,c,d,e,f,g,h){'use strict';var i={getNewDialog:function j(){var k=c('JSXDOM').div({className:"_1tp8"}),l=c('JSXDOM').div({className:"_53ij _1tp9"},c('JSXDOM').div({className:"_1tpa"}),k),m=new (c('ContextualDialog'))({addedBehaviors:[c('ContextualLayerUpdateOnScroll'),c('ContextualLayerAutoFlip')],theme:{wrapperClassName:"_1tpb",arrowDimensions:{offset:12,length:16}}},l);m.disableBehavior(c('LayerRefocusOnHide'));m.shouldSetARIAProperties(false);return {dialog:m,dialogBodyNode:l,dialogMessageNode:k};}};f.exports=i;}),null);
__d('JSONError',['cx','CSS','DOM','Event','Parent','XUIErrorDialogImpl'],(function a(b,c,d,e,f,g,h){'use strict';var i="_1tp7",j='uiContextualLayerParent',k=null;function l(n){if(!k)return;var o=null,p=null,q=n.type;switch(q){case 'focusout':p=null;break;case 'focusin':p=n.getTarget();break;case 'mouseover':o=n.getTarget();break;}var r=c('Parent').byClass(o,j)||c('Parent').byClass(o,i),s=c('Parent').byClass(p,j)||c('Parent').byClass(p,i);if(r||s){k.show();}else k.hide();}c('Event').listen(document.documentElement,'focusout',l);c('Event').listen(document.documentElement,'focusin',l);c('Event').listen(document.documentElement,'mouseover',l);var m={set:function n(o,p){var q=c('XUIErrorDialogImpl').getNewDialog(),r=q.dialog,s=q.dialogMessageNode;k=r;c('CSS').addClass(o,i);c('DOM').setContent(s,p);r.setContext(o).setPosition('right').show();},clear:function n(o){c('CSS').removeClass(o,i);if(k)k.hide();}};f.exports=m;}),null);
__d('JSONError.react',['React','ReactDOM','JSONError'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.componentDidMount=function(){if(this.props.JSONError!=null)c('JSONError').set(c('ReactDOM').findDOMNode(this),this.props.JSONError);};k.prototype.componentDidUpdate=function(){if(this.props.JSONError){c('JSONError').clear(c('ReactDOM').findDOMNode(this));c('JSONError').set(c('ReactDOM').findDOMNode(this),this.props.JSONError);}};k.prototype.componentWillUnmount=function(){c('JSONError').clear(c('ReactDOM').findDOMNode(this));};k.prototype.render=function(){return c('React').Children.only(this.props.children);};function k(){h.apply(this,arguments);}k.propTypes={JSONError:j.any};f.exports=k;}),null);
__d('InternJSONArea.react',['cx','CSS','Event','React','ReactDOM','JSONArea','JSONError.react','XUITextInput.react','isScalar','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l={string:['"','"'],number:['',''],boolean:['',''],array:['Array [',']'],object:['Object {','}'],nullval:['<','>']},m={string:['"','"'],number:['',''],boolean:['',''],array:['[',']'],object:['{','}'],nullval:['','']};i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=j.constructor).call.apply(o,[this].concat(r)),this.state={json:this.props.json,editingPath:'',editingText:'',error:null,rawFormat:false,width:0,height:0},this.$JSONField3=function(){var t;if(this.state.rawFormat){t='json format: raw';}else t='json format: pretty';if(this.props.readonly)t+=', read-only';return t;}.bind(this),this.$JSONField1=function(t,u,v){if(u===undefined)u=null;var w='',x='_';if(t!==''){x=v+t;if(typeof t==='string')w=c('React').createElement('span',{className:'separator'},':');}var y=this.$JSONField4(u),z=x+':value',aa=null;if(z!=this.state.editingPath){aa=this.$JSONField5(u,x);}else{var ba={width:this.state.width+'px',height:this.state.height+'px'};aa=c('React').createElement(c('JSONError.react'),{JSONError:this.state.error},c('React').createElement('textarea',{onClick:this.$JSONField6,onChange:this.$JSONField7,onBlur:this.$JSONField8,onKeyDown:this.$JSONField9,className:"_4vp8"+(!!this.state.error?' '+"_4kgw":''),style:ba,ref:'valueEditor',key:'valueEditor',value:this.state.editingText}));}return (c('React').createElement('div',{className:"json-node node",key:x},c('React').createElement('div',{className:'prop-name-container'},this.$JSONField10(t,x),w),c('React').createElement('div',{className:'value-block value-'+y},aa)));}.bind(this),this.$JSONField10=function(t,u){var v=u+':prop',w=t;if(t==='')return '';if(v==this.state.editingPath){w=c('React').createElement(c('XUITextInput.react'),{type:'text',key:'prop-name-editor',onClick:this.$JSONField6,onChange:this.$JSONField11,onBlur:this.$JSONField12,onKeyDown:this.$JSONField13,ref:'propEditor',value:this.state.editingText});}else if(typeof t=='string'){w=c('React').createElement('span',{className:'prop-name-display',key:'prop-name',onClick:this.$JSONField14.bind(this,v,t),role:'presentation'},'"'+t+'"');}else if(typeof t=='number')w=c('React').createElement('span',{className:'array-position',key:'prop-name'},this.props.showTypeAnnotations?t.toString():'');return w;}.bind(this),this.$JSONField5=function(t,u){var v=u+':value',w=c('JSONArea').tidyPlainText(JSON.stringify(t),4),x=this.$JSONField4(t),y=[];switch(x){case 'object':if(this.props.allowComplexObjects){Object.keys(t).forEach(function(ba){y.push(this.$JSONField1(ba,t[ba],u));}.bind(this));}else for(var z in t)y.push(this.$JSONField1(z,t[z],u));break;case 'array':for(var aa=0;aa<t.length;aa++)y.push(this.$JSONField1(aa,t[aa],u));break;case 'nullval':y.push(c('React').createElement('span',{className:'nullVal',key:u},'null'));break;default:y.push(c('React').createElement('span',{className:'primitive',key:u},t.toString()));}return (c('React').createElement('div',{className:'value-display',onClick:this.$JSONField14.bind(this,v,w),role:'presentation'},this.$JSONField15(x),y,this.$JSONField16(x)));}.bind(this),this.$JSONField15=function(t){return (c('React').createElement('div',{className:'delimiter'},this.props.showTypeAnnotations?l[t][0]:m[t][0]));}.bind(this),this.$JSONField16=function(t){return (c('React').createElement('div',{className:'delimiter'},this.props.showTypeAnnotations?l[t][1]:m[t][1]));}.bind(this),this.$JSONField2=function(t){this.setState({rawFormat:!this.state.rawFormat});}.bind(this),this.$JSONField14=function(t,u,event){c('Event').kill(event);if(this.props.readonly)return;var v=this.props.minWidth,w=this.props.minHeight,x=event.target;while(!c('CSS').hasClass(x,'value-display')&&x.parentNode)x=x.parentNode;if(c('CSS').hasClass(x,'value-display')){v=x.offsetWidth;w=x.offsetHeight;}this.setState({editingPath:t,editingText:u,error:null,width:Math.max(v,this.props.minWidth),height:Math.max(w,this.props.minHeight)});}.bind(this),this.$JSONField6=function(event){c('Event').kill(event);},this.$JSONField12=function(){var t=this.$JSONField17(this.state.editingText);this.$JSONField18(t,true);}.bind(this),this.$JSONField11=function(t){var u=t.target.value;this.setState({editingText:u});}.bind(this),this.$JSONField8=function(){this.$JSONField19(this.state.editingText,true);}.bind(this),this.$JSONField7=function(t){this.setState({editingText:t.target.value});if(this.props.updateOnChange)this.$JSONField19(t.target.value,false);}.bind(this),this.$JSONField19=function(t,u){try{if(t){var w=JSON.parse(t),x=this.$JSONField17(w);this.$JSONField18(x,u);}}catch(v){if(this.state.editingPath!=='_:value'||t)this.setState({error:v.message});if(this.props.onInvalidInput)this.props.onInvalidInput(v);}}.bind(this),this.$JSONField9=function(t){if(t.keyCode==13&&t.shiftKey)this.$JSONField8();t.stopPropagation();}.bind(this),this.$JSONField13=function(t){if(t.keyCode==13&&t.shiftKey)this.$JSONField12();}.bind(this),this.$JSONField20=function(t){var u=0;if(c('isScalar')(t)||t===null){return 1;}else if(Array.isArray(t)){for(var v=0;v<t.length;v++)u+=this.$JSONField20(t[v]);}else for(var w in t)u+=this.$JSONField20(t[w]);return u;}.bind(this),this.$JSONField17=function(t){return this.$JSONField21('','',this.state.json,t);}.bind(this),this.$JSONField21=function(t,u,v,w){var x=this.state.editingPath,y='_';if(u!=='')y=t+u;if(x==y+':value')return w;if(c('isScalar')(v)||v===null){return v;}else if(Array.isArray(v)){var z=[];for(var aa=0;aa<v.length;aa++)z[aa]=this.$JSONField21(y,aa,v[aa],w);return z;}else{var ba={};for(var ca in v){var da=y+ca+':prop',ea=da==x?w:ca;if(typeof ea==='string')ba[ea]=this.$JSONField21(y,ca,v[ca],w);}return ba;}}.bind(this),this.$JSONField4=function(t){if(t===null){return 'nullval';}else if(c('isScalar')(t)){return typeof t;}else if(Array.isArray(t)){return 'array';}else return 'object';},this.$JSONField18=function(t,u){if(u){this.setState({json:t,editingPath:''});}else this.setState({json:t});this.props.onUpdate&&this.props.onUpdate(t);}.bind(this),p;}n.prototype.componentWillReceiveProps=function(o){'use strict';this.setState({json:o.json});};n.prototype.componentDidUpdate=function(){'use strict';if(this.refs){if(this.refs.valueEditor)c('ReactDOM').findDOMNode(this.refs.valueEditor).focus();if(this.refs.propEditor)c('ReactDOM').findDOMNode(this.refs.propEditor).focus();}};n.prototype.render=function(){'use strict';var o;if(this.state.rawFormat){o=c('React').createElement('pre',{className:"_3yhh"},c('JSONArea').tidyPlainText(JSON.stringify(this.state.json)));}else o=this.$JSONField1('',this.state.json,'');var p=null;if(this.props.canToggleFormat)p=c('React').createElement('div',{className:"_3yhm",onClick:this.$JSONField2,role:'button',tabIndex:'0'},this.$JSONField3());return c('React').createElement('div',{className:c('joinClasses')(this.props.className,"json-container"+(' '+"_2kbd")+(!this.props.readonly?' '+"_2kbe":'')+(' '+"clearfix"))},p,o);};n.propTypes={readonly:k.bool,json:k.oneOfType([k.array,k.string,k.number,k.object]),onUpdate:k.func,onInvalidInput:k.func,showTypeAnnotations:k.bool,styled:k.bool,updateOnChange:k.bool,minWidth:k.number,minHeight:k.number,canToggleFormat:k.bool,allowComplexObjects:k.bool};n.defaultProps={readonly:false,showTypeAnnotations:true,styled:true,updateOnChange:false,minWidth:150,minHeight:50,canToggleFormat:false,allowComplexObjects:false};f.exports=n;}),null);
__d("legacy:UIControllerRegistry",[],(function a(b,c,d,e,f,g){b.__UIControllerRegistry=b.__UIControllerRegistry||{};}),3);
__d('legacy:Selector',['SelectorDeprecated'],(function a(b,c,d,e,f,g){b.Selector=c('SelectorDeprecated');}),3);
__d('TypeaheadExactMatchFirst',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';var i=this._typeahead.getView();this._subscription=i.subscribe('beforeRender',function(j,k){var l=false;k.results.forEach(function(n,o){if(n.text===k.value){l=o;return;}});if(l){var m=k.results.splice(l,1);k.results.unshift(m[0]);}});};h.prototype.disable=function(){'use strict';var i=this._typeahead.getView();i.unsubscribe(this._subscription);this._subscription=null;};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('legacy:ExactMatchFirstTypeaheadBehavior',['TypeaheadExactMatchFirst'],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.ExactMatchFirstTypeahead=function(h){h.enableBehavior(c('TypeaheadExactMatchFirst'));};}),3);
__d('TypeaheadSelectOnBlur',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';this._subscription=this._typeahead.subscribe('blur',function(){var i=this._typeahead.getView();setTimeout(i.select.bind(i),0);}.bind(this));};h.prototype.disable=function(){'use strict';this._typeahead.unsubscribe(this._subscription);this._subscription=null;};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('legacy:SelectOnBlurTypeaheadBehavior',['TypeaheadSelectOnBlur'],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.selectOnBlur=function(h){h.enableBehavior(c('TypeaheadSelectOnBlur'));};}),3);