//IIFE construction
(function(){                                            //anonymous function
    var string='jaya';  //string
    var rollNumber=40;  //number
    var float=2.66;     //float
    var present=true;   //boolean

    var trival=null;    //Trivial Data types
    var b=undefined;
    var L={                                                 //object
            fullname:'Jayakrishna Linga',
            rollNumber:440,
            present:true,
            suspended:null,
            J:{
                fullname:'Kirthi Nampally',
                rollNumber:441,
                K:{
                   fullname:'prashanth Yarram',
                   rollNumber:439
                }
            }
    };

    L.fullname ='JAY L';                                    //dot notations
    L.rollNumber =40;
    L.J.fullname='Basi J';
    L.J.rollNumber=41;
    L.J.K.fullname='prad Y';
    L.J.K.rollNumber=42;
    function multiply(x, y){                                //named function
        var z = x * y
        return z;
    }
    var D = multiply(15, 12);
                                                              //consoles of the above program
    console.log(D);
    console.log(string);
    console.log(rollNumber);
    console.log(present);
    console.log(float);
    console.log(trival);
    console.log(b);
    console.log(L);
})();















