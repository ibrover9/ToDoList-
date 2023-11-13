import {createElement} from './createElement.js';
import {ButtonDeleteTask} from './DeleteTask.js';


export const FunctionsToClick={
    
    ClickingPlus: function(event){ 
        try {
            createElement(event.target.dataset.priority);
            ButtonDeleteTask();
        } catch (error) {
            alert( " Error message: " +"\n"+ error.message+"\nError stack: \n"+error.stack);
        }
           
           
        },
    ClickingEnter:function(event){ 
        if (event.keyCode == 13) {
            try {
                createElement(event.target.dataset.priority);
                ButtonDeleteTask();
            } catch (error) {
                alert( " Error message: " +"\n"+ error.message+"\nError stack: \n"+error.stack);
            }
           
           
            }
        },
    
    FunctionCreateElement: 12,
}

if(FunctionsToClick['FunctionCreateElement']==12){
}