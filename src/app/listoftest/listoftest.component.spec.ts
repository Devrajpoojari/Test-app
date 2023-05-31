import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoftestComponent } from './listoftest.component';

describe('ListoftestComponent', () => {
  let component: ListoftestComponent;
  let fixture: ComponentFixture<ListoftestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListoftestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoftestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
