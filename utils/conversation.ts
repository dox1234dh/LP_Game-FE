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
        conversation: []
    },
    // 1-2
    {
        id: 9,
        conversation: []
    },
    // 1-3
    {
        id: 7,
        conversation: []
    },
    // 1-4
    {
        id: 16,
        conversation: []
    },
    // 1-2-1
    {
        id: 10,
        conversation: []
    },
    // 1-2-2
    {
        id: 11,
        conversation: []
    },
    // 1-2-3
    {
        id: 12,
        conversation: []
    },
    // 1-3-1
    {
        id: 17,
        conversation: []
    },
    // 1-4-1
    {
        id: 18,
        conversation: []
    },
    // 2-1
    {
        id: 1,
        conversation: [
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Xin chào, tôi là Hướng dẫn viên trên chuyến tàu khám phá tri thức mang số hiệu “HIỆN ĐẠI HÓA NỀN VĂN HỌC VIỆT NAM”, xuất phát từ ga hiện tại- 2024 để quay ngược trở về ga quá khứ nền văn học Việt Nam từ thế kỉ XX đến trước CMT8 thành công. Bạn đã sẵn sàng khám phá cuộc hành trình thú vị này chưa?",
                buttons: [
                    {
                        text: "SẴN SÀNG",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    },
                    {
                        text: "TÔI MUỐN SUY NGHĨ THÊM",
                        action: ButtonAction.RouterConversation,
                        pos: 0
                    }
                ]
            },
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Sau đây là những câu hỏi thắc mắc mà bạn có thể được giải đáp từ hướng dẫn viên của chúng tôi :",
                buttons: [
                    {
                        text: "1. Bối cảnh lịch sử, xã hội, văn hóa nước ta từ thế kỉ XX đến trước CMT8",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "2. Đặc điểm cơ bản của VHVN từ thế kỉ XX đến trước CMT8",
                        action: ButtonAction.RouterConversation,
                        pos: 3
                    },
                    {
                        text: "3. Thành tựu chủ yếu của VHVN từ thế kỉ XX đến trước CMT8",
                        action: ButtonAction.RouterConversation,
                        pos: 9
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                key: "video",
                text: "Bạn có thể xem video dưới đây để có thể hiểu hơn về bối cảnh lịch sử, xã hội nước ta từ đầu thế kỉ XX:",
                image: 'https://www.youtube.com/embed/qUnSMdFBB9c?si=qYPj8lHiEVAhq9XM'
            },
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Có 3 đặc điểm cơ bản của nền văn học từ đầu thế kỉ XX đến CMT8 1945:\n"
                    + "Nền văn học đổi mới theo hướng hiện đại hóa\n"
                    + "Sự phân hóa phức tjap thành nhiều xu hướng văn học\n"
                    + "Văn học phát triển với một tốc độ phát triển hết sức nhanh chóng\n"
                    + "Câu hỏi thắc mắc:",
                buttons: [
                    {
                        text: "Hiện đại hóa là gì?",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Những nhân tố tạo điều kiện cho văn học Việt Nam đổi mới theo hướng hiện đại hóa?",
                        action: ButtonAction.RouterConversation,
                        pos: 5
                    },
                    {
                        text: "Quá trình hiện đại hóa diễn ra mấy giai đoạn?",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    }
                ]
            },
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Chú giải: Hiện đại hóa là gì? \n" +
                    "Hiện đại hóa ở đây được hiểu là quá trình làm cho văn học thoát khỏi hệ thống thi pháp văn học trung đại và đổi mới theo hình thức văn học phương Tây, có thể hội nhập với nền văn học hiện đại thế giới.",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 3
                    }
                ]
            },
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Những nhân tố tạo điều kiện cho văn học Việt Nam đổi mới theo hướng hiện đại hóa: \n" +
                    "-\tChính sách khai thác thuộc địa, xã hội: nhiều giai cấp, tầng lớp mới xuất hiện như lớp công chúng có đời sống tinh thần và thị hiếu mới. \n" +
                    "-\tLuồng văn hóa mới thông qua tầng lớp tri thức Tây học (phần lớn là tiểu tư sản) ngày càng thấm sâu vào ý thức của người cầm bút cũng như người đọc sách. \n" +
                    "-\tChữ quốc ngữ thay thế chữ Hán, chữ Nôm. Việc phổ biến rộng rãi chữ quốc ngữ đã tạo điều kiện thuận lợi cho công chúng tiếp xúc với sách báo. \n" +
                    "-\tNhu cầu văn hóa của lớp công chúng mới đã nảy sinh những hoạt động kinh doanh văn hóa, làm cho nghề in, nghề xuất bản, nghề làm báo theo kĩ thuật hiện đại phát triển khá mạnh. Viết văn cũng trở thành một nghề kiếm sống tuy rất khó khăn, chật vật.",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 3
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Có 3 giai đoạn diễn ra quá trình hiện đại hóa văn học Việt Nam từ đầu thế kỉ XX đến Cách mạng tháng Tám năm 1945:",
                image: '/conversation-images/2.png'
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Văn học Việt Nam thời kì này đã hình thành 2 bộ phận văn học: công khai và không công khai. \n" +
                    "Chú giải: \n" +
                    "-\tVăn học công khai là văn học hợp pháp, tồn tại trong vòng pháp luật của chính quyền thực dân phong kiến.\n" +
                    "-\tVăn học không công khai bị đặt ra ngoài vòng pháp luật, phải lưu hành bí mật. \n" +
                    "Văn học giai đoạn này phát triển hết sức nhanh chóng về số lượng, sự cách tân, sự trưởng thành về độ kết tinh ở những cây bút tài năng. Vũ Ngọc Phan cho rằng: “Ở nước ta, một năm có thể kể như 30 năm của người”.",
                image: '/conversation-images/3.png'
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Nguyên nhân cho sự phát triển nhanh chóng về văn học: \n" +
                    "-\tDo cơ cấu xã hội biến đổi nhanh chóng tạo nên 1 thế hệ công chúng mới với nhu cầu mới … Xã hội đặt ra nhiều vấn đề về đất nước, con người, nghệ thuật đòi hỏi văn học giải quyết.\n" +
                    "-\tVai trò của tầng lớp trí thức Tây học với sự thức tỉnh, trỗi dậy của “cái tôi” tạo nên một động lực.\n" +
                    "-\tDo sức sống nội tại mãnh liệt của bản thân nền văn học dân tộc..\n" +
                    "-\tThời kì văn chương trở thành một thứ hàng hóa, viết văn được coi là một nghề để kiếm sống…",
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "-\tĐóng góp mới của thời đại: tinh thần dân chủ được thể hiện trong chủ nghĩa yêu nước và chủ nghĩa nhân đạo. \n" +
                    "+ Chủ nghĩa yêu nước: gắn với dân “Dân là dân nước, nước là nước dân”, gắn với lí tưởng xã hội chủ nghĩa.\n" +
                    "+ Chủ nghĩa nhân đạo: gắn liền với sự thức tỉnh về ý thức cá nhân của người cầm bút: đấu tranh chống luân lí, lễ giáo phong kiến để giành quyền hưởng hạnh phúc cá nhân, đặc biệt là xung quanh vấn đề tình yêu, hôn nhân, gia đình..\n" +
                    "-\tBảng thành tựu của văn học giai đoạn này: ",
                image: "/conversation-images/4.png"
            },
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Đã hoàn tất kiến thức, bạn có muốn quay lại để ôn tập không?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 0
                    },
                    {
                        text: "Làm bài quiz",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
        ]
    },
    // 2-2
    {
        id: 19,
        conversation: []
    },
    // 2-3
    {
        id: 20,
        conversation: []
    },
    // 2-4
    {
        id: 21,
        conversation: []
    },
    // 2-5
    {
        id: 22,
        conversation: []
    },
    // 2-2-1
    {
        id: 23,
        conversation: []
    },
    // 2-3-1
    {
        id: 24,
        conversation: []
    },
    // 2-4-1
    {
        id: 25,
        conversation: []
    },
    // 2-5-1
    {
        id: 26,
        conversation: []
    },
    // 3-1
    {
        id: 2,
        conversation: [
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Xin chào, tôi là Hướng dẫn viên trên chuyến tàu mang số hiệu KHÁNG CHIẾN HÀO HÙNG, xuất phát từ ga 2024 đến điểm cuối là ga 1945 – 1975.  Bạn đã sẵn sàng khám phá cuộc hành trình này?",
                buttons: [
                    {
                        text: "SẴN SÀNG",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    },
                    {
                        text: "TÔI MUỐN SUY NGHĨ THÊM",
                        action: ButtonAction.RouterConversation,
                        pos: 0
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Cảm ơn bạn đã sẵn sàng đồng hành cùng tôi. Bây giờ hãy lựa chọn những điều mà bạn muốn tìm hiểu nhé!",
                buttons: [
                    {
                        text: "Bối cảnh lịch sử thời kì kháng chiến chống Pháp.",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Văn học Việt Nam thời kì kháng chiến chống Pháp.",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Bối cảnh lịch sử thời kì kháng chiến chống Mĩ.",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Văn học Việt Nam thời kì kháng chiến chống Mĩ.",
                        action: ButtonAction.RouterConversation,
                        pos: 11
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Đây là thông tin khái quát về bối cảnh lịch sử thời kì kháng chiến chống Pháp:\n" +
                    "- Sau Cách mạng tháng 8 năm 1945, thực dân Pháp mưu đồ xâm lược nước ta một lần nữa. \n" +
                    "- Ngày 18/12/1946, ở Hà Nội, Pháp gửi tối hậu thư cho ta, buộc ta phải hạ vũ khí đầu hàng.\n" +
                    "- Ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra “Lời kêu gọi toàn quốc kháng chiến”: “Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc”.",
                image: '/conversation-images/5.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "- Dưới sự lãnh đạo sáng suốt của Đảng và Chủ tịch Hồ Chí Minh, qua 9 năm thực hiện đường lối kháng chiến “Toàn dân, toàn diện, trường kỳ, dựa vào sức mình là chính”, quân và dân ta đã không ngừng phát triển thế tiến công, càng đánh càng mạnh.\n" +
                    "- Những thắng lợi tiêu biểu mà quân ta đã giành được: Chiến dịch Việt Bắc Thu – Đông (1947), Chiến dịch Biên giới (1950), Chiến dịch Đông Xuân (1951 – 1952). Đặc biệt là Chiến dịch Điện Biên Phủ (1954) đã làm nên thắng lợi “lừng lẫy năm châu, chấn động địa cầu’ kết thúc thắng lợi cuộc kháng chiến chống thực dân Pháp xâm lược.",
                image: '/conversation-images/6.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                key: "video",
                text: "- Dưới sự lãnh đạo sáng suốt của Đảng và Chủ tịch Hồ Chí Minh, qua 9 năm thực hiện đường lối kháng chiến “Toàn dân, toàn diện, trường kỳ, dựa vào sức mình là chính”, quân và dân ta đã không ngừng phát triển thế tiến công, càng đánh càng mạnh.\n" +
                    "- Những thắng lợi tiêu biểu mà quân ta đã giành được: Chiến dịch Việt Bắc Thu – Đông (1947), Chiến dịch Biên giới (1950), Chiến dịch Đông Xuân (1951 – 1952). Đặc biệt là Chiến dịch Điện Biên Phủ (1954) đã làm nên thắng lợi “lừng lẫy năm châu, chấn động địa cầu’ kết thúc thắng lợi cuộc kháng chiến chống thực dân Pháp xâm lược.",
                image: 'https://www.youtube.com/embed/5RGhAlxFLXA?si=y29EUFVpqVhfb3La'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về 3 lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Văn học Việt Nam thời kì kháng chiến chống Pháp.",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Bối cảnh lịch sử thời kì kháng chiến chống Mĩ.",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Văn học Việt Nam thời kì kháng chiến chống Mĩ.",
                        action: ButtonAction.RouterConversation,
                        pos: 11
                    },
                    {
                        text: "Quay lại tổng kết",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "- Văn học Cách mạng thời kỳ chống Pháp phát triển mạnh mẽ với đề tài chiến tranh và người lính, đặc biệt với thể loại thơ ca.\n" +
                    "- Hình tượng người lính trong văn chương giai đoạn này hiện lên thật thà, chất phác. Đó là những người nông dân, tri thức đi đánh giặc cứu nước. Tuy hoàn cảnh có gian khổ nhưng họ vẫn luôn lạc quan, yêu đời. (Tác phẩm tiêu biểu: “Đồng chí” – Chính Hữu, “Nhớ” – Hồng Nguyên, “Tây tiến” – Quang Dũng,...)\n" +
                    "- Bên cạnh đó, nội dung của văn học thời kì này luôn gắn bó chặt chẽ, phản ánh hiện thực kháng chiến. Các tác phẩm như khắc họa lại sinh động cuộc chiến đấu gian khổ mà hào hùng của dân tộc (“Việt Bắc” – Tố Hữu, “Tây tiến” – Quang Dũng, “Đất nước” – Nguyễn Đình Thi,...)\n",
                image: '/conversation-images/7.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về 3 lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Bối cảnh lịch sử thời kì kháng chiến chống Pháp.",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Bối cảnh lịch sử thời kì kháng chiến chống Mĩ.",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Văn học Việt Nam thời kì kháng chiến chống Mĩ.",
                        action: ButtonAction.RouterConversation,
                        pos: 11
                    },
                    {
                        text: "Quay lại tổng kết",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Sau khi thất bại trong âm mưu kéo dài và mở rộng chiến tranh Đông Dương, đế quốc Mỹ đã ra sức phá hoại Hiệp định Genève. Chúng muốn chia cắt nước ta lâu dài và muốn biến miền Nam thành thuộc địa kiểu mới.\n" +
                    "- Để thực hiện âm mưu này, từ năm 1954 đến năm 1975, chúng đã áp dụng các chiến lược chiến tranh tàn bạo: Chiến tranh đặc biệt, Chiến tranh cục bộ, chiến lược Việt Nam hóa chiến tranh và âm mưu phá hoại Hiệp định Pari (1973 – 1975).\n" +
                    "- Nhưng dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh, nhân dân ta đã từng bước đánh bại mọi âm mưu, thủ đoạn xâm lược của chúng để đi đến thắng lợi. Có thể kể đến những chiến công:\n" +
                    "+ Đánh bại chiến lược “Chiến tranh đặc biệt” của đế quốc Mỹ (1961 – 1965).\n" +
                    "+ Nhân dân Việt Nam khiến cho chiến lược “Chiến tranh cục bộ” của Mỹ bị phá sản ngay giữa lúc chúng còn trên 50 vạn quân viễn chinh, 70 vạn quân Ngụy và chư hầu ở miền Nam. Ở miền Bắc, quân và dân ta đã đánh bại chiến tranh phá hoại bằng không quân và hải quân của đế quốc Mỹ.\n" +
                    "+ Nhân dân miền Nam đánh bại chiến lược “Việt Nam hóa chiến tranh” của Mỹ - Ngụy (1969 -1973).\n" +
                    "+ Nhân dân miền Nam đấu tranh chống phá hoại Hiệp định Pari, mà cuộc tiến công và nổi dậy mùa xuân năm 1975 đi đến giành thắng lợi hoàn toàn (1973 - 1975).\n" +
                    "- Như vậy, thắng lợi trong cuộc kháng chiến chống Mĩ, cứu nước của nhân dân ta đã kết thúc 30 năm chiến tranh giải phóng dân tộc\n",
                image: '/conversation-images/8.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                key: "video",
                text: "Để biết thêm thông tin, bạn có thể xem thêm video sau: ",
                image: "https://www.youtube.com/embed/mZ99SMWT61w?si=t0zRoHO64KA1l4PE"
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về 3 lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Bối cảnh lịch sử thời kì kháng chiến chống Pháp.",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Văn học Việt Nam thời kì kháng chiến chống Pháp.",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Văn học Việt Nam thời kì kháng chiến chống Mĩ.",
                        action: ButtonAction.RouterConversation,
                        pos: 11
                    },
                    {
                        text: "Quay lại tổng kết",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "- Thời kì chống Mỹ cứu nước, nền văn học cách mạng trở nên phong phú, đa dạng về cả số lượng và đội ngũ tác giả.\n" +
                    "- Các tác giả tiêu biểu thời chống Pháp như Vũ Trọng Phụng, Nam Cao, Nguyễn Tuân,...vẫn tiếp tục sáng tác những tác phẩm có giá trị về tư tưởng và nghệ thuật.\n" +
                    "- Sự xuất hiện của thế hệ tác giả trẻ: Nguyên Ngọc, Nguyễn Quang Sáng, Xuân Quỳnh, Phạm Tiến Duật, Thanh Thảo... khiến cho đội ngũ nhà văn, nhà thơ trở nên hùng hậu hơn.\n" +
                    "- Đề tài trong văn học thời kì này vẫn là phản ánh hiện thực khốc liệt của cuộc chiến và hình ảnh những người lính trẻ như thời kháng chiến chống Pháp. (Các tác phẩm tiêu biểu: “Bài thơ về tiểu đội xe không kính” – Phạm Tiến Duật, “Bài ca xuân 68” – Tố Hữu, “Những người đi tới biển” – Thanh Thảo,...).\n" +
                    "- Thể loại trường ca phát triển mạnh mẽ trong thời kì này. \n",
                image: '/conversation-images/9.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về 3 lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Bối cảnh lịch sử thời kì kháng chiến chống Pháp.",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Văn học Việt Nam thời kì kháng chiến chống Pháp.",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Bối cảnh lịch sử thời kì kháng chiến chống Mĩ.",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Quay lại tổng kết",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
        ]
    },
    // 3-2
    {
        id: 5,
        conversation: []
    },
    // 3-3
    {
        id: 6,
        conversation: []
    },
    // 3-2-1
    {
        id: 13,
        conversation: []
    },
    // 3-3-1
    {
        id: 14,
        conversation: []
    },
    // 4-1
    {
        id: 4,
        conversation: []
    },
    // 4-2
    {
        id: 27,
        conversation: []
    },
    // 4-3
    {
        id: 8,
        conversation: []
    },
    // 4-2-1
    {
        id: 28,
        conversation: []
    },
    // 4-3-1
    {
        id: 15,
        conversation: []
    },
]