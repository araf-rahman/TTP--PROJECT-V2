get '/' do
  @users = User.all
  erb :index
end
post '/users/new' do
  User.create(params)
  redirect '/'
end
# Edit_User
get '/users/:user_id/edit' do
  @user = User.find(params[:user_id])
  erb :edit_user
end

put '/users/:user_id' do
  @user = User.find(params[:user_id])
  @user.update_attributes(
    name: params[:name],
    city: params[:city]
    )
  @user.save
  redirect '/'
end

get "/users/:user_id/delete" do
  @user = User.find(params[:user_id])
  erb :delete_user
end
delete "/users/:user_id/delete" do
  @user = User.find(params[:user_id])
  @user.destroy
  redirect "/"
end
