class CreateAdminProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :admin_profiles do |t|
      t.string :establishmentname
      t.string :hours
      t.string :address1
      t.string :address2
      t.string :city
      t.string :zip
      t.string :state
      t.string :country
      t.string :additionalinfo
      t.references :admin, foreign_key: true

      t.timestamps
    end
  end
end
