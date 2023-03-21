 function GetAge (Name, birthDate) {

    if (birthDate.getFullYear() >= 2023)
    {
        return "please enter correct Date";
    }
    else 
    {
        var DateNow = new Date();
        var Age = DateNow.getFullYear() - birthDate.getFullYear();
        var Month = DateNow.getMonth() - birthDate.getMonth();
    
        if (Month < 0 || (Month === 0 && DateNow.getDate() < birthDate.getDate())) 
        {
            Age--;
        }
        v
        return `Welcome ${Name} your age  is ${Age}`;
    }
};

module.exports = GetAge;
