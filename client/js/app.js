var movieApi=angular.module('movieApi',['ngResource']);


   
movieApi.controller('movieApiCtrl',function($scope,$http){
   $scope.search='';
   
   $http.jsonp('https://api.themoviedb.org/3/movie/20/recommendations?api_key=ca79a6ea91d221034bf6c18bfcb5944c&language=en-US&page=1&callback=JSON_CALLBACK')
.success(function(result){
       console.log(result);
       $scope.data=result;
   });
    
$scope.fetch=function(){
   $http.jsonp('https://api.themoviedb.org/3/search/movie?api_key=ca79a6ea91d221034bf6c18bfcb5944c&query='+$scope.search+'&callback=JSON_CALLBACK')
    .success(function(result){
       console.log(result);
       $scope.data=result;
   });
   
  /* $http.jsonp('https://test-ziyiben.c9users.io/search?q='+$scope.search+'&callback=JSON_CALLBACK')
    .success(function(result){
       console.log(result);
       $scope.data=result;
   });*/
}
    $scope.showDetail=function(movie)
    {
        $http.jsonp('https://api.themoviedb.org/3/movie/'+movie.id+'?api_key=ca79a6ea91d221034bf6c18bfcb5944c&callback=JSON_CALLBACK')
        .success(function(result)
                {
             
                $('.modal').modal({
                    show:true
                });
            
            $scope.r=result;
            console.log(result);
        });
        
        $http.jsonp('https://test-ziyiben.c9users.io/search?q='+movie.num+'&callback=JSON_CALLBACK')
        .success(function(result)
                {
             
                $('.modal').modal({
                    show:true
                });
            
            $scope.r=result;
            console.log(result);
        });
    }
    
    $scope.hide=function(){
        $('.modal').modal({
                    show:false
                });
        
    }
    $scope.changebox=function()
    {
        var input = $('input[type="text"]');
        input.css({width:'400px'});
    }
   
    
})  ;

