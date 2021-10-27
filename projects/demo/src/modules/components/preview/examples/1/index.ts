import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {PreviewDialogService} from '@taiga-ui/addon-preview';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {clamp, TuiSwipe} from '../../../../../../../cdk';
import {TuiDialogContext, TuiNotificationsService} from '../../../../../../../core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-preview-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPreviewExample1 {
    index = 0;
    lastIndex = 1;

    @ViewChild('preview')
    readonly preview?: TemplateRef<TuiDialogContext<void>>;

    @ViewChild('contentSample')
    readonly contentSample?: TemplateRef<{}>;

    constructor(
        @Inject(PreviewDialogService)
        private readonly previewService: PreviewDialogService,
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
    ) {}

    get title(): string {
        return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';
    }

    get previewContent(): PolymorpheusContent {
        return this.index === 0 && this.contentSample
            ? this.contentSample
            : 'http://marsibarsi.me/images/1x1small.jpg';
    }

    show() {
        this.previewService.open(this.preview || '').subscribe({
            complete: () => console.log('complete'),
        });
    }

    download() {
        this.notificationsService.show('Downloading...').subscribe();
    }

    delete() {
        this.notificationsService.show('Deleting...').subscribe();
    }

    onSwipe(swipe: TuiSwipe) {
        if (swipe.direction === 'left') {
            this.index = clamp(this.index + 1, 0, this.lastIndex);
        }

        if (swipe.direction === 'right') {
            this.index = clamp(this.index - 1, 0, this.lastIndex);
        }
    }
}