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

         var math = new two(24,22);
          total.sum = math.add();
          total.diff = math.subtraction();
          total.mult = math.product();
          total.div = math.dividend();
    }
var result = new one();
console.log(result);
})();