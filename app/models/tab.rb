class Tab < ApplicationRecord
  belongs_to :user
  belongs_to :admin
  has_many :tab_histories
  

  def total
    self.tab_histories.sum( :price )
  end

end
