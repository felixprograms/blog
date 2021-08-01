
class UsersController < ApplicationController
    def signed_in
        user = User.find_by(username: params[:username])
        if user == nil
            @errors = ['Username is not found.']
            render 'index'      

        else
    
           if user.check_password(params[:password]) 
                cookies['secret'] = user.token
           end
           redirect_to '/'
        end

    end

    def new
    end
    def logout
        cookies['secret'] = nil
        redirect_to '/'
    end

    def create
        byebug
    end
end
