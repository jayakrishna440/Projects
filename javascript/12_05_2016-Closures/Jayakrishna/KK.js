(function(){
    function one(){
        var total = this;
        total.addition=null;
        total.subtraction=null;
        total.product=null;
        total.dividend=null;

        function two(a, b){
            var mathematics = this;
            mathematics.sum = function(a,b){
                    return (a + b)
            };
            mathematics.diff = function(a,b){
                    return (a - b)
            };
            mathematics.mult = function(a,b){
                    return (a * b)
            };
            mathematics.div = function(a,b){
                    return (a/b)
            };
        }

         var math = new two();
          total.addition = math.sum(4,2);
          total.subtraction = math.diff(4,2);
          total.product = math.mult(4,2);
          total.dividend = math.div(4,2);
    }
var result = new one();
console.log(result);
})();