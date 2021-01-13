import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AquarioPage } from './aquario.page';

describe('AquarioPage', () => {
  let component: AquarioPage;
  let fixture: ComponentFixture<AquarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AquarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
