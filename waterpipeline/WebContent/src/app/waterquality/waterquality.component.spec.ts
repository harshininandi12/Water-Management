import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterqualityComponent } from './waterquality.component';

describe('WaterqualityComponent', () => {
  let component: WaterqualityComponent;
  let fixture: ComponentFixture<WaterqualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterqualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
