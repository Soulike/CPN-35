'use strict';function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(c,d){function f(g,h){try{var k=b[g](h),l=k.value}catch(m){return void d(m)}return k.done?void c(l):Promise.resolve(l).then(function(m){f('next',m)},function(m){f('throw',m)})}return f('next')})}}$(_asyncToGenerator(regeneratorRuntime.mark(function a(){var b,c,d,f,g,h,k,l,m,n,o,p,q,r,s,t,u,v,w;return regeneratorRuntime.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.prev=0,y.next=3,getAllNodesInfo();case 3:if(b=y.sent,c=b.getAll,d=b.getType,c.code!==CODE.SUCCESS){y.next=13;break}for(f=c.data.nodes,DEBUG&&(console.log('\u670D\u52A1\u5668\u53D1\u9001\u8282\u70B9\u6570\u636E'),console.log(f)),g=0;g<f.length;g++)originalIdToPageId[f[g].trim()]=g,pageIdToOriginalId[g]=f[g].trim();DEBUG&&(console.log('\u524D\u7AEF\u6620\u5C04'),console.log(originalIdToPageId)),y.next=15;break;case 13:return y.next=15,showNotice(c.msg);case 15:if(d.code!==CODE.SUCCESS){y.next=41;break}for(h=$('.icon'),k=!0,l=!1,m=void 0,y.prev=20,n=h[Symbol.iterator]();!(k=(o=n.next()).done);k=!0)p=o.value,$(p).attr('data-deviceType','0'),$(p).css('background-image','url(\'./images/0.png\')');y.next=28;break;case 24:y.prev=24,y.t0=y['catch'](20),l=!0,m=y.t0;case 28:y.prev=28,y.prev=29,!k&&n.return&&n.return();case 31:if(y.prev=31,!l){y.next=34;break}throw m;case 34:return y.finish(31);case 35:return y.finish(28);case 36:for(t in q=d.data,r=DEVICE,s=r.TYPE,q)q.hasOwnProperty(t)&&(t=t.trim(),u=originalIdToPageId[t],v=q[t],w=$('.icon[data-nodeid='+u+']'),w.attr('data-deviceType',q[t]),w.css('background-image','url(\'./images/'+v+'.png\')'));y.next=43;break;case 41:return y.next=43,showNotice(d.msg);case 43:y.next=50;break;case 45:return y.prev=45,y.t1=y['catch'](0),console.log(y.t1),y.next=50,showNotice(MSG.ERROR).catch(function(z){console.log(z)});case 50:case'end':return y.stop();}},a,void 0,[[0,45],[20,24,28,36],[29,,31,35]])}))),$(function(){var a=io();a.on('connect',function(){console.log('socket \u8FDE\u63A5\u6210\u529F')}),a.on('disconnect',function(){console.log('socket \u65AD\u5F00\uFF0C\u8FDB\u884C\u91CD\u8FDE')}),a.on('nodeStatus',function(b){DEBUG&&(console.log('\u65B0\u7684\u8FDE\u63A5\u72B6\u6001 (\u539F\u59CB\u6570\u636E)'),console.log(b));var c,d,f={},_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var n,m=b[Symbol.iterator]();!(_iteratorNormalCompletion2=(n=m.next()).done);_iteratorNormalCompletion2=!0){var o=n.value,g=o.startNode,h=o.endNode;c=originalIdToPageId[g],d=originalIdToPageId[h],f[c+'-'+d]=!0}}catch(p){_didIteratorError2=!0,_iteratorError2=p}finally{try{!_iteratorNormalCompletion2&&m.return&&m.return()}finally{if(_didIteratorError2)throw _iteratorError2}}DEBUG&&(console.log('\u65B0\u7684\u8FDE\u63A5\u72B6\u6001'),console.log(f));for(var k=0;24>k;k++)for(var l=k+1;35>l&&7>=l-k;l++)(1==l-k||7==l-k)&&(Object.is(f[k+'-'+l],void 0)?$('.line[data-connectnodes='+k+'-'+l+']').removeClass('connected'):!0===f[k+'-'+l]&&$('.line[data-connectnodes='+k+'-'+l+']').addClass('connected'))}),a.on('nodeType',function(b){var c=$('.icon'),_iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var n,d,m=c[Symbol.iterator]();!(_iteratorNormalCompletion3=(n=m.next()).done);_iteratorNormalCompletion3=!0)d=n.value,$(d).attr('data-deviceType','0'),$(d).css('background-image','url(\'./images/0.png\')')}catch(o){_didIteratorError3=!0,_iteratorError3=o}finally{try{!_iteratorNormalCompletion3&&m.return&&m.return()}finally{if(_didIteratorError3)throw _iteratorError3}}var _DEVICE2=DEVICE,f=_DEVICE2.TYPE;for(var g in b)if(b.hasOwnProperty(g)){g=g.trim();var h=originalIdToPageId[g],k=b[g],l=$('.icon[data-nodeid='+h+']');l.attr('data-deviceType',b[g]),l.css('background-image','url(\'./images/'+k+'.png\')')}})});