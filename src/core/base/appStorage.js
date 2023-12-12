export class AppStorage {
    
    //Set Item
    static async guardar(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    //Get item
    static async obtener(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    //Remove item
    static async remover(key) {
        return localStorage.removeItem(key);
    }

    //Clear
    static async limpiar() {
        return localStorage.clear();
    }
}