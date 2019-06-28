require 'rails_helper'

 RSpec.describe User, :type => :model do
 describe 'user' do
    it "is valid with valid attributes" do
      user = User.create(password: "some_password", email: "john1@doe.com") 
      expect(user).to be_valid
    end

    it "is not valid without a password" do
      user = User.create(password: nil)
      expect(user).to_not be_valid
    end

    it "is not valid without an email" do
      user = User.create(email = nil)
      expect(user).to_not be_valid
    end

  describe "Associations" do
    it "has one :user_profile" do
    assc = described_class.reflect_on_association(:user_profile)
    expect(assc.macro).to eq :has_one
    end 
    
  describe "Associations" do
    it { should have_many(:tabs) }
    end
  end 
  
  describe 'validations' do
    it { should validate_presence_of(:password) }
    it { should validate_presence_of(:email) }
  end
end 

  describe Tab do
    it "returns an array of open tabs from a customer" do
      customers_tab = ['42, Joe, $7, Space Dust, Open']
      expect(customers_tab).to match_array(customers_tab)
    end 
    
  describe 'Associations' do
    it { should belong_to(:user) }
    end
  end 
    
  describe UserProfile do 
    it "returns an array of bars" do 
      bar_profile = ['bubs', 'half door', 'social tap']
      expect(bar_profile).to match_array(bar_profile)
    end 
    
    it "is valid with attributes" do
      user = User.create(password: "some_password", email: "john1@doe.com")
      user_profile = UserProfile.create(
          firstname:'Luke',
          lastname:'Aaron',
          user_id: user.id)
      expect(user_profile).to be_valid
    end
    
  describe 'Associations' do
    it { should belong_to(:user) }
    end
  end 
end 
