const firebaseConfig = {
    apiKey: "AIzaSyCZvqmHZNlUTsqg5EQ2BgWjDKOBYF3-ZKg",
    authDomain: "grievance-toolkit.firebaseapp.com",
    databaseURL: "https://grievance-toolkit.firebaseio.com",
    projectId: "grievance-toolkit",
    storageBucket: "grievance-toolkit.appspot.com",
    messagingSenderId: "926010158949",
    appId: "1:926010158949:web:c9 aa4664f769e8db",
    db_users: "Users",
    db_concerns: "Concerns",
    general_user_type: "generalUser",
    admin_user_type: "admin",
    db_concerns_read: "seen",
    db_concerns_unread: "unread",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();