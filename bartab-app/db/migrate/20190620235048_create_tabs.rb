class CreateTabs < ActiveRecord::Migration[5.2]
  def change
    create_table :tabs do |t|
      t.references :user, foreign_key: true
      t.references :admin, foreign_key: true
      t.decimal :total
      t.boolean :open

      t.timestamps
    end
  end
end
