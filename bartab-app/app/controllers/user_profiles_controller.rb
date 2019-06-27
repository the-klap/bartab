class UserProfilesController < ApplicationController
    def show
        user_profile = UserProfile.find_by_user_id(params[:id])
        render json: user_profile
    end
end
