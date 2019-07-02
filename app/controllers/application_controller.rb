class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    # def after_sign_in_path_for(resource)
    #     '/admin_home'
    # end
    def after_sign_in_path_for(resource)
        if resource.class == Admin
            '/admin_home/open_tabs'
        elsif resource.class == User
            '/user_home/opentabs'
        end 
    end
end
