


let numberImportantcases=0;
function createElement(prioriti){
    console.log(prioriti)
    numberImportantcases++;
    let ItemDiv=document.createElement("div");
    let ElementItemDiv=document.createElement("div");
    let ButtonItemRadio=document.createElement("input");
    let ElementItemText=document.createElement("div");
    let ButtonItemDelete=document.createElement("img");
    ButtonItemRadio.type="radio";
    ButtonItemDelete.src="img/closeIcon.svg";
    ItemDiv.classList=`element${numberImportantcases} itemList`;
    ElementItemDiv.className=`elementList`;
    ButtonItemRadio.className=`buttonExecute`;
    ElementItemText.className=`textElementList`;
    ButtonItemDelete.className=`signDelete`;
    ElementItemDiv.append(ButtonItemRadio);
    ElementItemDiv.append(ElementItemText);
    ItemDiv.append(ElementItemDiv);
    ItemDiv.append(ButtonItemDelete);
    let textItemList=0;
    if(prioriti==1){
        textItemList=inputWindowFirst.value;
        ElementItemText.textContent=textItemList;
        console.log(listHighToDo);
    listHighToDo.append(ItemDiv);
    }
    else if(prioriti==2){
        textItemList=inputWindowSecond.value;
        ElementItemText.textContent=textItemList;
        listLowToDo.append(ItemDiv);
    }
    inputWindowFirst.value='';
}
function FunctionSortThroughButtonDelete(){
    for(let item of document.querySelectorAll('.signDelete')){
        console.log("Проверка");
        if(!item.addEventListener('click', FunctionsToAdd.FunctionClickButtonDelete)){
        item.addEventListener('click', FunctionsToAdd.FunctionClickButtonDelete)
        }
      }
    }
const FunctionsToAdd={
    
    FunctionClickingPlus: function(event){ 
            createElement(event.target.dataset.priority);
            FunctionSortThroughButtonDelete();

           
        },
    FunctionClickingEnter:function(event){ 
        if (event.keyCode == 13) {
            console.log('Победа')
            createElement(event.target.dataset.priority);
            FunctionSortThroughButtonDelete();
           
            }
        },
        FunctionClickButtonDelete:function(event){
            event.target.closest('.itemList').remove();
            },
    FunctionCreateElement: 12,
}

if(FunctionsToAdd['FunctionCreateElement']==12){
}



inputWindowFirst.addEventListener('keyup', FunctionsToAdd.FunctionClickingEnter); 
signPlus1.addEventListener('click', FunctionsToAdd.FunctionClickingPlus);
inputWindowSecond.addEventListener('keyup', FunctionsToAdd.FunctionClickingEnter); 
signPlus2.addEventListener('click', FunctionsToAdd.FunctionClickingPlus);

