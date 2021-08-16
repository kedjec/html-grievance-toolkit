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

const otherConcernsTableOptions = {
    tableRole: '[data-role="other-concerns-table"]',
    hasConcernsRole: '[data-has-concerns-role="true"]',
    hasNoConcernsRole: '[data-has-concerns-role="false"]',
    concernsHolderRole: '[data-role="concern-item-holder"]',
    concernItemClass: 'concern-item',
    concernItemCellValueClass: 'cell-value',
}

const cssClassOptions = {
    displayNone: 'd-none',
    hidden: 'hidden',
    invisible: 'invisible',
    alertSuccess: 'alert-success',
    alertError: 'alert-danger',
    alertInfo: 'alert-info',
    loadingBar: 'loading-bar',
    fadeIn: 'fade-in',
    breadcrumbClass: 'breadcrumb-item',
}

const loadingOptions = {
    loadingElement: '#site-loading',
    stillLoadingClass: 'still-loading'
}

const grievancesOptions = {
    dataRole: '[data-role="content-categories-holder"]',
    modalLoadingDataRole: '[data-role="modal-loading"]',
    modalGrievanceChildrenDataRole: '[data-role="grievance-children-box"]',
    boxClass: 'grievance-box',
    mediaHolderClass: 'media-wrapper',
    mediaAlt: 'grievance image',
    titleHolderClass: 'title-wrapper',
    dataKeyModal: 'data-modal-key',
    dataTargetModal: 'data-target',
    dataTargetModalValue: '#grievance-modal',
    modalChildrenData: 'data-children',
    modalStepsData: 'data-steps',
    modalFlowchartData: 'data-flowchart-image',
    modalDocumentData: 'data-document-link',
    modalTitleData: 'data-modal-title',
    modalImageData: 'data-modal-image',
    grievanceTitle: '[data-role="grievance-title"]',
    grievanceImage: '[data-role="grievance-image"]',
    grievanceInstructions: '[data-role="grievance-instructions"]',
    withChildrenInstructions: 'Related grievances are found and categorized below',
    withStepsInstructions: 'A guide on how to process your grievance',
    grievanceSteps: '[data-role="grievance-steps-box"]',
    grievanceBreadCrumbs: '[data-role="grievance-breadcrumbs"]',
    grievanceGeneratedBreadCrumb: 'generated-crumb',
    modalDataRole: 'data-role',
    grievanceBreadcrumbName: 'name',
    grievanceBreadcrumbParent: 'parent',
    breadcrumbObjectId: 'data-object-id',
    stepsSeparator: '!sep!',
    resourcesFlowchartImageDataRole: '[data-role="flowchart-image"]',
    resourcesDocumentDataRole: '[data-role="grievance-document"]',
    resourcesGrievanceNameDataRole: '[data-role="grievance-name"]',
    defaultGrievanceName: 'Grievance Name',
}

class UserFunctions {
    static signupForm = document.querySelector(`.needs-validation${(signupOptions.formDataRole)}`);
    static loginForm = document.querySelector(`.needs-validation${(loginOptions.formDataRole)}`);
    static otherConcernsForm = document.querySelector(`.needs-validation${(otherConcernsFormOptions.formDataRole)}`);
    static otherConcernsTable = document.querySelector(`*${(otherConcernsTableOptions.tableRole)}`);
    static grievancesSection = document.querySelector(`*${(grievancesOptions.dataRole)}`);
    static grievancesModalChildrenSection = document.querySelector(`*${(grievancesOptions.modalGrievanceChildrenDataRole)}`);
    static grievancesModalTitle = document.querySelector(`*${(grievancesOptions.grievanceTitle)}`);
    static grievancesModalImage = document.querySelector(`*${(grievancesOptions.grievanceImage)}`);
    static grievancesModalInstruction = document.querySelector(`*${(grievancesOptions.grievanceInstructions)}`);
    static grievancesModalBreadcrumbs = document.querySelector(`*${(grievancesOptions.grievanceBreadCrumbs)}`);
    static grievancesModalSteps = document.querySelector(`*${(grievancesOptions.grievanceSteps)}`);
    static grievancesModalResourcesFlowchartImage = document.querySelector(`*${(grievancesOptions.resourcesFlowchartImageDataRole)}`);
    static grievancesModalResourcesDocument = document.querySelector(`*${(grievancesOptions.resourcesDocumentDataRole)}`);
    static grievanceModalResourcesName = document.querySelector(`*${(grievancesOptions.resourcesGrievanceNameDataRole)}`);
    static emptyString = '';
    static deletedCookieValue = 'deleted';
    static loggedInCookieName = 'logged-in-user';
    static breakException = {};
    static userSnapshot = {
        firstName: '',
        lastName: '',
        contactNo: '',
        sentConcerns: '',
        documentLink: '',
        flowchartImage: '',
    };
    static grievancesSnapshot = {
        name: '',
        icon: '',
        steps: ''
    };
    static grievancesBreadcrumbs = [];

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
                UserFunctions.loadOtherConcernsTable();
                UserFunctions.newUserConcernListener();
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

        UserFunctions.loadGrievances();
    }

    static setGrievanceModalLoading(loading = true) {
        if (loading) {
            document.querySelector(`*${grievancesOptions.modalLoadingDataRole}`)
                .classList
                .remove(cssClassOptions.displayNone);
            return true;
        }

        document.querySelector(`*${grievancesOptions.modalLoadingDataRole}`)
            .classList
            .add(cssClassOptions.displayNone);
    }

    static loadGrievances() {
        UserFunctions.setLoading();

        firebase.database().ref(`${firebaseConfig.db_grievances}`).once('value').then(function (snapshot) {
            UserFunctions.grievancesSnapshot = snapshot.val();
            UserFunctions.buildGrievancesBoxes();
            UserFunctions.setBreadcrumbsSnapshot(UserFunctions.grievancesSnapshot);
            UserFunctions.setLoading(false);
        }).catch(function () {
            alert('Error in loading the data');
            UserFunctions.setLoading(false);
        });
    }

    static removeGeneratedBreadCrumbs() {
        document.querySelectorAll(`*[${grievancesOptions.modalDataRole}="${grievancesOptions.grievanceGeneratedBreadCrumb}"]`).forEach(function (value) {
            value.remove();
        });
    }

    static setBreadcrumbsSnapshot(objectVar, parent = '') {
        if (parent === UserFunctions.emptyString) {
            Object.entries(objectVar).forEach(([key, value]) => {
                UserFunctions.grievancesBreadcrumbs[key] = [];

                if (value.hasOwnProperty('children')) {
                    UserFunctions.setBreadcrumbsSnapshot(value.children, key);
                } else {
                    UserFunctions.grievancesBreadcrumbs[key] = [];
                }

                UserFunctions.grievancesBreadcrumbs[key][grievancesOptions.grievanceBreadcrumbName] = value.name;
            });
        } else {
            Object.entries(objectVar).forEach(([key, value]) => {
                UserFunctions.grievancesBreadcrumbs[key] = [];

                if (value.hasOwnProperty('children')) {
                    UserFunctions.setBreadcrumbsSnapshot(value.children, key);
                } else {
                    UserFunctions.grievancesBreadcrumbs[key] = [];
                }

                UserFunctions.grievancesBreadcrumbs[key][grievancesOptions.grievanceBreadcrumbName] = value.name;
                UserFunctions.grievancesBreadcrumbs[key][grievancesOptions.grievanceBreadcrumbParent] = parent;
            });
        }
    }

    static buildBreadCrumbs(grievanceId) {
        UserFunctions.removeGeneratedBreadCrumbs();

        if (UserFunctions.grievancesBreadcrumbs[grievanceId] === undefined) {
            return false;
        }

        if (UserFunctions.grievancesBreadcrumbs[grievanceId][grievancesOptions.grievanceBreadcrumbParent] !== undefined) {
            UserFunctions.buildBreadCrumbs(UserFunctions.grievancesBreadcrumbs[grievanceId][grievancesOptions.grievanceBreadcrumbParent]);
        }

        UserFunctions.createBreadCrumb(
            UserFunctions.grievancesBreadcrumbs[grievanceId][grievancesOptions.grievanceBreadcrumbName],
            grievanceId
        );
    }

    static createBreadCrumb(name, id = '') {
        let breadcrumbItem = document.createElement('span');

        breadcrumbItem.classList.add(cssClassOptions.breadcrumbClass);
        breadcrumbItem.setAttribute(grievancesOptions.modalDataRole, grievancesOptions.grievanceGeneratedBreadCrumb);
        breadcrumbItem.setAttribute(grievancesOptions.breadcrumbObjectId, id);

        breadcrumbItem.innerHTML = name;
        UserFunctions.grievancesModalBreadcrumbs.append(breadcrumbItem);

        UserFunctions.addBreadCrumbListeners(breadcrumbItem, id);
    }

    static addBreadCrumbListeners(breadcrumbItem, id) {
        let existingCrumbs = [];
        document.querySelectorAll(`*[${grievancesOptions.modalDataRole}="${grievancesOptions.grievanceGeneratedBreadCrumb}"]`).forEach(function (value) {
            existingCrumbs.push(value.getAttribute(grievancesOptions.breadcrumbObjectId));
        });

        let grievance = UserFunctions.findGrievanceSnapshotFromPath(existingCrumbs);
        if ((grievance !== {}) && (id !== undefined) && (grievance.name !== undefined)) {
            breadcrumbItem.setAttribute(
                grievancesOptions.dataKeyModal,
                id
            );

            breadcrumbItem.setAttribute(
                `${grievancesOptions.modalTitleData}`,
                grievance.name
            );

            breadcrumbItem.setAttribute(
                `${grievancesOptions.modalImageData}`,
                grievance.icon
            );

            let children = '';
            let steps = '';
            let documentLink = '';
            let flowchartImage = '';

            if (grievance.hasOwnProperty('children')) {
                children = JSON.stringify(grievance.children);
            }

            if (grievance.hasOwnProperty('steps')) {
                steps = grievance.steps;
            }

            if (grievance.hasOwnProperty('documentLink')) {
                documentLink = grievance.documentLink;
            }

            if (grievance.hasOwnProperty('flowchartImage')) {
                flowchartImage = grievance.flowchartImage;
            }

            breadcrumbItem.setAttribute(
                `${grievancesOptions.modalChildrenData}`,
                children
            );

            breadcrumbItem.setAttribute(
                `${grievancesOptions.modalStepsData}`,
                steps
            );

            breadcrumbItem.setAttribute(
                `${grievancesOptions.modalDocumentData}`,
                documentLink
            );

            breadcrumbItem.setAttribute(
                `${grievancesOptions.modalFlowchartData}`,
                flowchartImage
            );

            breadcrumbItem.addEventListener('click', function () {
                let grievanceId = this.getAttribute(`${grievancesOptions.dataKeyModal}`);
                let title = this.getAttribute(`${grievancesOptions.modalTitleData}`);
                let source = this.getAttribute(`${grievancesOptions.modalImageData}`);
                let children = this.getAttribute(`${grievancesOptions.modalChildrenData}`);
                let steps = this.getAttribute(`${grievancesOptions.modalStepsData}`);
                let documentLink = this.getAttribute(`${grievancesOptions.modalDocumentData}`);
                let flowchartImage = this.getAttribute(`${grievancesOptions.modalFlowchartData}`);
                UserFunctions.loadGrievanceModal(grievanceId, title, source, children, steps, documentLink, flowchartImage);
            }, false);
        }
    }

    static findGrievanceSnapshotFromPath(path = []) {
        let object = UserFunctions.grievancesSnapshot;
        let i = 0;

        if (path === []) {
            return {};
        }

        path.forEach(function (value) {
            i++;
            if (object.hasOwnProperty(value)) {
                if ((object[value].hasOwnProperty('children')) && (i !== path.length)) {
                    object = object[value].children;
                } else {
                    object = object[value];
                }
            }
        });

        return object;
    }

    static buildGrievancesBoxes() {
        Object.entries(UserFunctions.grievancesSnapshot).forEach(([key, value]) => {
            let children = '';
            let steps = '';
            let documentLink = '';
            let flowchartImage = '';

            if (value.hasOwnProperty('children')) {
                children = JSON.stringify(value.children);
            }

            if (value.hasOwnProperty('steps')) {
                steps = value.steps;
            }

            if (value.hasOwnProperty('documentLink')) {
                documentLink = value.documentLink;
            }

            if (value.hasOwnProperty('flowchartImage')) {
                flowchartImage = value.flowchartImage;
            }

            UserFunctions.createBox(UserFunctions.grievancesSection, value.name, value.icon, children, key, steps, documentLink, flowchartImage);
        });
    }

    static createBox(wrapperElement, title, icon, children = '', key, steps = '', documentLink = '', flowchartImage = '') {
        let box = document.createElement('div');
        let boxImage = document.createElement('img');
        let boxTitle = document.createElement('div');

        box.classList.add(grievancesOptions.boxClass);
        box.classList.add(cssClassOptions.fadeIn);
        boxImage.classList.add(grievancesOptions.mediaHolderClass);
        boxTitle.classList.add(grievancesOptions.titleHolderClass);

        boxTitle.innerHTML = title;
        boxImage.setAttribute('src', icon);
        boxImage.setAttribute('alt', grievancesOptions.mediaAlt);

        box.setAttribute(
            grievancesOptions.dataTargetModal,
            `${grievancesOptions.dataTargetModalValue}`
        );

        box.setAttribute(
            grievancesOptions.dataKeyModal,
            key
        );

        box.setAttribute(
            `${grievancesOptions.modalTitleData}`,
            title
        );

        box.setAttribute(
            `${grievancesOptions.modalImageData}`,
            icon
        );

        box.setAttribute(
            `${grievancesOptions.modalChildrenData}`,
            children
        );

        box.setAttribute(
            `${grievancesOptions.modalStepsData}`,
            steps
        );

        box.setAttribute(
            `${grievancesOptions.modalDocumentData}`,
            documentLink
        );

        box.setAttribute(
            `${grievancesOptions.modalFlowchartData}`,
            flowchartImage
        );

        box.addEventListener('click', function () {
            let grievanceId = this.getAttribute(`${grievancesOptions.dataKeyModal}`);
            let title = this.getAttribute(`${grievancesOptions.modalTitleData}`);
            let source = this.getAttribute(`${grievancesOptions.modalImageData}`);
            let children = this.getAttribute(`${grievancesOptions.modalChildrenData}`);
            let steps = this.getAttribute(`${grievancesOptions.modalStepsData}`);
            let documentLink = this.getAttribute(`${grievancesOptions.modalDocumentData}`);
            let flowchartImage = this.getAttribute(`${grievancesOptions.modalFlowchartData}`);
            UserFunctions.loadGrievanceModal(grievanceId, title, source, children, steps, documentLink, flowchartImage);
        }, false);

        box.append(boxImage, boxTitle);

        wrapperElement.append(box);
    }

    static loadGrievanceModal(grievanceId, title, source, children, steps, documentLink = '', flowchartImage = '') {
        $(grievancesOptions.dataTargetModalValue).modal('show', this);
        UserFunctions.setGrievanceModalLoading();
        UserFunctions.loadGrievanceModalTitle(title);
        UserFunctions.loadGrievanceModalImage(source);
        UserFunctions.loadGrievanceModalChildren(children, steps);
        UserFunctions.buildBreadCrumbs(grievanceId);
        UserFunctions.loadGrievanceSteps(steps);
        UserFunctions.loadResources(title, documentLink, flowchartImage);

        setTimeout(function () {
            UserFunctions.setGrievanceModalLoading(false);
        }, 500);
    }

    static loadResources(title, documentLink, flowchartImage) {
        let grievanceName = title;

        if (title !== UserFunctions.emptyString) {
            grievanceName = title;
        } else {
            grievanceName = grievancesOptions.defaultGrievanceName;
        }

        UserFunctions.grievanceModalResourcesName.innerHTML = grievanceName;

        if (flowchartImage === UserFunctions.emptyString) {
            UserFunctions.grievancesModalResourcesFlowchartImage.classList.add(cssClassOptions.displayNone);
            UserFunctions.grievancesModalResourcesFlowchartImage.removeAttribute('download');
            UserFunctions.grievancesModalResourcesFlowchartImage.removeAttribute('href');
        } else {
            UserFunctions.grievancesModalResourcesFlowchartImage.classList.remove(cssClassOptions.displayNone);
            UserFunctions.grievancesModalResourcesFlowchartImage.setAttribute(
                'href',
                `${grievanceName} Flowchart Image`
            );
            UserFunctions.grievancesModalResourcesFlowchartImage.setAttribute(
                'download',
                flowchartImage
            );
        }

        if (documentLink === UserFunctions.emptyString) {
            UserFunctions.grievancesModalResourcesDocument.classList.add(cssClassOptions.displayNone);
            UserFunctions.grievancesModalResourcesDocument.removeAttribute('download');
            UserFunctions.grievancesModalResourcesDocument.removeAttribute('href');
        } else {
            UserFunctions.grievancesModalResourcesDocument.classList.remove(cssClassOptions.displayNone);
            UserFunctions.grievancesModalResourcesDocument.setAttribute(
                'download',
                `${grievanceName} Pre-formatted Letter`
            );
            UserFunctions.grievancesModalResourcesDocument.setAttribute(
                'href',
                documentLink
            );
        }
    }

    static loadGrievanceSteps(steps = '') {
        UserFunctions.grievancesModalSteps.innerHTML = '';

        if (steps === UserFunctions.emptyString) {
            return false;
        }

        if ((steps !== undefined) && (steps !== UserFunctions.emptyString)) {
            let stepsList = document.createElement('ol');
            steps.split(grievancesOptions.stepsSeparator).forEach(function (value) {
                let listItem = document.createElement('li');
                listItem.innerHTML = value;
                stepsList.append(listItem);
            });

            UserFunctions.grievancesModalSteps.append(stepsList);
        }
    }

    static loadGrievanceModalTitle(title) {
        UserFunctions.grievancesModalTitle.innerHTML = title;
    }

    static loadGrievanceModalImage(source) {
        UserFunctions.grievancesModalImage.setAttribute('src', source);
    }

    static loadGrievanceModalChildren(grievanceChildren, steps = '') {
        UserFunctions.grievancesModalChildrenSection.innerHTML = '';

        if ((grievanceChildren !== undefined) && (grievanceChildren !== UserFunctions.emptyString)) {
            Object.entries(JSON.parse(grievanceChildren)).forEach(([key, value]) => {
                let children = '';
                let steps = '';
                let documentLink = '';
                let flowchartImage = '';

                if (value.hasOwnProperty('children')) {
                    children = JSON.stringify(value.children);
                }

                if (value.hasOwnProperty('steps')) {
                    steps = value.steps;
                }

                if (value.hasOwnProperty('documentLink')) {
                    documentLink = value.documentLink;
                }

                if (value.hasOwnProperty('flowchartImage')) {
                    flowchartImage = value.flowchartImage;
                }

                UserFunctions.createBox(UserFunctions.grievancesModalChildrenSection, value.name, value.icon, children, key, steps, documentLink, flowchartImage);
            });

            UserFunctions.grievancesModalInstruction.innerHTML = grievancesOptions.withChildrenInstructions;
        }

        if (steps !== UserFunctions.emptyString) {
            UserFunctions.grievancesModalInstruction.innerHTML = grievancesOptions.withStepsInstructions;
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
                    // TODO: Change This
                    window.location.replace(`/html-grievance-toolkit/admin-dashboard.html`);
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
                    let preConcernString = '';

                    if (sentConcerns === undefined) {
                        preConcernString = UserFunctions.emptyString;
                    } else {
                        preConcernString = sentConcerns + otherConcernsFormOptions.concernsSeparator;
                    }

                    database.ref(`${firebaseConfig.db_users}/${userId}`).update({
                        sentConcerns: preConcernString + newConcern.key,
                    }, function (error) {
                        if (!error) {
                            UserFunctions.userSnapshot.sentConcerns = preConcernString + newConcern.key;
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

        if ((userId === UserFunctions.emptyString)) {
            return false;
        }

        let userConcerns = firebase.database().ref(`${firebaseConfig.db_users}/${userId}`);

        userConcerns.on('child_changed', (data) => {
            if (data.key === firebaseConfig.db_users_concerns) {
                let changedArray = data.val().split(otherConcernsFormOptions.concernsSeparator);
                let arrayDifference = UserFunctions.arrayDifference(UserFunctions.getUserSnapshot().sentConcerns, changedArray);
                UserFunctions.addToOtherConcernTable(arrayDifference);
                UserFunctions.userSnapshot.sentConcerns = changedArray;
            }
        });

        userConcerns.on('child_added', (data) => {
            if (data.key === firebaseConfig.db_users_concerns) {
                let addedArray = data.val().split(otherConcernsFormOptions.concernsSeparator);
                let arrayDifference = UserFunctions.arrayDifference(UserFunctions.getUserSnapshot().sentConcerns, addedArray);
                UserFunctions.addToOtherConcernTable(arrayDifference);
                UserFunctions.userSnapshot.sentConcerns = addedArray;
            }
        })
    }

    static arrayDifference(oldArray, newArray) {
        let difference = [];

        if (oldArray === undefined) {
            oldArray = [];
        }

        newArray.forEach(function (value) {
            if (!oldArray.includes(value)) {
                difference.push(value);
            }
        });

        return difference;
    }

    static loadOtherConcernsTable() {
        let sentConcerns = UserFunctions.getUserSnapshot().sentConcerns;
        let elementsToRemove;

        if ((sentConcerns === undefined) || (sentConcerns === UserFunctions.emptyString)) {
            elementsToRemove = document.querySelectorAll(`*${otherConcernsTableOptions.hasConcernsRole}`);
        } else {
            elementsToRemove = document.querySelectorAll(`*${otherConcernsTableOptions.hasNoConcernsRole}`);
            let sentConcernsArray = sentConcerns.split(otherConcernsFormOptions.concernsSeparator);
            UserFunctions.addToOtherConcernTable(sentConcernsArray);
        }

        elementsToRemove.forEach(function (value) {
            value.classList.add(cssClassOptions.displayNone);
        });
    }

    static addToOtherConcernTable(sentConcernsArray) {
        if (sentConcernsArray.length === 0) {
            return false;
        }

        let error = false;

        let elementsToRemove = document.querySelectorAll(`*${otherConcernsTableOptions.hasNoConcernsRole}`);
        let elementsToShow = document.querySelectorAll(`*${otherConcernsTableOptions.hasConcernsRole}`);

        sentConcernsArray.forEach(function (concernId) {
            firebase.database().ref(`${firebaseConfig.db_concerns}/` + concernId).once('value').then(function (snapshot) {
                UserFunctions.addOtherConcernItem(concernId, snapshot.val().concern, snapshot.val().body, snapshot.val().status);
            }).catch(function () {
                error = true;
            });
        });

        if (error) {
            elementsToRemove.forEach(function (value) {
                value.classList.remove(cssClassOptions.displayNone);
            });

            elementsToShow.forEach(function (value) {
                value.classList.add(cssClassOptions.displayNone);
            });
        } else {
            elementsToRemove.forEach(function (value) {
                value.classList.add(cssClassOptions.displayNone);
            });

            elementsToShow.forEach(function (value) {
                value.classList.remove(cssClassOptions.displayNone);
            });
        }
    }

    static addOtherConcernItem(key, title, message, status) {
        let concernsHolder = UserFunctions.otherConcernsTable.querySelector(`*${otherConcernsTableOptions.concernsHolderRole}`);

        let otherConcernTableItem = document.createElement('tr');
        let keyCell = document.createElement('td');
        let titleCell = document.createElement('td');
        let messageCell = document.createElement('td');
        let statusCell = document.createElement('td');

        let keyValue = document.createElement('span');
        let titleValue = document.createElement('span');
        let messageValue = document.createElement('span');
        let statusValue = document.createElement('span');

        otherConcernTableItem.classList.add(otherConcernsTableOptions.concernItemClass);

        keyCell.classList.add('col-concern-key');
        titleCell.classList.add('col-concern-title');
        messageCell.classList.add('col-concern-message');
        statusCell.classList.add('col-concern-status');

        keyValue.classList.add(otherConcernsTableOptions.concernItemCellValueClass);
        titleValue.classList.add(otherConcernsTableOptions.concernItemCellValueClass);
        messageValue.classList.add(otherConcernsTableOptions.concernItemCellValueClass);
        statusValue.classList.add(otherConcernsTableOptions.concernItemCellValueClass, status.toLowerCase());

        keyValue.innerHTML = key;
        titleValue.innerHTML = title;
        messageValue.innerHTML = message;
        statusValue.innerHTML = status;

        keyCell.append(keyValue);
        titleCell.append(titleValue);
        messageCell.append(messageValue);
        statusCell.append(statusValue);

        otherConcernTableItem.append(keyCell);
        otherConcernTableItem.append(titleCell);
        otherConcernTableItem.append(messageCell);
        otherConcernTableItem.append(statusCell);

        concernsHolder.append(otherConcernTableItem);
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