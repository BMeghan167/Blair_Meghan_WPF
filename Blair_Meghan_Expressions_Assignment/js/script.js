//Meghan Blair
//February 12, 2015
//Expressions Assignment

var butterscotch = [325, 167, 256];
var taffy = [413, 297, 541];
var tootsies = [178, 662, 489];

var totalButter = butterscotch[0] + butterscotch[1] + butterscotch[2];
var totalTaffy = taffy[0] + taffy[1] + taffy[2];
var totalTootsie = tootsies[0] + tootsies[1] + tootsies[2];

var totalCandy = totalButter + totalTaffy + totalTootsie;
var totalAfterKids = totalCandy - tootsies[0];

console.log(totalCandy);
console.log(totalAfterKids);
