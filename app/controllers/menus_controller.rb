class MenusController < ApplicationController
    before_action :authenticate_admin!, only: [:create]
    
    def index
        render json: current_admin.menus
    end
    
    def show
        admin_menu = Menu.find(params[:id])
        render json: admin_menu
    end
    
    def create
        menuItem = current_admin.menus.create(menu_params)
        if menuItem.valid?
            render json: current_admin.menus
        else
            render json: menuItem.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
       menuItem = Menu.find(params[:id]).destroy
        render json: current_admin.menus
    end
    
    def menu_params
        params.require(:menu).permit(:name, :price)
    end
end
