import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable({
    providedIn: 'root'
})
export class AdditionService {
    public id: number;

    constructor(
        private historyService: HistoryService
    ) {
        this.id = Math.floor(Math.random() * 1000000);
        console.log('Addition Service was created with id = ' + this.id);
    }

    add(op1: number, op2: number): number {
        this.historyService.audit(`Doing addition of ${op1} and ${op2}`);
        return op1 + op2;
    }
}