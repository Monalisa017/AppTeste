import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemeosPage } from './gemeos.page';

describe('GemeosPage', () => {
  let component: GemeosPage;
  let fixture: ComponentFixture<GemeosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemeosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemeosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
