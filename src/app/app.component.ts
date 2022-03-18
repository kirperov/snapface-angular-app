import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Création de propriété FaceSnap et initialisaton dans ngOnInit()
  mySnap!: FaceSnap;
  mySecondSnap!: FaceSnap;
  myThirdSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'My best friend !',
      'https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_960_720.jpg',
      new Date(),
      0
    );

    this.mySecondSnap = new FaceSnap(
      'Mountain',
      'My voyage to the mountain',
      'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg',
      new Date(),
      0
    );

    this.myThirdSnap = new FaceSnap(
      'Good restaurant',
      'My meal was good',
      'https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380_960_720.jpg',
      new Date(),
      0
    );
  }
}
