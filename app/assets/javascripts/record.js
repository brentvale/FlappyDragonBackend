var WIDTH_OF_MODAL = 250; //
var HALF_WIDTH_OF_MODAL = WIDTH_OF_MODAL/2;

function Record(height, width){
  this.height = height;
  this.width = width;
  this.score;
};

Record.prototype = {
  popUpModal: function(){
    var div = document.createElement("div");
    div.className += "modal";
    div.id = "popUpModal";
    div.style.right = ((this.width / 2) - HALF_WIDTH_OF_MODAL) + "px";
    div.style.top = (this.height / 2) + "px";
    div.innerHTML = "<br>" + "Your Score : " + this.score + "<br><br>";
    
    var input = document.createElement("input");
    input.name = "name-field";
    input.type = "text";
    input.className += "modal-input";
    input.id = "gamerName";

    var label = document.createElement("label");
    label.for = "name-field";
    label.innerHTML = "Enter Name" + "<br>";
    
    var optionsDiv = document.createElement("div");
    var submitDiv = document.createElement("div");
    var replayDiv = document.createElement("div");
    
    optionsDiv.className += "modal-options";
    submitDiv.className += "modal-submit";
    replayDiv.className += "modal-replay";
    submitDiv.id = "submit";
    replayDiv.id = "replay";
    
    submitDiv.innerHTML = "Submit";
    replayDiv.innerHTML = "Replay";
    
    //add elements to DOM
    var divInserted = document.body.appendChild(div);
    divInserted.appendChild(label);
    divInserted.appendChild(input);
    var optionsInserted = divInserted.appendChild(optionsDiv);
    optionsInserted.appendChild(submitDiv);
    optionsInserted.appendChild(replayDiv);
    
    this.addEventListenersToModal();
  },
  addEventListenersToModal: function(){
    var submitButton = document.getElementById('submit');
    var replayButton = document.getElementById('replay');
    submitButton.addEventListener("click", this.submitScore.bind(this));
    // replayButton.addEventListener("click", );
  },
  submitScore: function(){
    var gamerName = document.getElementById("gamerName").value;
    
    $.ajax({
      url: "/api/scores.json",
      type: "POST",
      dataType: "json",
      data: {
        score: {
          points: this.score,
          player_name: gamerName
        }
      },
      success:function(resp){
        $.ajax({
          url: "/api/scores.json",
          type: "GET",
          dataType: "json",
          success: function(){
            document.getElementById('popUpModal').remove();
            
            var canvas = document.getElementById("bird-game"); 
            var c = canvas.getContext('2d'); 
          
            var newGame = new Game(c, WINDOW_HEIGHT, WINDOW_WIDTH);
            newGame.prepare();

            window.addEventListener("mousedown", function init(event) {
              window.removeEventListener("mousedown", init, false);
              gamePlay();
            }, false);

            function gamePlay() {
              newGame.play();
            }
          },
          error: function(){
            console.log("Unable to retrieve all the Scores from database.")
          }
        });
      },
      error: function(resp){
        console.log("Something happened and your score was not saved.")
      }
    })
  },
};