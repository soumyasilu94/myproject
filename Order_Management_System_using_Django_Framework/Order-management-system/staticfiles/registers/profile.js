
function login(){
    username = document.getElementById("exampleInputUsername").value;
    email = document.getElementById("exampleInputUsername").value;
    password = document.getElementById("exampleInputPassword").value;
    csrfmiddlewaretoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
    $("#errorlogin").html("");

    $.ajax({
        type:"POST",
        url:'/user/login/',
        data:{
            'csrfmiddlewaretoken': csrfmiddlewaretoken,
            'username':username,
            'email':email,
            'password':password,
        },
        success : function(data){
            console.log(data);
            if(data['message'] == "Success"){
                location.reload();
            }
            else if(data['message'] == "inactive"){
                $("#errorlogin").html("Please verify this E-mail address.");
            }
            else{
                $("#errorlogin").html("The E-mail and Password do not match.");
            }
        }
    });
}
