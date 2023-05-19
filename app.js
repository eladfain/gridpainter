let color="#000000",
ispressed='';


function init(){
    setHight();
    setWidth();
    document.getElementById('generate').addEventListener('click',generate);
    document.getElementById('heigth').addEventListener('input',setHight);
    document.getElementById('width').addEventListener('input',setWidth)
    document.getElementById('color').addEventListener('change',
    e=>color=e.target.value
    );
    document.addEventListener('mousedown',(e)=>{
        
    });
    document.addEventListener('mouseup',()=>ispressed='');
    document.getElementById("erase").addEventListener('click',erase);
    document.getElementById("clear").addEventListener('click',clear)
}

function generate(){
    const height=document.getElementById("heigth").value;
    const width=document.getElementById("width").value;
    const gridContainer=document.getElementById('grid');
    gridContainer.innerHTML='';
    for(let i=0;i<height;i++){
        const row=document.createElement('div');
        row.classList.add("flex-row");
        for(j=0;j<width;j++){
            const cell=document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
    document.querySelectorAll('.cell').forEach(cell=>cell.addEventListener('mouseenter',sprayPaint))
    document.querySelectorAll('.cell').forEach(cell=>cell.addEventListener('mousedown',paint))
}
function sprayPaint(e){
    if(ispressed===0){
        e.target.style.background=color;
    }else if(ispressed===2){
        e.target.style.background="#ffffff";
    }
}
function paint(e){
    ispressed=e.button;
    if(ispressed===0){
        e.target.style.background=color;
    }else if(ispressed===2){
        e.target.style.background="#ffffff";
    }
}
function setHight(){
    const height=document.getElementById("heigth").value;
    document.getElementById("heigthValue").innerHTML=height;
}
function setWidth(){
    const width=document.getElementById("width").value;
    document.getElementById("widthValue").innerHTML=width;
}
function clear(){
    document.querySelectorAll('.cell').forEach(cell=>cell.style.background="#ffffff")
}
function erase(){
    color="#ffffff";
    document.getElementById('color').value=color;
}
init();