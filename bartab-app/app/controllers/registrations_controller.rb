class RegistrationsController < Devise::RegistrationsController
    protected

    def after_sign_in_path_for(resource)
        if resource.class == Admin
            '/admin_home'
        elsif resource.class == User
            '/user_home'
        end 
    end
end