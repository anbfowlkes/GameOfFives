class CreateTabletops < ActiveRecord::Migration[7.0]
  def change
    create_table :tabletops do |t|
      t.json :board

      t.timestamps
    end
  end
end
