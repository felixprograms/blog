
class ArticlesController < ApplicationController
    def index
      username = params["username"]
      if username
        user = User.find_by(username: username)
        cookies['username'] = user.username if user
        cookies['secret'] = user.token if user
        redirect_to '/'
        
      end
      @articles = Article.all
    end
  
    def show
      @article = Article.find(params[:id])
    end
  
    def new
      @article = Article.new
    end
  
    def create
      @article = Article.new(article_params)
      @article.status = 'archived'
      if @article.save
        redirect_to @article
      else
        @errors = @article.errors.full_messages
        render :new
        
      end
    end

    def destroy
      Article.find(params[:id]).destroy
      redirect_to '/articles'
    end


  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      redirect_to @article
    else
      render :edit
    end
  end
  
    private
      def article_params
        params.require(:article).permit(:title, :body)
      end
  end
  
