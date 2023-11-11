
let numberImportantcases=0;

export function createElement(prioriti){
    let textItemList=0;
    numberImportantcases++;
    const ItemDiv=document.createElement("div");
    ItemDiv.classList=`element${numberImportantcases} itemList`;
    if(prioriti==='1'){
        textItemList=inputWindowFirst.value;
        listHighToDo.append(ItemDiv);
    }
    else if(prioriti==='2'){
        textItemList=inputWindowSecond.value;
        listLowToDo.append(ItemDiv);
    }
    ItemDiv.innerHTML=`<div class="elementList">
                            <input class="buttonExecute" type="radio">
                             <div class="textElementList">${ textItemList}</div>
                        </div>
                        <img class="sign signDelete" src="img/closeIcon.svg" alt="buttonDeleteElement">`
    
    
    inputWindowFirst.value='';
}