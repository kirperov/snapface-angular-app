import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

// L'objet de configuration qui spécifie  providedIn: 'root'  dit à Angular d'enregistrer ce service à la racine de l'application
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'My best friend !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_960_720.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: "Marseille"
        },
        {
            id: 2,
            title: 'Mountain',
            description: 'My voyage to the mountain',
            imageUrl: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: "Mountains"
        },
        {
            id: 3,
            title: 'Good restaurant',
            description: 'My meal was good',
            imageUrl: 'https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380_960_720.jpg',
            createdDate: new Date(),
            snaps: 0
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    snapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id == faceSnapId);
        if(faceSnap) {
            faceSnap.snaps++;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

    unsnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id == faceSnapId);
        if(faceSnap) {
            faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }
}