class UserProfilesController < ApplicationController
    def show
        user_profile = UserProfile.find_by_user_id(params[:id])
        render json: user_profile
    end
    def update
        user_profile = UserProfile.find_by_user_id(params[:id])
        user_profile.update(user_profile_params)
    end
    
    def user_profile_params
        params.require(:user_profile).permit(:firstname, :lastname)
    end
end
