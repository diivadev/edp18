//tealium universal tag - utag.626 ut4.0.201805231507, Copyright 2018 Tealium.com Inc. All Rights Reserved.
var uetq=uetq||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.initialized=false;u.map={"bing_ea":"ea","bing_ec":"ec","bing_pagetype":"pagetype","product_id":"prodid"};u.extend=[function(a,b){try{if((typeof b['page_type']!='undefined'&&b['page_type']=='order confirmation')){b['bing_ec']='Purchase';b['bing_ea']='Checkout'}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){d=b['page_type'];if(typeof d=='undefined')return;c=[{'home page':'home'},{'search results':'searchresults'},{'browse':'category'},{'splash':'category'},{'product quickview':'product'},{'product':'product'},{'shopping bag':'cart'},{'order confirmation':'purchase'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['bing_pagetype']=c[e][f];m=true};};if(m)break};if(!m)b['bing_pagetype']='other';},function(a,b){try{if(1){if(typeof b.event_name!="undefined"&&b.event_name=="experiment"&&b.tealium_event=="link"){return false;}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(typeof b.event_name!="undefined"&&b.event_name=="product select sku"&&b.tealium_event=="link"){return false;}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"base_url":"//bat.bing.com/bat.js","tagid":"5438349","ec":"","ea":"","el":"","ev":"","gv":"","prodid":"","pagetype":"","order_subtotal":""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.loader_cb=function(){if(!u.initialized){var o={ti:u.data.tagid};o.q=uetq;uetq=new UET(o);uetq.push("pageLoad");}
u.initialized=true;g={};if(u.data.ec){g.ec=u.data.ec;}
if(u.data.ea){g.ea=u.data.ea;}
if(u.data.el){g.el=u.data.el;}
if(u.data.ev){g.ev=u.data.ev;}
if(u.data.prodid){g.prodid=u.data.prodid;}
if(u.data.pagetype){g.pagetype=u.data.pagetype;}
u.data.gv=u.data.gv||u.data.order_subtotal;if(u.data.gv){var gv=parseFloat(u.data.gv,10);if(isNaN(gv)===false){g.gv=gv;}}
if(g.ec||g.ea||g.el||g.ev||g.gv||g.prodid||g.pagetype){uetq.push(g);}};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":"utag_626"});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);}("626","macys.main"));}catch(error){utag.DB(error);}