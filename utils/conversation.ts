enum Character {
    MainCharacter,
    System
}
enum ActionType {
    NoAction,
    Speaker,
    ShowImage,
}
enum ButtonAction {
    PlayGame,
    RouterConversation,
}
export const conversationChaper1 = [
    // 1-1
    {
        id: 3,
        conversation: [
            {
                "speaker": Character.MainCharacter,
                "actionType": ActionType.Speaker,
                "data": "I want to check my paper"
            },
            {
                "actionType": ActionType.ShowImage,
                "speaker": Character.System,
                "text": "Here's your paper:",
                "image": "your_paper.jpg"
            },
            {
                "actionType": ActionType.Speaker,
                "speaker": Character.System,
                "text": "What would you like to do?",
                "buttons": [
                    {
                        "text": "PlayGame",
                        "action": ButtonAction.PlayGame
                    },
                    {
                        "text": "GoBack",
                        "action": ButtonAction.RouterConversation,
                        "pos": 1
                    }
                ]
            }
        ]
    }
    // 1-2
    // 1-3
    // 1-4
    // 1-2-1
    // 1-2-2
    // 1-2-3
    // 1-3-1
    // 1-4-1
]