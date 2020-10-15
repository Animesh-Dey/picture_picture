const videoelement=document.getElementById('video');
const button=document.getElementById('button');
//prompt to select media stream,pass to video element,then play
async function selectmediastream(){
    try{
      const mediastream=await navigator.mediaDevices.getDisplayMedia();
      videoelement.srcObject=mediastream;
      videoelement.onloadedmetadata=()=>{
          videoelement.play();
      }
    }catch(error){
        console.log('oops,there is an error : ',error);
    }
}
//addEventListner
button.addEventListener('click',async () =>{
    //disable the button
    button.disable=true;
    //start picture in picture
    await videoelement.requestPictureInPicture();
    //reset button
    button.disable=false;
});
//onload
selectmediastream();