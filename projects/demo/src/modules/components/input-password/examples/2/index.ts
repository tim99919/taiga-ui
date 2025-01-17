import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
    TUI_INPUT_PASSWORD_OPTIONS,
    TUI_PASSWORD_TEXTS,
} from '@taiga-ui/kit';
import {of} from 'rxjs';

@Component({
    selector: 'tui-input-password-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_INPUT_PASSWORD_OPTIONS,
            useValue: {
                ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
                icons: {
                    hide: 'tuiIconLockLarge',
                    show: 'tuiIconLockOpenLarge',
                },
            },
        },
        {
            provide: TUI_PASSWORD_TEXTS,
            useValue: of(['']),
        },
    ],
})
export class TuiInputPasswordExample2 {
    testForm = new FormGroup({
        testValue: new FormControl('password', Validators.required),
    });
}
