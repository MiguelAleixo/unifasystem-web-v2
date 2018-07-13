import { Injectable } from '@angular/core';

export class ListService {
    length: number;
    head: any;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    private node(element: any): any {
        return {
            element: element,
            next: null,
        }
    };

    append(element: any): boolean {
        let node = this.node(element);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.length++;
        return true;
    }

    appendFront(element: any): boolean {
        let node = this.node(element);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return true;
    }

    insert(position: number, element: any): boolean {
        if (position >= 0 && position <= this.length) {
            let node = this.node(element);
            let current = this.head;
            let previous;
            let index = 0;

            if (position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++
            return true;
        } else {
            console.error('Posição inexistente')
            return false;
        }
    }

    remove(position: number): boolean {
        if (position >= 0 && position <= this.length) {
            if (position === 0) {
                this.head = this.head.next;
            } else {
                let current = this.head;
                let previous;
                let index = 0;

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next
            }
            this.length--;
            return true;
        }
        return false;
    }

    removeLast(): boolean {
        if (this.head) {
            if (!this.head.next) {
                this.head = null;
            } else {
                let current = this.head;
                let previous;

                while (current.next) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            length--;
            return true;
        }
        return false;
    }

    removeFirst(): boolean {
        if (this.head) {
            if (!this.head.next) {
                this.head = null;
            } else {
                this.head = this.head.next;
            }
            this.length--;
            return true;
        }
        return false;
    }

    indexOf(element: any): number {
        let current;
        let index = 0;

        if (this.head.element === element) {
            return index;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
                index++;
                if (current.element === element) {
                    return index;
                }
            }
            return -1;
        }
    }

    contains(key, value) {
        let index = 0;
        if (this.head.element[key] == value) {
            return {
                element: this.head.element,
                index: index
            }
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
                index++;
                if (current.element[key] == value) {
                    return {
                        element: current.element,
                        index: index
                    }
                }
            }
        }

        console.error('Nada foi encontrado');
        return null;
    }

    size(): number {
        return this.length;
    }

    setSize() {
        this.length = 1;
        let current = this.head;
        while (current.next) {
            this.length++;
            current = current.next
        }
    }

    getHead(): any {
        return this.head;
    }

    setHead(newHead: any): void {
        this.head = newHead;
    }
}