function TenPin(){
  this.scoreHistory = [];
  this.score = 0;
  this.flatArray = [];
  this.frameArray = [];
  this.bonus = 0;
}

TenPin.prototype.throw = function(number){
  if (number === 10 && this.frameArray.length === 0){
    this.frameArray.push(number);
    this.frameArray.push(0);
    this.scoreHistory.push(this.frameArray);
    this.frameArray = [];

  }
  else if (this.frameArray.length === 0 && this.scoreHistory.length < 10){
    this.frameArray.push(parseInt(number))
  }
  else if (this.frameArray.length === 0 && this.scoreHistory.length === 10){
    this.frameArray.push(number);
    this.frameArray.push(0);
    this.scoreHistory.push(this.frameArray);
    this.frameArray = [];
  }
  else if (this.frameArray.length === 1){
    this.frameArray.push(parseInt(number));
    this.scoreHistory.push(this.frameArray);
    this.frameArray = [];
  }
}

// TenPin.prototype.write = function(number){
//   this.frameArray.push(number)
//   this.frameArray.push(0);
//   this.scoreHistory.push(this.frameArray);
//   this.frameArray = [];
// }

TenPin.prototype.reset = function(){
  this.scoreHistory = [];
  this.score = 0;
  this.flatArray = [];
  this.frameArray = [];
  this.bonus = 0;
}

TenPin.prototype.count = function(){
  this.total();
  this.bonus = 0;
  for (var i = 0; i < Math.min(this.scoreHistory.length,10); i ++){
    if(this.scoreHistory[i][0] === 10 && this.scoreHistory[i+1][0] !== 10
      && this.scoreHistory[i+1] !== undefined)
    {
      this.bonus += this.scoreHistory[i+1][0];
      this.bonus += this.scoreHistory[i+1][1];
    }

    else if(this.scoreHistory[i][0] === 10 && this.scoreHistory[i+1][0] === 10
          && this.scoreHistory[i+1] !== undefined)
          {
      this.bonus += this.scoreHistory[i+1][0];
      this.bonus += this.scoreHistory[i+2][0];
    }

    else if(this.scoreHistory[i][0] + this.scoreHistory[i][1] === 10
            && this.scoreHistory[i+1][0] !== undefined)
            {
        this.bonus += this.scoreHistory[i+1][0];
      }
  }
 this.score += this.bonus;
}

TenPin.prototype.total = function(){
  var scoreSum = 0;
  this.flatArray = [].concat.apply([], this.scoreHistory);
  for (var i = 0; i < Math.min(this.flatArray.length,20); i ++){
    scoreSum += parseInt(this.flatArray[i]);}
  this.score = scoreSum;
}
