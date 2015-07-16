var friend={};
friend.megha={
name : "megha",
lastname : "Desai",
address : ['IIM Road','Ahmedabad','29881']
};

friend.Aarohi={
    name : "Aarohi",
    lastname : "Oza",
    address : ['Thaltej Road', 'Ahmedabad','23455']
};

var list=function(obj){
    for(var temp in obj)
        console.log(temp);

};

var search=function(name){
    for (var temp in friend)
    {
        if(friend[temp].name===name){
            console.log(friend[temp]);
      return friend[temp];
        }
    }
}

list(friend);
search("Aarohi");