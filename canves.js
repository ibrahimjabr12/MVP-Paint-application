

// import html2canvas from 'html2canvas'
var canves = document.querySelector('canvas');
canves.width =600;
canves.height =600;

var c = canves.getContext('2d');
let x =540;
let y =540;
let fX =0;
let fY =0;
let fontColor= 'black'
let fontWidth= 5
let bool =false;
c.fillStyle = 'green'
c.fillRect(x,y,60,60)
let lineCordenat =[]
window.addEventListener('keydown',()=>{
movemint(event.key)
})
window.addEventListener('mousedown',()=>{
    bool =!bool
    console.log(bool)
    fX =event.x
    fY =event.y
   
    if(event.target.className === 'fontcolorbuttom'){
        bool =!bool
        fontColor = event.target.id
    }else if(event.target.className === 'fontsizebuttom'){
        bool =!bool
        fontWidth = Number(event.target.id)
    }else{
                window.addEventListener('mousemove',()=>{
            if(bool){
           
                lineCordenat[0]=[fX,fY]
                lineCordenat[1]=[event.clientX,event.clientY]
                drowLine(lineCordenat)
                fX =event.x
                fY =event.y
                c.stroke();
            }else{
                c.stroke();
                c.beginPath();
            }
            })
    }
    



})
movemint = function(key){
    if(key === 'ArrowUp' && y >0){
        y=y -60
        c.clearRect(x,y+60,60,60);
        c.fillRect(x,y,60,60)
    }
    if(key === 'ArrowDown' && y <540){
        y=y+60
        c.clearRect(x,y-60,60,60);
        c.fillRect(x,y,60,60)
    }
    if(key === 'ArrowLeft' && x >0){
        x =x-60
        c.clearRect(x+60,y,60,60);
        c.fillRect(x,y,60,60)
    }
    if(key === 'ArrowRight' && x <540){
        x =x+60
        c.clearRect(x-60,y,60,60);
        c.fillRect(x,y,60,60)
    }
    if(key === 's'){
        html2canvas(document.getElementById('canvas0')).then(function(canvas) {
            // Export the canvas to its data URI representation
            var base64image = canvas.toDataURL("image/png");
            console.log(base64image)
            axios.post('http://localhost:3022/save',{data:{image:base64image}})
            .then(Response=>console.log(Response))
            .catch(error=>console.log(error))
            var image = new Image()
            image.src = base64image;
            image.width = image.height = "250";
            document.getElementById('i').appendChild(image);
            
        });
    }            
}
drowLine = (lineCordenat)=>{
        c.beginPath();
c.moveTo(lineCordenat[0][0] ,lineCordenat[0][1]);
c.lineTo(lineCordenat[1][0] ,lineCordenat[1][1]);
c.lineWidth = fontWidth
c.strokeStyle = fontColor
c.stroke();

}





// c.fillStyle = 'green'
// c.fillRect(100,0,100,100)
// c.fillRect(100,201,100,100)
// c.fillRect(100,302,100,100)
// c.fillRect(100,403,100,100)
// c.fillRect(100,504,100,100)
// c.fillRect(100,605,100,100)

// c.fillStyle = 'blue'
// c.fillRect(400,0,100,100)
// c.fillRect(400,101,100,100)
// c.fillRect(400,202,100,100)
// c.fillRect(400,403,100,100)
// c.fillRect(400,504,100,100)
// c.fillRect(400,605,100,100)

// c.beginPath();
// c.moveTo(50 ,300);
// c.lineTo(300 ,100);
// c.lineTo(400 ,300);
// c.strokeStyle ="red"
// c.stroke();


// for(let i = 0; i <  100;i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath()
//     c.arc(x ,y,30,0,Math.PI*2, false)
//     c.strokeStyle ='blue'
//     c.stroke()
// }
// var muse ={
//     x:undefined,
//     y:undefined
// }
// var colorArray =['#403C27','#736049','#F2AE72','#BF9A78','#BFA393']
// window.addEventListener('mousemove', (event)=>{
//     muse.x =event.x
//     muse.y =event.y
//     console.log(muse)
// })
// window.addEventListener('resize',function(){
//     canves.width =window.innerWidth;
//     canves.height =window.innerHeight;
//     init();
// })
// function  Circle(x,y,dx,dy,redius){
//     this.x =x
//     this.y =y
//     this.dx =dx;
//     this.dy = dy;
//     this.redius =redius;
//     this.minRedius = redius
//     this.color =colorArray[Math.floor(Math.random()* colorArray.length)]

//     this.draw = function(){
//         c.beginPath()
//         c.arc(this.x,this.y,this.redius,0,Math.PI * 2,false)
//         c.fillStyle = this.color
//         c.fill()
//     }
//     this.update = function() {
//         if(this.x + this.redius> innerWidth || this.x -this.redius  <0){
//             this.dx =-this.dx
//             }
//             if(this.y + this.redius> innerHeight || this.y -this.redius  <0){
//                 this.dy =-this.dy
//             }
//             this.x= this.x+this.dx
//             this.y= this.y+this.dy
//             if(muse.x -this.x < 50 && muse.x -  this.x > -50 && muse.y -this.y < 50 && muse.y -  this.y > -50 ){
//                 if(this.redius <60){
//                     this.redius++
//                 }
//             }else if (this.redius > this.minRedius){
//                 this.redius--
//             }
//             this.draw()
//     }
    
// }

// var circalArray =[]
// function init(){
//     circalArray=[]
// for(let i=0;i<300;i++){
//     var redius = Math.floor(Math.random() * 30 + 2);
//     var x = Math.random() *  (innerWidth -redius * 2) +redius;
//     var dx =Math.random() -0.5 * 2;
//     var y = Math.random()* (innerHeight -redius * 2) +redius;
//     var dy =Math.random() -0.5 *2;
    
//     circalArray.push(new Circle(x,y,dx,dy,redius))
// }

// }
// function animate(){
//         requestAnimationFrame(animate);
//         c.clearRect(0,0,innerWidth,innerHeight)
//         circalArray.map(item=>item.update())

// }
// init();
// animate()
