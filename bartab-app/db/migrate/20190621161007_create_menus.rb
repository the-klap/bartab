class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :name
      t.decimal :price
      t.references :admin, foreign_key: true

      t.timestamps
    end
  end
end
