import { Component, OnInit } from '@angular/core';

// Decorator (brings modifications to the class)
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
// OnInit implementé la methode
export class FaceSnapComponent implements OnInit {
  // Propriétés por les données
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  
  // Appelée 1 fois par instance au moment de la création (Initialisation de données en dur mais possible du serveur ou API) 
 /* La méthode  ngOnInit()  est appelée automatiquement par Angular
  au moment de la création de chaque instance du component. 
  Elle permet notamment d'initialiser des propriétés. */
  ngOnInit() {
    this.title = 'Archibald';
    this.description = "My best friend!";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_960_720.jpg";
  }

  onAddSnap() {
    this.snaps++;
  }
}