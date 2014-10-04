class AddIswriteableToUpload < ActiveRecord::Migration
  def change
    add_column :uploads, :isWriteable, :boolean
  end
end
