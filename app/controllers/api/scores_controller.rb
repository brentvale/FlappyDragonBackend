class Api::ScoresController < ApplicationController
  
  def index
    @scores = Score.all.sort_by {|obj| obj["points"]}
    render json: @scores.reverse
  end

  def create
    @score = Score.new(score_params)
    if @score.save
      render json: @score
    else
      render json: "Record Not Saved"
    end
  end

  private

  def score_params
    params.require(:score).permit(:points, :player_name)
  end
end
