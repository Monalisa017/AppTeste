import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TouroPage } from './touro.page';

describe('TouroPage', () => {
  let component: TouroPage;
  let fixture: ComponentFixture<TouroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TouroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
