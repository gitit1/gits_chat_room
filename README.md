# git_chat_room

**http://git_chat_room.gititregev.com**

## Based on those instructions:

### Goal

Build a React based chat app.
The app should contain two pages - a registration page and a chat page.

### Registration
In this page, the user will enter his username.

**_Username validation rules:_**
1. Length must be between 6-10 characters.
2. Can only contain English letters and digits when:
a. It must contain at least one uppercase character and one lowercase character.
b. Must contain at least one digit.
If the username is invalid, a proper message will be displayed.
If the username is valid, the user will be able to click the "Next" button which will take them to
the chat page.

### Chat
On this page, the user will be able to read and send messages.

**_Rules:_**
1. The structure of the messages will be as follows:
[Posting time] - Username - Message content.
2. Messages belonging to different users will appear in different colors.
3. The message content should support only English (without numbers).
4. Each message must contain at least 5 characters and no more than 120 characters.
The messages must be stored locally (no database needed).

_Bonuses:_
1. Build your chat using websockets.
2. Create a responsive design (mobile).
