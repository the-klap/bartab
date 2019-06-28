class Tab < ApplicationRecord
  belongs_to :user
  belongs_to :admin
  has_many :tab_histories
  
  # def total
  #   tab_histories.where(tab_id:id).sum { :price }
  # end
end
