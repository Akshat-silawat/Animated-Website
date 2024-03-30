var circle = document.querySelector("#circle")
var frames = document.querySelectorAll(".frame")
const lerp = (x, y, a) => x * (1 - a) + y * a;    //lerp = linear interpolation function 


frames.forEach(function(frame){
    frame.addEventListener("mousemove",function(dets){

        var dims =  frame.getBoundingClientRect();      // isse apan ko frame ki width or screen se frame ki width ka pta chal jata hai 
        //    console.log(dims) 
                 var xstart= dims.x
                //  var ystart= dims.y
    
                 var xend= dims.x+dims.width;
                //  var yend= dims.y+dims.width;
        
               var xzeroone=  gsap.utils.mapRange(xstart , xend ,0,1 , dets.clientX )    //iski madad se mouse move jb kr raha hu tb mujhe pta chal raha h ki mujhe text ko kaha move krana hai 
            //    var yzeroone=  gsap.utils.mapRange(ystart , yend ,0,1 , dets.clienty )    //iski madad se mouse move jb kr raha hu tb mujhe pta chal raha h ki mujhe text ko kaha move krana hai 
    
    
    
        gsap.to(circle,{
            scale: 8,
        })
        
        gsap.to(frame.children,{
            color:"#fff",
            duration:.4,
            y:"-5vw"
        })
    
        gsap.to(frame.children,{
           x: lerp(-50 , 50 ,xzeroone),
        //    y: lerp(-50 , 50 ,yzeroone),
           duration:.3
            
        })
    
    
    
    })
    
    
    frame.addEventListener("mouseleave",function(dets){ 
        gsap.to(circle,{
            scale:1,
        })
    
        gsap.to(frame.children,{
            color:"#000",
            duration:.4,
            y:"0vw"
        })
    
        gsap.to(frame.children,{
            x: 0,
            // y:0,
            duration:.3
             
         })
    })
})


window.addEventListener("mousemove",function(dets){
    //    circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;          WITHOUT USING GSAP  dets ki hepl se apan mouse ki position kya hai ye pta krte hai. dets means details or dets.clientX krne se X axis me position pta chalti hia same as y 

    gsap.to (circle,{
        x:dets.clientX,
        y:dets.clientY,
        duration:.2,
        ease:Expo
    })
})





// lerp : teen parameter leta h third parametet dena compulsory hai kyuki usse pta chalega ki mouse move kis taraf move krana hai 
// mapRange : ek range ko dusri range se map kr skkte hai  ye 4 parameter leta hai 

//multicursor : ctrl+shift:L
