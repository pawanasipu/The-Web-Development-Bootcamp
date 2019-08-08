function ave(score){
	var sum = 0;
	for(var i=0;i<score.length;i++){
		sum += score[i];
	}
	return sum/score.length;
}

var score = [1, 2, 3, 4];
console.log(ave(score));

score = [12, 2, 31, 14];
console.log(ave(score));