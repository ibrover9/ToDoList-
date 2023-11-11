import {createElement} from './createElement.js';
import {ButtonDeleteTask} from './DeleteTask.js';


export const FunctionsToClick={
    
    ClickingPlus: function(event){ 
            createElement(event.target.dataset.priority);
            ButtonDeleteTask();

           
        },
    ClickingEnter:function(event){ 
        if (event.keyCode == 13) {
            console.log('Победа')
            createElement(event.target.dataset.priority);
            ButtonDeleteTask();
           
            }
        },
    
    FunctionCreateElement: 12,
}

if(FunctionsToClick['FunctionCreateElement']==12){
}