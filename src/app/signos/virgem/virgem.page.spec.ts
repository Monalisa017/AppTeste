import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirgemPage } from './virgem.page';

describe('VirgemPage', () => {
  let component: VirgemPage;
  let fixture: ComponentFixture<VirgemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirgemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirgemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
