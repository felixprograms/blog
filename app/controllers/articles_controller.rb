class ArticlesController < ApplicationController
    def index
        @name = params[:name]
        @article_title = Article.last.title
        @articles = Article.all
    end
    def show
        @article = Article.find(params[:id])
    end
    def new
        @new_article=Article.new
    end
    def create
        debugger
    end
end
