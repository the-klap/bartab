class RegistrationsController < Devise::RegistrationsController
    protected

    def after_sign_in_path_for(resource)
        if resource.class == Admin
            '/admin_home/open_tabs'
        elsif resource.class == User
            '/user_home/opentabs'
        end 
    end
end