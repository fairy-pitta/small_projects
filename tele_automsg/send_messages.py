from telethon import TelegramClient
from local_settings import api_id, api_hash

client = TelegramClient('anon', api_id, api_hash)

async def main():
    # Getting information about yourself
    me = await client.get_me()

    # Print user info
    print(me.stringify())

    # Send a message to a specific phone number
    await client.send_message("+6596742235", "This is a test")

    await client.send_message(
        'me',
        'This message has **bold**, `code`, __italics__ and '
        'a [nice website](https://example.com)!',
        link_preview=False
    )

    await client.send_file('me', 'sendtest.png')


with client:
    client.loop.run_until_complete(main())