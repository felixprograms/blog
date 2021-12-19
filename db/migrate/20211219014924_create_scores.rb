class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.references :user, null: false, foreign_key: true
      t.string :score, null: false
      t.string :game, null: false
      t.timestamps
    end
  end
end
