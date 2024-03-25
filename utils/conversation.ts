enum Character {
    MainCharacter,
    System
}

enum ActionType {
    NoAction,
    Choose,
    ShowImage,
}

enum ButtonAction {
    PlayGame,
    RouterConversation,
}

export const conversation = [
    // 1-1
    {
        id: 3,
        conversation: [
            {
                "speaker": Character.System,
                "actionType": ActionType.Choose,
                "text": "Xin chào, tôi là Hướng dẫn viên trên chuyến tàu khám phá tri thức mang số hiệu “HIỆN ĐẠI HÓA NỀN VĂN HỌC VIỆT NAM”, xuất phát từ ga hiện tại- 2024 để quay ngược trở về ga quá khứ nền văn học Việt Nam từ thế kỉ XX đến trước CMT8 thành công. Bạn đã sẵn sàng khám phá cuộc hành trình thú vị này chưa?",
                "buttons": [
                    {
                        "text": "SẴN SÀNG",
                        "action": ButtonAction.RouterConversation,
                        "pos": 1
                    },
                    {
                        "text": "TÔI MUỐN SUY NGHĨ THÊM",
                        "action": ButtonAction.RouterConversation,
                        "pos": 0
                    }
                ]
            },
            {
                "actionType": ActionType.Choose,
                "speaker": Character.System,
                "text": "Sau đây là những câu hỏi thắc mắc mà bạn có thể được giải đáp từ hướng dẫn viên của chúng tôi :",
                "buttons": [
                    {
                        "text": "1. Bối cảnh lịch sử, xã hội, văn hóa nước ta từ thế kỉ XX đến trước CMT8",
                        "action": ButtonAction.RouterConversation,
                        "pos": 2
                    },
                    {
                        "text": "2. Đặc điểm cơ bản của VHVN từ thế kỉ XX đến trước CMT8",
                        "action": ButtonAction.RouterConversation,
                        "pos": 3
                    },
                    {
                        "text": "3. Thành tựu chủ yếu của VHVN từ thế kỉ XX đến trước CMT8",
                        "action": ButtonAction.RouterConversation,
                        "pos": 9
                    }
                ]
            },
            {
                "actionType": ActionType.ShowImage,
                "speaker": Character.System,
                "key": "video",
                "text": "Bạn có thể xem video dưới đây để có thể hiểu hơn về bối cảnh lịch sử, xã hội nước ta từ đầu thế kỉ XX:",
                "image": 'https://www.youtube.com/embed/qUnSMdFBB9c?si=qYPj8lHiEVAhq9XM'
            },
            {
                "actionType": ActionType.Choose,
                "speaker": Character.System,
                "text": "Có 3 đặc điểm cơ bản của nền văn học từ đầu thế kỉ XX đến CMT8 1945:\n"
                    + "Nền văn học đổi mới theo hướng hiện đại hóa\n"
                    + "Sự phân hóa phức tjap thành nhiều xu hướng văn học\n"
                    + "Văn học phát triển với một tốc độ phát triển hết sức nhanh chóng\n"
                    + "Câu hỏi thắc mắc:",
                "buttons": [
                    {
                        "text": "Hiện đại hóa là gì?",
                        "action": ButtonAction.RouterConversation,
                        "pos": 4
                    },
                    {
                        "text": "Những nhân tố tạo điều kiện cho văn học Việt Nam đổi mới theo hướng hiện đại hóa?",
                        "action": ButtonAction.RouterConversation,
                        "pos": 5
                    },
                    {
                        "text": "Quá trình hiện đại hóa diễn ra mấy giai đoạn?",
                        "action": ButtonAction.RouterConversation,
                        "pos": 6
                    }
                ]
            },
            {
                "actionType": ActionType.Choose,
                "speaker": Character.System,
                "text": "Chú giải: Hiện đại hóa là gì? \n" +
                    "Hiện đại hóa ở đây được hiểu là quá trình làm cho văn học thoát khỏi hệ thống thi pháp văn học trung đại và đổi mới theo hình thức văn học phương Tây, có thể hội nhập với nền văn học hiện đại thế giới.",
                "buttons": [
                    {
                        "text": "Quay lại",
                        "action": ButtonAction.RouterConversation,
                        "pos": 3
                    }
                ]
            },
            {
                "actionType": ActionType.Choose,
                "speaker": Character.System,
                "text": "Những nhân tố tạo điều kiện cho văn học Việt Nam đổi mới theo hướng hiện đại hóa: \n" +
                    "-\tChính sách khai thác thuộc địa, xã hội: nhiều giai cấp, tầng lớp mới xuất hiện như lớp công chúng có đời sống tinh thần và thị hiếu mới. \n" +
                    "-\tLuồng văn hóa mới thông qua tầng lớp tri thức Tây học (phần lớn là tiểu tư sản) ngày càng thấm sâu vào ý thức của người cầm bút cũng như người đọc sách. \n" +
                    "-\tChữ quốc ngữ thay thế chữ Hán, chữ Nôm. Việc phổ biến rộng rãi chữ quốc ngữ đã tạo điều kiện thuận lợi cho công chúng tiếp xúc với sách báo. \n" +
                    "-\tNhu cầu văn hóa của lớp công chúng mới đã nảy sinh những hoạt động kinh doanh văn hóa, làm cho nghề in, nghề xuất bản, nghề làm báo theo kĩ thuật hiện đại phát triển khá mạnh. Viết văn cũng trở thành một nghề kiếm sống tuy rất khó khăn, chật vật.",
                "buttons": [
                    {
                        "text": "Quay lại",
                        "action": ButtonAction.RouterConversation,
                        "pos": 3
                    }
                ]
            },
            {
                "actionType": ActionType.ShowImage,
                "speaker": Character.System,
                "text": "Có 3 giai đoạn diễn ra quá trình hiện đại hóa văn học Việt Nam từ đầu thế kỉ XX đến Cách mạng tháng Tám năm 1945:",
                "image": '/conversation-images/2.png'
            },
            {
                "actionType": ActionType.ShowImage,
                "speaker": Character.System,
                "text": "Văn học Việt Nam thời kì này đã hình thành 2 bộ phận văn học: công khai và không công khai. \n" +
                    "Chú giải: \n" +
                    "-\tVăn học công khai là văn học hợp pháp, tồn tại trong vòng pháp luật của chính quyền thực dân phong kiến.\n" +
                    "-\tVăn học không công khai bị đặt ra ngoài vòng pháp luật, phải lưu hành bí mật. \n" +
                    "Văn học giai đoạn này phát triển hết sức nhanh chóng về số lượng, sự cách tân, sự trưởng thành về độ kết tinh ở những cây bút tài năng. Vũ Ngọc Phan cho rằng: “Ở nước ta, một năm có thể kể như 30 năm của người”.",
                "image": '/conversation-images/3.png'
            },
            {
                "actionType": ActionType.NoAction,
                "speaker": Character.System,
                "text": "Nguyên nhân cho sự phát triển nhanh chóng về văn học: \n" +
                    "-\tDo cơ cấu xã hội biến đổi nhanh chóng tạo nên 1 thế hệ công chúng mới với nhu cầu mới … Xã hội đặt ra nhiều vấn đề về đất nước, con người, nghệ thuật đòi hỏi văn học giải quyết.\n" +
                    "-\tVai trò của tầng lớp trí thức Tây học với sự thức tỉnh, trỗi dậy của “cái tôi” tạo nên một động lực.\n" +
                    "-\tDo sức sống nội tại mãnh liệt của bản thân nền văn học dân tộc..\n" +
                    "-\tThời kì văn chương trở thành một thứ hàng hóa, viết văn được coi là một nghề để kiếm sống…",
            },
            {
                "actionType": ActionType.ShowImage,
                "speaker": Character.System,
                "text": "-\tĐóng góp mới của thời đại: tinh thần dân chủ được thể hiện trong chủ nghĩa yêu nước và chủ nghĩa nhân đạo. \n" +
                    "+ Chủ nghĩa yêu nước: gắn với dân “Dân là dân nước, nước là nước dân”, gắn với lí tưởng xã hội chủ nghĩa.\n" +
                    "+ Chủ nghĩa nhân đạo: gắn liền với sự thức tỉnh về ý thức cá nhân của người cầm bút: đấu tranh chống luân lí, lễ giáo phong kiến để giành quyền hưởng hạnh phúc cá nhân, đặc biệt là xung quanh vấn đề tình yêu, hôn nhân, gia đình..\n" +
                    "-\tBảng thành tựu của văn học giai đoạn này: ",
                "image": "/conversation-images/4.png"
            },
            {
                "actionType": ActionType.Choose,
                "speaker": Character.System,
                "text": "Đã hoàn tất kiến thức, bạn có muốn quay lại để ôn tập không?",
                "buttons": [
                    {
                        "text": "Quay lại",
                        "action": ButtonAction.RouterConversation,
                        "pos": 0
                    },
                    {
                        "text": "Làm bài quiz",
                        "action": ButtonAction.PlayGame,
                    }
                ]
            },
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