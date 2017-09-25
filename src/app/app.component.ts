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
        // 取到EmbeddedViewRef对象
        const viewRef = this.tplRef.createEmbeddedView(null);
        // 拿到rootNodes节点内容
        const nodes = viewRef.rootNodes;
        // 得到在页面中模板
        const tplDom = this.tplRef.elementRef.nativeElement;
        // 遍历所有的节点一个个插入
        nodes.forEach((node: any) => {
            // 插入到模板的前面
            tplDom.parentNode.insertBefore(node, tplDom);
        });
        // 接入Angular内核的变化检测中
        viewRef.detectChanges();

        // 或者直接使用下面的方法
        this.viewContainer.createEmbeddedView(this.tplRef);
    }
}
