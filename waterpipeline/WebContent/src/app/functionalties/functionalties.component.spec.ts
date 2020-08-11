import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionaltiesComponent } from './functionalties.component';

describe('FunctionaltiesComponent', () => {
  let component: FunctionaltiesComponent;
  let fixture: ComponentFixture<FunctionaltiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionaltiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
