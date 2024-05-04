import pytesseract
from PIL import Image
import pdf2image

images = pdf2image.convert_from_path('data/dbs_2022.pdf')

text = ''

# 各画像からテキストを抽出
for img in images:
    text += pytesseract.image_to_string(img, lang='jpn')

print(text)
