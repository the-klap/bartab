# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
user = User.create!(:email => 'luke@email.com', :password => 'topsecret', :password_confirmation => 'topsecret')
user1 = User.create!(:email => 'kyle@email.com', :password => 'topsecret', :password_confirmation => 'topsecret')
    
admin = Admin.create!(:email => '10barrel@gmail.com', :password => 'topsecret', :password_confirmation => 'topsecret')
admin1 = Admin.create!(:email => 'stone@gmail.com', :password => 'topsecret', :password_confirmation => 'topsecret')
    
userprofile = UserProfile.create(firstname:'Luke', lastname:'Aaron', user_id: user.id)
user1profile = UserProfile.create(firstname:'Kyle', lastname:'Peter', user_id: user1.id)
    
adminprofile = AdminProfile.create(establishmentname:'10 Barrel', hours:'9am-5pm', address1:'123 A st', address2:'', city:'San Diego', zip:'92123', state:'CA', country:'USA', additionalinfo:'we are a brewery', admin_id: admin.id)
admin1profile = AdminProfile.create(establishmentname:'Stone', hours:'1pm-12am', address1:'123 B st', address2:'', city:'San Diego', zip:'92321', state:'CA', country:'USA', additionalinfo:'we are also a brewery', admin_id: admin1.id)

user1tab = Tab.create(:user_id => user1.id, :admin_id => admin.id, :total => 15.00, :open => true)
user1tab2 = Tab.create(:user_id => user1.id, :admin_id => admin1.id, :total => 10.00, :open => false)
usertab = Tab.create(:user_id => user.id, :admin_id => admin1.id, :total => 20.00, :open => true)
usertab2 = Tab.create(:user_id => user.id, :admin_id => admin.id, :total => 7.00, :open => false)

user1tabhistory1 = TabHistory.create(name:'Sculpin', price:7.00, tab_id: user1tab.id)
user1tabhistory2 = TabHistory.create(name:'Bud Light', price:3.00, tab_id: user1tab.id)
user1tabhistory3 = TabHistory.create(name:'Sculpin IPA', price:5.00, tab_id: user1tab.id)

user1tab2history1 = TabHistory.create(name:'Sculpin', price:7.00, tab_id: user1tab2.id)
user1tab2history2 = TabHistory.create(name:'Bud Light', price:3.00, tab_id: user1tab2.id)

usertabhistory1 = TabHistory.create(name:'Sculpin', price:7.00, tab_id: usertab.id)
usertabhistory2 = TabHistory.create(name:'Sculpin', price:7.00, tab_id: usertab.id)
usertabhistory3 = TabHistory.create(name:'Bud Light', price:3.00, tab_id: usertab.id)
usertabhistory4 = TabHistory.create(name:'Bud Light', price:3.00, tab_id: usertab.id)

usertab2history1 = TabHistory.create(name:'Sculpin', price:7.00, tab_id: usertab2.id)

adminmenu1 = Menu.create(name:'Sculpin', price:7.00, admin_id: admin.id)
adminmenu2 = Menu.create(name:'Bud Light', price:3.00, admin_id: admin.id)
adminmenu3 = Menu.create(name:'Sculpin IPA', price:5.00, admin_id: admin.id)

admin1menu1 = Menu.create(name:'Sculpin', price:7.00, admin_id: admin1.id)
admin1menu2 = Menu.create(name:'Bud Light', price:3.00, admin_id: admin1.id)
admin1menu3 = Menu.create(name:'Sculpin IPA', price:5.00, admin_id: admin1.id)

