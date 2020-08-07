import zipfile
import os
import requests #импортируем модуль

# f=open(r'C://Users//Admin//Downloads//new_words.zip',"wb") #открываем файл для записи, в режиме wb
# ufr = requests.get("https://mywayblog.github.io/englishwodsfree.github.io/new_words.zip") #делаем запрос
# f.write(ufr.content) #записываем содержимое в файл; как видите - content запроса
# f.close()
         
# f = zipfile.ZipFile("C://Users//Admin//Downloads//new_words.zip")
# f.extractall("C://Users//Admin//Downloads//")

# f.close()


# file_path = "C://Users//Admin//Downloads//new_words.zip"
# os.remove(file_path)
# #####################################################################

# # file_ppath = "C://Users//Admin//Downloads//arraywords.js"


# file_ppath = "C://Users//Admin//Downloads//englishwodsfree.github.io-master//dd.html"
# os.remove(file_ppath)

# ff=open(r'C://Users//Admin//Downloads//englishwodsfree.github.io-master//wwwindex.html',"wb") #открываем файл для записи, в режиме wb
# uffr = requests.get("https://mywayblog.github.io/index.html") #делаем запрос
# ff.write(uffr.content) #записываем содержимое в файл; как видите - content запроса
# ff.close()

##########################################################################3

n_py_v = 'py_2.py'
t_py_v = 'py_1.py'

ufffr = requests.get("https://mywayblog.github.io/englishwodsfree.github.io/"+ n_py_v) #делаем запрос

if ufffr:
	fff=open(r'C://Users//Admin//Downloads//'+ n_py_v,"wb") #открываем файл для записи, в режиме wb
	fff.write(ufffr.content) #записываем содержимое в файл; как видите - content запроса
	fff.close()

	fffile_path = "C://Users//Admin//Downloads//englishwodsfree.github.io-master//" + t_py_v
	os.remove(fffile_path)


# print(type(ufffr))
# if 




