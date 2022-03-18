import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
// Decorator (brings modifications to the class)
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
// OnInit implementé la methode
export class FaceSnapComponent implements OnInit {
  // Création de propriété avec le type FaceSnap pour qu'il puisse être enjecté de l'exterieur
  @Input() faceSnap!: FaceSnap;
  // Propriétés por les données
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  snapped!: boolean;
  btnText!: string;
  imageUrl!: string;
  
  // Appelée 1 fois par instance au moment de la création (Initialisation de données en dur mais possible du serveur ou API) 
 /* La méthode  ngOnInit()  est appelée automatiquement par Angular
  au moment de la création de chaque instance du component. 
  Elle permet notamment d'initialiser des propriétés. */
  ngOnInit() {
    this.snapped = false;
    this.btnText = "Oh Snap!";
  }

  onSnap() {
    if(this.snapped) {
      this.faceSnap.snaps--;
      this.snapped = false;
      this.btnText = "Oh Snap!";
    } else {
      this.faceSnap.snaps++;
      this.snapped = true;
      this.btnText = "Oops, un Snap!";
    }
  }
}