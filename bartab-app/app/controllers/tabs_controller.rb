class TabsController < ApplicationController
    
    def update
        @tab = Tab.find(params[:id])
        @tab.update(open:false)
        render json: @tab
    end
    
    
    def show
        #if fetch comes from user, show tab by user_id. if fetch comes from admin, show tab by admin_id and open==true
        open_tabs = Tab.where(params[:id])
        render json: open_tabs
    end
    
    
    def user_open_a_tab
        render json: Tab.create(total:0, open:true, user_id:current_user_id, admin_id:params[:id])
    end
    
    def admin_open_tabs
        @current_tabs = Tab.where(admin_id:current_admin)
        @open_tabs = @current_tabs.where(open:true)
        # @tab_tab_history = TabHistory.where(tab_id:@open_tabs.id)
        @tabs = []
        @open_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => :tab_histories)
        end
        render json: @tabs
    end
    
    def admin_closed_tabs
        @current_tabs = Tab.where(admin_id:current_admin)
        @closed_tabs = @current_tabs.where(open:false)
        @user = UserProfile.find_by_user_id(@closed_tab.user_id)
        # @tab_tab_history = TabHistory.where(tab_id:@open_tabs.id)
        @tabs = []
        @closed_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => :tab_history)
        end
        render json: @tabs
    end
    
    def user_open_tabs
        @current_tabs = Tab.where(user_id:current_user)
        @open_tabs = @current_tabs.where(open:true)
        @tabs = []
        @open_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => :tab_history)
        end
        render json: @tabs
    end
    
    def user_closed_tabs
        @current_tabs = Tab.where(user_id:current_user)
        @closed_tabs = @current_tabs.where(open:false)
        @tabs = []
        @closed_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => :tab_history)
        end
        render json: @tabs
    end
    
    
end
