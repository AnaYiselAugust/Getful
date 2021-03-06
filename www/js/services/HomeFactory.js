(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q, GlobalFactory) {
		var o = {};
		o.contacts = [];
		o.tempContact = {};
		o.tempRequest = {};
		o.tempCircle = {};


		/* Send Friend Request */
		o.sendRequest = function(email) {
			var q = $q.defer();
			var friendRequest = {
				sendingTo: email,
				sendingFrom: GlobalFactory.status.username
			}
			$http.post('http://localhost:3000/api/user/friendRequest', friendRequest).then(function(res) {
				q.resolve();
			});
			return q.promise;
		}

		/* -------------------- Contacts ---------------------------*/

		/* Get Contacts */
		o.getContacts = function() {
			var q = $q.defer();
			var parcel = {
				user: GlobalFactory.status.username
			}
			$http.post('http://localhost:3000/contacts/get', parcel).then(function(res) {
				o.contacts = res.data;
				GlobalFactory.getFriends().then(function(res){
					for(var i = 0; i < res.data.length; i++) {
						o.contacts.push(res.data[i]);
						console.log(o.contacts);
					}
					q.resolve(res.data);
				})
			});
			return q.promise;
		}

		/* Add Contact */
		o.addContact = function(contact) {
			var q = $q.defer();
			$http.post('http://localhost:3000/contacts', contact).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Delete Contact */
		o.deleteContact = function(id) {
			var q = $q.defer();
			$http.delete('http://localhost:3000/contacts/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Save Contact */
		o.saveContact = function(contact) {
			var q = $q.defer();
			$http.put('http://localhost:3000/contacts', contact).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Get LinkedIn Connections */
		o.getLinkedIn = function() {
			var q = $q.defer();
			$http.get('https://api.linkedin.com/v1/people/id=12345/connections').then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* -------------------- Circles ---------------------------*/

		/* Get Circles */
		o.getCircles = function() {
			var q = $q.defer();
			var parcel = {
				user: GlobalFactory.status.username
			}
			$http.post('http://localhost:3000/circles/get', parcel).then(function(res) {
				o.circles = res.data;
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Save Circle */
		o.saveCircle = function(circle, title) {
			var parcel= {
				chartTitle: title,
				members: circle,
				creator: GlobalFactory.status.username
			}
			var q = $q.defer();
			$http.post('http://localhost:3000/circles', parcel).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Delete Circle */
		o.deleteCircle = function(id) {
			var q = $q.defer();
			$http.delete('http://localhost:3000/circles/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Update Circle */
		o.updateCircle = function(circle, title) {
			var parcel= {
				_id: o.tempCircle._id,
				chartTitle: title,
				members: circle,
				creator: GlobalFactory.status.username
			}
			var q = $q.defer();
			$http.put('http://localhost:3000/circles', parcel).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* -------------------- Requests ---------------------------*/

		/* Get Requests */
		o.getRequests = function(email) {
			var q = $q.defer();
			var x = {email: email};
			$http.patch('http://localhost:3000/requests', x).then(function(res) {
				o.requests = res.data;
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Add Request */
		o.addRequest = function(request) {
			request.email = GlobalFactory.status.username;
			var q = $q.defer();
			$http.post('http://localhost:3000/requests', request).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Delete Request */
		o.deleteRequest = function(id) {
			var q = $q.defer();
			$http.delete('http://localhost:3000/requests/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}

		/* Save Request */
		o.saveRequest = function(request) {
			var q = $q.defer();
			$http.put('http://localhost:3000/requests', request).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		}


		return o;
	}
})();
