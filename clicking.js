var data = [
    {
        color:"blue"
    },
    {
        color:"red"
    },
    {
        color:"green"
    }
]
var squares =[];

function square(color){
    var that = this;
    this.color=color;
    this.number=0;
    this.ele=document.createElement("div");
    this.ele.style.backgroundColor=this.color;
    this.ele.style.height="100px";
    this.ele.style.width="200px";

    this.numberEle=document.createElement("div");
    this.numberEle.classList.add("box");
    this.numberEle.style.fontSize="18px";
    this.numberEle.style.textAlign="center";
    this.numberEle.style.padding = "30px";
    this.numberEle.innerHTML=this.number;
    this.ele.appendChild(this.numberEle);

    this.ele.addEventListener("click", function(){
        that.addUp();
    });

    document.body.appendChild(this.ele);

}

square.prototype.addUp = function(){
    this.number++;
    this.numberEle.innerHTML=this.number;
}

for(var i=0; i<data.length; i++){
    squares.push(new square(data[i].color))
}


