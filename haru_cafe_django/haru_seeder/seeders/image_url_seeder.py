from haru_cms.models import MenuItem

class ImageUrlSeeder:
  """
  Custom seeder that takes in the path of a JSON file and seeds the database with the menu items in the JSON file.
  
  The JSON file should have a format similar to MenuItemRawJson
  """
  def seed(self, image_dir: str):
    print(f"Seeding image urls for all menu items in the database. image base url is", image_dir)
    return_str = []
    menu_items = MenuItem.objects.all()
    for menu_item in menu_items:
      is_menu_item_image_good = menu_item.image is not None or menu_item.image != ""
      if is_menu_item_image_good:
        continue
      
      menu_item.image = f"{menu_item.name.replace(' ', '-').lower()}.jpg"
      menu_item.save()
      return_str.append(f"Updated image for {menu_item.name} with {image_dir}/{menu_item.image}")
    
    print("Seeding complete for image urls")
    return '\n'.join(return_str)
