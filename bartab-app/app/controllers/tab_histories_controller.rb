class TabHistoriesController < ApplicationController

    def create
        orderItem = TabHistory.create(menu_params)
        if orderItem.valid?
            render json: orderItem
        else
            render json: orderItem.errors, status: :unprocessable_entity
        end
    end
    
    def menu_params
        params.require(:tab_histories).permit(:name, :price, :tab_id)
    end
end
