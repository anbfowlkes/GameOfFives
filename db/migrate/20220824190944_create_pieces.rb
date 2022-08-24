class CreatePieces < ActiveRecord::Migration[7.0]
  def change
    create_table :pieces do |t|
      t.integer :hpos
      t.integer :vpos
      t.integer :player
      t.integer :type

      t.timestamps
    end
  end
end
