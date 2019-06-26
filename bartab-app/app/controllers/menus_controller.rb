class MenusController < ApplicationController
    
    def index
        render json: current_admin.menus
    end
    
    def show
        admin_menu = Menu.where(admin_id:params[:id])
        render json: admin_menu
    end
    
    def create
        menuItem = current_admin.menus.create(menu_params)
        if menuItem.valid?
            render json: menuItem
        else
            render json: menuItem.errors, status: :unprocessable_entity
        end
    end
    
    def menu_params
        params.require(:menu).permit(:name, :price)
    end
end
