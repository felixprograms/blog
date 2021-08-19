class User < ApplicationRecord
    before_create :set_default_user_type, :set_new_token, :hash_password
    validates :username, presence: true
    validates :password, presence: true
    has_many :articles
    validates :username, uniqueness: true

    def set_password(plain_text_password)
        self.update(password: BCrypt::Password.create(plain_text_password))
    end
    
    def check_password(plain_test_password)
        BCrypt::Password.new(self.password) == plain_test_password
    end

    def update_token
        update(token: SecureRandom.urlsafe_base64)
    end

    def admin?
        user_type == "admin"
    end

    def editor?
        user_type == "editor"
    end

    def reader?
        user_type == "reader"
    end

    def writer?
        user_type == "writer"
    end

    def set_default_user_type
        self.user_type = "reader"
    end

    def set_new_token
        self.token = SecureRandom.urlsafe_base64
    end

    def hash_password
        
        if self.password.length > 0
            self.password = BCrypt::Password.create(self.password)
        end
    end
end