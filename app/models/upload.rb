class Upload < ActiveRecord::Base
  belongs_to :crate

  validates_presence_of :url
end
