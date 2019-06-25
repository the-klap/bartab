class Tab < ApplicationRecord
  belongs_to :user
  belongs_to :admin
  has_many :tab_histories
end
