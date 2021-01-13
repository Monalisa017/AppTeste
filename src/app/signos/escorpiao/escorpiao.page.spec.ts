import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscorpiaoPage } from './escorpiao.page';

describe('EscorpiaoPage', () => {
  let component: EscorpiaoPage;
  let fixture: ComponentFixture<EscorpiaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscorpiaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscorpiaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
