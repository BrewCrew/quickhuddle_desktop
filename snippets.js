var deferred = $q.defer();
deferred.resolve();
deferred.reject(error);
return deferred.promise;

$timeout(function() {
    $scope.$apply();
})


// Add spark ID to the feed of everyone following this user.
currentUser.child("followers").once("value", function(list) {
    list.forEach(function(follower) {
        var childRef = firebase.child("users").child(follower.name());
        childRef.child("feed").child(sparkRefId).set(true);
    });
});
