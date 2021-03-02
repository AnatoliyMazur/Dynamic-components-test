import {
  Component,
  Inject,
  Injectable, Input,
  OnInit,
} from '@angular/core';

@Injectable({
  providedIn: 'any'
})
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @Input() value;

  constructor() {
  }

  ngOnInit(): void {
  }

}
