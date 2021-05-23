
Rails.application.routes.draw do
  root "articles#index"

  resources :articles
  # get '/articles', to: 'articles#index'
  # get '/articles/new', to: 'articles#new' 
  # post '/articles', to: 'articles#create'
  # get '/articles/:id/edit', to: 'articles#edit'
  # patch '/articles/:id', to: 'articles#update'
  # delete '/articles/:id', to: 'articles#destroy'
end
# #        root GET    /                            articles#index
# # articles GET    /articles(.:format)          articles#index
# # new_article GET    /articles/new(.:format)      articles#new
# #     article GET    /articles/:id(.:format)      articles#show
# #             POST   /articles(.:format)          articles#create
# # edit_article GET    /articles/:id/edit(.:format) articles#edit
# #             PATCH  /articles/:id(.:format)      articles#update
# #             DELETE /articles/:id(.:format)      articles#destroy