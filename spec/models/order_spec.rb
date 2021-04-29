require 'rails_helper'

RSpec.describe Order, type: :model do
  before do
    @order  = FactoryBot.build(:order)
  end

  context '内容に問題がない場合' do
    if "priceがあれば保存ができること" do
      expect(@order).to be_valid
    end

  context '内容に問題がある場合' do
    if "priceが空では保存ができないこと" do
      @order.price = nil
      @order.valid?
      expect(@order.errors.full_messages).to include("Price can't be blank")
    end
  end
end
