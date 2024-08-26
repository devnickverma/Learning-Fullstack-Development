// Creating a new object
const user1 = [{
    fname: "Nikhil",
    gender: "Male",
  },{
    fname: "Priya",
    gender: "Female",
  },{
  fname: "Rahul",
  gender: "Male",
}]
 
for(let i=0; i<user1.length; i++){
  if(user1[i]["gender"] == "Male"){
    console.log(user1[i]["fname"]);
  }
}
