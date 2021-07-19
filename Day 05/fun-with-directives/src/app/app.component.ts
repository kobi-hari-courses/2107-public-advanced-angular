import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef, Injector, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ChipComponent } from './components/chip/chip.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('sp1', {read: ElementRef}) 
  spanElem!: ElementRef;

  @ViewChild('myContainer', {read: ViewContainerRef})
  spanVcr!: ViewContainerRef;

  @ViewChild('template1', {read: TemplateRef}) 
  myTemplate!: TemplateRef<any>;

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private host: ElementRef, 
    private renderer: Renderer2, 
    private hostVcr: ViewContainerRef){

  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.spanElem);
    // console.log(this.spanElem.nativeElement.textContent);
    // this.spanElem.nativeElement.style.backgroundColor = 'yellow';

    // this.renderer.setStyle(this.host.nativeElement, 'background-color', 'lime');
    // this.renderer.setStyle(this.spanElem.nativeElement, 'background-color', 'pink');

    const embeddedView1: EmbeddedViewRef<any> = this.myTemplate.createEmbeddedView({$implicit: 'blue'});
    this.hostVcr.insert(embeddedView1);

    const embeddedView2: EmbeddedViewRef<any> = this.myTemplate.createEmbeddedView({$implicit: 'red'});
    this.hostVcr.insert(embeddedView2);

  }

  addChip(caption?: string) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChipComponent);
    const componentRef = factory.create(this.injector);
    const viewRef = componentRef.hostView;

    console.log(factory);
    console.log(componentRef);
    console.log(viewRef);

    if (caption) {
      componentRef.instance.caption = caption;
    }

    this.spanVcr.insert(viewRef);
  }

}

// 1. ElementRef
// 2. TemplateRef
// 3. ViewRef
//    3a. Embedded View: Created by a TemplateRef
//    3b. Host View: Created by a Component
// 4. ComponentRef
// 5. ViewContainerRef