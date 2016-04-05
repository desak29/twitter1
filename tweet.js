var tweetApp = angular.module('tweetApp', ['ngRoute']);
tweetApp.controller('mainController',function($scope,$http,$routeParams,$interval){
    var url ="http://digitalcrafts.com/students/twitter/hashtag.php?hash=sad&secondHash=soccer"
    $http.get(url).success(function(data){
        $scope.data = data.statuses;
        for(i=0;i<$scope.data.length;i++) {
            var time = $scope.date[i].created_at;
            var tweetTime = new Date(time);
            $scope.date[i].tweetSeconds = tweetTime.getTime() / 1000;
            $interval(function(){
                for (i = 0; i < $scope.data.length; i++) {
                    var currentDate = new Date();
                    var currentTimeInSeconds = currentDate.getTime() / 1000;
                    $scope.date[i].sinceTweeted = math.floor(currentTimeInSeconds - $scope.date[i].tweetSeconds);
                    ;

                }
                ;

            }, 1000);

        }
    });
});