class ContactController < ApplicationController
  def send_mail

    options = {
        name: params[:name],
        email: params[:email],
        phone: params[:phone],
        content: params[:message]
    }
    send_simple_message(options)
    # ContactMailer.welcome_email(options).deliver_now

    redirect_to root_path
  end
  private
  def send_simple_message options
    ContactMailer.welcome_email(options).deliver
  end
end
