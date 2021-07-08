import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    public id: number;
    private history: string[] | null= null;

    constructor() {
        this.id = Math.floor(Math.random() * 1000000);
        console.log('History Service was created with id = ' + this.id);
    }

    audit(txt: string) {
        this.history!.push(txt);
        console.log(this.history);
    }

    delay(): Promise<void> {
        return new Promise(resolve => {
            setTimeout(resolve, 5000);
        });
    }

    async initializeHistory(): Promise<void> {
        await this.delay();
        this.history = [];
        console.log('history initialization completed');
    }

}