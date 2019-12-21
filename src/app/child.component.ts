import { Component, EventEmitter, Input, Output} from '@angular/core'; 
      
@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: ['./app.component.css']
})
export class ChildComponent { 
    private _rowText: string = "Даровки";
    @Input() set rowText(text: string)
    {
        if (text == "Привет")
        {
            this._rowText = "Буфет"
        }
        else
        {
            this._rowText = text;
        }
    };
    get rowText(){
        return this._rowText;
    };
    @Input() public userName:string;
    @Output() public userNameChanged = new EventEmitter<string>();
    @Output() public onChanged = new EventEmitter<boolean>();

    change(increased: boolean) {
        this.onChanged.emit(increased);
    }    
    onNameChanged(model: string){
         
        this.userName = model;
        this.userNameChanged.emit(model);
    }
}