from PIL import Image
import os

sizes = [1200, 800, 400]
# names = [0, 1,2,3,4,5,6]

def optimize(file_name):
	img = Image.open(str(file_name))

	width = img.width
	height = img.height
	ratio = width / height

	path = str(file_name).split('.')[0] + "/"

	os.mkdir(path)
	log = str(file_name) + ": "
	for size in sizes:
		if size > width:
			resize_save(img, width, ratio, path)
			log += str(width)+", "
		else:
			resize_save(img, size, ratio, path)
			log += str(size)+", "
	print(log)


def resize_save(img, width, ratio, path):
	img_resized = img.resize((width, round(width / ratio)))
	img_resized.convert("RGB").save(path + str(width)+".jpg", "jpeg")
	img_resized.convert("RGB").save(path + str(width) + ".webp", "webp")

file_name = input("Введите имя файла ")
optimize(file_name)
# for name in names:
# 	optimize(str(name) + "." + form)