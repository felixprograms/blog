class ApplicationController < ActionController::Base
#   http_basic_authenticate_with name: "user_1", password: "password"
    helper_method :current_user
    skip_forgery_protection
    def current_user
        User.find_by(token: cookies['secret'])
    end

    
end
