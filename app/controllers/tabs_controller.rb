class TabsController < ApplicationController
    
    def total
        self.tab_histories.joins(:activity).sum(:price)
    end
    
    def update
        @tab = Tab.find(params[:id])
        @tab.update(tab_params)
        render json: @tab
    end
    
    def create
        render json: Tab.create(tab_params)
    end
    
    def show
        open_tabs = Tab.where(params[:id])
        render json: open_tabs
    end
    
    
    def admin_open_tabs
        @current_tabs = Tab.where(admin_id:current_admin)
        @open_tabs = @current_tabs.where(open:true)
        @tabs = []
        @open_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => {:tab_histories => {}, :user => {:include => :user_profile}})
        end
        render json: @tabs
    end
    
    def admin_closed_tabs
        @current_tabs = Tab.where(admin_id:current_admin)
        @closed_tabs = @current_tabs.where(open:false)
        @tabs = []
        @closed_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => {:tab_histories => {}, :user => {:include => :user_profile}})
        end
        render json: @tabs
    end
    
    def user_open_tabs
        @current_tabs = Tab.where(user_id:current_user)
        @open_tabs = @current_tabs.where(open:true)
        @tabs = []
        @open_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => {:tab_histories => {}, :admin => {:include => :admin_profile}})
        end
        render json: @tabs
    end
    
    def user_closed_tabs
        @current_tabs = Tab.where(user_id:current_user)
        @closed_tabs = @current_tabs.where(open:false)
        @tabs = []
        @closed_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => {:tab_histories => {}, :admin => {:include => :admin_profile}})
        end
        render json: @tabs
    end
    
    def tab_params
        params.require(:tab).permit(:total, :open, :user_id, :admin_id)
    end
    
    
end
