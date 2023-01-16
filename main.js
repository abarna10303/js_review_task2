let age =parseInt(prompt("Enter the Age"));
let voterid=confirm("voter id")
if(age<18 && age>0 && voterid==false)
{
    console.log("Not Eligible for Voting");
}
else
{
    console.log("Eligible for Voting");
}
