class CreateNormative < ActiveRecord::Migration[5.1]
  def change
    create_table :normatives do |t|
      t.string :code
      t.string :name
      t.timestamps
    end
  end
end
