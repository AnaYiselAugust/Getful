

    // Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ionic.service.core', 'app.controllers', 'app.services', 'ui.router', 'ngMaterial', 'ngFileUpload'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

//----------- LANGUAGE &HOME STATES --------------------
    .state('Language',{
      url: '/',
      templateUrl: 'templates/language.html'
    })
        .state('Home',{
      url: '/home',
      templateUrl: 'templates/home.html'
    })
        .state('HomeEs',{
      url: '/inicio',
      templateUrl: 'templates/homeEs.html'
    })
//---------------- SIGN UP STATES ------------------------
    .state('SignUpEs',{
      url: '/registrar',
      templateUrl: 'templates/signupEs.html'
    })
    .state('SignUp',{
      url: '/signup',
      templateUrl: 'templates/signup.html'
    })
    .state('NewProfile',{
      url: '/newProfile',
      templateUrl: 'templates/newProfile.html'
    })
    .state('NewProfileEs',{
      url: '/nuevoPerfil',
      templateUrl: 'templates/newProfileEs.html'
    })
//---------------- SIGN IN STATES ------------------------
    .state('SignIn',{
      url: '/signIn',
      templateUrl: 'templates/signIn.html'
    })
    .state('SignInEs',{
      url: '/signInEs',
      templateUrl: 'templates/signInEs.html'
    })
//---------------- RESET-FORGOT PASSWORD STATES ---------------
    .state('ForgotPassword',{
      url: '/forgotPassword',
      templateUrl: 'templates/forgotPassword.html'
    })
    .state('ForgotPasswordEs',{
      url: '/forgotPasswordEs',
      templateUrl: 'templates/forgotPasswordEs.html'
    })
    .state('ResetPassword',{
      url: '/resetPassword/:id',
      templateUrl: 'templates/resetPassword.html'
    })
    .state('ResetPasswordEs',{
      url: '/resetPasswordEs/:id',
      templateUrl: 'templates/resetPasswordEs.html'
    })

//---------------- TAB STATES ---------------
  // setup an abstract state for the tabs directive
    .state('tab', {  //Probando algo
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
   .state('tabEs', { //probando algo
    url: '/tabEs',
    abstract: true,
    templateUrl: 'templates/tabsEs.html'
  })

//---------------- DASH TAB STATES ---------------
  // Each tab has its own nav history stack:

  .state('tab.Dash', { //probando algo
    url: '/dash',
    views: {
      'dash': {
        templateUrl: 'templates/dash.html',
      }
    }
  })
    .state('tabEs.DashEs', { //probando algo
    url: '/dashEs',
    views: {
      'dashEs': {
        templateUrl: 'templates/dashEs.html',
      }
    }
  })

//---------------- CIRCLES TAB STATES ---------------
    .state('tab.DisplayCircle',{
      url: '/displaycircle',
      views: {
        'displayCircle': {
          templateUrl: 'templates/displayCircle.html'
        }
      }
    })
    .state('tabEs.DisplayCircleEs',{
      url: '/displaycircleEs',
      views: {
        'displaycircleEs': {
          templateUrl: 'templates/displayCircleEs.html'
        }
      }
    })
    .state('tab.CreateCircle',{  ///probando algo
      url: '/createcircle',
      views: {
        'createCircle': {
          templateUrl: 'templates/createCircle.html'
        }
      }
    })
    .state('tabEs.CreateCircleEs',{  //probando algo
      url: '/createcircleEs',
      views: {
        'createCircleEs': {
          templateUrl: 'templates/createCircleEs.html'
        }
      }
    })
    .state('tab.AddContactCircle',{
      url: '/addcontactcircle',
      views: {
        'addContactCircle': {
          templateUrl: 'templates/addContactCircle.html'
        }
      }
    })
    .state('tabEs.AddContactCircleEs',{
      url: '/addcontactcircleEs',
      views: {
        'addContactCircleEs': {
          templateUrl: 'templates/addContactCircleEs.html'
        }
      }
    })
    .state('tab.EditCircle',{
      url: '/editcircle',
      views: {
        'editCircle': {
          templateUrl: 'templates/editCircle.html'
        }
      }
    })
    .state('tabEs.EditCircleEs',{
      url: '/editcircleEs',
      views: {
        'editCircleEs': {
          templateUrl: 'templates/editCircleEs.html'
        }
      }
    })
//---------------- CONTACTS TAB STATES ---------------
      .state('tab.Contacts', {
      url: '/contacts',
      views: {
        'contacts': {
          templateUrl: 'templates/contacts.html',
        }
      }
    })
      .state('tabEs.ContactsEs', {
      url: '/contactsES',
      views: {
        'contactsEs': {
          templateUrl: 'templates/contactsEs.html',
        }
      }
    })
    .state('tab.AddContacts', {
    url: '/addcontacts',
    views: {
      'addcontacts': {
        templateUrl: 'templates/addcontacts.html',
      }
    }
  })
    .state('tabEs.AddContactsEs', {
    url: '/addcontactsES',
    views: {
      'addcontactsEs': {
        templateUrl: 'templates/addcontactsEs.html',
      }
    }
  })
//---------------- REQUESTS TAB STATES ---------------
  .state('tab.Requests', {
    url: '/requests',
    views: {
      'requests': {
        templateUrl: 'templates/requests.html',
      }
    }
  })
    .state('tabEs.RequestsEs', {
    url: '/requestsEs',
    views: {
      'requestsEs': {
        templateUrl: 'templates/requestsEs.html',
      }
    }
  })
  .state('tab.AddRequests', {
  url: '/addrequests',
  views: {
    'addrequests': {
      templateUrl: 'templates/addrequests.html',
    }
  }
})
  .state('tabEs.AddRequestsEs', {
  url: '/addrequestsEs',
  views: {
    'addrequestsEs': {
      templateUrl: 'templates/addrequestsEs.html',
    }
  }
  })


// //---------------- TAB2 STATES ---------------
//   // setup an abstract state for the tabs directive
//     .state('tab2', {
//     url: '/tab2',
//     abstract: true,
//     templateUrl: 'templates/tabs2.html'
//   })
//    .state('tab2Es', {
//     url: '/tab2Es',
//     abstract: true,
//     templateUrl: 'templates/tabs2Es.html'
//   })

//---------------- PROFILE STATES ---------------



    .state('tab.Profile', {
    url: '/profile',
    views: {
      'profile': {
        templateUrl: 'templates/profile.html',
      }
    }
  })
      .state('tabEs.ProfileEs', {
    url: '/profileEs',
    views: {
      'profileEs': {
        templateUrl: 'templates/profileEs.html',
      }
    }
  })

    .state('tab.EditProfile', {
    url: '/editProfile/:id',
    views: {
      'editProfile': {
        templateUrl: 'templates/editProfile.html',
      }
    }
  })
    .state('tabEs.EditProfileEs', {
    url: '/editProfileEs/:id',
    views: {
      'editProfileEs': {
        templateUrl: 'templates/editProfileEs.html',
      }
    }
  })

//---------------- ACCOUNT STATES ---------------

    .state('tab.Account', {
    url: '/account/:id',
    views: {
      'account': {
        templateUrl: 'templates/account.html',
      }
    }
  })
      .state('tabEs.AccountEs', {
    url: '/accountEs',
    views: {
      'accountEs': {
        templateUrl: 'templates/accountEs.html',
      }
    }
  })
//---------------- OTHERWISE STATES ---------------
  $urlRouterProvider.otherwise('/');

});
