class Crate < ActiveRecord::Base
  belongs_to :user
  has_many :uploads

  validates_presence_of :code, :user, :title


  def add_unique_code
    while Crate.find_by_code(self.code) || !self.code
      self.code = rand(1000..9999).to_s
    end
  end
end