class AddSizeToUpload < ActiveRecord::Migration
  def change
    add_column :uploads, :size, :integer
  end
end
