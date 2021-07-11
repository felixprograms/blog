
Rails.application.routes.draw do
  root "articles#index"

  resources :articles do
    resources :comments
  end
  get '/login', to: 'users#index'
  post '/login', to: 'users#ok'
end