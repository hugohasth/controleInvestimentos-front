import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SetoresComponent } from './setores.component';

describe('SetoresComponent', () => {
  let component: SetoresComponent;
  let fixture: ComponentFixture<SetoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SetoresComponent, HttpClientTestingModule, RouterTestingModule, MatSnackBarModule, MatDialogModule, NoopAnimationsModule]
})
    .compileComponents();

    fixture = TestBed.createComponent(SetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
