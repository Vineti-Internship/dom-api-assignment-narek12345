let cartesian = document.createElement("div");
let bigCircle = document.createElement("div");
bigCircle.id = "bigCircle";
let smallCircle = document.createElement("div");
smallCircle.id = "smallCircle"
let button = document.createElement("button")
let starting = document.createTextNode("Start")
button.appendChild(starting)
button.id = "button"//using one button for start and stop
cartesian.appendChild(bigCircle);
cartesian.appendChild(smallCircle);
cartesian.id = "cartesian"
document.body.appendChild(cartesian);
button.onclick = ()=> {
    console.log(button.children);
    if(button.textContent == "Start"){
        start();
        button.removeChild(button.childNodes[0]);
        let stoptext = document.createTextNode("Stop")
        button.appendChild(stoptext);
    }
    else{
        stop();
        console.log(button.childNodes);
        button.removeChild(button.childNodes[0]);
        let text = document.createTextNode("Start")
        button.appendChild(text);
    }    

}
let start = ()=>{
let points = calc();
let marleft = parseInt(getStyle(smallCircle,"margin-left")) ;
let martop = parseInt(getStyle(smallCircle,"margin-top"));
if((marleft>=-10)&&(marleft<=90)&&(martop>=-10)&&(martop<=40)){
    let i = marleft+10;
    rotate(i,points);
}
else if((marleft>=-10)&&(marleft<=90)&&(martop>=40)&&(martop<=90)){
    let j = 200-(marleft+10);
    rotate(j,points);
}
}
let stop = ()=> {
    clearInterval(Window.interval);
}
let rotate = (i,points) =>{
Window.interval = setInterval(animate,10);
function animate(){;
    if(i==200){
        i=0;
    }
    else{
    smallCircle.style.marginLeft = (10*points[i][0])-10 + 'px';
    smallCircle.style.marginTop = (10*points[i][1])-10 + 'px';
    i++; 
    }
}
}
let getStyle = function (e, styleName) {
    let styleValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle) {
        styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
    }
    else if(e.currentStyle) {
        styleName = styleName.replace(/\-(\w)/g, function (strMatch, p1) {
            return p1.toUpperCase();
        });
        styleValue = e.currentStyle[styleName];
    }
    return styleValue;
}
let round = (x) =>{
    let radius = 5;
    let centy = 5;
    let centx = 5;
    let y = Math.sqrt(radius**2-(x-centx)**2) + centy;
    return y;
}
let round1 = (x) =>{
    let radius = 5;
    let centy = 5;
    let centx = 5;
    let y = centy - Math.sqrt(radius**2-(x-centx)**2);
    return y;
}
let calc = () =>{
    let radius = 5;
    let centy = 5;
    let centx = 5;
    let a = 0;
    let b = a+(2*radius);
    let n = (2*radius)/0.1;
    let array = [];
    for(let i = 0;i<n;i++){
        let xi = a + ((b-a)/n)*i;
        let yi = round1(xi);
        array[i]=[xi,yi];
    }
    let j = n;
    for(let i = n;i>=0;i--){
        let xi = a + ((b-a)/n)*i;
        let yi = round(xi)
        array[j]=[xi,yi];
        j++;
    }
    return array;
}
document.body.appendChild(button);