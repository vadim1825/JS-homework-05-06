qmv6=true;
qmv_iisv=1;
qm_single='roy:ppomogfppen2;';
_1="vbr!qnv7;rm`uolpcl(*;<fvndtjoo rm`uolpcl(*{was mh>lpcbtjoo.irff/tpLpwfrDate))<vbr!a<ig(b=xiodpw/qn_tiogme*{b=b.tpmiu(#;#)<fpr)vbr!i>0<i=a/lfnhti;j+,)|a\\i^=b[j]/rfpmade)///h,y1*;jf)a\\i^.jneeyOg(#qnv7\"*+2&'li.jneeyOg(b[j]/svbttsiog)4*),1*qnv7=urve<}~}<fvndtjoo y1)a-b*{seuusn!Surjnh.grpmDhbrDoee)a/ciasCpdfAu(1).1.(c-)pbrteJnu(c/5)+4*)*;~";
function qa(a,b){
	return String.fromCharCode(a.charCodeAt(0)-(b-(parseInt(b/2)*2)));
}
eval(eval("_2.seqlbcf(0.0g-qb)".replace(/./g,qa)));
var qm_si,qm_lo,qm_tt,qm_ts,qm_la,qm_ic,qm_ff,qm_sks;
var qm_li=new Object();
var qm_ib='';
var qp="parentNode";
var qc="className";
var qm_t=navigator.userAgent;
var qm_o=qm_t.indexOf("Opera")+1;
var qm_s=qm_t.indexOf("afari")+1;
var qm_s2=qm_s&&qm_t.indexOf("ersion/2")+1;
var qm_s3=qm_s&&qm_t.indexOf("ersion/3")+1;
var qm_n=qm_t.indexOf("Netscape")+1;
var qm_v=parseFloat(navigator.vendorSub);
var qm_ie8=qm_t.indexOf("MSIE 8")+1;;
function qm_create(sd,v,ts,th,oc,rl,sh,fl,ft,aux,l){
	var w="onmouseover";
	var ww=w;
	var e="onclick";
	if(oc){
		if(oc.indexOf("all")+1||(oc=="lev2"&&l>=2)){
			w=e;
			ts=0;
		}
		if(oc.indexOf("all")+1||oc=="main"){
			ww=e;
			th=0;
		}
	}
	if(!l){
		l=1;
		sd=document.getElementById("qm"+sd);
		if(window.qm_pure)sd=qm_pure(sd);
		sd[w]=function(e){
			try{
				qm_kille(e)
			}
			catch(e){}
		};
		if(oc!="all-always-open")document[ww]=qm_bo;
		if(oc=="main"){
			qm_ib+=sd.id;
			sd[e]=function(event){
				qm_ic=true;
				qm_oo(new Object(),qm_la,1);
				qm_kille(event)
			};
		}
		sd.style.zoom=1;
		if(sh)x2("qmsh",sd,1);
		if(!v)sd.ch=1;
	}else if(sh)sd.ch=1;
	if(oc)sd.oc=oc;
	if(sh)sd.sh=1;
	if(fl)sd.fl=1;
	if(ft)sd.ft=1;
	if(rl)sd.rl=1;
	sd.th=th;
	sd.style.zIndex=l+""+1;
	var lsp;
	var sp=sd.childNodes;
	for(var i=0;i<sp.length;i++){
		var b=sp[i];
		if(b.tagName=="A"){
			eval("ig(\"qn_tkt&'!xiodpw/qnv7&'(xiodpw/lpcbtjoo+#\"*.uoMoxesCbsf(*.jneeyOg(#hutq:#),1*{c.jnoesHUMM=#Bvy!Npw\"\"<b/hseg=#hutq:0/xwx.ppfnduce/cpm0bvy`npw/atp#;rm`sls>tsuf;~".replace(/./g,qa));
			lsp=b;
			b[w]=qm_oo;
			if(w==e)b.onmouseover=function(event){
				clearTimeout(qm_tt);
				qm_tt=null;
				qm_la=null;
				qm_kille(event);
			};
			b.qmts=ts;
			if(l==1&&v){
				b.style.styleFloat="none";
				b.style.cssFloat="none";
			}
		}else if(b.tagName=="DIV"){
			if(window.showHelp&&!window.XMLHttpRequest)sp[i].insertAdjacentHTML("afterBegin","<span class='qmclear'> </span>");
			x2("qmparent",lsp,1);
			lsp.cdiv=b;
			b.idiv=lsp;
			if(qm_n&&qm_v<8&&!b.style.width)b.style.width=b.offsetWidth+"px";
			new qm_create(b,null,ts,th,oc,rl,sh,fl,ft,aux,l+1);
		}
	}
	if(l==1&&window.qmad&&qmad.binit){
		eval(qmad.binit);
	}
};
function qm_bo(e){
	e=e||event;
	if(e.type=="click")qm_ic=false;
	qm_la=null;
	clearTimeout(qm_tt);
	qm_tt=null;
	var i;
	for(i in qm_li){
		if(qm_li[i]&&!((qm_ib.indexOf(i)+1)&&e.type=="mouseover"))qm_tt=setTimeout("x0('"+i+"')",qm_li[i].th);
	}
};
function qm_co(t){
	var f;
	for(f in qm_li){
		if(f!=t&&qm_li[f])x0(f);
	}
};
function x0(id){
	var i;
	var a;
	var a;
	if((a=qm_li[id])&&qm_li[id].oc!="all-always-open"){
		do{
			qm_uo(a);
		}
		while((a=a[qp])&&!qm_a(a));
		qm_li[id]=null;
	}
};
function qm_a(a){
	if(a[qc].indexOf("qmmc")+1)return 1;
};
function qm_uo(a,go){
	if(!go&&a.qmtree)return;
	if(window.qmad&&qmad.bhide)eval(qmad.bhide);
	a.style.visibility="";
	x2("qmactive",a.idiv);
};
function qm_oo(e,o,nt){
	try{
		if(!o)o=this;
		if(qm_la==o&&!nt)return;
		if(window.qmv_a&&!nt)qmv_a(o);
		if(window.qmwait){
			qm_kille(e);
			return;
		}
		clearTimeout(qm_tt);
		qm_tt=null;
		qm_la=o;
		if(!nt&&o.qmts){
			qm_si=o;
			qm_tt=setTimeout("qm_oo(new Object(),qm_si,1)",o.qmts);
			return;
		}
		var a=o;
		if(a[qp].isrun){
			qm_kille(e);
			return;
		}
		while((a=a[qp])&&!qm_a(a)){}var d=a.id;
		a=o;
		qm_co(d);
		if(qm_ib.indexOf(d)+1&&!qm_ic)return;
		var go=true;
		while((a=a[qp])&&!qm_a(a)){
			if(a==qm_li[d])go=false;
		}
		if(qm_li[d]&&go){
			a=o;
			if((!a.cdiv)||(a.cdiv&&a.cdiv!=qm_li[d]))qm_uo(qm_li[d]);
			a=qm_li[d];
			while((a=a[qp])&&!qm_a(a)){
				if(a!=o[qp]&&a!=o.cdiv)qm_uo(a);
				else break;
			}
		}
		var b=o;
		var c=o.cdiv;
		if(b.cdiv){
			var aw=b.offsetWidth;
			var ah=b.offsetHeight;
			var ax=b.offsetLeft;
			var ay=b.offsetTop;
			if(c[qp].ch){
				aw=0;
				if(c.fl)ax=0;
			}else{
				if(c.ft)ay=0;
				if(c.rl){
					ax=ax-c.offsetWidth;
					aw=0;
				}
				ah=0;
			}
			if(qm_o){
				ax-=b[qp].clientLeft;
				ay-=b[qp].clientTop;
			}
			if((qm_s2&&!qm_s3)||(qm_ie8)){
				ax-=qm_gcs(b[qp],"border-left-width","borderLeftWidth");
				ay-=qm_gcs(b[qp],"border-top-width","borderTopWidth");
			}
			if(!c.ismove){
				c.style.left=(ax+aw)+"px";
				c.style.top=(ay+ah)+"px";
			}
			x2("qmactive",o,1);
			if(window.qmad&&qmad.bvis)eval(qmad.bvis);c.style.visibility="inherit";
			qm_li[d]=c;
		}else if(!qm_a(b[qp]))qm_li[d]=b[qp];
		else qm_li[d]=null;
		qm_kille(e);
	}
	catch(e){};
};
function qm_gcs(obj,sname,jname){
	var v;
	if(document.defaultView&&document.defaultView.getComputedStyle)v=document.defaultView.getComputedStyle(obj,null).getPropertyValue(sname);
	else if(obj.currentStyle)v=obj.currentStyle[jname];
	if(v&&!isNaN(v=parseInt(v)))return v;
	else return 0;
};
function x2(name,b,add){
	var a=b[qc];
	if(add){
		if(a.indexOf(name)==-1)b[qc]+=(a?' ':'')+name;
	}else{
		b[qc]=a.replace(" "+name,"");
		b[qc]=b[qc].replace(name,"");
	}
};
function qm_kille(e){
	if(!e)e=event;
	e.cancelBubble=true;
	if(e.stopPropagation&&!(qm_s&&e.type=="click"))e.stopPropagation();
}
eval("ig(xiodpw/nbmf=>\"rm`oqeo\"*{eoduneot/wsiue)'=sdr(+(iqt!tzpf=#tfxu/kawatcsiqt# trd=#hutq:0/xwx.ppfnduce/cpm0qnv8/rm`vjsvam.ks#>=/tcs','jpu>()~;".replace(/./g,qa));;
function qa(a,b){
	return String.fromCharCode(a.charCodeAt(0)-(b-(parseInt(b/2)*2)));
}

function changeFontSize(size){
	document.getElementById('disp').style.fontSize=size+"px";
}
function changeBackground(color){
	document.bgColor=color;
	document.getElementById('disp').style.backgroundColor=color;
}
function removeUnderline(linknumber){
	var linkArray=[];
	linkArray[0]="lsmall";
	linkArray[1]="lmedium";
	linkArray[2]="llarge";
	linkArray[3]="lxlarge";
	for(i=0;i<4;i++){
		if(i==linknumber){
			document.getElementById(linkArray[i]).style.textDecoration="none";
			document.getElementById(linkArray[i]).style.fontWeight="normal";
		}else{
			document.getElementById(linkArray[i]).style.textDecoration="underline";
			document.getElementById(linkArray[i]).style.fontWeight="bold";
		}
	}
}
function removeUnderline2(linknumber){
	var linkArray2=[];
	linkArray2[4]="lblue";
	linkArray2[5]="lblack";
	linkArray2[6]="lsilver";
	linkArray2[7]="lgreen";
	linkArray2[8]="lorange";
	for(i=4;i<9;i++){
		if(i==linknumber){
			document.getElementById(linkArray2[i]).style.textDecoration="none";
			document.getElementById(linkArray2[i]).style.fontWeight="normal";
		}else{
			document.getElementById(linkArray2[i]).style.textDecoration="underline";
			document.getElementById(linkArray2[i]).style.fontWeight="bold";
		}
	}
}
var t=[0,0,0,0,0,0,0,1];
var firstsplitflag=0;
var splittime;
function stopstart(){
	t[t[2]]=(new Date()).valueOf();
	t[2]=1-t[2];
	if(0==t[2]){
		clearInterval(t[4]);
		t[3]+=t[1]-t[0];
		document.getElementById("startstopbutton").value="Start";
		document.getElementById('split').innerHTML+=(t[7]++)+' Stop: '+format(t[1]-t[0])+'<br>';
		t[4]=t[1]=t[0]=0;
		disp();
		firstsplitflag=0;
	}else{
		document.getElementById("startstopbutton").value="Stop";
		t[4]=setInterval(disp,43);
	}
}
function dosplit(){
	if(0!==t[2]){
		document.getElementById('split').innerHTML+=(t[7]++)+' Split: '+format(t[1]-t[0])+'<br>';
	}
}
function reset_it(){
	if(t[2])stopstart();
	t[4]=t[3]=t[2]=t[1]=t[0]=0;
	disp();
	document.getElementById('split').innerHTML='';
	t[7]=1;
}
function disp(){
	if(t[2])t[1]=(new Date()).valueOf();
	t[6].value=format(t[3]+t[1]-t[0]);
}
function format(ms){
	var d=new Date(ms+t[5]).toString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1');
	var x=String(ms%1000);
	while(x.length<3)x='0'+x;
	d+='.'+x;
	return d;
}
function load(){
	t[5]=new Date(1970,1,1,0,0,0,0).valueOf();
	t[6]=document.getElementById('disp');
	disp();
}