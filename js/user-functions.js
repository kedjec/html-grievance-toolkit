const signupOptions = {
    formDataRole: '[data-role="signup-form"]',
    formFirstName: '[data-role="su-first-name"]',
    formLastName: '[data-role="su-last-name"]',
    formContactNumber: '[data-role="su-contact-number"]',
    formEmail: '[data-role="su-email"]',
    formSillimanIdNumber: '[data-role="su-id-number"]',
    formPassword: '[data-role="su-password"]',
    formConfirmPassword: '[data-role="su-password-confirm"]',
    clearForm: '[data-role="clear"]',
    tryAgainLink: `${window.location.origin}${window.location.pathname}#account`,
    passwordNotMatchMessage: 'Passwords do not match. ',
    emptyFormMessage: 'Please fill up the form. ',
    creatingAccountMessage: 'Creating your account...',
    successfulAccountCreationMessage: 'Your account has been successfully created. Check your email to verify your account.',
    errorAccountCreationMessage: 'There was an error in signing you up.',
    wasValidated: 'was-validated'
}

const loginOptions = {
    formDataRole: '[data-role="login-form"]',
    formEmail: '[data-role="login-email"]',
    formPassword: '[data-role="login-password"]',
    loggedInHiddenElementData: '[data-logged-in="hide"]',
    loggedInShowElementData: '[data-logged-in="show"]',
    loggedInUserLogoutButtonRole: '[data-role="logged-in-user-logout"]',
    loggedInUserWelcomeMessageName: '[data-logged-in-role="logged-in-user-message-name"]',
    loggedInUserWelcomeMessageEmail: '[data-logged-in-role="logged-in-user-message-email"]',
    loggedInUserFirstNameRole: '[data-logged-in-role="logged-in-user-first-name"]',
    loggedInUserLastNameRole: '[data-logged-in-role="logged-in-user-last-name"]',
    loggedInUserUserIdRole: '[data-logged-in-role="logged-in-user-id"]',
    loggedInUserSillimanIdRole: '[data-logged-in-role="logged-in-user-silliman-id-no"]',
    loggedInUserEmailRole: '[data-logged-in-role="logged-in-user-email"]',
    loggedInUserContactRole: '[data-logged-in-role="logged-in-user-contact-number"]',
    loggedInUserWelcomeMessagePreText: 'Welcome',
    tryAgainLink: `${window.location.origin}${window.location.pathname}#account`,
    emptyFormMessage: 'Please fill up the form. ',
    invalidFieldsFormMessage: 'Invalid Input. ',
    loggingInAccountMessage: 'Logging you in...',
    userNotFoundCode: 'auth/user-not-found',
    userNotFoundMessage: 'User not found. ',
    successfulLoggedIn: 'You are successfully logged in.',
    adminSuccessfulLogInMessage: 'You are successfully logged in. Redirecting you to the admin dashboard...',
    logoutMessage: 'Logging you out.',
    emailNotVerifiedMessage: 'Your account is not yet verified. Kindly check your email to verify your account so you can login. Thank you!',
}

const formOptions = {
    messageAlertBox: '[data-role="message-box"]',
    messageBox: '[data-role="message"]'
}

const otherConcernsFormOptions = {
    formModalId: '#other-concerns-form-holder',
    formDataRole: '[data-role="other-concerns-form"]',
    formUserId: '[data-role="oc-user-id"]',
    formFirstName: '[data-role="oc-first-name"]',
    formLastName: '[data-role="oc-last-name"]',
    formContactNumber: '[data-role="oc-contact"]',
    formEmail: '[data-role="oc-email"]',
    formSillimanIdNumber: '[data-role="oc-silliman-id-no"]',
    formConcern: '[data-role="oc-message-subject"]',
    formMessage: '[data-role="oc-message"]',
    submittingMessage: 'Submitting your concern...',
    submittingMessageSuccess: 'Your message has been successfully sent. ',
    submittingMessageSuccessWithUser: 'You may check its status in the Account Page. ',
    concernsSeparator: ','
}

const cssClassOptions = {
    displayNone: 'd-none',
    invisible: 'invisible',
    alertSuccess: 'alert-success',
    alertError: 'alert-danger',
    alertInfo: 'alert-info',
    loadingBar: 'loading-bar',
}

const loadingOptions = {
    loadingElement: '#site-loading',
    stillLoadingClass: 'still-loading'
}

class UserFunctions {
    static signupForm = document.querySelector(`.needs-validation${(signupOptions.formDataRole)}`);
    static loginForm = document.querySelector(`.needs-validation${(loginOptions.formDataRole)}`);
    static otherConcernsForm = document.querySelector(`.needs-validation${(otherConcernsFormOptions.formDataRole)}`);
    static emptyString = '';
    static deletedCookieValue = 'deleted';
    static loggedInCookieName = 'logged-in-user';
    static breakException = {};
    static userSnapshot = {
        firstName: '',
        lastName: '',
        contactNo: '',
        sentConcerns: '',
    };

    constructor() {
        UserFunctions.initializeLogin();
        UserFunctions.initializeSignUp();
        UserFunctions.initializeOtherConcernsForm();

        let userId = UserFunctions.isUserLoggedIn();
        UserFunctions.setLoading();

        if (userId) {
            firebase.database().ref(`${firebaseConfig.db_users}/` + userId).once('value').then(function (snapshot) {
                UserFunctions.userSnapshot = snapshot.val();
                UserFunctions.userSnapshot.userId = userId;
                UserFunctions.loadLoggedInUserElements();
                UserFunctions.loadUserConcerns();
                UserFunctions.setLoading(false);
            }).catch(function () {
                UserFunctions.deleteCookie(UserFunctions.loggedInCookieName);
                UserFunctions.loadLoggedInUserElements();
                UserFunctions.setLoading(false);
            });
        } else {
            UserFunctions.loadLoggedInUserElements();
            UserFunctions.setLoading(false);
        }
    }

    static setLoading(isLoading = true) {
        if (!isLoading) {
            document.querySelector(`body`).classList.remove(loadingOptions.stillLoadingClass);
            document.querySelector(`*${loadingOptions.loadingElement}`).classList.add(cssClassOptions.displayNone);
            return;
        }

        document.querySelector(`body`).classList.add(loadingOptions.stillLoadingClass);
        document.querySelector(`*${loadingOptions.loadingElement}`).classList.remove(cssClassOptions.displayNone);
    }

    static getUserSnapshot() {
        return UserFunctions.userSnapshot;
    }

    static isUserLoggedIn() {
        let userId = UserFunctions.getCookie(UserFunctions.loggedInCookieName);

        if ((userId !== UserFunctions.emptyString) && (userId !== UserFunctions.deletedCookieValue)) {
            return userId;
        }

        return null;
    }

    static signupUser() {
        let errorMessage = UserFunctions.emptyString;

        let firstName = UserFunctions.signupForm.querySelector(`input${(signupOptions.formFirstName)}`).value.trim();
        let lastName = UserFunctions.signupForm.querySelector(`input${(signupOptions.formLastName)}`).value.trim();
        let contactNo = UserFunctions.signupForm.querySelector(`input${(signupOptions.formContactNumber)}`).value.trim();
        let email = UserFunctions.signupForm.querySelector(`input${(signupOptions.formEmail)}`).value.trim();
        let sillimanId = UserFunctions.signupForm.querySelector(`input${(signupOptions.formSillimanIdNumber)}`).value.trim();
        let password = UserFunctions.signupForm.querySelector(`input${(signupOptions.formPassword)}`).value.trim();
        let confirmPassword = UserFunctions.signupForm.querySelector(`input${(signupOptions.formConfirmPassword)}`).value.trim();

        try {
            [firstName, lastName, contactNo, email, sillimanId, password, confirmPassword].forEach(function (value) {
                if (value === UserFunctions.emptyString) {
                    errorMessage += signupOptions.emptyFormMessage;
                    throw UserFunctions.breakException;
                }
            });
        } catch (e) {
            if (e !== UserFunctions.breakException) throw e;
        }

        if (password !== confirmPassword) {
            errorMessage += signupOptions.passwordNotMatchMessage;
        }

        if (errorMessage !== UserFunctions.emptyString) {
            UserFunctions.displayAlert(UserFunctions.signupForm, cssClassOptions.alertError, errorMessage + UserFunctions.showTryAgainBox(signupOptions.tryAgainLink));
            return false;
        }

        UserFunctions.displayAlert(UserFunctions.signupForm, cssClassOptions.alertInfo, signupOptions.creatingAccountMessage);
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
            let loggedInUser = firebase.auth().currentUser;

            database.ref(`${firebaseConfig.db_users}/` + loggedInUser.uid).set({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                sillimanID: sillimanId,
                contactNo: contactNo,
                type: firebaseConfig.general_user_type,
            });

            loggedInUser.sendEmailVerification().then(function () {
                UserFunctions.displayAlert(UserFunctions.signupForm, cssClassOptions.alertSuccess, signupOptions.successfulAccountCreationMessage);
            }).catch(function () {
                UserFunctions.displayAlert(UserFunctions.signupForm, cssClassOptions.alertError, signupOptions.errorAccountCreationMessage + UserFunctions.showTryAgainBox(signupOptions.tryAgainLink));
                UserFunctions.deleteCookie(UserFunctions.loggedInCookieName);
            });
        }).catch(function (error) {
            UserFunctions.displayAlert(UserFunctions.signupForm, cssClassOptions.alertError, error.message + ' ' + UserFunctions.showTryAgainBox(signupOptions.tryAgainLink));
        });
    }

    static loginUser() {
        let errorMessage = UserFunctions.emptyString;

        let email = UserFunctions.loginForm.querySelector(`input${(loginOptions.formEmail)}`);
        let password = UserFunctions.loginForm.querySelector(`input${(loginOptions.formPassword)}`);

        if ((email.validity.valid === false) || (password.validity.valid === false)) {
            errorMessage += loginOptions.invalidFieldsFormMessage;
        }

        if ((email.value.trim() === UserFunctions.emptyString) || (password.value === UserFunctions.emptyString)) {
            errorMessage += loginOptions.emptyFormMessage;
        }

        if (errorMessage !== UserFunctions.emptyString) {
            UserFunctions.displayAlert(UserFunctions.loginForm, cssClassOptions.alertError, errorMessage + UserFunctions.showTryAgainBox(loginOptions.tryAgainLink));
            return false;
        }

        UserFunctions.displayAlert(UserFunctions.loginForm, cssClassOptions.alertInfo, loginOptions.loggingInAccountMessage);

        firebase.auth().signInWithEmailAndPassword(email.value.trim(), password.value).then(function () {
            let loggedInUser = firebase.auth().currentUser;
            let loggedInUserId = loggedInUser.uid;
            // TODO: loggedInUser.emailVerified

            UserFunctions.setCookie(UserFunctions.loggedInCookieName, loggedInUserId, 1);

            UserFunctions.displayAlert(UserFunctions.loginForm, cssClassOptions.alertSuccess, loginOptions.successfulLoggedIn);

            UserFunctions.redirectLoggedInUser(loggedInUserId);
        }).catch(function (error) {
            if ((error.code) && (error.code === loginOptions.userNotFoundCode)) {
                error.message = loginOptions.userNotFoundMessage;
            }

            UserFunctions.displayAlert(UserFunctions.loginForm, cssClassOptions.alertError, error.message + ' ' + UserFunctions.showTryAgainBox(loginOptions.tryAgainLink));
        });
    }

    static showTryAgainBox(link = '') {
        return `<span class="alert-link" onclick="window.location.reload('${link}');">Try Again</span>`;
    }

    static displayAlert(form, alertClass, message) {
        let formAlert = form.querySelector(`.alert${(formOptions.messageAlertBox)}`);
        let formAlertMessageBox = formAlert.querySelector(`*${(formOptions.messageBox)}`);

        [cssClassOptions.alertSuccess, cssClassOptions.alertError, cssClassOptions.alertInfo, cssClassOptions.displayNone].forEach(function (value) {
            formAlert.classList.remove(value);
        });

        formAlert.classList.add(alertClass);
        formAlertMessageBox.innerHTML = message;
    }

    static redirectLoggedInUser(userId = '') {
        if (userId === UserFunctions.emptyString) {
            return false;
        }

        firebase.database().ref(`${firebaseConfig.db_users}/` + userId).once('value').then(function (snapshot) {
            if (snapshot.val().type === firebaseConfig.admin_user_type) {
                UserFunctions.displayAlert(UserFunctions.loginForm, cssClassOptions.alertSuccess, loginOptions.adminSuccessfulLogInMessage);

                UserFunctions.sleep(1000).then(() => {
                    window.location.replace('/admin-dashboard.html');
                });
            } else {
                let loggedInUser = firebase.auth().currentUser;

                if (!loggedInUser.emailVerified) {
                    UserFunctions.deleteCookie(UserFunctions.loggedInCookieName);
                    alert(loginOptions.emailNotVerifiedMessage);
                }

                UserFunctions.sleep(1000).then(() => {
                    window.location.reload(loginOptions.tryAgainLink);
                });
            }
        }).catch(function () {
            return false;
        });

        return false;
    }

    static deleteCookie(cookieName) {
        let date = new Date();
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toGMTString();
        document.cookie = `${cookieName}=${UserFunctions.deletedCookieValue}; ${expires}; path=/;`;
    }

    static setCookie(cookieName, cookieValue, expiry) {
        let date = new Date();
        date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toGMTString();
        document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
    }

    static getCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return UserFunctions.emptyString;
    }

    static logoutUser() {
        firebase.auth().signOut().then(function () {
            UserFunctions.deleteCookie(UserFunctions.loggedInCookieName);
        })

        location.assign(`${window.location.origin}${window.location.pathname}`);
    }

    static initializeLogin() {
        UserFunctions.loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            UserFunctions.loginUser();
        }, false);

        document.querySelector(`*${loginOptions.loggedInUserLogoutButtonRole}`).addEventListener('click', function () {
            alert(loginOptions.logoutMessage);
            UserFunctions.logoutUser();
        }, false);
    }

    static initializeSignUp() {
        UserFunctions.signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            UserFunctions.signupUser();
        }, false);

        UserFunctions.signupForm.querySelector(`button${signupOptions.clearForm}`).addEventListener('click', function () {
            UserFunctions.signupForm.classList.remove(signupOptions.wasValidated);
        }, false);
    }

    static initializeOtherConcernsForm() {
        UserFunctions.otherConcernsForm.addEventListener('submit', function (event) {
            event.preventDefault();
            UserFunctions.submitOtherConcerns();
        }, false);
    }

    static submitOtherConcerns() {
        let errorMessage = UserFunctions.emptyString;

        let userId = UserFunctions.otherConcernsForm.querySelector(`input${(otherConcernsFormOptions.formUserId)}`).value;
        let firstName = UserFunctions.otherConcernsForm.querySelector(`input${(otherConcernsFormOptions.formFirstName)}`).value.trim();
        let lastName = UserFunctions.otherConcernsForm.querySelector(`input${(otherConcernsFormOptions.formLastName)}`).value.trim();
        let contactNo = UserFunctions.otherConcernsForm.querySelector(`input${(otherConcernsFormOptions.formContactNumber)}`).value.trim();
        let email = UserFunctions.otherConcernsForm.querySelector(`input${(otherConcernsFormOptions.formEmail)}`).value.trim();
        let sillimanId = UserFunctions.otherConcernsForm.querySelector(`input${(otherConcernsFormOptions.formSillimanIdNumber)}`).value.trim();
        let concern = UserFunctions.otherConcernsForm.querySelector(`input${(otherConcernsFormOptions.formConcern)}`).value.trim();
        let message = UserFunctions.otherConcernsForm.querySelector(`textarea${(otherConcernsFormOptions.formMessage)}`).value.trim();

        try {
            [firstName, lastName, contactNo, email, sillimanId, concern, message].forEach(function (value) {
                if (value === UserFunctions.emptyString) {
                    errorMessage += signupOptions.emptyFormMessage;
                    throw UserFunctions.breakException;
                }
            });
        } catch (e) {
            if (e !== UserFunctions.breakException) throw e;
        }

        if (errorMessage !== UserFunctions.emptyString) {
            UserFunctions.displayAlert(UserFunctions.otherConcernsForm, cssClassOptions.alertError, errorMessage);
            return false;
        }

        UserFunctions.displayAlert(UserFunctions.otherConcernsForm, cssClassOptions.alertInfo, otherConcernsFormOptions.submittingMessage);

        let newConcern = firebase.database().ref(firebaseConfig.db_concerns).push();

        newConcern.set({
            firstName: firstName,
            lastName: lastName,
            contactNo: contactNo,
            email: email,
            idNo: sillimanId,
            concern: concern,
            body: message,
            status: firebaseConfig.db_concerns_unread,
        }, function (error) {
            if (error) {
                UserFunctions.displayAlert(UserFunctions.otherConcernsForm, cssClassOptions.alertError, errorMessage + ' ' + error.message);
                return false;
            } else {
                UserFunctions.displayAlert(UserFunctions.otherConcernsForm, cssClassOptions.alertSuccess, otherConcernsFormOptions.submittingMessageSuccess);

                if (userId !== UserFunctions.emptyString) {
                    let sentConcerns = UserFunctions.getUserSnapshot().sentConcerns;

                    database.ref(`${firebaseConfig.db_users}/${userId}`).update({
                        sentConcerns: sentConcerns + otherConcernsFormOptions.concernsSeparator +newConcern.key,
                    }, function (error) {
                        if (!error) {
                            UserFunctions.displayAlert(UserFunctions.otherConcernsForm, cssClassOptions.alertSuccess, otherConcernsFormOptions.submittingMessageSuccess + otherConcernsFormOptions.submittingMessageSuccessWithUser);
                            return false;
                        } else {
                            UserFunctions.displayAlert(UserFunctions.otherConcernsForm, cssClassOptions.alertSuccess, otherConcernsFormOptions.submittingMessageSuccess + 'There was error in saving your concern to your account. ');
                        }
                    });
                }

                return true;
            }
        });
    }

    static newUserConcernListener() {
        let userId = UserFunctions.getUserSnapshot().userId;

        if (userId === UserFunctions.emptyString) {
            return false;
        }

        let userConcerns = firebase.database().ref(`${firebaseConfig.db_users}/${userId}`);

        userConcerns.on('child_changed', (data) => {
            if (data.key === firebaseConfig.db_users_concerns) {
                // TODO: Add new element for new concern
                console.log(`New data added for ${data.key} : ${data.val()}`);
            }
        });
    }

    static loadLoggedInUserElements() {
        let loggedInHiddenElements;
        let userSnapshot = UserFunctions.getUserSnapshot();

        if (userSnapshot.userId) {
            loggedInHiddenElements = document.querySelectorAll(`*${loginOptions.loggedInHiddenElementData}`);

            let welcomeMessage = `${loginOptions.loggedInUserWelcomeMessagePreText}, ${userSnapshot.firstName}!`;

            UserFunctions.setElement(loginOptions.loggedInUserWelcomeMessageName, welcomeMessage, 'html');
            UserFunctions.setElement(loginOptions.loggedInUserWelcomeMessageEmail, userSnapshot.email);
            UserFunctions.setElement(loginOptions.loggedInUserFirstNameRole, userSnapshot.firstName);
            UserFunctions.setElement(loginOptions.loggedInUserLastNameRole, userSnapshot.lastName);
            UserFunctions.setElement(loginOptions.loggedInUserContactRole, userSnapshot.contactNo);
            UserFunctions.setElement(loginOptions.loggedInUserSillimanIdRole, userSnapshot.sillimanID);
            UserFunctions.setElement(loginOptions.loggedInUserEmailRole, userSnapshot.email);
            UserFunctions.setElement(loginOptions.loggedInUserUserIdRole, userSnapshot.userId);

            UserFunctions.removeLoadingBarElements();
        } else {
            loggedInHiddenElements = document.querySelectorAll(`*${loginOptions.loggedInShowElementData}`);
        }

        loggedInHiddenElements.forEach(function (value) {
            value.remove();
        });
    }

    static setElement(dataRole = '', dataValue = '', type = 'both') {
        if ((dataValue === UserFunctions.emptyString) || (dataRole === UserFunctions.emptyString)) {
            return false;
        }

        if ((type === 'both') || (type === 'input')) {
            document.querySelectorAll(`input${dataRole}`).forEach(function (value) {
                value.value = dataValue;
            });
        }

        if ((type === 'both') || (type === 'html')) {
            document.querySelectorAll(`*${dataRole}:not(input)`).forEach(function (value) {
                value.innerHTML = dataValue;
            });
        }
    }

    static removeLoadingBarElements() {
        let loadingBarElements = document.querySelectorAll(`*.${cssClassOptions.loadingBar}`);
        loadingBarElements.forEach(function (value) {
            value.classList.remove(cssClassOptions.loadingBar);
        });
    }

    static sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
}