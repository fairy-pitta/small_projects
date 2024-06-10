import time
import requests
from bs4 import BeautifulSoup
import smtplib
from email.mime.text import MIMEText
from datetime import datetime

# 設定
url = "https://kyosan.yodohanabi.com/products/detail/19"
check_interval = 60 # チェック間隔（秒）
email_from = "shunaruna@gmail.com"
email_to = "shunaruna@gmail.com"
smtp_server = "smtp.gmail.com"
smtp_port = 587
smtp_user = "shunaruna@gmail.com"
smtp_password = "krxl jwht yruh cxes"


def check_stock():
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # 在庫状況を確認する要素を特定
    stock_status = soup.find('button', {'class': 'ec-blockBtn--action', 'disabled': 'disabled'})
    
    return stock_status is None  # 在庫があれば True を返す

def send_email(stock_available):
    if stock_available:
        msg = MIMEText("花火大会のチケットが在庫ありになりました！")
        subject = 'チケット在庫通知'
    else:
        msg = MIMEText("花火大会のチケットはまだ在庫切れです。")
        subject = 'チケット在庫状況通知'

    msg['Subject'] = subject
    msg['From'] = email_from
    msg['To'] = email_to
    
    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.sendmail(email_from, email_to, msg.as_string())
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    while True:
        stock_available = check_stock()
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        if stock_available:
            print(f"{current_time} - 在庫あり: 花火大会のチケットが在庫ありになりました！")
        else:
            print(f"{current_time} - 在庫なし: 花火大会のチケットはまだ在庫切れです。")
        
        #send_email(stock_available)
        time.sleep(check_interval)