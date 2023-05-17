import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresListComponent } from './setores-list.component';

describe('SetoresListComponent', () => {
  let component: SetoresListComponent;
  let fixture: ComponentFixture<SetoresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetoresListComponent]
    });
    fixture = TestBed.createComponent(SetoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
