# == Schema Information
#
# Table name: scores
#
#  id          :integer          not null, primary key
#  points      :integer          not null
#  player_name :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Api::ScoresController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
    it "returns scores sorted from highest to lowest" do 
      FactoryGirl.create(:score, :with_med_score)
      FactoryGirl.create(:score, :with_low_score)
      FactoryGirl.create(:score, :with_high_score)
      
      get :index
    
      parsed_response = JSON.parse(response.body)

      expect(parsed_response.first["points"]).to eq(3)
      expect(parsed_response.last["points"]).to eq(1)
    end
  end

  describe "GET #create" do
    it "returns http success" do
      get :create
      expect(response).to have_http_status(:success)
    end
  end

end
