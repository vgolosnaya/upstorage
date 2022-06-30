class StorageService<T extends { id: string }> {
    storage;
    key: string;
    
    constructor(key: string) {
        this.storage = localStorage;
        this.key = key;
    }
    
    set dataIds(dataIds: string[]) {
        this.storage.setItem(this.key, JSON.stringify(dataIds));
    }
    
    get dataIds(): string[] {
        return JSON.parse(this.storage.getItem(this.key) || '[]');
    }
    
    get data(): T[] {
        const result: T[] = [];
        this.dataIds.forEach((id) => {
            result.unshift(JSON.parse(this.storage.getItem(`${this.key}_${id}`)|| '{}'));
        });
        return result;
    }
    
    addItem(item: T) {
        this.storage.setItem(`${this.key}_${item.id}`, JSON.stringify(item));
        this.dataIds = [ ...this.dataIds, item.id ];
    }
    
    clear() {
        this.dataIds.forEach((id)=> {
            this.storage.removeItem(`${this.key}_${id}`);
        });
        this.storage.removeItem(this.key);
    }
}

export default StorageService;