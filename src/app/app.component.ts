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
    this.mySnap = {
      title: 'Archibald',
      description: 'My best friend !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_960_720.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: "Marseille"
    };

    this.mySecondSnap = {
      title: 'Mountain',
      description: 'My voyage to the mountain',
      imageUrl: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: "Mountains"
    };

    this.myThirdSnap = {
      title: 'Good restaurant',
      description: 'My meal was good',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380_960_720.jpg',
      createdDate: new Date(),
      snaps: 0
    };
  }
}
