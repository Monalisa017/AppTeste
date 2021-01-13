import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SagitarioPage } from './sagitario.page';

describe('SagitarioPage', () => {
  let component: SagitarioPage;
  let fixture: ComponentFixture<SagitarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagitarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SagitarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
