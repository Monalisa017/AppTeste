import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaoPage } from './leao.page';

describe('LeaoPage', () => {
  let component: LeaoPage;
  let fixture: ComponentFixture<LeaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
