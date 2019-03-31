function contMaymin(str){
	var min=0;
	var may=0;
	var ch;
	for(x=0;x<str.length;x++){
		ch=str.charAt(x);
        if(ch!=" "){
			if(ch==ch.toLowerCase()){
				min++;
			}else{
				may++;
			}
		}
	}
	return "en este string hay "+may+" mayusculas y "+min+" minusculas";
}
function schchar(str,ch){
	var min=0;
	var h;
	for(x=0;x<str.length;x++){
		h=str.charAt(x);
        if(ch==h){
			min++;
		}
	}
	return "en este string hay "+min+" "+ch;
}
function pali(str){
	var strRev="";
	for(x=0;x<str.length;x++){
		h=str.charAt(str.length-x-1);
        strRev.concat(h);
	}
	if(str==strRev){
		return "es una cadena palidroma";
	}else{
		return "no es una cadena palidroma";
	}
}
function chnmay(str,ch){
	var ch2=ch.toUpperCase();
	var str2="";
	var x;
	var lt;
	for(x=0;x<str.length;x++){
		lt=str.charAt(x)+"";
		if(lt==ch){
			str2=str2.concat(ch2);
		}else{
			str2=str2.concat(lt);
		}
	}
	return str2;
}
//ejercicio 1
//document.write(contMaymin("SaSev Y"));
//ejercicio 2
//document.write(schchar("sasesa","a"));
//ejercicio 3
//ejercicio 4
document.write(chnmay("sase","s"));