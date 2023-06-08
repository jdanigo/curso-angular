import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy{

  public messageChild: string = "Probando ando"

  public messageParent: string = "";

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    //se ejecuta cuando se detectan cambios en las propiedades de entrada del componente.
    console.log("1")
  }

  ngOnInit(): void {
    //se ejecuta despues que se crea un componente
    console.log("2")
  }

  ngDoCheck(): void {
    //Se ejecuta cada vez que se produce una detección de cambios en el componente o componentes secundarios.
    console.log("3")
  }

  ngAfterContentInit(): void {
    //Se ejecuta despues que el contenido proyectado en el componente haya finalizado
    console.log("4")
  }

  ngAfterViewInit(): void {
    // Se ejecuta despues que la vista del componente haya sido inizializada
    console.log("5")
  }

  ngOnDestroy(): void {
    // Se ejecuta cuando se va a destruir el componente
    console.log("se ha destruido el componente")
  }

  receiveMessageFromChild($event: any){
    console.log("mostrando evento del hijo", $event);
    this.messageParent = $event;
  }
  
}
