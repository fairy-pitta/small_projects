import pytesseract
from PIL import Image
import pyheif  # To handle HEIC files

def read_heic(file_path):
    # Open HEIC file
    heif_file = pyheif.read(file_path)
    # Convert to PIL image
    image = Image.frombytes(
        heif_file.mode, 
        heif_file.size, 
        heif_file.data,
        "raw",
        heif_file.mode,
        heif_file.stride,
    )
    return image

# Path to your HEIC file
file_path = 'data/IMG_0533.HEIC'
img = read_heic(file_path)

# Extract text using pytesseract
text = pytesseract.image_to_string(img, lang='jpn')
print(text)
