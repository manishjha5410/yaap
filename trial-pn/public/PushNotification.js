const APP_ID = "2105964a0666493c";
const REGION = "us";
const AUTH_KEY = "b6abd6653f92e1b87fce697315f486c580a6bc1b";

const APP_SETTING = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(REGION).build();
let FCM_TOKEN = '';

let loginButton;
let logoutButton;

const login = async () => {
  const UID = document.getElementById('uid').value;
  if (!UID) {
    document.getElementById('uid').focus();
    return;
  }
  loginButton.disabled = true;
  console.log('Initiating login..');
  try {
    // CC init
    await CometChat.init(APP_ID, APP_SETTING);

    // User login
    const loginResponse = await CometChat.login(UID, AUTH_KEY);
    console.log('1. User login complete', loginResponse);

    CometChat.getLoggedinUser().then(user => console.log(user.name));
    // Change the page title
    document.title = UID + ' logged in';

    // Fetch the FCM Token
    const messaging = firebase.messaging();
    FCM_TOKEN = await messaging.getToken();
    console.log('2. Received FCM Token', FCM_TOKEN);

    // Register the FCM Token
    await CometChat.registerTokenForPushNotification(FCM_TOKEN);
    console.log('3. Registered FCM Token');

    logoutButton.disabled = false;
  } catch (error) {
    console.error(error);
  }
}

const logout = async () => {
  console.log('Initiating logout...');
  loginButton.disabled = true;
  logoutButton.disabled = true;
  try {
    // Delete the token
    const messaging = firebase.messaging();
    await messaging.deleteToken();

    // Logout the user
    await CometChat.logout();
    console.log('5. Logged out');

    // Refresh the page.
    init();
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}

const init = () => {
  // Basic initialization
  loginButton = document.getElementById('loginButton');
  logoutButton = document.getElementById('logoutButton');

  loginButton.addEventListener('click', login);
  logoutButton.addEventListener('click', logout);

  logoutButton.disabled = true;
}

window.onload = () => {
  // Call the initialization function on load.
  setTimeout(init, 300);
};