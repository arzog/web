class MaVoiture {
	constructor (nom,posX,posY,direction,conso,tankMax,km) {
	this.nom=nom;
	this.posX=posX;
	this.posY=posY;
	this.direction=direction;
    this.conso=conso;
    this.tank=tankMax;
    this.tankMax = tankMax;
    this.km = 0;
	}

	changeDir(num) {
		switch (num) {
			case 1 : this.direction="D";
			break;
			case 2 : this.direction="H";
			break;
			case 3 : this.direction="G";
			break;
			case 4 : this.direction="B";
			break;
			}
	}

	avance(distance) {
		switch (this.direction) {
			case "D" : this.posX+=distance;
			break;
			case "H" : this.posY+=distance;
			break;
			case "G" : this.posX-=distance;
			break;
			case "B" : this.posY-=distance;
			break;
			}
            if(this.consomme(distance) == -1) {
                return -1;
            } else {
                this.km += distance;
            }
	}

	affiche() {
		console.log(this.nom," se trouve en (",this.posX,",",this.posY,")");
	}

    consomme(distance) {
        let carbConso = (this.conso/100)*distance;
        if(this.tank - carbConso <= 0) {
            console.warn("il reste " + Math.round(Matitine.tank*100)/100 + " litres de carburant");
            if (prompt("Voulez-vous utiliser votre bidon ?","yes") === "yes"){
                this.remplir(10);
                this.tank -= carbConso;
             }else {
                 console.log("j'espère que vous aimez marcher");
                 return -1;
             }
        } else {
            this.tank -= carbConso;
        }

    }

    remplir(litres){
        if (litres > this.tankMax) {
            console.warn("votre réservoir ne peut contenir que " + this.tankMax + " litres");
            this.tank = this.tankMax;
        } else {
            this.tank += litres;
        }
    }

    autonomie() {
        let autonomie = (100 / this.conso) * this.tank;
        console.log("il reste "+Math.round(autonomie*100)/100+" km d'autonomie");
    }
};

Matitine = new MaVoiture("Titine",10,10,1,6.5,60);
Matitine.affiche();
let cptI,tmp=1;

Matitine.autonomie();

for (cptI= 1; cptI <= 15; cptI++) {

    if(tmp >= 4) tmp = 1;
    if(cptI == 8) Matitine.autonomie();

	Matitine.changeDir(tmp);
	if(Matitine.avance(80) == -1) {
        console.log("fin de course");
        console.log("distance parcourue : "+Matitine.km + "Km");
        break;
    }
	Matitine.affiche();

    tmp++;   
}
console.log("distance parcourue : "+Matitine.km + "Km");
console.log("essence restant : "+Math.round(Matitine.tank*100)/100 + "L");
Matitine.remplir(Number(prompt("Combien de litres voulez-vous mettre ?")));

