# web

exo:

int consommation = 4,6 L / 100Km
int réservoir = 60 L
consommer() 
    tmp = nbre km
    carbConso = (4,6/100)*tmp
    réservoir -= carbConso
    if (réservoir <= 10 L) -> warning faire le plein
    if (réservoir == 0 L) -> panne seche

remplir()
    int qtt = Nombre(prompt("combien de litre :"))
    if (qtt > réservoir) 
        -> réservoir = max
        -> warning qqt ajouté 60
     