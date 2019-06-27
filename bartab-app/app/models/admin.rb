class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable
  has_many :tabs
  has_one :admin_profile
  has_many :menus
  
  validates_presence_of :password
  validates_presence_of :email
end
