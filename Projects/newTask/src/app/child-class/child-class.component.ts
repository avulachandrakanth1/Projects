import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { FactorialService } from '../factorial.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child-class',
  templateUrl: './child-class.component.html',
  styleUrls: ['./child-class.component.scss']
})
export class ChildClassComponent implements OnInit {
  @Input()usersData;
  @Output() childEvent= new EventEmitter();
  fact
  
  constructor(private factorialService:FactorialService) { }

  ngOnInit(): void {
    this.fact=this.factorialService.factorial(5);
    console.log(this.factorialService.f)
// this.fact=this.factorialService.factorial(5)
  }
  user(users){
      this.childEvent.emit(users)
  }

}
