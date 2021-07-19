import { Type } from '@angular/core';
import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef, Injector, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ChipComponent } from './components/chip/chip.component';
import { OptionAComponent } from './components/option-a/option-a.component';
import { OptionBComponent } from './components/option-b/option-b.component';
import { OptionCComponent } from './components/option-c/option-c.component';

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


  mySelectedComponentType: Type<any> = OptionAComponent;

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private host: ElementRef, 
    private renderer: Renderer2, 
    private hostVcr: ViewContainerRef){

  }
  ngOnInit(): void {
    setInterval(() => {
      const val = Math.floor(Math.random() * 3);

      if (val === 0) {
        this.mySelectedComponentType = OptionAComponent;
      } else if (val === 1) {
        this.mySelectedComponentType = OptionBComponent;
      } else {
        this.mySelectedComponentType = OptionCComponent;
      }

    }, 3000)
  }

  ngAfterViewInit(): void {
    // console.log(this.spanElem);
    // console.log(this.spanElem.nativeElement.textContent);
    // this.spanElem.nativeElement.style.backgroundColor = 'yellow';

    // this.renderer.setStyle(this.host.nativeElement, 'background-color', 'lime');
    // this.renderer.setStyle(this.spanElem.nativeElement, 'background-color', 'pink');

    const embeddedView1: EmbeddedViewRef<any> = this.myTemplate.createEmbeddedView({color: 'blue'});
    this.hostVcr.insert(embeddedView1);

    const embeddedView2: EmbeddedViewRef<any> = this.myTemplate.createEmbeddedView({color: 'red'});
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