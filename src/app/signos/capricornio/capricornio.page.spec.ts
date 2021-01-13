import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapricornioPage } from './capricornio.page';

describe('CapricornioPage', () => {
  let component: CapricornioPage;
  let fixture: ComponentFixture<CapricornioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapricornioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapricornioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
