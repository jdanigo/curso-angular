import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  
  @Input() parentData : string | undefined;
  @Output() childEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
    console.log("mostrando información de entrada desde el componente padre", this.parentData)    
  }

  sendMessageToParent(){
    this.childEvent.emit("Mensaje desde el componente hijo")
  }

}
