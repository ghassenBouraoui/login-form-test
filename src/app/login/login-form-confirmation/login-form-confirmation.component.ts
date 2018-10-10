import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Importation des services*/
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';

/* Le composant de la deuxieme etape */
@Component({
  selector: 'app-login-form-confirmation',
  templateUrl: './login-form-confirmation.component.html',
  styleUrls: ['./login-form-confirmation.component.css']
})

export class LoginFormConfirmationComponent implements OnInit {
  scrolledBottom=false; //indique si l'utilisateur a scrollé tout le texte
  agree=false;          //indique l'etat de la checkbox

  constructor(
    private dataService:DataService,
    private loginService:LoginService,
    private router:Router
    ) { }

  ngOnInit() {
    // Empêcher l'accés directe et redirige l'utilisateur a l'étape 1
    if (!(this.dataService.email && this.dataService.password))
    this.router.navigate(['/login']) 
  }

  onScroll(event: any){
    if (event.target.offsetHeight + event.target.scrollTop == event.target.scrollHeight) {
      this.scrolledBottom=true;
    }
  }

  sendForm() {
    this.loginService.loginUser(this.dataService.email,this.dataService.password)
    .subscribe(data => {
      localStorage.setItem('token',data["token"])
      console.warn("Token sauvegardé dans localStorage !")
      alert("Exercice terminé, verifier la console :) ")
    })
  }

}
