class CreateBarMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :bar_maps do |t|
      t.string :name
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
