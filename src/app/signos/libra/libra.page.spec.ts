import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibraPage } from './libra.page';

describe('LibraPage', () => {
  let component: LibraPage;
  let fixture: ComponentFixture<LibraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
