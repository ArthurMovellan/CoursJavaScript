class Hippopotamus {
      constructor(name, weight, tusksSize){
          this.name = name;
          this.weight = weight;
          this.tusksSize = tusksSize;
      }

      toString(){
          console.log(this.name + " weighs " + this.weight + " kilograms and have tusks of " + this.tusksSize + " centimeters");
      }

      swim(){
          this.weight = this.weight - 0.3;
      }

      eat(){
          this.weight = this.weight + 1;
      }

      fight(hippo2){
          console.log("Fight : " + this.name + " VS " + hippo2.name);
        if (this.tusksSize < hippo2.tusksSize){
            console.log(hippo2.name + " wins!");
        }else if (this.tusksSize == hippo2.tusksSize){//si les deux sont égaux on compare le poids
            if (this.weight < hippo2.weight){
                console.log(hippo2.name + " wins!");
            }else{
                console.log(this.name + " wins!");
            }
        }else{
            console.log(this.name + " wins!");
        }
      }

      lifeCycle(){
          console.log("LifeCycle for " + this.name + " starts")
          let d = 0;//nb de jours
          while(d<21){
              let h = 0;//nb d'heures
              while(h<15){
                  //this.eat().eat().swim().swim().swim();
                  this.eat();
                  this.eat();
                  this.swim();
                  this.swim();
                  this.swim();
                  h++;
              }
              this.toString();
              d++;
          }
      }
  }

  let h1 = new Hippopotamus ("Jean-Jacques",300,20);
  let h2 = new Hippopotamus ("Marcel",330,25);

  h1.toString();
  h2.toString();

  h1.fight(h2);

  h1.lifeCycle();

