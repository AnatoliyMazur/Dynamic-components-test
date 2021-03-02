import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appDynamicGenerator]'
})
export class DynamicGeneratorDirective implements OnInit, OnChanges {
  @Input() appDynamicGenerator: Type<any>;
  @Input() inputs: any;

  componentInstance;

  constructor(private facroryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
  }

  ngOnInit(): void {
    const component = this.facroryResolver.resolveComponentFactory(this.appDynamicGenerator);

    const componentRef = this.viewContainerRef.createComponent(component);
    this.componentInstance = componentRef.instance;

    Object.entries(this.inputs).forEach(([key, value]) => componentRef.instance[key] = value);
  }
}
