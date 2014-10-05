class UploadMailer < ActionMailer::Base
  def new_upload(crate)
    mail :subject => "You've Got New Uploads",
         :to      => crate.user.email,
         :from    => "trex@tbox-roar.com",
         :content_type => "text/html",
         :body    => "Go see your new files at <a href=http://tbox-roar.herokuapp.com/#{crate.code}>TBox</a>"
  end
end