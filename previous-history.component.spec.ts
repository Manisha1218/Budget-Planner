import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousHistoryComponent } from './previous-history.component';

describe('PreviousHistoryComponent', () => {
  let component: PreviousHistoryComponent;
  let fixture: ComponentFixture<PreviousHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
