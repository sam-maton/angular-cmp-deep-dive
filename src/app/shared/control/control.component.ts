import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';

  label = input.required();
  // private el = inject(ElementRef);

  // @HostBinding('click')
  // onClick() {
  //   console.log('host clicked!');
  //   console.log(this.el);
  // }
}
