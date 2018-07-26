function toggleVoteContainer(){
  //find the vote container on web page

  var voteContainer= document.getElementById("vote-container");

  if (voteContainer.style.display === ""){
    voteContainer.style.display = "block";

  }
}
function increaseLikes(element){
  var likes = element.innerText;
  //convert string to integer
  likes = parseInt(likes);
  //increase likes value by 1
  likes += 1;
  //change value of likes on page
  element.innerText = likes;

  var scores =  document.getElementsByClassName("score");
  var score = scores [0];
  score.style.color = "yellow";
}

  var dogImages = ["https://animalso.com/wp-content/uploads/2017/01/german-shepherd-puppies_3.jpg", "https://i.pinimg.com/originals/cc/77/df/cc77df7eb800976046552d0ed4d4c09a.jpg", "http://www.slate.com/content/dam/slate/blogs/business_insider/2017/04/06/amazon_is_tackling_the_canine_threat_to_its_drones_with_simulated_dogs/663704722-scampi-chases-her-ball-as-more-than-100-dachshunds-and.jpg.CROP.promo-xlarge2.jpg"];

  var catImages = ["https://upload.wikimedia.org/wikipedia/commons/e/ea/Contemplative-looking_cat.jpg","https://upload.wikimedia.org/wikipedia/commons/0/06/White-Cat.JPG","https://images.meredith.com/content/dam/bhg/Images/2013/11/18/102171935.jpg.rendition.largest.jpg"];


  function changeImage(element){
    console.log(element.id);

  var animals = [];

    if (element.id === "cats-carousel"){
      animals = catImages;
    } else {
      animals = dogImages;
    }
    var carousel = document.getElementById(element.id);

    //get img
    var image = carousel.getElementsByTagName('img')[0];

    //get img url on page
    var imageUrl = image.getAttribute('src');

    //get index of image on page in animals array
    var imageIndex = animals.indexOf(imageUrl);
    //add 1 to the index; reset to 0 if last elmeent in animals
    if(imageIndex === animals.length -1){
      imageIndex= 0;
    }else{
      imageIndex += 1;
    }

    //reset url to the new url
    imageUrl = animals[imageIndex];

    //change the src for the img element on the web page
    image.src = imageUrl;


}
