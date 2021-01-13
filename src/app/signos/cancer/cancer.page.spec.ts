import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancerPage } from './cancer.page';

describe('CancerPage', () => {
  let component: CancerPage;
  let fixture: ComponentFixture<CancerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
