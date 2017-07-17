import { Component } from '@angular/core';

@Component({
    selector: 'sky-test-cmp',
    templateUrl: './inline-help.component.fixture.html'
})
export class InlineHelpTestComponent {
    public buttonIsClicked: boolean = false;

    public buttonClicked() {
        this.buttonIsClicked = true;
    }
}