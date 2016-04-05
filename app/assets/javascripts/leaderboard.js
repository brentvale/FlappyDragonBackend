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
    
    for(var i = 0; i < 10; i ++){
      var li = document.createElement("li");
      li.className += "high-score";
      li.id = "li-" + (i+1);
      li.innerHTML = this.scores[i]["player_name"] + " | " + this.scores[i]["points"];
      ulInserted.appendChild(li);
    }   
  },
};