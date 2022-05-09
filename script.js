let comedy = ["https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg ","https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg "];
let drama = ["https://whsat-imagehosting.glitch.me/uploaded/85d559bc3cceb05efd043c92a6346115.jpg","https://whsat-imagehosting.glitch.me/uploaded/ee850ff3ec8319e958dd8d14e89720ec.jpg"];
let action = ["https://whsat-imagehosting.glitch.me/uploaded/c89d8e2e912042e43c278c7eff24435f.jpg","https://whsat-imagehosting.glitch.me/uploaded/d0ee69b99156627ee05c4d91d91b7178.jpg"];
$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
    //Write code for Task Two below this line1
    if (genreInput === "comedy" || genreInput === "Comedy"){
        for (let com of comedy){
        	$(".shows").append("<img src=" + com + ">");
        }
    }
    else if (genreInput === "action" || genreInput === "Action"){
        for (let act of action){
        	$(".shows").append("<img src=" + act + ">");
        }
    }
    else if (genreInput === "drama" || genreInput === "Drama"){
        for (let dra of drama){
        	$(".shows").append("<img src=" + dra + ">");
        }
    }
});


$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
  //Write code for Task Three below this line!
    comedy.push(suggestion);
    drama.push(suggestion);
    action.push(suggestion);
});