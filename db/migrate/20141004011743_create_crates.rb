class CreateCrates < ActiveRecord::Migration
  def change
    create_table :crates do |t|
      t.string :title
      t.string :code
      t.string :password
      t.integer :user_id
    end
  end
end
