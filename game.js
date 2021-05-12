var yıl=2000;
var ay=1;
var para=1000;
var bütünlük=50;
var güvenlik =50;
var refah= 750;
var sadakat = 40;

var paraDeğişim=0;
var bütünlükDeğişim=0;
var güvenlikDeğişim=0;
var refahDeğişim=0;
var sadakatDeğişim=0;

var üretimLvl=0;
var eğitimLvl=0;
var adaletLvl=0;
var turizmLvl=0;
var dışilişkiLvl=0;
var vergiLvl=0;
var ihracatLvl=0;
var ithalatLvl=0;
var orduLvl=0;
var sağlıkLvl=0;
var istihdamLvl=0;
var akademiLvl=0;

var kflag=0;
var sflag=0;
var mflag=0;
var tflag=0;
var aflag=0;

var nupflag=0;
var nsabflag=0;
var ndownflag=0;

var kçarpanı=1;
var sçarpanı=1;
var mçarpanı=1;
var tçarpanı=1;
var açarpanı=1;

var paranupçarpanı=1;
var bütünlüknupçarpanı=1;

var refahndownçarpanı=1;
var güvenlikndownçarpanı=1;




ay = document.getElementById("ay").innerHTML;
ay=Number(ay);


document.getElementById("para").innerHTML= para ;
document.getElementById("bütünlük").innerHTML= bütünlük ;
document.getElementById("güvenlik").innerHTML= güvenlik ;
document.getElementById("refah").innerHTML= refah ;
document.getElementById("sadakat").innerHTML= sadakat ;

function baslatbuton(){
	baslaflag = 1;
}
function durdurbuton(){
	baslaflag = 0;
}

var güncel = setInterval(AyUp, 1000);

function AyUp() {	
	if(baslaflag==1){
	if((refah>=1500)&&(sadakat>=200)&&(güvenlik>=100)&&(bütünlük>=100)){
		baslaflag=0;
		alert("TEBRİKLER KAZANDINIZ!!!");
		
	}
	if((refah<=0)){
		baslaflag=0;
		alert("REFAHINIZIZ 0 IN ALTINA DÜŞTÜ HALKINIZ İSYAN ETTİ KAYBETTİNİZ!!!");
		
	}
	if((sadakat<=0)){
		baslaflag=0;
		alert("SADAKATİNİZ 0 IN ALTINA DÜŞTÜ HALKINIZ DARBE YAPTI KAYBETTİNİZ!!!");
		
	}
	if((güvenlik<=0)){
		baslaflag=0;
		alert("GÜVENLİĞİNİZ 0 IN ALTINA DÜŞTÜ ÜLKENİZ İŞGALE UĞRADI KAYBETTİNİZ!!!");
		
	}
	if((bütünlük<=0)){
		baslaflag=0;
		alert("BÜTÜNLÜĞÜNÜZ 0 IN ALTINA DÜŞTÜ ÜLKENİZDEN YENİ DEVLETLER TÜREDİ KAYBETTİNİZ!!!");
		
	}
	if((para<=0)&&(-1000<=para)){
		
		alert("PARANIZ 0 IN ALTINA DÜŞTÜ -1000 İN ALTINA DÜŞERSENİZ İFLAS EDECEKSİNİZ!!!");
		
	}
	if((-1000>=para)){
		baslaflag=0;
		alert("PARANIZ -1000 IN ALTINA DÜŞTÜ İFLAS ETTİNİZ , KAYBETTİNİZ!!!");
		
	}
	if(ay!=12){
	ay = ay + 1 ;
	document.getElementById("ay").innerHTML= ay ;
	}
	else{
		ay=0;
		yıl=yıl+1;
		document.getElementById("ay").innerHTML= ay;
		document.getElementById("tarih").innerHTML= yıl;
	}
	if(kçarpanı!=1){
		if(paraDeğişim>=0){
		kçarpanı=1.25;}
		else{
		kçarpanı=0.75;}
		}
	if(tçarpanı!=1){
		if(bütünlükDeğişim>=0){
		tçarpanı=1.25;}
		else{
		tçarpanı=0.75;}
		}
	if(açarpanı!=1){
		if(güvenlikDeğişim>=0){
		açarpanı=0.25;}
		else{
		açarpanı=2;}
		}
	if(sçarpanı!=1){
		if(refahDeğişim>=0){
		sçarpanı=1.25;}
		else{
		sçarpanı=0.75;}
		}
	if(mçarpanı!=1){
		if(sadakatDeğişim>=0){
		mçarpanı=1.25;}
		else{
		mçarpanı=0.75;}
		}
	if(paranupçarpanı!=1){
		if(paraDeğişim>=0){
		paranupçarpanı=1.25;}
		else{
		paranupçarpanı=0.75;}
		}
	if(bütünlüknupçarpanı!=1){
		if(bütünlükDeğişim>=0){
		bütünlüknupçarpanı=0.75;}
		else{
		paranupçarpanı=1.25;}
		}
	if(refahndownçarpanı!=1){
		if(refahDeğişim>=0){
		refahndownçarpanı=1.25;}
		else{
		refahndownçarpanı=0.75;}
		}
	if(güvenlikndownçarpanı!=1){
		if(güvenlikDeğişim>=0){
		güvenlikndownçarpanı=1.25;}
		else{
		güvenlikndownçarpanı=0.75;}
		}	
	
	
	
	para=para+paraDeğişim*kçarpanı*paranupçarpanı;
	bütünlük=bütünlük+bütünlükDeğişim*tçarpanı*bütünlüknupçarpanı;
	güvenlik=güvenlik+güvenlikDeğişim*açarpanı*güvenlikndownçarpanı;
	refah=refah+refahDeğişim*sçarpanı*refahndownçarpanı;
	sadakat=sadakat+sadakatDeğişim*mçarpanı;
	
	document.getElementById("para").innerHTML= para ;
	document.getElementById("bütünlük").innerHTML= bütünlük ;
	document.getElementById("güvenlik").innerHTML= güvenlik ;
	document.getElementById("refah").innerHTML= refah ;
	document.getElementById("sadakat").innerHTML= sadakat ;
	
	document.getElementById("pdeğişim").innerHTML= paraDeğişim*kçarpanı*paranupçarpanı;
	document.getElementById("bdeğişim").innerHTML= bütünlükDeğişim*tçarpanı*bütünlüknupçarpanı ;
	document.getElementById("gdeğişim").innerHTML= güvenlikDeğişim*açarpanı*güvenlikndownçarpanı;
	document.getElementById("rdeğişim").innerHTML= refahDeğişim*sçarpanı*refahndownçarpanı;
	document.getElementById("sdeğişim").innerHTML= sadakatDeğişim*mçarpanı;
		
  }}
  var güncel1 = setInterval(colorgüncel, 100);
  function colorgüncel(){ if(kflag){var elementk = document.getElementById("kbut").style.background="green";}
	else{var elementk = document.getElementById("kbut").style.background="red";}
	if(sflag){var elementk = document.getElementById("sbut").style.background="green";}
	else{var elementk = document.getElementById("sbut").style.background="red";}
	if(mflag){var elementk = document.getElementById("mbut").style.background="green";}
	else{var elementk = document.getElementById("mbut").style.background="red";}
	if(tflag){var elementk = document.getElementById("tbut").style.background="green";}
	else{var elementk = document.getElementById("tbut").style.background="red";}
	if(aflag){var elementk = document.getElementById("abut").style.background="green";}
	else{var elementk = document.getElementById("abut").style.background="red";}  
	if(nupflag){var elementk = document.getElementById("nupbut").style.background="green";}
	else{var elementk = document.getElementById("nupbut").style.background="red";}
	if(nsabflag){var elementk = document.getElementById("nsabbut").style.background="green";}
	else{var elementk = document.getElementById("nsabbut").style.background="red";}  
	if(ndownflag){var elementk = document.getElementById("ndownbut").style.background="green";}
	else{var elementk = document.getElementById("ndownbut").style.background="red";}  
  }

 function üretimUp(){
	 if(üretimLvl!=10){
	 üretimLvl+=1;
	 document.getElementById("üretimLvl").innerHTML= üretimLvl;
	 para-=100*üretimLvl;
	 paraDeğişim=paraDeğişim+15*üretimLvl;
	 refahDeğişim=refahDeğişim-2*üretimLvl;
	 }
	 else{
		 alert("ÜRETİM LEVELİ 10 DAN YÜKSEK OLAMAZ!!!")
	 }}
 function üretimDown(){
	 
	 if(üretimLvl!=0){
	paraDeğişim=paraDeğişim-15*üretimLvl;
	refahDeğişim=refahDeğişim+2*üretimLvl;
	üretimLvl-=1;
	document.getElementById("üretimLvl").innerHTML= üretimLvl;
	 }
	 else{
		 alert("ÜRETİM LEVELİ 0 DAN KÜÇÜK OLAMAZ!!!")
		 
	 }
}
 function eğitimUp(){
	 if(eğitimLvl!=10){
	 eğitimLvl+=1;
	 document.getElementById("eğitimLvl").innerHTML= eğitimLvl;
	 para-=1000*eğitimLvl;
	 paraDeğişim=paraDeğişim+15*eğitimLvl;
	 refahDeğişim=refahDeğişim+2*eğitimLvl;
	 güvenlikDeğişim=güvenlikDeğişim+20*eğitimLvl;
	 bütünlükDeğişim=bütünlükDeğişim-1*eğitimLvl;
	 
	 }
	 else{
		 alert("EĞİTİM LEVELİ 10 DAN YÜKSEK OLAMAZ!!!")
	 }
	 
 }
 function eğitimDown(){
	  if(eğitimLvl!=0){
	 
	 paraDeğişim=paraDeğişim-15*eğitimLvl;
	 refahDeğişim=refahDeğişim-2*eğitimLvl;
	 güvenlikDeğişim=güvenlikDeğişim-20*eğitimLvl;
	 bütünlükDeğişim=bütünlükDeğişim+1*eğitimLvl;
	 eğitimLvl-=1;
	 document.getElementById("eğitimLvl").innerHTML= eğitimLvl;
	 
	 }
	 else{
		 alert("EĞİTİM LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!")
	 }
	 
 }
  function adaletUp(){
	 if(adaletLvl!=10){
	 adaletLvl+=1;
	 document.getElementById("adaletLvl").innerHTML= adaletLvl;
	 
	 refahDeğişim=refahDeğişim+0.25*adaletLvl;
	 güvenlikDeğişim=güvenlikDeğişim+1*adaletLvl;
	 paraDeğişim=paraDeğişim-100*adaletLvl;
	 bütünlükDeğişim=bütünlükDeğişim+3*adaletLvl;
	 sadakatDeğişim=sadakatDeğişim+0.25*adaletLvl;
	 }
	 else{
		 alert("ADALET LEVELİ 10 DAN YÜKSEK OLAMAZ!!!")
	 }
	 
 }
  function adaletDown(){
	 if(adaletLvl!=0){

	 refahDeğişim=refahDeğişim-0.25*adaletLvl;
	 güvenlikDeğişim=güvenlikDeğişim-1*adaletLvl;
	 paraDeğişim=paraDeğişim+100*adaletLvl;
	 bütünlükDeğişim=bütünlükDeğişim-3*adaletLvl;
	 sadakatDeğişim=sadakatDeğişim-0.25*adaletLvl;
	 
	 adaletLvl-=1;
	 document.getElementById("adaletLvl").innerHTML= adaletLvl;
	 }
	 else{
		 alert("ADALET LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!")
	 }
	 
 }
 
 function turizmUp(){
	 if(turizmLvl!=10){
	 turizmLvl+=1;
	 document.getElementById("turizmLvl").innerHTML= turizmLvl;
	 para=para-500*turizmLvl;
	 paraDeğişim=paraDeğişim+100*turizmLvl;
	 bütünlükDeğişim=bütünlükDeğişim-0.25*turizmLvl;
	 sadakatDeğişim=sadakatDeğişim-0.25*turizmLvl;
	 }
	 else{
		 alert("TURİZM LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 
 function turizmDown(){
	 if(turizmLvl!=0){
	 paraDeğişim=paraDeğişim-100*turizmLvl;
	 bütünlükDeğişim=bütünlükDeğişim+0.25*turizmLvl;
	 sadakatDeğişim=sadakatDeğişim+0.25*turizmLvl;
	 
	 turizmLvl-=1;
	 document.getElementById("turizmLvl").innerHTML= turizmLvl;
	 }
	 else{
		 alert("TURİZM LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!");
	 }
	 
 }
 
  function dışilişkiUp(){
	 if(dışilişkiLvl!=10){
	 dışilişkiLvl+=1;
	 document.getElementById("dışilişkiLvl").innerHTML= dışilişkiLvl;
	 bütünlük=bütünlük-2*dışilişkiLvl;
	 para=para-500*dışilişkiLvl;
   	 sadakatDeğişim=sadakatDeğişim-0.25*dışilişkiLvl;
	 güvenlikDeğişim=güvenlikDeğişim+.5*dışilişkiLvl
	 }
	 else{
		 alert("DIŞİLİŞKİ LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 function dışilişkiDown(){
	 if(dışilişkiLvl!=0){
	
   	 sadakatDeğişim=sadakatDeğişim+0.25*dışilişkiLvl;
	 güvenlikDeğişim=güvenlikDeğişim-0.5*dışilişkiLvl
	 
	  dışilişkiLvl-=1;
	 document.getElementById("dışilişkiLvl").innerHTML= dışilişkiLvl;
	 }
	 else{
		 alert("DIŞİLİŞKİ LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!");
	 }
	 
 }

 function vergiUp(){
	 if(vergiLvl!=10){
	 vergiLvl+=1;
	 document.getElementById("vergiLvl").innerHTML= vergiLvl;
	 
	 bütünlük=bütünlük-2*vergiLvl;
	
	 paraDeğişim=paraDeğişim+500*vergiLvl;
   	 sadakatDeğişim=sadakatDeğişim-1*vergiLvl;
	 refahDeğişim=refahDeğişim-1.5*vergiLvl;
	 bütünlükDeğişim=bütünlükDeğişim-0.25*vergiLvl;
	 }
	 else{
		 alert("VERGİ LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
  function vergiDown(){
	 if(vergiLvl!=0){
	 paraDeğişim=paraDeğişim-500*vergiLvl;
   	 sadakatDeğişim=sadakatDeğişim+1*vergiLvl;
	 refahDeğişim=refahDeğişim+1.5*vergiLvl;
	 bütünlükDeğişim=bütünlükDeğişim+0.25*vergiLvl;
	 
	 vergiLvl-=1;
	 document.getElementById("vergiLvl").innerHTML= vergiLvl;
	 }
	 else{
		 alert("VERGİ LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!");
	 }
	 
 }

  function ihracatUp(){
	 if(ihracatLvl!=10){
	 ihracatLvl+=1;
	 document.getElementById("ihracatLvl").innerHTML= ihracatLvl;
	 
	
	 paraDeğişim=paraDeğişim+500*ihracatLvl;
	 refahDeğişim=refahDeğişim+0.25*ihracatLvl;
	 bütünlükDeğişim=bütünlükDeğişim+0.25*ihracatLvl;
	 }
	 else{
		 alert("İHRACAT LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 
  function ihracatDown(){
	 if(ihracatLvl!=0){	
	 paraDeğişim=paraDeğişim-500*ihracatLvl;
	 refahDeğişim=refahDeğişim-0.25*ihracatLvl;
	 bütünlükDeğişim=bütünlükDeğişim-0.25*ihracatLvl;
	 
	 ihracatLvl-=1;1
	 document.getElementById("ihracatLvl").innerHTML= ihracatLvl;
	 }
	 else{
		 alert("İHRACAT LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!");
	 }
	 
 }
 
 function ithalatUp(){
	 if(ithalatLvl!=10){
	 ithalatLvl+=1;
	 document.getElementById("ithalatLvl").innerHTML= ithalatLvl;
	 
	 para=para-100*ithalatLvl;
	 bütünlük=bütünlük-1*ithalatLvl
	
	 paraDeğişim=paraDeğişim-200*ithalatLvl;
	 refahDeğişim=refahDeğişim+3*ithalatLvl;
	 bütünlükDeğişim=bütünlükDeğişim-1*ithalatLvl;
	 }
	 else{
		 alert("İTHALAT	 LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 
  function ithalatDown(){
	 if(ithalatLvl!=0){	
	 paraDeğişim=paraDeğişim+200*ithalatLvl;
	 refahDeğişim=refahDeğişim-3*ithalatLvl;
	 bütünlükDeğişim=bütünlükDeğişim+1*ithalatLvl;
	 
	 ithalatLvl-=1;
	 document.getElementById("ithalatLvl").innerHTML= ithalatLvl;
	 }
	 else{
		 alert("İTHALAT	 LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!");
	 }
	 
 }
 
  function orduUp(){
	 if(orduLvl!=10){
	 orduLvl+=1;
	 document.getElementById("orduLvl").innerHTML= orduLvl;
	 
	 para=para-200*orduLvl;
	
	 paraDeğişim=paraDeğişim-50*orduLvl;
	 bütünlükDeğişim=bütünlükDeğişim+0.5*orduLvl;
	 güvenlikDeğişim=güvenlikDeğişim+3*orduLvl;
	 }
	 else{
		 alert("ORDU LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 
   function orduDown(){
	 if(orduLvl!=0){
	 paraDeğişim=paraDeğişim+50*orduLvl;
	 bütünlükDeğişim=bütünlükDeğişim-0.5*orduLvl;
	 güvenlikDeğişim=güvenlikDeğişim-3*orduLvl;
	 
	 orduLvl-=1;
	 document.getElementById("orduLvl").innerHTML= orduLvl;
	 }
	 else{
		 alert("ORDU LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!");
	 }
	 
 }
 
   function sağlıkUp(){
	 if(sağlıkLvl!=10){
	 sağlıkLvl+=1;
	 document.getElementById("sağlıkLvl").innerHTML= sağlıkLvl;
	 
	 para=para-100*sağlıkLvl;
	
	 paraDeğişim=paraDeğişim-50*sağlıkLvl;
	 bütünlükDeğişim=bütünlükDeğişim+0.5*sağlıkLvl;
	 sadakatDeğişim=sadakatDeğişim+1*sağlıkLvl;
	 refahDeğişim=refahDeğişim+5*sağlıkLvl;
	 }
	 else{
		 alert("SAĞLIK LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 
    function sağlıkDown(){
	 if(sağlıkLvl!=0){
	 paraDeğişim=paraDeğişim+50*sağlıkLvl;
	 bütünlükDeğişim=bütünlükDeğişim-0.5*sağlıkLvl;
	 sadakatDeğişim=sadakatDeğişim-1*sağlıkLvl;
	 refahDeğişim=refahDeğişim-5*sağlıkLvl;
	 
	 sağlıkLvl-=1;
	 document.getElementById("sağlıkLvl").innerHTML= sağlıkLvl;
	 }
	 else{
		 alert("SAĞLIK LEVELİ 0 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 
    function istihdamUp(){
	 if(istihdamLvl!=10){
	 istihdamLvl+=1;
	 document.getElementById("istihdamLvl").innerHTML= istihdamLvl;
	 
	 paraDeğişim=paraDeğişim+50*istihdamLvl;
	 sadakatDeğişim=sadakatDeğişim+1*istihdamLvl;
	 refahDeğişim=refahDeğişim+0.25*istihdamLvl;
	 }
	 else{
		 alert("İSTİHDAM LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 
     function istihdamDown(){
	 if(istihdamLvl!=0){
	 paraDeğişim=paraDeğişim-50*istihdamLvl;
	 sadakatDeğişim=sadakatDeğişim-1*istihdamLvl;
	 refahDeğişim=refahDeğişim-0.25*istihdamLvl;
	 
	 istihdamLvl-=1;
	 document.getElementById("istihdamLvl").innerHTML= istihdamLvl;
	 }
	 else{
		 alert("İSTİHDAM LEVELİ 0 DAN DÜŞÜK OLAMAZ!!!");
	 }
	 
 }
 
     function akademiUp(){
	 if(akademiLvl!=10){
	 akademiLvl+=1;
	 document.getElementById("akademiLvl").innerHTML= akademiLvl;
	 
	 paraDeğişim=paraDeğişim+50*akademiLvl;
	 bütünlükDeğişim=bütünlükDeğişim+0.5*akademiLvl;
	 }
	 else{
		 alert("AKADEMİ LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 
     function akademiDown(){
	 if(akademiLvl!=0){
	 paraDeğişim=paraDeğişim-50*akademiLvl;
	 bütünlükDeğişim=bütünlükDeğişim-0.5*akademiLvl;
	 
	  akademiLvl-=1;
	 document.getElementById("akademiLvl").innerHTML= akademiLvl;
	 }
	 else{
		 alert("İSTİHDAM LEVELİ 10 DAN YÜKSEK OLAMAZ!!!");
	 }
	 
 }
 function kapitalizm(){
	mflag=0;
	sflag=0;
	tflag=0;
	aflag=0;
	kflag=1;
	kçarpanı=1.25;
	sçarpanı=1;
	mçarpanı=1;
	tçarpanı=1;
	açarpanı=1;
	 
 }
  function sosyalizm(){

	mflag=0;
	tflag=0;
	aflag=0;
	kflag=0;
	sflag=1;
	kçarpanı=1;
	sçarpanı=1.25;
	mçarpanı=1;
	tçarpanı=1;
	açarpanı=1;
	 
 }
  function monarşizm(){
	tflag=0;
	aflag=0;
	kflag=0;
	sflag=0;
	mflag=1;
	kçarpanı=1;
	sçarpanı=1;
	mçarpanı=1.25;
	tçarpanı=1;
	açarpanı=1;
 }
  function teokrasi(){
	aflag=0;
	kflag=0;
	sflag=0;
	mflag=0;
	tflag=1;
	kçarpanı=1;
	sçarpanı=1;
	mçarpanı=1;
	tçarpanı=1.25;
	açarpanı=1;
 }
  function anarşizm(){
	kflag=0;
	sflag=0;
	mflag=0;
	tflag=0;
	aflag=1;
	kçarpanı=1;
	sçarpanı=1;
	mçarpanı=1;
	tçarpanı=1;
	açarpanı=2;

 }
  function nup(){
	nsabflag=0;
	ndownflag=0;
	nupflag=1;
	paranupçarpanı=2;
	bütünlüknupçarpanı=2;

	 
 }
   function nsab(){
	ndownflag=0;
	nupflag=0;
	nsabflag=1;

	 
 }
   function ndown(){
	nupflag=0;
	nsabflag=0;
	ndownflag=1;
	güvenlikndownçarpanı=2;
	refahndownçarpanı=2;
 }
 
 function üretimsonuç(a,b,c,d,e,x,y,z,t,u){
	if(a==1){
	var elementk = document.getElementById("divpara").style.background="green";
	}
	if(a==2){
	var elementk = document.getElementById("divpara").style.background="red";
	}
	if(b==1){
	var elementk = document.getElementById("divbütünlük").style.background="green";
	}
	if(b==2){
	var elementk = document.getElementById("divbütünlük").style.background="red";
	}
	if(c==1){
	var elementk = document.getElementById("divgüvenlik").style.background="green";
	}
	if(c==2){
	var elementk = document.getElementById("divgüvenlik").style.background="red";
	}
	if(d==1){
	var elementk = document.getElementById("divsadakat").style.background="green";
	}
	if(d==2){
	var elementk = document.getElementById("divsadakat").style.background="red";
	}
	if(e==1){
	var elementk = document.getElementById("divrefah").style.background="green";
	}
	if(e==2){
	var elementk = document.getElementById("divrefah").style.background="red";
	}
	if(x==1){
	var elementk = document.getElementById("divparad").style.background="green";
	}
	if(x==2){
	var elementk = document.getElementById("divparad").style.background="red";
	}
	if(y==1){
	var elementk = document.getElementById("divbütünlükd").style.background="green";
	}
	if(y==2){
	var elementk = document.getElementById("divbütünlükd").style.background="red";
	}
	if(z==1){
	var elementk = document.getElementById("divgüvenlikd").style.background="green";
	}
	if(z==2){
	var elementk = document.getElementById("divgüvenlikd").style.background="red";
	}
	if(t==1){
	var elementk = document.getElementById("divsadakatd").style.background="green";
	}
	if(t==2){
	var elementk = document.getElementById("divsadakatd").style.background="red";
	}
	if(u==1){
	var elementk = document.getElementById("divrefahd").style.background="green";
	}
	if(u==2){
	var elementk = document.getElementById("divrefahd").style.background="red";
	}
	 }
function sonuçback(){
	var elementk = document.getElementById("divpara").style.background="black";
	var elementk = document.getElementById("divbütünlük").style.background="black";
	var elementk = document.getElementById("divgüvenlik").style.background="black";
	var elementk = document.getElementById("divsadakat").style.background="black";
	var elementk = document.getElementById("divrefah").style.background="black";
	var elementk = document.getElementById("divparad").style.background="black";
	var elementk = document.getElementById("divbütünlükd").style.background="black";
	var elementk = document.getElementById("divgüvenlikd").style.background="black";
	var elementk = document.getElementById("divsadakatd").style.background="black";
	var elementk = document.getElementById("divrefahd").style.background="black";
	
	 }
	 

