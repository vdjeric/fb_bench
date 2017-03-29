if (self.CavalryLogger) { CavalryLogger.start_js(["8v\/Ul"]); }

__d("EnterpriseLabsLoggingEvents",[],(function a(b,c,d,e,f,g){f.exports={FOCUS_MODE_MESSAGE_SENT_ASYNC:"enterprise_labs.focus_mode.send_message_async",FOCUS_MODE_MESSAGE_SENT_BYPASSED:"enterprise_labs.focus_mode.send_message_bypassed",FOCUS_MODE_SENT_NO_MESSAGES:"enterprise_labs.focus_mode.sent_no_messages",FOCUS_MODE_BYPASS_THREAD:"enterprise_labs.focus_mode.bypass_thread",FOCUS_MODE_BYPASS_FAILURE:"enterprise_labs.focus_mode.bypass_failure",FOCUS_MODE_MUTE_NOTIFICATION:"enterprise_labs.focus_mode.mute_notification",DUALITY_WARNING_SHOWN:"enterprise_labs.duality.warning_shown",DUALITY_WARNING_DISMISSED:"enterprise_labs.duality.warning_dismissed",DUALITY_SWITCH_USER:"enterprise_labs.duality.switch_user",DUALITY_SWITCH_ACCOUNTS:"enterprise_labs.duality.switch_accounts",HIJACKED_DUALITY_WARNING_SHOWN:"enterprise_labs.hijacked_duality.warning_shown",HIJACKED_DUALITY_WARNING_DISMISSED:"enterprise_labs.hijacked_duality.warning_dismissed",HIJACKED_DUALITY_SWITCH_USER:"enterprise_labs.hijacked_duality.switch_user",TIMEZONE_WARNING_SHOWN:"enterprise_labs.timezone.warning_shown",TIMEZONE_WARNING_IGNORED:"enterprise_labs.timezone.warning_ignored",TIMEZONE_WARNING_DISMISSED:"enterprise_labs.timezone.warning_dismissed",NT_CLICK_TAB:"enterprise_labs.nt.click.tab"};}),null);
__d('EnterpriseLabsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:EnterpriseLabsLoggerConfig',this.$EnterpriseLabsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:EnterpriseLabsLoggerConfig',this.$EnterpriseLabsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$EnterpriseLabsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$EnterpriseLabsTypedLogger1=babelHelpers['extends']({},this.$EnterpriseLabsTypedLogger1,j);return this;};h.prototype.setEntityID=function(j){this.$EnterpriseLabsTypedLogger1.entity_id=j;return this;};h.prototype.setEvent=function(j){this.$EnterpriseLabsTypedLogger1.event=j;return this;};h.prototype.setVC=function(j){this.$EnterpriseLabsTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$EnterpriseLabsTypedLogger1=babelHelpers['extends']({},this.$EnterpriseLabsTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={entity_id:true,event:true,vc:true};f.exports=h;}),null);
__d('WorkAvailabilityStatusFragment',['Relay'],(function a(b,c,d,e,f,g){f.exports=function(){return {children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{alias:'workInfo',children:[{alias:'availabilityStatus',children:[{fieldName:'status',kind:'Field',metadata:{},type:'WorkUserAvailabilityStatusType'},{alias:'endDate',fieldName:'end_date',kind:'Field',metadata:{},type:'Time'}],fieldName:'availability_status',kind:'Field',metadata:{canHaveSubselections:true},type:'WorkUserAvailabilityStatus'},{alias:'dndSettings',children:[{alias:'basicWeeklySchedule',children:[{alias:'startHour',fieldName:'start_hour',kind:'Field',metadata:{},type:'Int'},{alias:'startMinute',fieldName:'start_minute',kind:'Field',metadata:{},type:'Int'},{alias:'endHour',fieldName:'end_hour',kind:'Field',metadata:{},type:'Int'},{alias:'endMinute',fieldName:'end_minute',kind:'Field',metadata:{},type:'Int'}],fieldName:'basic_weekly_schedule',kind:'Field',metadata:{canHaveSubselections:true},type:'DoNotDisturbWeekdaySchedule'},{alias:'basicWeekendSchedule',children:[{alias:'startDay',fieldName:'start_day',kind:'Field',metadata:{},type:'DayOfTheWeek'},{alias:'startHour',fieldName:'start_hour',kind:'Field',metadata:{},type:'Int'},{alias:'startMinute',fieldName:'start_minute',kind:'Field',metadata:{},type:'Int'},{alias:'endDay',fieldName:'end_day',kind:'Field',metadata:{},type:'DayOfTheWeek'},{alias:'endHour',fieldName:'end_hour',kind:'Field',metadata:{},type:'Int'},{alias:'endMinute',fieldName:'end_minute',kind:'Field',metadata:{},type:'Int'}],fieldName:'basic_weekend_schedule',kind:'Field',metadata:{canHaveSubselections:true},type:'DoNotDisturbWeekendsSchedule'},{alias:'isWeeklyScheduleTurnedOn',fieldName:'is_weekly_schedule_turned_on',kind:'Field',metadata:{},type:'Boolean'},{alias:'isWeekendScheduleTurnedOn',fieldName:'is_weekend_schedule_turned_on',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'do_not_disturb_settings',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'WorkUserDoNotDisturbSchedule'}],fieldName:'work_info',kind:'Field',metadata:{canHaveSubselections:true},type:'WorkUserInfo'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'WorkAvailabilityStatusFragmentRelayQL',type:'User'};}();}),null);
__d('WorkAvailabilityStatusChangeSubscription',['GraphQLSubscription','Relay','WorkAvailabilityStatusFragment','nullthrows'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('GraphQLSubscription'));i=h&&h.prototype;j.getSubscriptionQuery=function(){return function(k){return {calls:[{kind:'Call',metadata:{},name:'work_availability_status_change_subscribe',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('Relay').QL.__frag(k)]),fieldName:'user',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'User'},{fieldName:'client_subscription_id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'client_mutation_id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],kind:'Subscription',metadata:{inputType:'WorkAvailabilityStatusChangeSubscribeData!'},name:'WorkAvailabilityStatusChangeSubscription',responseType:'WorkAvailabilityStatusChangeSubscribeResponsePayload'};}(c('WorkAvailabilityStatusFragment'));};j.prototype.getQueryParams=function(k){return {user_id:c('nullthrows')(k.user_id)};};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d("XCheckFocusModeAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/work\/focus_mode\/check\/",{fbid:{type:"FBID",required:true}});}),null);
__d('ChatSubscribeToFocusModeChanges',['AsyncRequest','ImmutableObject','RelayGraphQLSubscriber','RelayGraphQLSubscriptionNetworkLayer','WorkAvailabilityStatusChangeSubscription','XDliteGraphQLSkywalkerController','MercuryServerPayloadPreprocessor','MercuryPayloadSource','WorkUserAvailabilityStatusType','MercuryThreadInformer','XCheckFocusModeAsyncController','MercuryParticipants'],(function a(b,c,d,e,f,g){'use strict';var h=c('XDliteGraphQLSkywalkerController').getURIBuilder().getURI();c('RelayGraphQLSubscriptionNetworkLayer').injectGraphQLSubscriber(c('RelayGraphQLSubscriber')(h));var i={},j={},k=function m(n,o,p,q){var r=c('MercuryParticipants').getNow(p.id);if(!r)return;var s=c('ImmutableObject').setProperty(r,'is_user_focusing',q);c('MercuryServerPayloadPreprocessor').getForFBID(n).handleUpdate({participants:[s],from_client:false,payload_source:c('MercuryPayloadSource').SERVER_FETCH_PARTICIPANTS});Object.keys(j[o]).forEach(function(t){c('MercuryThreadInformer').getForFBID(n).updatedThread(t);});},l=function m(n,o,p){var q=p.fbid;if(!q)return;if(!p.employee)return;if(n===q)return;if(!j[q])j[q]={};j[q][o]=o;if(i[q])return;var r=c('XCheckFocusModeAsyncController').getURIBuilder().setFBID('fbid',q).getURI();new (c('AsyncRequest'))().setURI(r).setHandler(function(s){var t=s.payload;if(!t)return;k(n,q,p,t.is_user_focusing);}).send();i[q]=new (c('WorkAvailabilityStatusChangeSubscription'))({user_id:q},function(s){var t=s.work_availability_status_change_subscribe.user,u=t?t.work_info:null,v=u?u.availability_status:null;if(v&&v.status&&v.end_date!==null){var w=c('WorkUserAvailabilityStatusType')[v.status],x=w===c('WorkUserAvailabilityStatusType').FOCUS&&v.end_date*1000>Date.now();k(n,q,p,x);}});};f.exports={subscribe:l};}),null);
__d('ChatUserFocusLogging',['EnterpriseLabsLoggingEvents','EnterpriseLabsTypedLogger','FantaDispatcher','FantaTabActions','MercuryDispatcher','MercuryPayloadSource','MercuryThreads'],(function a(b,c,d,e,f,g){'use strict';var h=c('MercuryDispatcher').get(),i=c('MercuryThreads').get(),j={},k=function n(o,p){try{if(p.payload_source!==c('MercuryPayloadSource').CLIENT_SEND_MESSAGE)return;var r=p.actions||[];r.forEach(function(s){var t=s.thread_id;if(!t||!j[t])return;var u=i.getThreadMetaNow(t);if(!u)return;var v=(u.bypass_focus_mode_until||0)*1000>Date.now();j[s.thread_id].messagesSent=true;var w=v?c('EnterpriseLabsLoggingEvents').FOCUS_MODE_MESSAGE_SENT_BYPASSED:c('EnterpriseLabsLoggingEvents').FOCUS_MODE_MESSAGE_SENT_ASYNC;new (c('EnterpriseLabsTypedLogger'))().setEntityID(t).setEvent(w).log();});}catch(q){return;}},l=function n(o){try{if(o.actionType===c('FantaTabActions').Types.CLOSE_TAB){var q=j[o.threadID];if(!q)return;if(!q.messagesSent&&!q.closed)new (c('EnterpriseLabsTypedLogger'))().setEntityID(o.threadID).setEvent(c('EnterpriseLabsLoggingEvents').FOCUS_MODE_SENT_NO_MESSAGES).log();q.closed=true;}}catch(p){return;}};h.subscribe('update-messages',k);c('FantaDispatcher').register(l);m.prototype.registerThreadID=function(n){if(j[n]&&!j[n].closed)return;j[n]={messagesSent:false,closed:false};};function m(){}f.exports=new m();}),null);
__d('CreateAvailabilityStatusMutation',['Relay','RelayMutationType','WorkUserAvailabilityStatusType'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('Relay').Mutation);i=h&&h.prototype;j.prototype.getMutation=function(){'use strict';return function(){return {calls:[{kind:'Call',metadata:{},name:'create_work_availability_status',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'client_mutation_id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],kind:'Mutation',metadata:{inputType:'CreateWorkAvailabilityStatusData!'},name:'CreateAvailabilityStatusMutation',responseType:'CreateWorkAvailabilityStatusResponsePayload'};}();};j.prototype.getCollisionKey=function(){'use strict';return 'create_work_availability_status'+this.props.viewer.actor.id;};j.prototype.getFatQuery=function(){'use strict';return function(){return {children:[{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{children:[{fieldName:'availability_status',kind:'Field',metadata:{canHaveSubselections:true},type:'WorkUserAvailabilityStatus'}],fieldName:'work_info',kind:'Field',metadata:{canHaveSubselections:true},type:'WorkUserInfo'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'User',type:'User'}],fieldName:'actor',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{pattern:true},name:'CreateAvailabilityStatusMutationRelayQL',type:'CreateWorkAvailabilityStatusResponsePayload'};}();};j.prototype.getConfigs=function(){'use strict';return [{type:c('RelayMutationType').FIELDS_CHANGE,fieldIDs:{actor:this.props.viewer.actor.id}}];};j.prototype.getVariables=function(){'use strict';var k=this.props.status_type;Object.keys(c('WorkUserAvailabilityStatusType')).forEach(function(l){if(c('WorkUserAvailabilityStatusType')[l]===k)k=l;});return {actor_id:this.props.viewer.actor.id,status_type:k,start_time:Math.floor(this.props.start_time),end_time:Math.floor(this.props.end_time)};};function j(){'use strict';h.apply(this,arguments);}j.fragments={viewer:function k(){return function(){return {children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'actor',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'CreateAvailabilityStatusMutation_ViewerRelayQL',type:'Viewer'};}();}};f.exports=j;}),null);
__d('UpdateDoNotDisturbSettingsMutation',['Relay','RelayMutationType'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('Relay').Mutation);i=h&&h.prototype;j.prototype.getMutation=function(){'use strict';return function(){return {calls:[{kind:'Call',metadata:{},name:'update_work_do_not_disturb_settings',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'client_mutation_id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],kind:'Mutation',metadata:{inputType:'UpdateWorkDoNotDisturbSettingsData!'},name:'UpdateDoNotDisturbSettingsMutation',responseType:'UpdateWorkDoNotDisturbSettingsResponsePayload'};}();};j.prototype.getCollisionKey=function(){'use strict';return 'update_work_do_not_disturb_settings'+this.props.viewer.actor.id;};j.prototype.getFatQuery=function(){'use strict';return function(){return {children:[{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{children:[{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'do_not_disturb_settings',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'WorkUserDoNotDisturbSchedule'},{fieldName:'availability_status',kind:'Field',metadata:{canHaveSubselections:true},type:'WorkUserAvailabilityStatus'}],fieldName:'work_info',kind:'Field',metadata:{canHaveSubselections:true},type:'WorkUserInfo'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'User',type:'User'}],fieldName:'actor',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{pattern:true},name:'UpdateDoNotDisturbSettingsMutationRelayQL',type:'UpdateWorkDoNotDisturbSettingsResponsePayload'};}();};j.prototype.getConfigs=function(){'use strict';return [{type:c('RelayMutationType').FIELDS_CHANGE,fieldIDs:{actor:this.props.viewer.actor.id}}];};j.prototype.getVariables=function(){'use strict';return {actor_id:this.props.viewer.actor.id,weekday_start_hour:this.props.nightStart.hour,weekday_start_minute:this.props.nightStart.minute,weekday_end_hour:this.props.nightEnd.hour,weekday_end_minute:this.props.nightEnd.minute,weekend_start_day:this.props.weekendStartDay,weekend_start_hour:this.props.weekendStartTime.hour,weekend_start_minute:this.props.weekendStartTime.minute,weekend_end_day:this.props.weekendEndDay,weekend_end_hour:this.props.weekendEndTime.hour,weekend_end_minute:this.props.weekendEndTime.minute,weekday_mode_enabled:this.props.weekdayModeEnabled,weekend_mode_enabled:this.props.weekendModeEnabled};};function j(){'use strict';h.apply(this,arguments);}j.fragments={viewer:function k(){return function(){return {children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'actor',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'UpdateDoNotDisturbSettingsMutation_ViewerRelayQL',type:'Viewer'};}();}};f.exports=j;}),null);
__d('WorkAvailabilityUtils',['DateTime','TimeOfDay'],(function a(b,c,d,e,f,g){var h={MONDAY:1,TUESDAY:2,WEDNESDAY:3,THURSDAY:4,FRIDAY:5,SATURDAY:6,SUNDAY:0};f.exports={isStatusScheduled:function i(j){if(j&&j.availabilityStatus&&!j.availabilityStatus.endDate)return true;return false;},withinScheduledPeriod:function i(j,k){if(!k)k=c('DateTime').localNow();var l=c('TimeOfDay').fromDateTime(k);if(!j)return false;var m=j.dndSettings;if(!m)return false;var n=m.isWeeklyScheduleTurnedOn,o=m.isWeekendScheduleTurnedOn,p=m.basicWeeklySchedule,q=m.basicWeekendSchedule;if(n&&p){var r=new (c('TimeOfDay'))(p.startHour,p.startMinute),s=new (c('TimeOfDay'))(p.endHour,p.endMinute);if(r.isAfter(s)&&(l.isAfter(r)||l.isBefore(s))||l.isAfter(r)&&l.isBefore(s))return true;}if(o&&q){var t=new (c('TimeOfDay'))(q.startHour,q.startMinute),u=new (c('TimeOfDay'))(q.endHour,q.endMinute),v=h[q.startDay],w=h[q.endDay];if(v===w&&v===k.getDayOfWeek()&&l.isAfter(t)&&l.isBefore(u))return true;if(v<w){if(k.getDayOfWeek()===v&&l.isAfter(t))return true;if(w===k.getDayOfWeek()&&l.isBefore(u))return true;if(v<k.getDayOfWeek()&&w>k.getDayOfWeek())return true;}if(v>w){if(k.getDayOfWeek()===v&&l.isAfter(t))return true;if(w===k.getDayOfWeek()&&l.isBefore(u))return true;if(v<k.getDayOfWeek()||w>k.getDayOfWeek())return true;}}return false;}};}),null);
__d('DoNotDisturbSettings.react',['cx','Promise','CreateAvailabilityStatusMutation','UpdateDoNotDisturbSettingsMutation','React','Relay','Layout.react','DateTime','BUITimeInput.react','BUIDateTimePicker.react','XUISingleSelector.react','XUIGrayText.react','TimeOfDay','BUISwitch.react','XUIButton.react','WorkAvailabilityUtils','WorkUserAvailabilityStatusType'],(function a(b,c,d,e,f,g,h){var i,j,k=c('Layout.react').Column,l=c('XUISingleSelector.react').Option,m={MONDAY:'Monday',TUESDAY:'Tuesday',WEDNESDAY:'Wednesday',THURSDAY:'Thursday',FRIDAY:'Friday',SATURDAY:'Saturday',SUNDAY:'Sunday'};i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;function n(o){'use strict';j.constructor.call(this,o);this.$DoNotDisturbSettings1=function(p){this.setState({oneOffEnabled:p});}.bind(this);this.$DoNotDisturbSettings2=function(p){this.setState({oneOffEnabled:true,oneOffStart:p});}.bind(this);this.$DoNotDisturbSettings3=function(p){this.setState({oneOffEnabled:true,oneOffEnd:p});}.bind(this);this.$DoNotDisturbSettings4=function(p){this.setState({nightEnabled:p});}.bind(this);this.$DoNotDisturbSettings5=function(p){this.setState({nightStart:p,nightEnabled:true});}.bind(this);this.$DoNotDisturbSettings6=function(p){this.setState({nightEnd:p,nightEnabled:true});}.bind(this);this.$DoNotDisturbSettings7=function(p){this.setState({weekendEnabled:p});}.bind(this);this.$DoNotDisturbSettings8=function(p){this.setState({weekendStartTime:p,weekendEnabled:true});}.bind(this);this.$DoNotDisturbSettings9=function(p){this.setState({weekendEndTime:p,weekendEnabled:true});}.bind(this);this.$DoNotDisturbSettings10=function(p){this.setState({weekendStartDay:p.value,weekendEnabled:true});}.bind(this);this.$DoNotDisturbSettings11=function(p){this.setState({weekendEndDay:p.value,weekendEnabled:true});}.bind(this);this.$DoNotDisturbSettings12=function(){var p=this.props.viewer.actor.workInfo,q=c('WorkUserAvailabilityStatusType').AVAILABLE;if(p&&p.availabilityStatus&&p.availabilityStatus.status)q=c('WorkUserAvailabilityStatusType')[p.availabilityStatus.status];var r=null;if(this.state.oneOffEnabled){r=c('WorkUserAvailabilityStatusType').DO_NOT_DISTURB;}else if(q===c('WorkUserAvailabilityStatusType').DO_NOT_DISTURB&&!c('WorkAvailabilityUtils').isStatusScheduled(p))r=c('WorkUserAvailabilityStatusType').NONE;var s=new (c('Promise'))(function(t){var u=0,v=1+(r!==null?1:0);c('Relay').Store.commitUpdate(new (c('UpdateDoNotDisturbSettingsMutation'))(babelHelpers['extends']({viewer:this.props.viewer,weekdayModeEnabled:this.state.nightEnabled,weekendModeEnabled:this.state.weekendEnabled},this.state)),{onSuccess:function w(){u+=1;if(u>=v)t();},onFailure:function w(){u+=1;if(u>=v)t();}});if(r!==null)c('Relay').Store.commitUpdate(new (c('CreateAvailabilityStatusMutation'))({viewer:this.props.viewer,status_type:r,start_time:this.state.oneOffStart.instant,end_time:this.state.oneOffEnd.instant}),{onSuccess:function w(){u+=1;if(u>=v)t();},onFailure:function w(){u+=1;if(u>=v)t();}});}.bind(this));s.done(function(){if(this.props.onFinish)this.props.onFinish();}.bind(this));}.bind(this);this.state=this.getSettingsFromPropsOrDefaults(o);}n.prototype.getSettingsFromPropsOrDefaults=function(o){'use strict';var p=c('DateTime').localNow(),q={oneOffEnabled:false,oneOffStart:p,oneOffEnd:p.addSeconds(7*24*3600),nightEnabled:false,nightStart:new (c('TimeOfDay'))(19,0),nightEnd:new (c('TimeOfDay'))(8,0),weekendEnabled:false,weekendStartDay:'FRIDAY',weekendStartTime:new (c('TimeOfDay'))(19,0),weekendEndDay:'MONDAY',weekendEndTime:new (c('TimeOfDay'))(8,0)},r=this.props.viewer.actor.workInfo,s=void 0,t=void 0;if(r){s=r.dndSettings;t=r.availabilityStatus;}if(s){var u=s,v=u.basicWeeklySchedule,w=u.basicWeekendSchedule;if(v){q.nightStart=new (c('TimeOfDay'))(v.startHour,v.startMinute);q.nightEnd=new (c('TimeOfDay'))(v.endHour,v.endMinute);}if(w){q.weekendStartDay=w.startDay;q.weekendStartTime=new (c('TimeOfDay'))(w.startHour,w.startMinute);q.weekendEndDay=w.endDay;q.weekendEndTime=new (c('TimeOfDay'))(w.endHour,w.endMinute);}q.nightEnabled=s.isWeeklyScheduleTurnedOn;q.weekendEnabled=s.isWeekendScheduleTurnedOn;}var x=false;if(t){var y=t.status,z=c('WorkUserAvailabilityStatusType')[y],aa=c('WorkUserAvailabilityStatusType').DO_NOT_DISTURB,ba=z===aa;x=ba&&!c('WorkAvailabilityUtils').isStatusScheduled(r);q.oneOffEnabled=x;if(x)q.oneOffEnd=c('DateTime').localCreate(t.endDate);}return q;};n.prototype.renderOneOff=function(){'use strict';return (c('React').createElement('div',{className:"_oc0"},c('React').createElement(c('Layout.react'),null,c('React').createElement(k,{className:"_oc1"},'Do Not Disturb Mode'),c('React').createElement(k,{className:"_oc2"},c('React').createElement('div',{className:"_3-98"},c('React').createElement(c('XUIGrayText.react'),null,'Disable messages and notifications for a single duration. Leaving this mode, or entering any other mode, will remove this setting.')),c('React').createElement('div',{className:"_3-94"},c('React').createElement('div',{className:"_oc3 _oc4"},'No notifications from'),c('React').createElement('div',{className:"_oc3 _oc6"},c('React').createElement(c('BUIDateTimePicker.react'),{disabled:!this.state.oneOffEnabled,value:this.state.oneOffStart,timezoneID:this.state.oneOffStart.timezoneID,onChange:this.$DoNotDisturbSettings2}))),c('React').createElement('div',null,c('React').createElement('div',{className:"_oc3 _oc4"},'Until'),c('React').createElement('div',{className:"_oc3"},c('React').createElement(c('BUIDateTimePicker.react'),{disabled:!this.state.oneOffEnabled,value:this.state.oneOffEnd,timezoneID:this.state.oneOffEnd.timezoneID,onChange:this.$DoNotDisturbSettings3})))),c('React').createElement(k,{className:"_oc7"},c('React').createElement(c('BUISwitch.react'),{onToggle:this.$DoNotDisturbSettings1,showLabel:true,value:this.state.oneOffEnabled})))));};n.prototype.renderNightMode=function(){'use strict';var o="_oc3 _oc4";return (c('React').createElement('div',{className:"_oc0"},c('React').createElement(c('Layout.react'),null,c('React').createElement(k,{className:"_oc1"},'Night Mode'),c('React').createElement(k,{className:"_oc2"},c('React').createElement('div',{className:"_3-98"},c('React').createElement(c('XUIGrayText.react'),null,'Disable messages and notifications during weeknights, based on the timezone you are in.')),c('React').createElement('div',{className:"_3-94"},c('React').createElement('div',{className:o},'No notifications from'),c('React').createElement('div',{className:"_oc3"},c('React').createElement(c('BUITimeInput.react'),{className:"_oc6",disabled:!this.state.nightEnabled,value:this.state.nightStart,onChange:this.$DoNotDisturbSettings5}))),c('React').createElement('div',null,c('React').createElement('div',{className:o},'Until'),c('React').createElement('div',{className:"_oc3"},c('React').createElement(c('BUITimeInput.react'),{className:"_oc6",disabled:!this.state.nightEnabled,value:this.state.nightEnd,onChange:this.$DoNotDisturbSettings6})))),c('React').createElement(k,{className:"_oc7"},c('React').createElement(c('BUISwitch.react'),{onToggle:this.$DoNotDisturbSettings4,showLabel:true,value:this.state.nightEnabled})))));};n.prototype.renderWeekendMode=function(){'use strict';var o=['FRIDAY','SATURDAY','SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY'].map(function(r){var s=m[r];return (c('React').createElement(l,{value:r,key:r},s));}),p=Object.keys(m).map(function(r){var s=m[r];return (c('React').createElement(l,{value:r,key:r},s));}),q="_oc3 _oc4";return (c('React').createElement('div',{className:"_oc0"},c('React').createElement(c('Layout.react'),null,c('React').createElement(k,{className:"_oc1"},'Weekend Mode'),c('React').createElement(k,{className:"_oc2"},c('React').createElement('div',{className:"_3-98"},c('React').createElement(c('XUIGrayText.react'),null,'Disable messages and notifications during the weekend, based on the timezone you are in.')),c('React').createElement('div',{className:"_3-94"},c('React').createElement('div',{className:q},'No notifications from'),c('React').createElement('div',{className:"_oc3"},c('React').createElement(c('XUISingleSelector.react'),{className:"_oc8",disabled:!this.state.weekendEnabled,value:this.state.weekendStartDay,onChange:this.$DoNotDisturbSettings10},o)),c('React').createElement('div',{className:"_oc3"},c('React').createElement(c('BUITimeInput.react'),{className:"_oc6",disabled:!this.state.weekendEnabled,value:this.state.weekendStartTime,onChange:this.$DoNotDisturbSettings8}))),c('React').createElement('div',null,c('React').createElement('div',{className:q},'Until'),c('React').createElement('div',{className:"_oc3"},c('React').createElement(c('XUISingleSelector.react'),{className:"_oc8",disabled:!this.state.weekendEnabled,value:this.state.weekendEndDay,onChange:this.$DoNotDisturbSettings11},p)),c('React').createElement('div',{className:"_oc3"},c('React').createElement(c('BUITimeInput.react'),{className:"_oc6",disabled:!this.state.weekendEnabled,value:this.state.weekendEndTime,onChange:this.$DoNotDisturbSettings9})))),c('React').createElement(k,{className:"_oc7"},c('React').createElement(c('BUISwitch.react'),{onToggle:this.$DoNotDisturbSettings7,showLabel:true,value:this.state.weekendEnabled})))));};n.prototype.render=function(){'use strict';var o=void 0;if(this.props.onFinish)o=c('React').createElement(c('XUIButton.react'),{label:'Cancel',size:'large',onClick:function(){return this.props.onFinish();}.bind(this)});var p="uiOverlayFooter _53b2";return (c('React').createElement('div',{className:"_2pi9"},c('React').createElement('div',null,c('React').createElement(c('XUIGrayText.react'),{size:'large'},c('React').createElement('div',{className:"_oc9"},'ONE-TIME'),c('React').createElement('div',{className:"_oca"})),this.renderOneOff()),c('React').createElement('div',null,c('React').createElement(c('XUIGrayText.react'),{size:'large'},c('React').createElement('div',{className:"_oc9"},'RECURRING'),c('React').createElement('div',{className:"_oca"})),this.renderNightMode(),this.renderWeekendMode()),c('React').createElement('div',{className:p},o,c('React').createElement(c('XUIButton.react'),{label:'Save and Close',size:'large',use:'confirm',onClick:this.$DoNotDisturbSettings12}))));};f.exports=c('Relay').createContainer(n,{fragments:{viewer:function o(){return function(p,q){return {children:[].concat.apply([],[{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{alias:'workInfo',children:[{alias:'availabilityStatus',children:[{fieldName:'status',kind:'Field',metadata:{},type:'WorkUserAvailabilityStatusType'},{alias:'endDate',fieldName:'end_date',kind:'Field',metadata:{},type:'Time'}],fieldName:'availability_status',kind:'Field',metadata:{canHaveSubselections:true},type:'WorkUserAvailabilityStatus'},{alias:'dndSettings',children:[{alias:'basicWeeklySchedule',children:[{alias:'startHour',fieldName:'start_hour',kind:'Field',metadata:{},type:'Int'},{alias:'startMinute',fieldName:'start_minute',kind:'Field',metadata:{},type:'Int'},{alias:'endHour',fieldName:'end_hour',kind:'Field',metadata:{},type:'Int'},{alias:'endMinute',fieldName:'end_minute',kind:'Field',metadata:{},type:'Int'}],fieldName:'basic_weekly_schedule',kind:'Field',metadata:{canHaveSubselections:true},type:'DoNotDisturbWeekdaySchedule'},{alias:'basicWeekendSchedule',children:[{alias:'startDay',fieldName:'start_day',kind:'Field',metadata:{},type:'DayOfTheWeek'},{alias:'startHour',fieldName:'start_hour',kind:'Field',metadata:{},type:'Int'},{alias:'startMinute',fieldName:'start_minute',kind:'Field',metadata:{},type:'Int'},{alias:'endDay',fieldName:'end_day',kind:'Field',metadata:{},type:'DayOfTheWeek'},{alias:'endHour',fieldName:'end_hour',kind:'Field',metadata:{},type:'Int'},{alias:'endMinute',fieldName:'end_minute',kind:'Field',metadata:{},type:'Int'}],fieldName:'basic_weekend_schedule',kind:'Field',metadata:{canHaveSubselections:true},type:'DoNotDisturbWeekendsSchedule'},{alias:'isWeeklyScheduleTurnedOn',fieldName:'is_weekly_schedule_turned_on',kind:'Field',metadata:{},type:'Boolean'},{alias:'isWeekendScheduleTurnedOn',fieldName:'is_weekend_schedule_turned_on',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'do_not_disturb_settings',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'WorkUserDoNotDisturbSchedule'}],fieldName:'work_info',kind:'Field',metadata:{canHaveSubselections:true},type:'WorkUserInfo'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'User',type:'User'}],fieldName:'actor',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'},c('Relay').QL.__frag(p),c('Relay').QL.__frag(q)]),id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'DoNotDisturbSettings_react_ViewerRelayQL',type:'Viewer'};}(c('CreateAvailabilityStatusMutation').getFragment('viewer'),c('UpdateDoNotDisturbSettingsMutation').getFragment('viewer'));}}});}),null);
__d('AtWorkAvailabilityStatus.react',['cx','ix','AvailabilityList','CreateAvailabilityStatusMutation','DoNotDisturbSettings.react','Image.react','Layout.react','PopoverMenu.react','PopoverMenuShowOnHover','React','ReactXUIMenu','Relay','RelayGraphQLSubscriber','RelayGraphQLSubscriptionNetworkLayer','WorkAvailabilityStatusChangeSubscription','WorkAvailabilityStatusFragment','WorkAvailabilityUtils','WorkFocusModeController','WorkUserAvailabilityStatusType','XDliteGraphQLSkywalkerController','XUIDialog.react','XUIDialogBody.react','XUIDialogTitle.react','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('Layout.react').Column,m=c('ReactXUIMenu').Item,n=c('WorkFocusModeController').WorkFocusMode,o={Available:i("102002"),Busy:i("102004"),Focus:i("102004"),'Do Not Disturb':i("102003"),Custom:i("102003")},p=c('AvailabilityList').availability_list.general,q=c('AvailabilityList').availability_list.in_dnd,r=c('AvailabilityList').availability_list.inject_scheduled;j=babelHelpers.inherits(s,c('React').Component);k=j&&j.prototype;function s(u){k.constructor.call(this,u);var v=c('XDliteGraphQLSkywalkerController').getURIBuilder().getURI();c('RelayGraphQLSubscriptionNetworkLayer').injectGraphQLSubscriber(c('RelayGraphQLSubscriber')(v));this.state={showDialog:false};this.subscription=null;}s.prototype.componentDidMount=function(){this.subscription=new (c('WorkAvailabilityStatusChangeSubscription'))({user_id:this.props.viewer.actor.id},function(u){var v=u.work_availability_status_change_subscribe,w=(v||{}).user,x=(w||{}).work_info,y=(x||{}).availability_status;if(n&&y)n.updateAvailability(c('WorkUserAvailabilityStatusType')[y.status],y.end_date);});};s.prototype.componentWillUnmount=function(){if(this.subscription){this.subscription.dispose();this.subscription=null;}};s.prototype.$AtWorkAvailabilityStatus1=function(u,v){var w=v.item.getValue();if(w.type==='Custom'){this.setState({showDialog:true});return;}var x=Math.floor(Date.now()/1000),y=x;if(w.duration)y=x+w.duration;c('Relay').Store.commitUpdate(new (c('CreateAvailabilityStatusMutation'))({viewer:this.props.viewer,status_type:w.type,start_time:x,end_time:y}),{onSuccess:function z(){var aa=w.type;n&&n.updateAvailability(aa,y);}});};s.prototype.renderButtons=function(){var u=this.props.viewer,v=u.actor.workInfo,w=u.actor.workInfo.availabilityStatus.status,x=c('WorkUserAvailabilityStatusType')[w],y=p;if(x===c('WorkUserAvailabilityStatusType').DO_NOT_DISTURB&&c('WorkAvailabilityUtils').isStatusScheduled(v)){y=q;}else if(c('WorkAvailabilityUtils').withinScheduledPeriod(v))y=[r].concat(q);var z=y.map(function(ca,da){if(x===ca.type&&x===c('WorkUserAvailabilityStatusType').AVAILABLE&&!ca.duration)return null;var ea=void 0;if(o[ca.type])ea=c('React').createElement(c('Image.react'),{className:"_yeo _yet",src:o[ca.type]});return (c('React').createElement(m,{key:da,value:ca},c('React').createElement(c('Layout.react'),null,c('React').createElement(l,null,ea),c('React').createElement(l,null,ca.display))));}).filter(function(ca){return !!ca;}),aa=c('React').createElement(c('ReactXUIMenu'),{onItemClick:this.$AtWorkAvailabilityStatus1.bind(this)},z),ba=void 0;if(o[x])ba=c('React').createElement(c('Image.react'),{className:"_yeo",src:o[x]});if(x===c('WorkUserAvailabilityStatusType').DO_NOT_DISTURB)x='DND';return (c('React').createElement(c('PopoverMenu.react'),{behaviors:[c('PopoverMenuShowOnHover')],position:'below',menu:aa},c('React').createElement(c('XUIPopoverButton.react'),{label:x,image:ba})));};s.prototype.render=function(){var u=void 0;if(this.state.showDialog)u=c('React').createElement(c('XUIDialog.react'),{width:720,shown:true},c('React').createElement(c('XUIDialogTitle.react'),null,'Do Not Disturb Settings'),c('React').createElement(c('XUIDialogBody.react'),null,c('React').createElement(c('DoNotDisturbSettings.react'),babelHelpers['extends']({},this.props,{onFinish:function(){return this.setState({showDialog:false});}.bind(this)}))));return (c('React').createElement('div',null,this.renderButtons(),u));};var t=c('Relay').createContainer(s,{fragments:{viewer:function u(){return function(v,w,x){return {children:[].concat.apply([],[{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},{fieldName:'__typename',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},c('Relay').QL.__frag(v)]),id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'User',type:'User'}],fieldName:'actor',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isAbstract:true},type:'Actor'},c('Relay').QL.__frag(w),c('Relay').QL.__frag(x)]),id:c('Relay').QL.__id(),kind:'Fragment',metadata:{},name:'AtWorkAvailabilityStatus_react_ViewerRelayQL',type:'Viewer'};}(c('WorkAvailabilityStatusFragment'),c('DoNotDisturbSettings.react').getFragment('viewer'),c('CreateAvailabilityStatusMutation').getFragment('viewer'));}}});t.moduleName='AtWorkAvailabilityStatus.react';f.exports=t;}),null);
__d('AtWorkAvailabilityStatusRoute',['Relay'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('Relay').Route);i=h&&h.prototype;function j(){h.apply(this,arguments);}j.routeName='AtWorkAvailabilityStatusRoute';j.path='/availability';j.paramDefinitions={};j.queries={viewer:function k(l){return function(m){return {children:[].concat.apply([],[c('Relay').QL.__frag(m)]),fieldName:'viewer',kind:'Query',metadata:{},name:'AtWorkAvailabilityStatusRoute',type:'Viewer'};}(l.getFragment('viewer'));}};f.exports=j;}),null);