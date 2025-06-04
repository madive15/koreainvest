import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { menuType } from '../style-guide.models';

/**
 * @class StyleGuideButtonComponent *
 * */
@Component({
  selector: 'style-guide-typography',
  templateUrl: './typography.template.html',
  encapsulation: ViewEncapsulation.None,
})
export class StyleGuideTypographyComponent implements AfterViewInit, OnDestroy {
  @ViewChild('contentWrap') contentWrap: ElementRef;
  @ViewChildren('anchor') anchors: QueryList<ElementRef>;
  typoMenu: Array<menuType> = [
    {
      title: 'Font Type',
      anchor: 'fontStyle',
      desc: 'Font Type',
    },
    {
      title: 'Font Color',
      anchor: 'fontColor',
      desc: 'Font Color',
    },
    // {
    //   title: '가이드 스타일',
    //   anchor: 'guideStyle',
    //   desc: '기능 가이드/알림 스타일 설명',
    // },
    // {
    //   title: '알림 스타일',
    //   anchor: 'alramStyle',
    //   desc: '알림 스타일 설명',
    // },
    {
      title: 'Text Or Background Color',
      anchor: 'textColor',
      desc: 'Text, Background, highlight Color',
    },
  ];

  colorsPalette: string[] = [
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
    'white',
    'gray',
    'gray2',
    'gray3',
    'gray-dark',
    'gray-light',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
    'black',
  ];
  constructor(
    private cd: ChangeDetectorRef,
    private translate: TranslateService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {}
}
