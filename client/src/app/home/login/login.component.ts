import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() displaySignup: boolean;
  @Output() displaySignupChange = new EventEmitter<boolean>();

  ngOnInit() {}

  handleSignupClick() {
    this.displaySignupChange.emit(true);
  }
}
