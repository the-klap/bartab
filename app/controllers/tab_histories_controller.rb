class TabHistoriesController < ApplicationController

    def show
        item = TabHistories.find(params[:id])
        render json: item
    end

    def create
        orderItem = TabHistory.create(menu_params)
        @current_tabs = Tab.where(admin_id:current_admin)
        @open_tabs = @current_tabs.where(open:true)
        @tabs = []
        @open_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => {:tab_histories => {}, :user => {:include => :user_profile}})
        end
        if orderItem.valid?
            render json: @tabs
        else
            render json: orderItem.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        TabHistory.find(params[:id]).destroy
        @current_tabs = Tab.where(admin_id:current_admin)
        @open_tabs = @current_tabs.where(open:true)
        @tabs = []
        @open_tabs.find_each do |tab|
            @tabs << tab.as_json(:include => {:tab_histories => {}, :user => {:include => :user_profile}})
        end
        render json: @tabs
    end
    
    def menu_params
        params.require(:tab_history).permit(:name, :price, :tab_id)
    end
end
