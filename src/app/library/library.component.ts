import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Inject,
  OnInit,
  Optional,
  Type,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {DynamicInterface} from '../dynamic.interface';
import {DYNAMIC_COMPONENT_TYPE} from '../exports';
import {NgComponentOutlet} from "@angular/common";
import {interval} from "rxjs";
import {DynamicGeneratorDirective} from "../dynamic-generator.directive";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicGeneratorDirective) dynamicGenerator: DynamicGeneratorDirective;

  inputs = {value: 0};

  constructor(@Optional() public dynamicComponent: DynamicInterface,
              @Inject(DYNAMIC_COMPONENT_TYPE) public dynamicToken: Type<any>,
              private facroryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    // const component = this.facroryResolver.resolveComponentFactory(this.dynamicToken);
    // this.viewContainerRef.createComponent(component);
  }

  ngAfterViewInit(): void {
    console.log(this.dynamicGenerator.componentInstance);
    let i = 1;
    interval(5000).subscribe(() => {
      console.log(this.dynamicGenerator)
      this.inputs.value = i++;

      console.log(this.inputs);
    })
  }

}
