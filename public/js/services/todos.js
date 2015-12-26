angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('TodosFactory', ['$http',function($http) {
		return {
			//INFO:Angular way of creating factories, object literal, containing
			//3 functions, get,create and delete.

			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
			/**INFO: on the same note recall that if service, the returned is not the 
			object literal.
			this.getCustomers=function() {
				return customers;
			}
			you will invoke it as 
			angular.module.('todoService',[]).service('TodosService',['$http',function($http){
			}])
**/
		}
	}]);