function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
        } else {
            // cancelled
        }
    });
}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
        console.log('Facebook ID: ' + response.id);
        console.log('Gender: ' + response.gender);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '154521504704494', // App ID
        channelUrl : '//ec2-23-20-53-97.compute-1.amazonaws.com/channel.html', // Channel File
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
    });
    FB.getLoginStatus(function(response) {
        console.log(response);
        if (response.status === 'connected') {
            // connected
            testAPI();
        } else if (response.status === 'not_authorized') {
            // not_authorized
            login();
        } else {
            // not_logged_in
            login();
    }
 });
};
// Load the SDK Asynchronously
(function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));