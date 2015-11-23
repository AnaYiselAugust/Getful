(function() {
	'use strict';
	angular.module('app')
	.controller('ContactsController', ContactsController)
	// Custom Directive For Handling Enter Key For Skills -- Usage: ng-enter="doSomething()"
	.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });

	function ContactsController(HomeFactory, $state, $stateParams, $scope) {
		var vm = this;
		vm.contacts = HomeFactory.contacts;
		vm.tempContact = HomeFactory.tempContact;
		vm.viewContact = {};
		vm.modalOn = false;


		// Makes the input box lowercase
  	$scope.query = '';
  	$scope.$watch('query', function() {
  	    $scope.query = $scope.query.toLowerCase();
  	});

  	// Only search certain properties
    vm.searchContacts = function(contact) {
        return (
          angular.lowercase(contact.firstName).indexOf($scope.query || '') !== -1 ||
					angular.lowercase(contact.lastName).indexOf($scope.query || '') !== -1 ||
          angular.lowercase(contact.title).indexOf($scope.query || '') !== -1);
    };


		// On Load Scroll Window To Top
		window.scrollTo(0, 0);


		// Get Contacts
		vm.getContacts = function() {
			HomeFactory.getContacts().then(function(res){
				vm.contacts = HomeFactory.contacts;
			});
		};
		vm.getContacts(); // Fire Initially


		// Add Contact
		vm.addContact = function() {
			vm.newContact.createdOn = new Date();
			vm.newContact.username = new Date();

			// If No ProfilePic, Assign Default Picture
			if(!vm.newContact.profilePic) {
				vm.newContact.profilePic = "/assets/circle.png";
			}

			HomeFactory.addContact(vm.newContact).then(function(res){
				vm.newContact = {};
				vm.getContacts();
			});
		};


		// Delete Contact
		vm.deleteContact = function(id) {
			HomeFactory.deleteContact(id).then(function(res) {
				vm.getContacts();
			});
		};


		// Edit Contact
		vm.editContact = function(contact) {
				HomeFactory.tempContact = contact;
				$state.go('tab.EditContact');
		};


		// Save Contact
		vm.saveContact = function(contact) {
			// If No ProfilePic, Assign Default Picture
			if(!contact.profilePic) {
				contact.profilePic = "/assets/circle.png";
			}

			HomeFactory.saveContact(contact).then(function(res) {
				vm.getContacts();
			});
		};
 /* -------------------- Send Friend Request ----------------------------------------------*/

 	vm.sendRequest = function(email) {
			HomeFactory.sendRequest(email).then(function(res) {
				alert("Request Sent!");
			});
			console.log(vm.contacts);
	}

 /* -------------------- LinkedIn ----------------------------------------------*/
		// Get LinkedIn Contacts
		vm.getLinkedIn = function() {
			HomeFactory.getLinkedIn().then(function(res){
				console.log(res);
			});
		};

// NOTIFICATIONS

$scope.data = {
    badgeCount : 2
  };






	}
})();
