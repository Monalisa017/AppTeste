import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AriesPage } from './aries.page';

describe('AriesPage', () => {
  let component: AriesPage;
  let fixture: ComponentFixture<AriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
