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

RSpec.describe Score, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
