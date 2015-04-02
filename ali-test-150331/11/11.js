var input = 1231242115;
function Standard(a){
	var Num = String(a);
	var aPart = Num.split(".")[0];
	var bPart = Num.split(".")[1];
	if(bPart != undefined)
	{
		bPart = "."+bPart;
	}
	else
	{
		bPart = "";
	}
	
	alen = aPart.length;
	var Out = "";
	var count = 0;
	for(var i=alen-1;i>=0;i--)
	{
		Out += aPart[ i];
		count ++;
		if(count == 3)
		{
			Out += ",";
			count = 0;
		}
	}
	olen = Out.length;
	var tureOut = "";
	for(var i=olen-1;i>=0;i--)
	{
		tureOut += Out[i];
	}
	
	return tureOut+bPart;
};