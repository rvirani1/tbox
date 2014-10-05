class CratesController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:show, :upload_file, :delete_upload]

  def index
    @user = current_user
    @crates = current_user.crates
    gon.crates = @crates
    respond_to do |format|
      format.html
      format.json { render :json => @crates }
    end
  end

  def show
    @crate = Crate.find_by_id(params[:id]) || Crate.find_by_code(params[:code])
    @user = current_or_guest_user
    if (@crate.user != @user) && (@crate.password != params[:password])
      return render "password_prompt"
    end
    gon.crate = @crate
    gon.uploads = @crate.uploads
    respond_to do |format|
      format.html
      format.json { render :json => @crate}
    end
  end


  def create
    @crate = current_user.crates.new create_params
    @crate.add_unique_code
    if @crate.save
      render :json => current_user.crates
    else
      head :bad_request
    end
  end

  def update
    @crate = current_user.crates.includes(:uploads).find(params[:id])
    if @crate.update_attributes update_params
      render :json => @crate
    else
      head :bad_request
    end
  end

  def destroy
    @crate = current_user.crates.includes(:uploads).find(params[:id])
    if @crate.destroy
      render :json => current_user.crates
    else
      head :bad_request
    end
  end

  def upload_file
    @crate = Crate.find params[:id]
    @upload = @crate.uploads.new upload_params
    if @upload.save
      render :json => @crate.uploads
    else
      head :bad_request
    end
  end

  def delete_upload
    @crate = Crate.find params[:id]
    @upload = @crate.uploads.find params[:upload_id]
    if @upload.delete
      render :json => @crate.uploads
    else
      head :bad_request
    end
  end

  private

  def create_params
    params.permit(:title)
  end

  def update_params
    params.permit(:title, :password)
  end

  def upload_params
    params.permit(:url, :filename, :mimetype, :size, :isWriteable)
  end
end