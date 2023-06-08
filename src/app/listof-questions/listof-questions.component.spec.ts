import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofQuestionsComponent } from './listof-questions.component';

describe('ListofQuestionsComponent', () => {
  let component: ListofQuestionsComponent;
  let fixture: ComponentFixture<ListofQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
