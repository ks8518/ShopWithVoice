
import bananas from "./items-images/bananas.jpg"
import apples from "./items-images/apples.jpg"
import carrots from "./items-images/carrots.jpg"
import cashews from "./items-images/cashews.jpg"
import grapes from "./items-images/grapes.jpg"
import ladyfingers from "./items-images/ladyfingers.jpg"
import oranges from "./items-images/oranges.jpg"
import almonds from "./items-images/almonds.jpg"

export default function itemImage({item}){
    var image;
    image=item.imageName;

    if(item.imageName==="bananas") image=bananas; 
    else if(item.imageName==="apples") image=apples;
    else if(item.imageName==="carrots") image=carrots;
    else if(item.imageName==="cashews") image=cashews;
    else if(item.imageName==="grapes") image=grapes;
    else if(item.imageName==="ladyfingers") image=ladyfingers;
    else if(item.imageName==="oranges") image=oranges;
    else if(item.imageName==="almonds") image=almonds;

    return <img
    alt="e-commerce"
    className="object-cover object-center w-full h-full block"
  //  src={image}
    src = {image}          
  />
}