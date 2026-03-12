// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API. 
// Write your code below.


fetch("https://randomuser.me/api/")
        .then(response => response.json())

//         const randomArry = data.data;


$(document).ready(function(){
        const NewInformation = () => {
            fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then((name => {
                $("#name")[0].innerHTML = name.value;
            }))
            .then((email => {
                $("#email")[0].innerHTML = email.value;
            }))
            .then((location => {
                $("#address")[0].innerHTML = location.value;
            }))
             .then((dob => {
                $("#age")[0].innerHTML = dob.value;
            }))  
        }
        $(".relative").click(()=>{
            NewInformation();
        })

});