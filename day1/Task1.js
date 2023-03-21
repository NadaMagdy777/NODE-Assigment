exports.Add = function (NUM1, NUM2) {

    if (!isNaN(NUM1) && !isNaN(NUM2)) 
    {
	    return NUM1 + NUM2;
    }
    else 
    {
        return "PLease enter numbers only"
    }
};
  
exports.Sub = function (NUM1, NUM2) {

    if (!isNaN(NUM1) && !isNaN(NUM2)) {
        return NUM1- NUM2;
    }
    else 
    {
        return "PLease enter numbers only"
    }
};
  
exports.Mult = function (NUM1, NUM2) {

    if (!isNaN(NUM1) && !isNaN(NM2)) {
        return NUM1 * NUM2;
    }
    else 
    {
        return "PLease enter numbers only"
    }
};

