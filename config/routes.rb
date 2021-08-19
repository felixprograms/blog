
Rails.application.routes.draw do
  root "articles#index"

  resources :articles do
    resources :comments
  end
  get '/login', to: 'users#index'
  post '/login', to: 'users#signed_in'
  get '/create_user', to: 'users#new'
  post '/create_user', to: 'users#create'
  get '/logout', to: 'users#logout'
  get '/dashboard', to: 'dashboard#index'
end