from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
import json
from local_settings import bot_token

# ボットのアプリケーションを初期化
app = Application.builder().token(bot_token).build()

# チャットIDを保存するファイルのパス
chat_id_file = 'chat_ids.json'

# チャットIDを保存する関数
def save_chat_id(username, chat_id):
    try:
        with open(chat_id_file, 'r') as f:
            chat_ids = json.load(f)
    except FileNotFoundError:
        chat_ids = {}

    chat_ids[username] = chat_id

    with open(chat_id_file, 'w') as f:
        json.dump(chat_ids, f)

# /startコマンドのハンドラー
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.message.chat_id
    username = update.message.from_user.username
    save_chat_id(username, chat_id)
    await context.bot.send_message(chat_id=chat_id, text="メッセージいただき、ありがとうございます。確認いたしました。")
    print(f"Chat ID of {username} is {chat_id}")

start_handler = CommandHandler('start', start)
app.add_handler(start_handler)

# ボットを起動
async def main():
    await app.initialize()
    await app.start()
    print("Bot started successfully.")

    await app.updater.start_polling()
    print("Polling started successfully.")

    # プログラムが終了しないように asyncio.Event を使用
    stop_event = asyncio.Event()
    await stop_event.wait()

if __name__ == '__main__':
    import asyncio
    asyncio.run(main())
