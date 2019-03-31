function agecalc(){
	var dt=new Date;
	var crtyr=dt.getFullYear();
	var btdtr=prompt("¿ en que año nacistes? ");
	var r1=crtyr-btdtr;
	var r2=r1-1;
	document.write("tu tienes "+r1+" o "+r2+" años");
}

//ejercicio 1
agecalc();
