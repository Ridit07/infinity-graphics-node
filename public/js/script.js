var h = window.innerHeight;
function intro() { 
   setTimeout(showPage1, 4000);
}
function showPage1(){
 document.getElementById("loader").style.display = "none";
 document.getElementById("gr").style.display = "block";
 setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("gr").style.display = "none";
  document.getElementById("div1").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("comingsoon").style.display = "block";
    document.getElementById("catalog").style.display = "block";
  document.getElementById("artist").style.display = "block";

  document.getElementById("skyintellex").style.display = "block";
  document.getElementById("railintellex").style.display = "block";
document.getElementById("div3").style.display = "block";
  document.getElementById("feedback").style.display = "block";
  document.getElementById("about").style.display = "block";
 document.getElementById("ridit").style.display = "block";
}

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}
function scrollpls9(){
	scrollTo(document.getElementById("div1"));
}
function scrollpls1(){
	scrollTo(document.getElementById("about"));
}
	function scrollpls2(){
	scrollTo(document.getElementById("comingsoon"));
}
function scrollpls3(){
	scrollTo(document.getElementById("skyintellex"));
}
function scrollpls4(){
	scrollTo(document.getElementById("railintellex"));
}

function scrollpls6(){
	scrollTo(document.getElementById("feedback"));
}
function scrollpls7()
{
                    scrollTo(document.getElementById("ridit"));
}
function scrollpls8()
{
                    scrollTo(document.getElementById("catalog"));
}
function scrollpls10()
{
                    scrollTo(document.getElementById("artist"));
}
	 function formvalidation() {
     var x = document.forms["subForm"]["name11"].value;
     var b = document.forms["subForm"]["name1"].value;
     var y = document.forms["subForm"]["email"].value;
     var z = document.forms["subForm"]["phonenumber"].value;


    	if (x == "") {
        alert("Name must be filled out");
        return false; }
        else if (y == "" || a == "") {
        alert("your email is missing");
        return false; }
        else if(z==""){
        alert("Phone Number must be filled out");
        return false; }
        else if (isNaN(z) || z.length<10 || z.length>10) {
        alert("Enter a Valid Phone Number");
        return false; }
        else if (z%1!=0){
        	 alert("Enter a Valid Phone Number");
        return false; }
        else  {
        	alert("Thank You for subscribing. We will contact you in 24hrs");
        }

        }
 function formvalidation2() {
     var x = document.forms["subForm2"]["name12"].value;
     var y = document.forms["subForm2"]["email2"].value;
    


    	if (x == "") {
        alert("Name must be filled out");
        return false; }
        else if (y == "" || a == "") {
        alert("your email is missing");
        return false; }
      
     
        else  {
        alert("Thank you for your feedback");
        }

        }

function myfunction2()
{ 
return formvalidation()
alert("Thank you!");
}