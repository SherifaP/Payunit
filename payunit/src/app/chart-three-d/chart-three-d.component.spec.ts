import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartThreeDComponent } from './chart-three-d.component';

describe('ChartThreeDComponent', () => {
  let component: ChartThreeDComponent;
  let fixture: ComponentFixture<ChartThreeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartThreeDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartThreeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
