
            var user=[{
    name:"ravi",
    age:21},
    {
        name:"sunil",
        age:22},
        {
name:"shiva",
age:23},
{
    name:"yash",
    age:24
        

}


]
var userList=document.getElementById('userList');
var index=0;
while(index < user.length){
    userList.innerHTML=userList.innerHTML+"<li>"+user[index].name+"&nsbp;"+user[index].age+"</li>";
index++; 
}