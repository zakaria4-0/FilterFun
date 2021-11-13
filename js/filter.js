var fImage=null;
var imgcanvas;
function upload(){
 var fileinput=document.getElementById("ffile");
  fImage=new SimpleImage(fileinput);
  imgcanvas=document.getElementById("can1");
  fImage.drawTo(imgcanvas);}

function imageIsLoaded(){
    if(fImage==null || !fImage.complete()){
    alert("image not loaded");
  }
}
function clearcanvas(){
    
    var context=imgcanvas.getContext("2d");
    context.clearRect(0,0,imgcanvas.width,imgcanvas.height);
  }

  function makegrayscale(){
    imageIsLoaded();
    var output1=new SimpleImage(fImage.getWidth(),fImage.getHeight());
  for(var pixel of fImage.values()){
    var x=pixel.getX();
    var y=pixel.getY();
    var op=fImage.getPixel(x,y);
    output1.setPixel(x,y,op);
  
  }
  for(var px of output1.values()){
    var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
  
  px.setRed(avg);
  px.setGreen(avg);
  px.setBlue(avg);
  }
  clearcanvas();
  output1.drawTo(imgcanvas);
  } 

  function makered(){
    imageIsLoaded();
    var output2=new SimpleImage(fImage.getWidth(),fImage.getHeight());
    for(var pixel of fImage.values()){
    var x=pixel.getX();
    var y=pixel.getY();
    var op=fImage.getPixel(x,y);
    output2.setPixel(x,y,op);
  
  }
  for(var px of output2.values()){
  px.setRed(255);
  
  }
  clearcanvas();
  output2.drawTo(imgcanvas);
  } 
  

  function Reset() {
    clearcanvas();

      var Rinput=document.getElementById("ffile");
      var fImage2=new SimpleImage(Rinput);
      
      fImage2.drawTo(imgcanvas);

  }
  function RedHue(){
    imageIsLoaded();
    var output3=new SimpleImage(fImage.getWidth(),fImage.getHeight());
    for(var pixel of fImage.values()){
    var x=pixel.getX();
    var y=pixel.getY();
    var op=fImage.getPixel(x,y);
    output3.setPixel(x,y,op);
  
  }
    
  for(var px of output3.values()){
    var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
  if(avg<128){

  px.setRed(avg*2);
  px.setGreen(0);
  px.setBlue(0);
}else{
  px.setRed(255);
  px.setGreen(avg*2-255);
  px.setBlue(avg*2-255);
}
  }
  clearcanvas();
  output3.drawTo(imgcanvas);
  } 
  function originalf(){
    imageIsLoaded();
    var output4=new SimpleImage(fImage.getWidth(),fImage.getHeight());
    var W=fImage.getWidth();
    var H=fImage.getHeight();
    for(var pixel of fImage.values()){
    var x=pixel.getX();
    var y=pixel.getY();
    var op=fImage.getPixel(x,y);
    output4.setPixel(x,y,op);
  
  }


    for(var px of output4.values()){
      if(px.getX()<50 || px.getX()>(W-50) || px.getY()<50 || px.getY()>(H-50) || (px.getY()>(H/2)-15 && px.getY()<(H/2)+15) || (px.getX()>(W/2)-15 && px.getX()<(W/2)+15) || (px.getX()>(W/4)-15 && px.getX()<(W/4)+15) || (px.getX()>(3*W/4)-15 && px.getX()<(3*W/4)+15) ){
        px.setRed(241);
        px.setBlue(151);
        px.setGreen(232);
      }
    }
    clearcanvas();
    output4.drawTo(imgcanvas);
  }
  function Rainbow(){
    imageIsLoaded();
    var output5=new SimpleImage(fImage.getWidth(),fImage.getHeight());
    var H=fImage.getHeight();
    for(var pixel of fImage.values()){
    var x=pixel.getX();
    var y=pixel.getY();
    var op=fImage.getPixel(x,y);
    output5.setPixel(x,y,op);}
  


    for(var px of output5.values()){
      var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
      if(avg<128){
      if(px.getY()<H/7 ){
        px.setRed(avg*2);
        px.setGreen(0);
        px.setBlue(0);

      }
      if(px.getY()<2*H/7 && px.getY()>H/7){
        px.setRed(avg*2);
        px.setGreen(0.8*avg);
        px.setBlue(0);
      }
      if(px.getY()<3*H/7 && px.getY()>2*H/7){
        px.setRed(avg*2);
        px.setGreen(2*avg);
        px.setBlue(0);
      }
      if(px.getY()<4*H/7 && px.getY()>3*H/7){
        px.setRed(0);
        px.setGreen(2*avg);
        px.setBlue(0);
      }
      if(px.getY()<5*H/7 && px.getY()>4*H/7){
        px.setRed(0);
        px.setGreen(0);
        px.setBlue(2*avg);
      }
      if(px.getY()<6*H/7 && px.getY()>5*H/7){
        px.setRed(0.8*avg);
        px.setGreen(0);
        px.setBlue(2*avg);
      }
      if(px.getY()>6*H/7){
        px.setRed(0.6*avg);
        px.setGreen(0);
        px.setBlue(1.6*avg);
      }
    }
    if(avg>=128){
      if(px.getY()<H/7 ){
        px.setRed(255);
        px.setGreen(2*avg-255);
        px.setBlue(2*avg-255);

      }
      if(px.getY()<2*H/7 && px.getY()>H/7){
        px.setRed(255);
        px.setGreen(1.2*avg-51);
        px.setBlue(2*avg-255);
      }
      if(px.getY()<3*H/7 && px.getY()>2*H/7){
        px.setRed(255);
        px.setGreen(255);
        px.setBlue(2*avg-255);
      }
      if(px.getY()<4*H/7 && px.getY()>3*H/7){
        px.setRed(2*avg-255);
        px.setGreen(255);
        px.setBlue(2*avg-255);
      }
      if(px.getY()<5*H/7 && px.getY()>4*H/7){
        px.setRed(2*avg-255);
        px.setGreen(2*avg-255);
        px.setBlue(255);
      }
      if(px.getY()<6*H/7 && px.getY()>5*H/7){
        px.setRed(1.2*avg-51);
        px.setGreen(2*avg-255);
        px.setBlue(255);
      }
      if(px.getY()>6*H/7){
        px.setRed(0.4*avg+153);
        px.setGreen(2*avg-255);
        px.setBlue(0.4*avg+153);
      }
    }
    }
    clearcanvas();
    output5.drawTo(imgcanvas);
  }
  var nopixel=null;
  function BlurFilter(){
    imageIsLoaded();
    var output=new SimpleImage(fImage.getWidth(),fImage.getHeight());
    for(var pixel of fImage.values()){
      var x=pixel.getX();
      var y=pixel.getY();
    Math.random();
    if(Math.random()<0.5){
      var opixel=fImage.getPixel(x,y);
      output.setPixel(x,y,opixel);
      
    }
    if(Math.random()>0.5){
      var rx=x+Math.floor(Math.random() * 5);
      var ry=y+Math.floor(Math.random() * 5);
      if(rx<fImage.getWidth() && ry<fImage.getHeight()){
       nopixel=fImage.getPixel(rx,ry);
      
      }else{nopixel=fImage.getPixel(x,y);}
      output.setPixel(x,y,nopixel);
    }
  }
  clearcanvas();
  output.drawTo(imgcanvas);
  }
  
  function crop(){
    var width=document.getElementById("tx1");
    var w=parseInt(width.value);
    var height=document.getElementById("tx2");
    var h=parseInt(height.value);
    var W=fImage.getWidth();
    var H=fImage.getHeight();
    var cimg=new SimpleImage(w,h);

     if(w<=W && h<=H){

    for(var pixel of fImage.values()){
      var x=pixel.getX();
      var y=pixel.getY();
      
       
            if(x<w && y<h){
              var cip=fImage.getPixel(x,y);
                cimg.setPixel(x,y,cip);
            }
            
        }
    }else{
      alert("you have set width and height upper than image dimensions");
  }
    cimg.drawTo(imgcanvas);
}
