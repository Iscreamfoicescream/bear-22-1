/*!
 * ZUI: 1.2升级到1.3兼容插件 - v1.5.0 - 2016-09-06
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2016 cnezsoft.com; Licensed MIT
 */
!function(e,o){function r(o,a){if(e.isArray(o))return void e.each(o,function(e,o){r(o,a)});var i={};i[o]=s[o],a?e.extend(a,i):e.extend(i)}var s=e.zui;s&&(r(["uuid","callEvent","clientLang","browser","messager","Messager","showMessager","closeModal","ajustModalPosition","ModalTrigger","modalTrigger","store"]),r(["Color","imgReady","messager","Messager","showMessager","closeModal","ajustModalPosition","ModalTrigger","modalTrigger","store"],o))}(jQuery,window);