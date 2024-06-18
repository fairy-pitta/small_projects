import time
import requests
from bs4 import BeautifulSoup
import smtplib
from email.mime.text import MIMEText
from datetime import datetime
# from .local_settings import email, app_pw

# 設定
url = "https://kyosan.yodohanabi.com/"
# check_interval = 60 # チェック間隔（秒）
# email_from = email
# email_to = email
# smtp_server = "smtp.gmail.com"
# smtp_port = 587
# smtp_user = email
# smtp_password = app_pw

import requests
from bs4 import BeautifulSoup

# 対象のURL
url = "https://kyosan.yodohanabi.com/"

import requests


def check_all_txt_elements():
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # class="txt" となっているすべてのspanタグを検索
        txt_elements = soup.find_all('span', {'class': 'txt'})
        
        for element in txt_elements:
            # 親要素や兄弟要素から class="main_text" を持つ要素を探す
            main_text_element = element.find_previous(class_="main_txt")
            if main_text_element:
                main_text = main_text_element.text.strip()
            else:
                main_text = "No main text found"
            
            # txtクラスのテキストと一緒にmain_textの内容を出力
            print(f"{main_text} : {element.text.strip()}")
    else:
        print("Failed to retrieve the webpage")

check_all_txt_elements()





# def send_email(stock_available):
#     if stock_available:
#         msg = MIMEText("花火大会のチケットが在庫ありになりました！")
#         subject = 'チケット在庫通知'
#     else:
#         msg = MIMEText("花火大会のチケットはまだ在庫切れです。")
#         subject = 'チケット在庫状況通知'

#     msg['Subject'] = subject
#     msg['From'] = email_from
#     msg['To'] = email_to
    
#     try:
#         with smtplib.SMTP(smtp_server, smtp_port) as server:
#             server.starttls()
#             server.login(smtp_user, smtp_password)
#             server.sendmail(email_from, email_to, msg.as_string())
#     except Exception as e:
#         print(f"Error: {e}")

# if __name__ == "__main__":
#     while True:
#         stock_available = check_stock()
#         current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
#         if stock_available:
#             print(f"{current_time} - 在庫あり: 花火大会のチケットが在庫ありになりました！")
#         else:
#             print(f"{current_time} - 在庫なし: 花火大会のチケットはまだ在庫切れです。")
        
#         #send_email(stock_available)
#         time.sleep(check_interval)