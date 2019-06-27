class AdminProfilesController < ApplicationController
    def index
       admin_profiles = AdminProfile.all
       render json: admin_profiles
    end
    
    def create
        profile = current_admin.create_admin_profile(admin_profile_params)
        if profile.valid?
            render json: profile
        else
            render json: profile.errors, status: :unprocessable_entity
        end
    end
    
    def show
        admin_profile = AdminProfile.find_by_admin_id(params[:id])
        render json: admin_profile
    end
    
    def update
        admin_profile = AdminProfile.find_by_admin_id(params[:id])
        render json: admin_profile.update(admin_profile_params)
    end
    
    def admin_profile_params
        params.require(:admin_profile).permit(:establishmentname, :hours, :address1, :address2, :city, :zip, :state, :country, :additionalinfo)
    end
    
end

    
