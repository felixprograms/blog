class ApplicationController < ActionController::Base
#   http_basic_authenticate_with name: "user_1", password: "password"
    helper_method :current_user
    skip_forgery_protection
    def current_user
        if User.find_by(token: cookies['secret'])
            User.find_by(token: cookies['secret']).username
        else
            nil
        end
    end

    
end
