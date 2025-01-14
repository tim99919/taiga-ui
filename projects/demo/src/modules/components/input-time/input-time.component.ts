import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    ALWAYS_FALSE_HANDLER,
    TuiBooleanHandler,
    TuiTime,
    TuiTimeMode,
} from '@taiga-ui/cdk';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidthT,
    TuiSizeL,
    TuiSizeS,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleDefineOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-time',
    templateUrl: './input-time.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputTimeComponent),
        },
    ],
})
export class ExampleTuiInputTimeComponent extends AbstractExampleTuiControl {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDeclareForm = exampleDeclareForm;
    readonly exampleDefineOptions = exampleDefineOptions;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    cleaner = false;

    control = new FormControl(TuiTime.currentLocal(), Validators.required);

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiTime>> = [
        ALWAYS_FALSE_HANDLER,
        (item: TuiTime) => {
            return String(item) === '06:00' || item > TuiTime.currentLocal();
        },
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidthT[] = ['fixed', 'min'];

    dropdownLimitWidth: TuiDropdownWidthT | null = this.dropdownLimitWidthVariants[0];

    readonly dropdownDirectionVariants: ReadonlyArray<TuiVerticalDirection> = [
        'top',
        'bottom',
    ];

    dropdownDirection: TuiVerticalDirection | null = null;

    dropdownMinHeight = DEFAULT_MIN_HEIGHT;

    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    readonly itemSizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    itemSize: TuiSizeS | TuiSizeL = this.itemSizeVariants[1];

    readonly itemsVariants: ReadonlyArray<ReadonlyArray<TuiTime>> = [
        [],
        tuiCreateTimePeriods(),
    ];

    items = this.itemsVariants[0];

    strict = false;

    readonly modeVariants: ReadonlyArray<TuiTimeMode> = [
        'HH:MM',
        'HH:MM:SS',
        'HH:MM:SS.MSS',
    ];

    mode = this.modeVariants[0];
}
