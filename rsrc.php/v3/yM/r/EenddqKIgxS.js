if (self.CavalryLogger) { CavalryLogger.start_js(["uCyqQ"]); }

__d('SUIBorderUtils',['CornerEnum','Locale','React','Set','SideEnum'],(function a(b,c,d,e,f,g){'use strict';var h=c('React').PropTypes,i=c('CornerEnum').values,j=c('SideEnum').values,k={ALL_CORNERS:i,ALL_SIDES:j,BorderedSidesPropType:h.arrayOf(h.oneOf(j)),RoundedCornersPropType:h.arrayOf(h.oneOf(i)),getBorderRadiusStyles:function l(m){var n=new (c('Set'))(m);if(n.size===i.length)return null;var o={borderTopLeftRadius:n.has('topLeft')?'2px':'0',borderTopRightRadius:n.has('topRight')?'2px':'0',borderBottomRightRadius:n.has('bottomRight')?'2px':'0',borderBottomLeftRadius:n.has('bottomLeft')?'2px':'0'};if(c('Locale').isRTL())return {borderTopLeftRadius:o.borderTopRightRadius,borderTopRightRadius:o.borderTopLeftRadius,borderBottomRightRadius:o.borderBottomLeftRadius,borderBottomLeftRadius:o.borderBottomRightRadius};return o;},getBorderWidthStyles:function l(m){var n=new (c('Set'))(m);if(n.size===j.length)return null;var o={borderTopWidth:n.has('top')?'1px':'0',borderRightWidth:n.has('right')?'1px':'0',borderBottomWidth:n.has('bottom')?'1px':'0',borderLeftWidth:n.has('left')?'1px':'0'};if(c('Locale').isRTL())return babelHelpers['extends']({},o,{borderRightWidth:o.borderLeftWidth,borderLeftWidth:o.borderRightWidth});return o;}};f.exports=k;}),null);