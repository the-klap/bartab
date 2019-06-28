class TabHistoriesController < ApplicationController

    def show
        item = TabHistories.find(params[:id])
        render json: item
    end

    def create
        orderItem = TabHistory.create(menu_params)
        if orderItem.valid?
            render json: orderItem
        else
            render json: orderItem.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        render json: TabHistory.find(params[:id]).destroy
    end
    
    def menu_params
        params.require(:tab_history).permit(:name, :price, :tab_id)
    end
end
