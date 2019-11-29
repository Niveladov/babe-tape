import { Input, Component } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
               <P>А вот что: {{rowText}}!</P>`,
    styleUrls: ['./app.component.css']
})
export class ChildComponent { 
    private _rowText: string = "Даровки";

    @Input() set rowText(text:string)
    {
        if (text == "Привет!")
        {
            this._rowText = "Хуй те, а ни привет!"
        }
        else
        {
            this._rowText = text;
        }
    };

    get rowText(){
        return this._rowText;
    };
}