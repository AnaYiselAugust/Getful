(function() {
	'use strict';
	angular.module('app')
	.controller('ProfileController', ProfileController);
// Inject Upload, $http, $mdToast to work with cloudinary.
	function ProfileController(GlobalFactory, $state, $stateParams, $http, $mdToast, $scope, Upload) {
		var vm = this;
		vm.profile = {};
		vm.status = GlobalFactory.status;
		vm.loading = false;

		// vm.userInfoLoaded = false; //add to work with cloudinary

//--------------------------DISPLAY PUBLIC PROFILE -----------------------------------
	function displayProfile(){
		GlobalFactory.getUserInfo($stateParams.id).then(function(res){
			vm.profile = res.data;
			console.log(vm.profile);
		});
	};
	displayProfile();

//------------------- EDIT PROFILE ---------------------------------------------
	vm.updateProfile = function(){
	//	$scope.submit();
		GlobalFactory.updateUser($stateParams.id, vm.profile).then(function(res){
			vm.profile = res.data; // need this?
			$state.go("profile", {id: vm.status._id});
		});
	};
	vm.updateProfileEs = function(){
		GlobalFactory.updateUser($stateParams.id, vm.profile).then(function(res){
			vm.profile = res.data; // need this?
			$state.go("profileEs", {id: vm.status._id});
		});
	};

//--------------- Upload Photo w. Cloudinary --------------------------
//Select or drop file to upload function
	$scope.upload = function (file) {
	    	vm.loading = true;
	    	Upload.upload({
	    		url: 'http://localhost:3000/api/user/uploadPhoto',
	    		data: {file: file, 'userId': vm.status._id}
	    	}).then(function (resp) {
	    		vm.loading = false;
					$mdToast.show($mdToast.simple().content);
					$state.go("tab.Dash");
	    	}, function (resp) {
	    		vm.loading = false;
					console.log(resp);
	    	}, function (evt) {
	    		var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	    	});
	    };


//SUBMIT THE UPLOAD PHOTO file
	$scope.submit = function() {
				if ($scope.form.file.$valid && $scope.file && !$scope.file.$error) {
					$scope.upload($scope.file);
				}
			};
//------------------------ END CLOUDINARY -------------------------------


//-------------- On Load Scroll Window To Top----------------------------------
		window.scrollTo(0, 0);


	}
})();
