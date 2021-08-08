class User < ApplicationRecord
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
end