class AddMimetypeToUpload < ActiveRecord::Migration
  def change
    add_column :uploads, :mimetype, :string
  end
end
