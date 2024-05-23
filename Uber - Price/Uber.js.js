class uberCalculate {
      constructor(baseFaire,costpermile,costperminute){
               this.baseFaire = baseFaire;
               this.costpermile = costpermile;
               this.costperminute = costperminute;
      }

      calculationPrice(distance,time){
            const costpermile = this.costpermile * distance;
            const costperminute = this.costperminute * time;
            const totalprice = this.baseFaire + costpermile + costperminute;
            return totalprice;
      }
}

    const baseFaire = 2.50;
    const costpermile = 1.75;
    const costperminute = 1.75;

    const uberCalculater = new uberCalculate (baseFaire,costpermile,costperminute);
    
    const time = 30;
    const distance = 20;

    const price = uberCalculater.calculationPrice(distance, time);
    console.log(`The total price uber = ${price.toFixed(2)}`);
    