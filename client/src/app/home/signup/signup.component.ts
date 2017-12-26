import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() displaySignup: boolean;
  @Output() displaySignupChange = new EventEmitter<boolean>();

  ngOnInit() {}

  handleLoginClick() {
    this.displaySignupChange.emit(false);
  }
}
