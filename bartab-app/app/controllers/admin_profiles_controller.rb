class AdminProfilesController < ApplicationController
    def index
       admin_profiles = AdminProfile.all
       render json: admin_profiles
    end
    
    def show
        admin_profile = AdminProfile.find_by_admin_id(params[:id])
        render json: admin_profile
    end
    
end

    
