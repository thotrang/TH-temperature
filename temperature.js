class Temperature{
    celcius;
    constructor(celcius){
        this.celcius=celcius;
    }
    getFahrenheit() {
        return 9/5 * this.celsius + 32;
    }

    getFelvins() {
        return this.celsius + 273.15;
    }
}
