import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'; 
import { MasterService } from './master.service';

@Injectable()
export class MoviesService extends MasterService { 
    
    constructor(http:Http) { 
        super(http, "movies");
    }
     
}