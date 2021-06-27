class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: "user_1", password: "password"
end
