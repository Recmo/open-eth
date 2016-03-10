'use strict';((window)=>{

// https://mnater.github.io/Hyphenator/mergeAndPack.html

/*
 *  Hyphenator_Loader 5.2.0(devel) - client side hyphenation for webbrowsers
 *  Copyright (C) 2015  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 *  https://github.com/mnater/Hyphenator
 *
 *  Released under the MIT license
 *  http://mnater.github.io/Hyphenator/LICENSE.txt
 */

var Hyphenator_Loader=(function(window){'use strict';var languages,config,path,createElem=function(tagname){var r;if(window.document.createElementNS){r=window.document.createElementNS('http://www.w3.org/1999/xhtml',tagname);}else if(window.document.createElement){r=window.document.createElement(tagname);}return r;},loadNrunHyphenator=function(config){var head,script,done=false;head=window.document.getElementsByTagName('head').item(0);script=createElem('script');script.src=path;script.type='text/javascript';script.onreadystatechange=function(){if(!done&&(!script.readyState||script.readyState==="loaded"||script.readyState==="complete")){done=true;Hyphenator.config(config);Hyphenator.run();script.onreadystatechange=null;script.onload=null;if(head&&script.parentNode){head.removeChild(script);}}};script.onload=script.onreadystatechange;head.appendChild(script);},checkLangSupport=function(){var shadowContainer,shadow,lang,fakeBdy=createElem('body');shadowContainer=createElem('div');shadowContainer.style.visibility='hidden';fakeBdy.appendChild(shadowContainer);window.document.documentElement.appendChild(fakeBdy);for(lang in languages){if(languages.hasOwnProperty(lang)){shadow=createElem('div');shadow.style.MozHyphens='auto';shadow.style['-webkit-hyphens']='auto';shadow.style['-ms-hyphens']='auto';shadow.style.hyphens='auto';shadow.style.width='5em';shadow.style.lineHeight='12px';shadow.style.border='none';shadow.style.padding='0';shadow.style.wordWrap='normal';shadow.style['-webkit-locale']="'"+lang+"'";shadow.lang=lang;shadow.appendChild(window.document.createTextNode(languages[lang]));shadowContainer.appendChild(shadow);if(shadow.offsetHeight===12){loadNrunHyphenator(config);break;}}}fakeBdy.parentNode.removeChild(fakeBdy);};return{init:function(langs,p,configs){languages=langs;path=p;config=configs||{};checkLangSupport();}};}(window));Hyphenator_Loader.init({"en":"hyphenationalgorithm"},"/hyphenator.js",{selectorfunction:function(hyphenateClass){var el=[];var tmp=window.document.getElementsByTagName('p');var l=tmp.length;for(i=0;i<l;i+=1){el.push(tmp[i]);}return el;},useCSS3hyphenation:true});


})(window);
