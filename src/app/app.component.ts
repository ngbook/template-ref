import {
    Component, TemplateRef, ViewChild,
    AfterViewInit, ViewContainerRef
  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    @ViewChild('tpl', {read: TemplateRef})
    tplRef: TemplateRef<any>;

    constructor(private viewContainer: ViewContainerRef) { }

    ngAfterViewInit() {
        if (!this.tplRef) {
            return;
        }
        // 或者直接使用下面的方法
        this.viewContainer.createEmbeddedView(this.tplRef);
    }
}
