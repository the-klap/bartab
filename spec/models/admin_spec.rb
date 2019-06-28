require 'rails_helper'

 RSpec.describe Admin, :type => :model do
 describe 'admin' do
    it "is valid with valid attributes" do
      admin = Admin.create(password: "some_password", email: "john1@doe.com") 
      expect(admin).to be_valid
    end

    it "is not valid without a password" do
      admin = Admin.create(password: nil)
      expect(admin).to_not be_valid
    end

    it "is not valid without an email" do
      admin = Admin.create(email = nil)
      expect(admin).to_not be_valid
    end

  describe "Associations" do
    it "has one :adminprofile" do
    assc = described_class.reflect_on_association(:admin_profile)
    expect(assc.macro).to eq :has_one
    end 
    
  describe "Associations" do
    it { should have_many(:tabs) }
    it { should have_many(:menus) }
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
    it { should belong_to(:admin) }
    end
  end 
    
  describe AdminProfile do 
    it "returns an array of bars" do 
      bar_profile = ['bubs', 'half door', 'social tap']
      expect(bar_profile).to match_array(bar_profile)
    end 
    
    it "is valid with attributes" do
      admin = Admin.create(password: "some_password", email: "john1@doe.com")
      adminprofile = AdminProfile.create(
          establishmentname: '10 Barrel',
          hours: '9am-5pm',
          address1: '123 A st',
          address2: '',
          city: 'San Diego',
          zip: '92123',
          state: 'CA',
          country: 'USA',
          additionalinfo: 'we are a brewery',
          admin_id: admin.id,
          created_at: 2018-01-01,
          updated_at: 2019-01-01 ) 
      expect(adminprofile).to be_valid
    end
    
  describe 'Associations' do
    it { should belong_to(:admin) }
    end
  end 
    
  describe Menu do
    it "returns an array of beers from a bar" do 
      menu = ['Space Dust, $7', 'Sculpin, $5', 'Belching Beaver, $6']
      expect(menu).to match_array(menu)
    end
      
  describe 'Associations' do
    it { should belong_to(:admin) }
    end
  end 
end 

