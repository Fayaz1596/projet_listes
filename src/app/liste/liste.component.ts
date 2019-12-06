import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit 
{
  liste;
  constructor(private http: HttpClient) 
  { 
  }

  ngOnInit() 
  {
      this.getFilms();
  }

  getFilms()
  {
      fetch('https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be')  // Appelle une adresse pour retourner une promesse
      .then(data => data.json()) // Traite la réponse de la promesse et convertit en JSON
      /* .then(data => console.log(data)) */
      .then(result => this.liste = result.results) // Quand la donnée est traitée
      .catch(err => console.log(err)); // Si la réponse a échouée
      
      /* this.http.get('https://api.punkapi.com/v2/beers')
        .subscribe(data => this.liste = data); */
  }
}
