import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { About } from '../models/about.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Nosotros } from '../models/nosotros.interface';


@Injectable({
  providedIn: 'root'
})
export class DataWebService {
  dataAbout: any;
  dataConsejos: any;
  dataBlog: any;

  constructor(private _http: HttpClient, private firestore: AngularFirestore) { }



  getconsejos(){
    return this.firestore.collection('consejos').snapshotChanges();
  }

  // blog(): any {
  //   this._http.get('https://editoriales-ibpr.firebaseio.com/blog.json')
  //     .subscribe(res => {
  //       this.dataBlog = res;
  //     })
  //   return this.dataBlog;
  // }

  getData() {
    return this.firestore.collection('data').snapshotChanges();
  }

  getArticles() {
    return this.firestore.collection('articles').snapshotChanges();
  }

  addPrayer(orderPrayer: any) {
    return this.firestore.collection('data').add(orderPrayer);
  }

  getNosotros(){
    return this.firestore.collection('nosotros').snapshotChanges();
  }

  getObjetivos() {
    return this.firestore.collection('objetivos').snapshotChanges();
  }

  getCreencias(){
    return this.firestore.collection('creencias').snapshotChanges();
  }

  getConfesionFe()  {
    return this.firestore.collection('declaracionDeFe').snapshotChanges();
  }

  getServicios() {
    return this.firestore.collection('servicios').snapshotChanges();
  }
}
