let gridList = ""
let singleColorMode = true;
let randomColorMode = false;




const gridDiv = document.querySelector('.gridArea');
const slider = document.querySelector('#dimensionSlider');
const color = document.querySelector('#colorpicker');
const pDimensions = document.querySelector('.buttons p');

let pValue = slider.value + " x " + slider.value
pDimensions.textContent = pValue;

slider.addEventListener('click',function(){
    for (const div of gridList){
        div.remove();
    }
    gridCreator(slider.value);
    pValue = slider.value + " x " + slider.value
    pDimensions.textContent = pValue;
})

let gridNumber = slider.value;



gridCreator(gridNumber);

function gridCreator(gridNumber){
    let gridTemplate = 'grid-template-columns: repeat('+gridNumber+', 1fr);'
    gridDiv.style.cssText= gridTemplate; 
    console.log(gridNumber)
    for(let n = 0; n < (gridNumber*gridNumber); n++){
        let newDiv = document.createElement('div');
        gridDiv.appendChild(newDiv);
        newDiv.style.cssText = 'border: 1px solid rgb(247, 243, 243);'
        
    }
    gridList = document.querySelectorAll('.gridArea div');
    for (const div of gridList){
        div.addEventListener('mouseenter',function(){
            let colorTemplate = "";
            if(singleColorMode == true){
                colorTemplate = 'background-color: ' + color.value;
            }
            else{
                colorTemplate = 'background-color: '+ randomColor();
            }
            div.style.cssText = colorTemplate;
        })
    }
}
// console.log(gridList)

function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function(){
    for (const div of gridList){
        div.style.cssText = 'background-color: rgb(247, 247, 247); border: 1px solid rgb(247, 243, 243);'
    }
});

const singleBtn = document.querySelector('.singleColor')
const randomBtn = document.querySelector('.randomColors')
singleBtn.style.cssText = 'background-color: #d8e2dc'
singleBtn.addEventListener('click', function(){
    singleBtn.style.cssText = 'background-color: #d8e2dc'
    randomBtn.style.cssText = 'background-color: none'
    singleColorMode = true;
    randomColorMode = false;
})
randomBtn.addEventListener('click', function(){
    singleBtn.style.cssText = 'background-color: none'
    randomBtn.style.cssText = 'background-color: #d8e2dc'
    singleColorMode = false;
    randomColorMode = true;
})
