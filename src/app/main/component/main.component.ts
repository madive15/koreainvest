import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MENU } from '../../shared/menu.arr';

/**
 * @class MainComponent 메인 페이지 *
 * */
@Component({
  selector: 'app-main',
  templateUrl: './main.template.html',
  styleUrls: ['./main.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'main-container',
  },
})
export class MainComponent implements AfterViewInit, OnDestroy {
  menus: any = [...MENU];
  lang = 'kr';
  constructor(private translate: TranslateService, private router: Router) {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
