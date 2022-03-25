import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
// Création de propriété avec le type FaceSnap pour qu'il puisse être enjecté de l'exterieur
  faceSnap!: FaceSnap;
  // Propriétés por les données
  snapped!: boolean;
  btnText!: string; 

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }
  // Appelée 1 fois par instance au moment de la création (Initialisation de données en dur mais possible du serveur ou API) 
  /* La méthode  ngOnInit()  est appelée automatiquement par Angular
  au moment de la création de chaque instance du component. 
  Elle permet notamment d'initialiser des propriétés. */
  ngOnInit() {
    this.snapped = false;
    this.btnText = "Oh Snap!";
    // + transform string on number
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if(this.snapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, false);
      this.snapped = false;
      this.btnText = "Oh Snap!";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, true);
      this.snapped = true;
      this.btnText = "Oops, un Snap!";
    }
  }
}
