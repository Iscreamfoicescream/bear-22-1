/*!
 * ZUI: 拖拽选择 - v1.5.0 - 2016-09-06
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2016 cnezsoft.com; Licensed MIT
 */
!function(t){"use strict";var e="zui.selectable",i=function(i,n){this.name=e,this.$=t(i),this.id=t.zui.uuid(),this.selectOrder=1,this.selections={},this.getOptions(n),this._init()},n=function(t,e,i){return t>=i.left&&t<=i.left+i.width&&e>=i.top&&e<=i.top+i.height},o=function(t,e){var i=Math.max(t.left,e.left),o=Math.max(t.top,e.top),s=Math.min(t.left+t.width,e.left+e.width),l=Math.min(t.top+t.height,e.top+e.height);return n(i,o,t)&&n(s,l,t)&&n(i,o,e)&&n(s,l,e)};i.DEFAULTS={selector:"li,tr,div",trigger:"",selectClass:"active",rangeStyle:{border:"1px solid "+(t.zui.colorset?t.zui.colorset.primary:"#3280fc"),backgroundColor:t.zui.colorset?new t.zui.Color(t.zui.colorset.primary).fade(20).toCssStr():"rgba(50, 128, 252, 0.2)"},clickBehavior:"toggle",ignoreVal:3},i.prototype.getOptions=function(e){this.options=t.extend({},i.DEFAULTS,this.$.data(),e)},i.prototype.select=function(t){this.toggle(t,!0)},i.prototype.unselect=function(t){this.toggle(t,!1)},i.prototype.toggle=function(e,i,n){var o,s,l=this.options.selector,c=this;if(void 0===e)return void this.$.find(l).each(function(){c.toggle(this,i)});if("object"==typeof e?(o=t(e).closest(l),s=o.data("id")):(s=e,o=c.$.find('.slectable-item[data-id="'+s+'"]')),o&&o.length){if(s||(s=t.zui.uuid(),o.attr("data-id",s)),(void 0===i||null===i)&&(i=!c.selections[s]),!!i!=!!c.selections[s]){var a;if(t.isFunction(n)&&(a=n(i)),a!==!0){c.selections[s]=i?c.selectOrder++:!1;var r=[];t.each(c.selections,function(t,e){e&&r.push(t)}),c.callEvent(i?"select":"unselect",{id:s,selections:c.selections,target:o,selected:r},c)}}o.toggleClass(c.options.selectClass,i)}},i.prototype._init=function(){var e,i,n,s,l,c,a,r=this.options,u=this,h=r.ignoreVal,d="."+this.name+"."+this.id,g=t.isFunction(r.checkFunc)?r.checkFunc:null,f=t.isFunction(r.rangeFunc)?r.rangeFunc:null,p=function(){s&&u.$children.each(function(){var e=t(this),i=e.offset();i.width=e.outerWidth(),i.height=e.outerHeight();var n=f?f.call(this,s,i):o(s,i);if(g){var l=g.call(u,{intersect:n,target:e,range:s,targetRange:i});l===!0?u.select(e):l===!1&&u.unselect(e)}else n?u.select(e):u.multiKey||u.unselect(e)})},v=function(o){l=o.pageX,c=o.pageY,s={width:Math.abs(l-e),height:Math.abs(c-i),left:l>e?e:l,top:c>i?i:c},s.width<h&&s.height<h||(n||(n=t('.selectable-range[data-id="'+u.id+'"]'),n.length||(n=t('<div class="selectable-range" data-id="'+u.id+'"></div>').css(t.extend({zIndex:1060,position:"absolute",top:e,left:i,pointerEvents:"none"},u.options.rangeStyle)).appendTo(t("body")))),n.css(s),clearTimeout(a),a=setTimeout(p,10))},m=function(e){s&&(clearTimeout(a),p(),s=null),n&&n.remove();var i=[];t.each(u.selections,function(t,e){e&&i.push(t)}),u.callEvent("finish",{selections:u.selections,selected:i}),t(document).off(d),e.preventDefault()},y=function(o){if(u.callEvent("start",o)!==!1){var s=u.$children=u.$.find(r.selector);s.addClass("slectable-item");var l=u.multiKey?"multi":r.clickBehavior;"multi"===l?u.toggle(o.target):"single"===l?(u.unselect(),u.select(o.target)):"toggle"===l&&u.toggle(o.target,null,function(t){u.unselect()}),e=o.pageX,i=o.pageY,n=null,t(document).on("mousemove"+d,v).on("mouseup"+d,m),o.preventDefault()}},b=r.container&&"default"!==r.container?t(r.container):this.$;r.trigger?b.on("mousedown"+d,r.trigger,y):b.on("mousedown"+d,y),t(document).on("keydown",function(t){var e=t.keyCode;(17===e||91==e)&&(u.multiKey=e)}).on("keyup",function(t){u.multiKey=!1})},i.prototype.callEvent=function(e,i){var n=t.Event(e+"."+this.name);this.$.trigger(n,i);var o=n.result,s=this.options[e];return t.isFunction(s)&&(o=s.apply(this,t.isArray(i)?i:[i])),o},t.fn.selectable=function(n){return this.each(function(){var o=t(this),s=o.data(e),l="object"==typeof n&&n;s||o.data(e,s=new i(this,l)),"string"==typeof n&&s[n]()})},t.fn.selectable.Constructor=i,t(function(){t('[data-ride="selectable"]').selectable()})}(jQuery);