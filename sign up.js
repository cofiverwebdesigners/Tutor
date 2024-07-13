firstname=document.getElementById("firstname");
secondname=document.getElementById("secondname");
email=document.getElementById("email");

Password=document.getElementById("password");
confirmpassword=document.getElementById("confirmpassword");

//lets start by checking  if the First Name has been entered Correctly...
function firstnamechecker(){
	fnamecheker=document.getElementById("fname")
	fnamecheker2=document.getElementById("fname2");
	fnamevalue=firstname.value
	if(fnamevalue.length >= 3){
		fnamecheker2.style.display="none";
		fnamecheker.style.display="inline";
		fnamecheker.style.color="green";
	}else{
		fnamecheker.style.display="none";
		fnamecheker2.style.display="inline";
		fnamecheker2.style.color="red";
	}
}

//lets also  make sure that the second name  has been entered correctly 
function secondnamechecker(){
	snamecheker=document.getElementById("sname")
	snamecheker2=document.getElementById("sname2");
	snamevalue=secondname.value
	if(snamevalue.length >= 3){
		snamecheker2.style.display="none";
		snamecheker.style.display="inline";
		snamecheker.style.color="green";
	}else{
		snamecheker.style.display="none";
		snamecheker2.style.display="inline";
		snamecheker2.style.color="red";
	}
}

//Lets also check if the Email has been entered Rightly 
function emailchecker(){
	emailch=document.getElementById("ema")
	emailch2=document.getElementById("ema2");
	emailvalue=email.value
	if(emailvalue.indexOf('@') === -1){
		emailch.style.display="none";
		emailch2.style.display="inline";
		emailch2.style.color="red";
	}else{
		emailch2.style.display="none";
		emailch.style.display="inline";
		emailch.style.color="green";
	}
}

//lets also ensure that we validate the phone numbers 
//lets start  by validating the first phone  number
function phonenumbervalidate(){
	phonumber=document.getElementById("phonumber").value;
	phonumber1=document.getElementById("phone1")
	phonumber2=document.getElementById("phone2")
	
	if (phonumber>3){
		phonumber2.style.display="none";
		phonumber1.style.display="inline";
		phonumber1.style.color="green";
	}else{
		phonumber2.style.display="inline";
		phonumber1.style.display="none";
		phonumber2.style.color="red";
	}
}

//lets also validate the Alternative Phone  Number... 
function validatealternative(){
	alt=document.getElementById("Alp").value;
	alt1=document.getElementById("alp1")
	alt2=document.getElementById("alp2")
	
	if (alt>3){
		alt1.style.display="inline";
		alt1.style.color="green";
		alt2.style.display="none";
	}else{
		alt1.style.display="none";
		alt2.style.color="red";
		alt2.style.display="inline";
	}
}



//Lets Ensure that the two passwords match... 
confirm1=document.getElementById("confirm")
confirm2=document.getElementById("confirm2")
confirm3=document.getElementById("confirm3")
confirm4=document.getElementById("confirm4")
function passwordconfirm(){
	passworderror=document.getElementById("passworderror")
	first_password=document.getElementById("password").value
    second_password=document.getElementById("confirmpassword").value
	if (first_password==second_password){
		confirm2.style.display="none"
		confirm4.style.display="none"
		passworderror.style.display="none";
		confirm1.style.display="inline"
		confirm1.style.color="green"
		confirm3.style.display="inline"
		confirm3.style.color="green"
	}else{
		confirm1.style.display="none"
		confirm3.style.display="none"
		confirm2.style.display="inline"
		confirm4.style.display="inline"
		confirm2.style.color="red"
		confirm4.style.color="red"
		passworderror.style.display="block";
	}
}

// lets implement the visibility of seeing the password 
function seepassword(){
	pass=document.getElementById("password");
	if(pass.type==="password"){
		pass.type="text"
	}else{
		pass.type="password"
	}
}

function seeconfirmpassword(){
	pass2=document.getElementById("confirmpassword");
	if(pass2.type==="password"){
		pass2.type="text"
	}else{
		pass2.type="password"
	}
}

function cancel(){
	location.href="index.html"
}
