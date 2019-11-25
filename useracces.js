var isVerfied=true
var hasPaymentToken=true
var loggedIn=true
var isGuest=true
if(isVerfied && hasPaymentToken && loggedIn){
    console.log("HEY! WELCOME TO THE COURSE ")
}else if(loggedIn || isGuest){
    console.log("hey Guest")
}else{
    console.log("contact home")
}