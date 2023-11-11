const DeleteElementList=function(event){
    event.target.closest('.itemList').remove();
}


export function  ButtonDeleteTask(){
    for(let item of document.querySelectorAll('.signDelete')){
        console.log("Проверка");
        if(!item.addEventListener('click', DeleteElementList)){
        item.addEventListener('click', DeleteElementList);
        }
      }
    }