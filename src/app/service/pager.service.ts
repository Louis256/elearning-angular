
/** 
export class PagerService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 6  ) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        // ensure current page isn't out of range
        if (currentPage < 1) { 
            currentPage = 1; 
        } else if (currentPage > totalPages) { 
            currentPage = totalPages; 
        }
        
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
*/
import * as _ from "lodash"
export class PagerService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 1) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;
        // if (totalPages <= 10) {
        //     // less than 10 total pages so show all
        //     startPage = 1;
        //     endPage = totalPages;
        // } else {
        //     // more than 10 total pages so calculate start and end pages
        //     if (currentPage <= 6) {
        //         startPage = 1;
        //         endPage = 10;
        //     } else if (currentPage + 4 >= totalPages) {
        //         startPage = totalPages - 9;
        //         endPage = totalPages;
        //     } else {
        //         startPage = currentPage - 5;
        //         endPage = currentPage + 4;
        //     }
        // }
        
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage+2;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}


/** 
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators;

interface PageParams {
    from: number
    size: number
  }
export interface ListParams {
  pagination: PageParams;
}
export interface Additions {
    [key: string]: any;
}
export interface Customizable {
    additions?: Additions;
}
export interface Todo extends Customizable {
    title: string;
    done: boolean;
    tags: string;
    dueDate: string;
}
export interface TodoItem extends Customizable {
    id: string;
    value: Todo;
}

export interface TodoList {
    count: number;
    items: Array<String>;
  }

export declare type TodoItems = Array<String>;



@Injectable()
export class PagerService {
    
  private readonly listParams = new ReplaySubject<ListParams>(1);
  
 
  readonly items: Observable<TodoList> = this.listParams.pipe(
    switchMap(params => this.data.getTodos(PaginationParams.toHttpParams(params.pagination), new HttpHeaders({}))),
    map(response => response.body),
  );

  constructor(private readonly data: TodoDataHttpService) {}
 
  updateList(params: ListParams): void {
    this.listParams.next(params);
  }
}
*/