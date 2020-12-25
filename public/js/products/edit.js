!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=40)}({0:function(e,t){e.exports={showSuccessMessage:function(e){$("#successMessageDiv").text(e),$("#successMessageAlert").removeAttr("hidden")},showErrorMessage:function(e){$("#errorMessageDiv").text(e),$("#errorMessageAlert").removeAttr("hidden")}}},40:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var o=n(0);function a(e,t,n,a,r){if(!1===t.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault();var s=new FormData(t),i=$(t).attr("action");$.ajax({url:i,data:s,cache:!1,contentType:!1,processData:!1,method:"POST",success:function(e){$("#response").html(e),Object(o.showSuccessMessage)(a)},error:function(e,t,n){console.log(t),console.log(n),Object(o.showErrorMessage)(r)},complete:function(e,t){$(n).modal("hide")}})}t.classList.add("was-validated")}n(42),$(document).on("change","#inputFileId",(function(e){e.stopPropagation(),function(e){try{if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){$("#previewImage").attr("src",e.target.result)},t.readAsDataURL(e.files[0])}}catch(e){Object(o.showErrorMessage)("Error when trying to preview selected image")}}(this)})),$("#editModalForm").on("submit",(function(e){a(e,this,"#editModal","Product updated successfully","Error when trying to update a product")})),$("#createModalForm").on("submit",(function(e){a(e,this,"#createModal","Product created successfully","Error when trying to create a product")})),$("input[maxlength], textarea").maxlength({alwaysShow:!0,warningClass:"form-text text-muted mt-1",limitReachedClass:"form-text text-muted mt-1",placement:"bottom-right-inside"})},42:function(e,t){!function(e){"use strict";e.event.special.destroyed||(e.event.special.destroyed={remove:function(e){e.handler&&e.handler()}}),e.fn.extend({maxlength:function(t,n){var o=e("body");function a(e){var t=e.charCodeAt();return t?t<128?1:t<2048?2:3:0}function r(e){return e.split("").map(a).concat(0).reduce((function(e,t){return e+t}))}function s(e){var n=e.val();n=t.twoCharLinebreak?n.replace(/\r(?!\n)|\n(?!\r)/g,"\r\n"):n.replace(/(?:\r\n|\r|\n)/g,"\n");var o=0;return o=t.utf8?r(n):n.length,"file"===e.prop("type")&&""!==e.val()&&(o-=12),o}function i(e,t){return t-s(e)}function l(e,t){t.css({display:"block"}),e.trigger("maxlength.shown")}function c(e,n,o){var a="";return t.message?a="function"==typeof t.message?t.message(e,n):t.message.replace("%charsTyped%",o).replace("%charsRemaining%",n-o).replace("%charsTotal%",n):(t.preText&&(a+=t.preText),t.showCharsTyped?a+=o:a+=n-o,t.showMaxLength&&(a+=t.separator+n),t.postText&&(a+=t.postText)),a}function u(e,n,o,a){var r,i,u,f;a&&(a.html(c(n.val(),o,o-e)),e>0?(r=n,i=t.threshold,u=o,f=!0,!t.alwaysShow&&u-s(r)>i&&(f=!1),f?l(n,a.removeClass(t.limitReachedClass).addClass(t.warningClass)):function(e,n){t.alwaysShow||(n.css({display:"none"}),e.trigger("maxlength.hidden"))}(n,a)):l(n,a.removeClass(t.warningClass).addClass(t.limitReachedClass))),t.customMaxAttribute&&(e<0?n.addClass("overmax"):n.removeClass("overmax"))}function f(n,o){var a=function(t){var n=t[0];return e.extend({},"function"==typeof n.getBoundingClientRect?n.getBoundingClientRect():{width:n.offsetWidth,height:n.offsetHeight},t.offset())}(n);if("function"!==e.type(t.placement))if(e.isPlainObject(t.placement))!function(n,o){if(n&&o){var a={};e.each(["top","bottom","left","right","position"],(function(e,n){var o=t.placement[n];void 0!==o&&(a[n]=o)})),o.css(a)}}(t.placement,o);else{var r=n.outerWidth(),s=o.outerWidth(),i=o.width(),l=o.height();switch(t.appendToParent&&(a.top-=n.parent().offset().top,a.left-=n.parent().offset().left),t.placement){case"bottom":o.css({top:a.top+a.height,left:a.left+a.width/2-i/2});break;case"top":o.css({top:a.top-l,left:a.left+a.width/2-i/2});break;case"left":o.css({top:a.top+a.height/2-l/2,left:a.left-i});break;case"right":o.css({top:a.top+a.height/2-l/2,left:a.left+a.width});break;case"bottom-right":o.css({top:a.top+a.height,left:a.left+a.width});break;case"top-right":o.css({top:a.top-l,left:a.left+r});break;case"top-left":o.css({top:a.top-l,left:a.left-s});break;case"bottom-left":o.css({top:a.top+n.outerHeight(),left:a.left-s});break;case"centered-right":o.css({top:a.top+l/2,left:a.left+r-s-3});break;case"bottom-right-inside":o.css({top:a.top+a.height,left:a.left+a.width-s});break;case"top-right-inside":o.css({top:a.top-l,left:a.left+r-s});break;case"top-left-inside":o.css({top:a.top-l,left:a.left});break;case"bottom-left-inside":o.css({top:a.top+n.outerHeight(),left:a.left})}}else t.placement(n,o,a)}function p(e){var n=e.attr("maxlength")||t.customMaxAttribute;if(t.customMaxAttribute&&!t.allowOverMax){var o=e.attr(t.customMaxAttribute);(!n||o<n)&&(n=o)}return n||(n=e.attr("size")),n}return e.isFunction(t)&&!n&&(n=t,t={}),t=e.extend({showOnReady:!1,alwaysShow:!0,threshold:0,warningClass:"small form-text text-muted",limitReachedClass:"small form-text text-danger",separator:" / ",preText:"",postText:"",showMaxLength:!0,placement:"bottom-right-inside",message:null,showCharsTyped:!0,validate:!1,utf8:!1,appendToParent:!1,twoCharLinebreak:!0,customMaxAttribute:null,allowOverMax:!1,zIndex:1099},t),this.each((function(){var n,s,l=e(this);function d(){var a=c(l.val(),n,"0");n=p(l),s||(s=e('<span class="bootstrap-maxlength"></span>').css({display:"none",position:"absolute",whiteSpace:"nowrap",zIndex:t.zIndex}).html(a)),l.is("textarea")&&(l.data("maxlenghtsizex",l.outerWidth()),l.data("maxlenghtsizey",l.outerHeight()),l.mouseup((function(){l.outerWidth()===l.data("maxlenghtsizex")&&l.outerHeight()===l.data("maxlenghtsizey")||f(l,s),l.data("maxlenghtsizex",l.outerWidth()),l.data("maxlenghtsizey",l.outerHeight())}))),t.appendToParent?(l.parent().append(s),l.parent().css("position","relative")):o.append(s),u(i(l,p(l)),l,n,s),f(l,s)}e(window).resize((function(){s&&f(l,s)})),t.showOnReady?l.ready((function(){d()})):l.focus((function(){d()})),l.on("maxlength.reposition",(function(){f(l,s)})),l.on("destroyed",(function(){s&&s.remove()})),l.on("blur",(function(){s&&!t.showOnReady&&s.remove()})),l.on("input",(function(){var e=p(l),o=i(l,e),c=!0;return t.validate&&o<0?(!function(e,n){var o=e.val();if(t.twoCharLinebreak&&"\n"===(o=o.replace(/\r(?!\n)|\n(?!\r)/g,"\r\n"))[o.length-1]&&(n-=o.length%2),t.utf8){for(var s=o.split("").map(a),i=0,l=r(o)-n;i<l;i+=s.pop());n-=n-s.length}e.val(o.substr(0,n))}(l,e),c=!1):u(o,l,n,s),("bottom-right-inside"===t.placement||"top-right-inside"===t.placement||"function"==typeof t.placement||t.message&&"function"==typeof t.message)&&f(l,s),c}))}))}})}(jQuery)}});
//# sourceMappingURL=edit.js.map