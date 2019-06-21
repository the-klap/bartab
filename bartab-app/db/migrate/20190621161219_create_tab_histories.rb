class CreateTabHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :tab_histories do |t|
      t.string :name
      t.decimal :price
      t.references :tab, foreign_key: true

      t.timestamps
    end
  end
end
