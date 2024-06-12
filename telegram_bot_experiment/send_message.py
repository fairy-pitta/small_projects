from telegram import Bot
import json
import asyncio
from local_settings import bot_token

# ボットのトークンを使ってボットを初期化
bot = Bot(token=bot_token)

# チャットIDを保存するファイルのパス
chat_id_file = 'chat_ids.json'

# メッセージを送信する関数
async def send_custom_message(username, message):
    try:
        with open(chat_id_file, 'r') as f:
            chat_ids = json.load(f)
        chat_id = chat_ids.get(username)
        if chat_id:
            await bot.send_message(chat_id=chat_id, text=message)
            print(f"Message sent to {username}")
        else:
            print(f"No chat ID found for {username}")
    except FileNotFoundError:
        print("Chat ID file not found")

# メイン関数
async def main():
    await send_custom_message('shuna_shuna', 'これはテストメッセージです。')

if __name__ == '__main__':
    asyncio.run(main())
