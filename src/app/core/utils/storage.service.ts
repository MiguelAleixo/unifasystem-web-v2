import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() {
    }

    public setNewItem(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    public getItem(key): string {
        if (window.localStorage[key]) {
            return window.localStorage.getItem(key);
        }
        console.error('Chave não encontrada');
        return null;
    }

    public removeItem(key): boolean {
        if (this.getItem(key)) {
            window.localStorage.removeItem(key);
            return true;
        }
        console.error('Chave não encontrada');
        return false;
    }
}