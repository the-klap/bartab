class UserProfilesController < ApplicationController
    before_action :authenticate_user!, only: [:create]

    def show
        user_profile = UserProfile.find_by_user_id(params[:id])
        render json: user_profile
    end

    def create
        profile = current_user.create_user_profile(user_profile_params)
        if profile.valid?
            render json: profile
        else
            render json: profile.errors, status: :unprocessable_entity
        end
    end
    
    def update
        user_profile = UserProfile.find_by_user_id(params[:id])
        user_profile.update(user_profile_params)
    end
    
    def user_profile_params
        params.require(:user_profile).permit(:firstname, :lastname)
    end
end
