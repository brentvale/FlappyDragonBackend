function Leaderboard(){
  this.fetchScores();
};

Leaderboard.prototype = {
  fetchScores: function(){
    var that = this;
    $.ajax({
      type: "GET",
      url: "/api/scores",
      success: function(resp){
        that.scores = resp;
        that.popUpModal();
      },
      error: function(resp){
      
      }
    })
  },
  popUpModal: function(){
    var div = document.createElement("div");
    div.id = "leaderModalDragonImage"
    
    var ul = document.createElement("ul");
    ul.className += "high-score-list";
    
    var divInserted = document.body.appendChild(div);
    var ulInserted = divInserted.appendChild(ul);
    
    //duplicate needs to be refactored
    var li = document.createElement("li");
    li.className += "high-score";
    
    var leftSpan = document.createElement("span");
    var rightSpan = document.createElement("span");
    leftSpan.className += "left-span";
    rightSpan.className += "right-span";
    
    li.appendChild(leftSpan);
    li.appendChild(rightSpan);
    
    leftSpan.innerHTML = "GAMER HANDLE";
    rightSpan.innerHTML = "SCORE";
    //duplicate needs to be refactored (duplicate of code in loop below)
    ulInserted.appendChild(li)
  
    var localLimit = (this.scores.length < 10) ? this.scores.length : 10;
    for(var i = 0; i < localLimit; i ++){
      var li = document.createElement("li");
      li.className += "high-score";
      
      var leftSpan = document.createElement("span");
      var rightSpan = document.createElement("span");
      leftSpan.className += "left-span";
      rightSpan.className += "right-span";
      
      li.appendChild(leftSpan);
      li.appendChild(rightSpan);
      
      li.id = "li-" + (i+1);
      leftSpan.innerHTML = this.scores[i]["player_name"];
      rightSpan.innerHTML = this.scores[i]["points"];
      ulInserted.appendChild(li);
    }   
  },
};