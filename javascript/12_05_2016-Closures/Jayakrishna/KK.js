(function(){
    function one(){
        var total = this;
        total.sum=null;
        total.diff=null;
        total.mult=null;
        total.div=null;

        function two(a, b){
            var mathematics = this;
            mathematics.add = function(a,b){
                    return (a + b)
            };
            mathematics.subtraction = function(a,b){
                    return (a - b)
            };
            mathematics.product = function(a,b){
                    return (a * b)
            };
            mathematics.dividend = function(a,b){
                    return (a/b)
            };
        }

         var math = new two();
          total.sum = math.add(24, 22);
          total.diff = math.subtraction(24, 22);
          total.mult = math.product(24, 22);
          total.div = math.dividend(24, 22);
    }
var result = new one();
console.log(result);
})();