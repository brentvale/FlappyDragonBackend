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

FactoryGirl.define do
  factory :score do
    points 1
    player_name "MyString"
  end

  trait :with_low_score do
    points 1
    player_name "Brent"
  end
  
  trait :with_med_score do
    points 2
    player_name "Les"
  end
  
  trait :with_high_score do
    points 3
    player_name "Leslie Perryman"
  end

end
