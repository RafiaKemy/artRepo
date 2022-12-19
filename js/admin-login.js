
    //==============admin-login page start=============
    var loginbtn = document.getElementById('login-btn');
    loginbtn.addEventListener('click', function(){

        var userEmail = document.getElementById('user-email').value;
        var userPass = document.getElementById('user-pass').value;

        if(userEmail == 'rafiakemy421@gmail.com' && userPass == '5687'){
            window.location.assign('admin-dashboard.html');
        }
        else{
            window.alert('Invalid email or password');
        }
    });
