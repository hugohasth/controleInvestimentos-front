import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

import { SetorFormComponent } from './setor-form.component';

describe('SetorFormComponent', () => {
  let component: SetorFormComponent;
  let fixture: ComponentFixture<SetorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SetorFormComponent, HttpClientTestingModule, RouterTestingModule, MatSnackBarModule, NoopAnimationsModule],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: { snapshot: { data: { setor: { _id: '', nome: '', porcentagem: null, valor: null, ativos: [] } } } }
      }
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(SetorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
