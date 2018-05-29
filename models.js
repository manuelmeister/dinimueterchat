class Button {
    get callback() {
        return this._callback;
    }
    
    set callback(value) {
        this._callback = value;
    }
    get impact() {
        return this._impact;
    }
    
    set impact(value) {
        this._impact = value;
    }
    get text() {
        return this._text;
    }
    
    set text(value) {
        this._text = value;
    }
    constructor(text, impact, callback){
        this._text = text;
        this._impact = impact;
        this._callback = callback;
    }
}