import { Injectable } from '@angular/core';
//import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class  EmpService {
  flag : boolean;
  
  /*constructor(private httpClient: HttpClient) { 
    
  }
  displayInCart(order: any) {
    this.orders = order;
  }

  getToDisplayInCart() {
    return this.orders;
  }
  
  getToCart() {
    return this.itemToPublish.asObservable();
  }
  
  addToCart(order : any) {
   this.itemToPublish.next(order);
   this.cartItems.push(order);
  }*/
  setUserLoggedIn() {
    this.flag = true;
  }
  setUserLoggedOut() {
    this.flag = false;
  }
  getUserLoggedIn() : boolean {
    return this.flag;
  }
  /*registerCus(student: any) {
    console.log('Inside service...', ' ', student);
    return this.httpClient.post('../cmsbackf/webapi/myresource/registerS', student)
  }
  registerProf(professional : any) {
    return this.httpClient.post('RestAPIImageUpload/webapi/urbanresources/registerP', professional);
  }

  getAllServices() {
    return this.httpClient.get('RestAPIImageUpload/webapi/urbanresources/getAllServices').pipe(retry(10));
  }

  getuser(userName:String, password:String): any {
    console.log(userName, password);
    return this.httpClient.get('webapp/webapi/cmsresourses/getuser/' + userName + '/' + password).toPromise();
  }

  postFile(caption: string, description: string, fileToUpload: File) {
    const endpoint = 'RestAPIImageUpload/webapi/urbanresources/uploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    formData.append('ImageDescription', description);
    return this.httpClient.post(endpoint, formData);
  }*/
}