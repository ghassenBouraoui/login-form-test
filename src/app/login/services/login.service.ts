import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUri } from '../../api-uri.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //On fait appel à une ressource de test qui verifie l'utilisateur et renvoie toujours un token
  loginUser(email: string, password: string): Observable<Object> {
    const body = { email: email, password: password };
	console.log("Email envoyé: "+email);
	console.log("Mot de passe envoyé: "+email);
    console.log("Connexion en cours ...");
    const response = this.http.post(
      ApiUri.Uri + '/register',
      body,
      {
        headers: new HttpHeaders().set('content-Type', 'application/json'),
        responseType: 'json'
      }
    )
    return response;
  }
}
