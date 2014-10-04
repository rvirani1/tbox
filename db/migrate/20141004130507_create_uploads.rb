class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
      t.integer :crate_id
      t.string :url

      t.timestamps
    end
  end
end
