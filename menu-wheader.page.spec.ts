import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuWheaderPage } from './menu-wheader.page';

describe('MenuWheaderPage', () => {
  let component: MenuWheaderPage;
  let fixture: ComponentFixture<MenuWheaderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWheaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
