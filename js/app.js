function enableEditMode (){
    richTextField.document.designMode = 'On';
}

function textStyle (cmd){
    richTextField.document.execCommand(cmd, false, null);
}

function textStyleSelect (cmd, arg){
    richTextField.document.execCommand(cmd, false, arg);
}

enableEditMode();