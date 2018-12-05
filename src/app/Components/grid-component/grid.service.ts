import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';

@Injectable()
export class GridService {
 
    constructor(public http:Http) {}
 
    // Uses http.get() to load data from a single API endpoint
    getbuildInfo() {
        console.log("entered here");
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.get('http://localhost:8080/api/javainuse');
     
    }
}
