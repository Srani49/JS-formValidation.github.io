/**** 
*! 1.target id and classes
*! 2.add event listener-> submit
*! 3.engine function
   (deal with sucess and failure icons)
*! 4.test the system 
*/

/*fuction*/

let id=(id) => document.getElementById(id);
let classes=(classes) => document.getElementsByClassName(classes);

 /* var a,bc*/
let username = id("username"),
 email = id("email"),
 password = id("password"),
 form = id("form"),
 errorMsg = classes("error"),
 successIcon = classes("success-icon"),
 failureIcon = classes("failure-icon");

 /****
  *   errorMsg=['error(username)','error((email)','error(password)'];
  * ! jis is element ka  class error hoga usko select karlega and usko  in the fom of array store karega
  * agar email wale arror  ko acess kana hoga toh  humm aise karenge 
  * !errorMsg[1].innerHTML="gdhfgfh"
  */

 /****
  * ! addeventlistner here means when we  "submit" the form 
  * ! what are the things that should be reflected
  */
  form.addEventListener("submit", (e) => {
   /*joh flikering hoti haii usse yeh rokh dega */
   e.preventDefault();
   engine(username,0,"Username cannot be blank");
   engine(email,1,"Email cannot be blank");
   engine(password,2,"Password cannot be blank");
});

let engine = (id,serial,message) => {
   /*trim function is used to  ignore the spaces that user has put and only cathes characters*/
      if(id.value.trim() ===""){
      errorMsg[serial].innerHTML= message; 
      failureIcon[serial].style.opacity="1";
      successIcon[serial].style.opacity="0";
      }
      else{
         errorMsg[serial].innerHTML=""; 
         successIcon[serial].style.opacity="1";
         failureIcon[serial].style.opacity="0";
      }
   };
