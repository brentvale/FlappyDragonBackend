class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.integer :points, null: false
      t.string :player_name, null: false

      t.timestamps null: false
    end
  end
end
