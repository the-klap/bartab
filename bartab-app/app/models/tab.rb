class Tab < ApplicationRecord
  belongs_to :user
  belongs_to :admin
  has_one :tab_history
end
