import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecommentComponent } from './tablecomment.component';

describe('TablecommentComponent', () => {
  let component: TablecommentComponent;
  let fixture: ComponentFixture<TablecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablecommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
