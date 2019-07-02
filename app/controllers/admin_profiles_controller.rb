class AdminProfilesController < ApplicationController
    before_action :authenticate_admin!, only: [:create]

    def index
       admin_profiles = AdminProfile.all
       render json: admin_profiles
    end
    
    def create
        adminprofile = current_admin.create_admin_profile(admin_profile_params)
        if adminprofile.valid?
            render json: adminprofile
        else
            render json: adminprofile.errors, status: :unprocessable_entity
        end
    end
    
    def show
        admin_profile = AdminProfile.find_by_admin_id(params[:id])
        render json: admin_profile
    end
    
    def update
        admin_profile = AdminProfile.find_by_admin_id(params[:id])
        admin_profile.update(admin_profile_params)
        render json: current_admin.admin_profile
    end
    
    def admin_profile_params
        params.require(:admin_profile).permit(:establishmentname, :hours, :address1, :address2, :city, :zip, :state, :country, :additionalinfo)
    end
    
end

    
