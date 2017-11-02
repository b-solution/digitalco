class ContactMailer < ApplicationMailer
  def welcome_email(options={})
    @options = options
    mail(to: 'contact@digital-co.fr', subject: "(digitalCo) Nouveau message de #{options[:email]} ")
  end
end
