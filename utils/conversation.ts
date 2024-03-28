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
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Xin chào, tôi là Hướng dẫn viên trên chuyến tầu mang số hiệu MỘT THỜI VÀNG SON, xuất phát từ ga 2024 đến điểm cuối là ga 1500. Đã sẵn sàng khám phá cuộc hành trình này?",
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
                text: "Cảm ơn bạn đã sẵn sàng đồng hành cùng tôi. Bây giờ hãy lựa chọn những điều mà bạn muốn tìm kiếm nhé!",
                buttons: [
                    {
                        text: "Văn học trung đại Việt Nam diễn ra trong khoảng thời gian nào?",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Văn học trung đại Việt Nam gồm mấy bộ phận?",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Loại hình và thể loại văn học trung đại Việt Nam được phân chia như thế nào?",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Lực lượng sáng tác chính của văn học trung đại Việt Nam?",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Văn học trung đại Việt Nam đã chịu ảnh hưởng của những loại hình văn học nào?",
                        action: ButtonAction.RouterConversation,
                        pos: 10
                    },
                    {
                        text: "Cảm hứng sáng tác chính của văn học trung đại Việt Nam?",
                        action: ButtonAction.RouterConversation,
                        pos: 12
                    },
                    {
                        text: "Đặc trưng nổi bật nhất của văn học trung đại Việt Nam?",
                        action: ButtonAction.RouterConversation,
                        pos: 14
                    },
                    {
                        text: "Những quan niệm về bản chất- chức năng của văn học trung đại Việt Nam",
                        action: ButtonAction.RouterConversation,
                        pos: 16
                    },
                    {
                        text: "Những gương mặt tiêu biểu nhất cho nền văn học trung đại đồ sộ ở Việt Nam?",
                        action: ButtonAction.RouterConversation,
                        pos: 18
                    },
                    {
                        text: "Làm bài quiz",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Văn học trung đại Việt Nam bao gồm những tác phẩm được sáng tác, hình thành và phát triển trong khoảng thời gian từ TK XVI đến TK XIX (thời kỳ phong kiến Việt Nam - thời kỳ bắt đầu tự chủ của dân tộc đến khi Pháp thuộc)\n" +
                    "\n" +
                    "*Chú thích: Thời kì phong kiến- chế độ quân chủ chuyên chế- chế độ đất nước tồn tại dưới dạng Vua là người trị vì cao nhất, phản ánh hình thức truyền nối và chiếm hữu đất đai; cấu trúc xã hội xoay quanh những mối quan hệ xuất phát từ việc sở hữu đất đai để đổi lấy lao động, địa chủ bóc lột nông dân…\n",
                image: '/conversation-images/10.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Văn học trung đại Việt Nam gồm 2 bộ phận chính:\n" +
                    "+ Văn học viết bằng chữ Hán\n" +
                    "+ Văn học viết bằng chữ Nôm\n",
                image: '/conversation-images/11.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Văn học trung đại Việt Nam được chia làm hai loại hình, mỗi loại hình lại có những thể loại khác nhau được sử dụng:",
                image: '/conversation-images/12.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Tác giả là người Việt Nam sáng tác (chủ yếu là tầng lớp trí thức phong kiến: vua, quan, tăng lữ, Nho sĩ, nhà sư,…)",
                image: '/conversation-images/13.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "-\tVăn học dân gian – lấy văn học dân gian làm nền tảng (đề tài, ngôn ngữ, thể thơ, cốt truyện, nghệ thuật trữ tình tự sự, quan niệm “bất thành văn” “phi chính thống”…) \n" +
                    "-\tVăn học cổ điển Trung Hoa (tư tưởng, thể thơ, thi liệu, quan điểm sáng tác,…)\n" +
                    "Chọn lọc, sáng tạo, biến đổi phù hợp với đặc điểm dân tộc và thời đại con người đất Việt.\n",
                image: '/conversation-images/14.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "-\tChủ nghĩa yêu nước – gắn với vận mệnh đất nước \n" +
                    "-\tChủ nghĩa nhân đạo – gắn với số phận con người\n" +
                    "\tLuôn gắn bó với vận mệnh quốc gia, dân tộc, thể hiện rõ tinh thần yêu nước và đề cao các giá trị nhân văn, nhân đạo.",
                image: '/conversation-images/15.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Tính quy phạm và phá vỡ tính quy phạm luôn là những đặc trưng điển hình và nổi bật nhất trong những sáng ở thời kì này từ quan điểm sáng tác, kiểu tư duy nghệ thuật, hình thức thể loại, hệ thống thi liệu và các thủ pháp ngôn ngữ,… \n" +
                    "Tuy luôn được quy định chặt chẽ và có tính khuôn mẫu, song một số đặc điểm quy phạm bị phá vỡ vẫn thường xuất hiện, thể hiện tính dân tộc và ý thức cá tính của từng tác giả,…\n",
                image: '/conversation-images/16.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Chức năng giáo huấn: “văn dĩ tải đạo” , “thi dĩ ngôn chí” của Nho giáo ảnh hướng đến Lễ kí, \n" +
                    "\tThi có chức năng giáo dục đạo lí, cần đạt tiêu chuẩn “ôn tồn hòa nhã, nhẹ nhàng mềm dẻo, thành thật hết lòng, đầy đặn không hời hợt bạc bẽo”.\n" +
                    "Chức năng mang tính chính thống.\n" +
                    "Chức năng thẩm mỹ: \n" +
                    "+ Theo quan niệm VHCN, quan niệm Nho gia chính thống xác định tiêu chuẩn cửa cái đẹp trong văn học nhà nho – “lấy ôn nhu đôn hậu làm gốc nhà thơ”…\n" +
                    "+ Theo văn học nghệ thuật,”ý thức tự giác văn học”…\n" +
                    "\n" +
                    "Chức năng nhận thức- tham nhập hiện thực:\n" +
                    "Văn học quan tâm đến tất cả những vấn đề thiên cốt của đời sống con người; có tham vọng góp phần giải quyết những nhu cầu tinh thần, vật chất của đời sống con người – “Văn học là nhân học”.\n" +
                    "\n" +
                    "Chức năng giải trí-phúng thích (trào phúng):\n" +
                    "Quan niệm này được bộc lộ gián tiếp qua những sáng tác chữ Nôm; đặc biệt là tiếng cười trào phúng mang đậm chất sống của văn học dân gian, đi ngược lại tinh thần “mỹ thích” của văn chương nhà Nho…\n" +
                    "(ví dụ trong phú thơ Nôm của Hồ Xuân Hương, Phạm Thái, Nguyễn Công Trứ, Nguyễn Quý Tân,…)\n" +
                    "\n",
                image: '/conversation-images/17.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "-\tTrần Nhân Tông (vị vua thứ 3 của đời nhà Trần, sau Trần Thánh Tông.)\n" +
                    "-\tNguyễn Trãi\n" +
                    "-\tNguyễn Du\n" +
                    "-\tHồ Xuân Hương\n" +
                    "-\tNguyễn Khuyến\n" +
                    "-\tBà Huyện Thanh Quan\n" +
                    "-\tĐoàn Thị Điểm\n" +
                    "-\tTrần Quốc Tuấn\n" +
                    "-\tChu Văn An\n",
                image: '/conversation-images/18.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 1-2
    {
        id: 9,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự quay trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé!",
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
                ],
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Chuyến tàu lần này sẽ đưa bạn tới gặp một nhà chính trị, nhà văn, nhà văn hóa lớn cũng như một cây bút lớn của dân tộc Việt Nam – Nguyễn Trãi. Còn bây giờ, bạn đã sẵn sàng cho chuyến đi này hay chưa, hãy cùng đoàn tàu chiếm lính tri thức tiếp thôi nào!",
                buttons: [
                    {
                        text: "Tiểu sử",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Sự nghiệp văn học",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Phong cách sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Các tác phẩm tiêu biểu",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "- Hiệu là Ức Trai, quê gốc tại Chí Linh, Hải Dương, lớn lên ở Thường Tín, Hà Tây.\n" +
                    "- Sinh ra trong gia đình có cha là tiến sĩ cuối đời Trần, mẹ mất sớm, tuổi thơ của anh em Nguyễn Trãi ở nhà ông ngoại, rồi lại quay về sống bên cha dù sau đó lại bị quân Minh bắt được và giam lỏng.\n" +
                    "- Ông từng đỗ Thái học sinh và cùng cha ra làm quan dưới triều Hồ.\n" +
                    "- Nhà Hồ thất thủ, ông có những năm tháng về quê ở ẩn, phiêu bạt, tích lũy được rất nhiều trải nghiệm…\n" +
                    "- Khi nhà Lê thay thế nhà Hồ cũng là một bước ngoặt lớn trong cuộc đời ông, một lần nữa ra làm quan và nắm giữ chức vụ quan trọng.\n" +
                    "- Ông bị vu oan cho tội giết vua và phải chịu án tru di tam tộc, thơ văn của ông cũng bị tiêu hủy và cấm đoán vào năm 1442.\n" +
                    "- Mãi tới năm 1464, vua Lê Thánh Tông mới minh oan cho Nguyễn Trãi và ban lệnh tìm kiếm, khắc in những di cảo của ông.\n",
                image: '/conversation-images/36.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "- Sự nghiệp của ông khá đồ sộ: Là bậc đại anh hùng dân tộc, một nhà chính trị, quân sư, nhà ngoại giao, nhà văn hóa, nhà thơ kiệt xuất của lịch sử trong thời đại phong kiến Việt Nam.\n" +
                    "- Kéo theo đó là số lượng di cảo ông để lại cho đời là vô cùng lớn và rất nhiều di sản quý báu, trong đó nổi bật là những sáng tác được viết bằng chữ Hán và chữ Nôm, thuộc nhiều lĩnh vực: quân sự, chính trị, lịch sử, địa lí, văn học,…\n" +
                    "- Cuộc đời ông có nhiều lần bị oan vì tính thanh bạch của mình, khiến ông càng khép mình lại và lui về ở ẩn nhưng lòng vẫn không nguôi hướng về thế sự. Thời điểm này cũng là lúc số lượng tác phẩm của ông ngày một dày lên vì chỉ có thiên nhiên và văn chương bầu bạn cùng ông lúc này.\n" +
                    "- Tham gia vào nghĩa quân Lam Sơn giúp con đường văn chương của ông nở rộ và thêm niềm tin vào chính quyền, ông lại ra giúp nước một lần nữa và để lại cho đời những tác phẩm kiệt xuất… \n",
                image: '/conversation-images/37.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "1.\tNội dung thơ văn\n" +
                    "-\tThơ ông rất đa dạng, phong phú về đề tài, cảm hứng sáng tác…\n" +
                    "-\tLấy tư tưởng Nhân nghĩa từ Nho giáo làm gốc rễ, đặt dân lên làm ưu tiên nhưng có chọn lọc và sáng tạo. Với Nguyễn Trãi, nhân nghĩa trước hết là thương dân; lấy cuộc sống bình yên, no ấm của nhân dân làm mục tiêu cao nhất; cùng với đó là tôn trọng và biết ơn họ. \n" +
                    "-\tBên cạnh đó tình yêu thiên nhiên cũng là nguồn cảm hứng lớn trong thơ văn Nguyễn Trãi; bởi lẽ tâm hồn ông luôn rộng mở, tinh tế, lãng mạn – nâng niu từng vẻ đẹp, từng khoảnh khắc giao hòa cùng thiên nhiên… \n" +
                    "-\tNhưng ông vẫn luôn vướng bận bên những ưu tư về thế sự bởi tư tưởng trung quân yêu dân, dù đã về ở ẩn nhưng tâm hồn ông vẫn luôn thể hiện rõ hòa cảm, khát vọng xây dựng đất nước ngày càng độc lập, thái bình, hưng thịnh của Nguyễn Trãi…\n" +
                    "\n" +
                    "2.\tĐặc điểm nghệ thuật\n" +
                    "Là sự kết tinh của văn chính luận, thơ chữ Hán và thơ chữ Nôm cùng nhiều thành tựu nghệ thuật đặc sắc, góp phần quan trọng vào sự phát triển, hoàn thiện một số thể loại văn học trung đại Việt Nam…\n" +
                    "-\tVăn chính luận của Nguyễn Trãi luôn đạt tới trình độ mẫu mực phần lớn đều hết sức thuyết phục: sự kết hợp giữa lí lẽ sắc bén, dẫn chứng xác đáng; cách lập luận và bố cụ chặt chẽ; ngôn ngữ hàm súc, kết hợp nhiều phong cách ngôn ngữ và nhiều phương thức biểu đạt, giọng điệu truyền cảm…\n" +
                    "-\tThơ chữ Hán hầu hết được sáng tác bằng thể thơ Đường luật cùng sự phá cách, đạt tới trình độ nhuần nhuyễn, điêu luyện; ngôn ngữ cô đúc; nghệ thuật tả cảnh, tả tình, tinh tế, tài hoa, “ý tại ngôn ngoại”…\n" +
                    "-\tThơ chữ Nôm của ông được đánh giá là đỉnh cao của dòng thơ quốc âm (tiếng Việt) thời trung đại. Ngôn ngữ thơ giản dị, đậm đà tính dân tộc…\n",
                image: '/conversation-images/38.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Sáng tác ông để lại cho đời sau là cả một kho tàng, chưa có thống kê chính xác có tổng cộng bao nhiêu tác phẩm của Nguyễn Trãi, bởi lẽ thời gian ở ẩn là khoảng thời gian tác giả sáng tác thật nhiều, mà cũng là lúc các sáng tác ấy khó thống kê được nhất. \n" +
                    "Nhưng nổi bật hơn cả vẫn là một loạt những tập thơ như:\n" +
                    "\n" +
                    "-\t“Ức Trai thi tập”\n" +
                    "-\t“Quân trung từ mệnh tập”\n" +
                    "-\t“Quốc ân thi tập”\n" +
                    "Hay một số bài thơ nổi tiếng:\n" +
                    "-\t“Bình Ngô đại cáo”\n" +
                    "-\t“Dục Thúy sơn”\n" +
                    "-\tDư địa chí\n" +
                    "-\t…………\n",
                image: '/conversation-images/39.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 1-3
    {
        id: 7,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Xin chào, tôi là Hướng dẫn viên trên chuyến tàu mang số hiệu BÀ CHÚA THƠ NÔM, xuất phát từ thế kỉ XXI đến điểm cuối là ga TK XVIII. Bạn đã sẵn sàng khám phá cuộc hành trình này?",
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
                ],
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Cảm ơn bạn đã sẵn sàng đồng hành cùng tôi. Bây giờ hãy lựa chọn những điều mà bạn muốn tìm kiếm nhé!",
                buttons: [
                    {
                        text: "Tiểu sử cơ bản, ngắn gọn về Hồ Xuân Hương.",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Vai trò Hồ Xuân Hương trong chiều dài phát triển văn học Việt Nam",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Phong cách sáng tác Hồ Xuân Hương ",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Nghệ thuật thơ Hồ Xuân Hương",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Các tác phẩm để đời của Hồ Xuân Hương",
                        action: ButtonAction.RouterConversation,
                        pos: 10
                    },
                    {
                        text: "Video về Hồ Xuân Hương",
                        action: ButtonAction.RouterConversation,
                        pos: 12
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Nguồn gốc, xuất thân\n" +
                    "Đa phần đều cho rằng:\n" +
                    "-\tHồ Xuân Hương sống trong gian đoạn cuối thế kỉ XVII-đầu TK XIX\n" +
                    "-\tLà người ở xã Quỳnh Đôi, huyện Quỳnh Lưu, tỉnh Nghệ An\n" +
                    "-\tTuổi thơ êm đềm ở trong dinh thự lớn tên “Cổ Nguyệt đường”, ít bị ràng buộc trong gia giáo nghiêm khắc và được hưởng nền văn học từ sớm nên bộc lộ được rõ tư chất thông minh và hiếu học…\n" +
                    "Cuộc đời\n" +
                    "-\tBà được cưới gả từ rất sớm, những cả hai lần đò đèu không viên mãn, lận đận, éo le, ngang trái, xảy ra nhiều biến cố, khó khăn dù tài sắc vẹn toàn.\n" +
                    "-\tBà thường rong ruổi nhiều nơi và giao lưu với nhiều danh sĩ nổi tiếng cùng thời, để lại không ít dấu ấn – có thể nói đây là một hiện tượng hiến thấy trong xã hội phong kiến…\n",
                image: '/conversation-images/28.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Hồ Xuân Hương xuất hiện trong văn học trung đại Việt Nam đã tạo nên sự giao thoa giữa văn học viết với văn học dân gian. Bởi lẽ bà được xếp vào văn học viết nhưng có những biểu hiện của hiện tượng văn học dân gian như truyền miệng nhưng lại được sáng tác dưới hình thức chữ viết;  dẫn đến có cách gọi thơ của bà là “thơ Nôm truyền tụng” hay “thơ Nôm truyền bản”…\n" +
                    "\n" +
                    "Bà ảnh hưởng không nhỏ đến nền nghệ thuật nước nhà ở những giai đoạn sau đó như trong văn học, âm nhạc, nghệ thuật sân khấu,… đều lấy Hồ Xuân Hương làm nguồn cảm hứng. \n" +
                    "Những tác phẩm của bà cũng được đưa vào trong chương trình giáo dục môn Ngữ văn…\n",
                image: '/conversation-images/29.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Bởi lẽ Hồ Xuân Hương đã từng phải trải qua rất nhiều những thăng trầm trong cuộc sống nhưng đều không khiến bà chịu khuất phục và ngược lại càng mạnh mẽ, kiên cường hơn nên chủ đề trong thơ bà cũng phản ánh rất chân thực cuộc sống con người thời bấy giờ, đặc biệt là người phụ nữ:\n" +
                    "-\t Là nhà thơ phụ nữ viết về phụ nữ - những người phụ nữ không hạnh phúc trong tình cảm và hôn nhân.  “Là tiếng nói cảm thương, tiếng nói khẳng định, tiếng nói tự ý thức đầy bản lĩnh.”\n" +
                    "-\tNhà thơ trữ tình, trào phúng: bà châm biếm, chế giếu, phê phán những thói hư tật xấu trong xã hội phong kiến. Hy vọng, khát khao tự do trong cuộc sống khỏi sự khắc nghiệt của chế độ phong kiến.\n" +
                    "-\tTình yêu quê hương, đất nước, thiên nhiên cũng không thể thiếu trong thơ bà.\n",
                image: '/conversation-images/30.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "-\tGiọng điệu: Sắc sảo, độc đáo và đôi khi nghịch ngợm\n" +
                    "-\tNgôn ngữ: Sử dụng sáng tạo ngôn ngữ văn học dân gian (như: thành ngữ, tục ngữ, ca dao, Đường luật Nôm,…) bằng cách “tâm trạng hóa” chúng hay sử dụng khẩu ngữ,..\n" +
                    "-\tHình tượng nghệ thuật trong thơ Hồ Xuân Hương đều được xây dựng trên một quan niệm thẩm mỹ: “Cái đẹp là cuộc sống tự nhiên, bản năng lành mạnh của con người.”  hay hướng tới “vẻ đẹp trần thế của thân thể người phụ nữ”\n" +
                    "-\tCác tác phẩm thơ của bà thường được trình bày theo phong cách thất ngôn bát cú hoặc thất ngôn tứ tuyệt; chữ Nôm điêu luyện và đặc sắc hơn chữ Hán.\n" +
                    "-\tÝ tưởng thơ táo bạo, dù là điều cấm kị đối với lễ giáo phong kiến\n",
                image: '/conversation-images/31.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "-\tThơ chữ Hán: “Độ Hoa phong”, “Hải ốc trù”, tập thơ “Lưu hương ký” (24 chữ Hán- 26 chữ Nôm).\n" +
                    "-\tThơ chữ Nôm (đồ sộ mà tiêu biểu có): “Bánh trôi nước”, “Tự tình II”, “Cái nợ chồng con”, “Đánh đu”, “Đánh cờ”, “Mời trầu”, “Thiếu nữ ngủ ngày”, “Vinh cái quạt”,… hay những chùm thơ Nôm xướng họa cùng Chiêu Hổ…\n",
                image: '/conversation-images/32.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                key: "audio",
                text: "Video Hồ Xuân Hương: ",
                image: 'https://www.youtube.com/embed/FjcCYxX3L6o?si=jitpouwH7SSwswwL'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 1-4
    {
        id: 16,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự quay trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé!",
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
                ],
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một nhà thơ được Xuân Diệu nhận xét là “nhà thơ của quê hương làng cảnh”, là nhà thơ số một viết về nông thôn Việt Nam. Và là nhà thơ cổ điển lớn cuối cùng của văn học trung đại Việt Nam. Vậy bạn có đoán được đó là nhà thơ nào không nhỉ? \n" +
                    "---------------------------------------------------------------------------------\n" +
                    "Vâng, đó là nhà thơ Nguyễn Khuyến. \n",
                buttons: [
                    {
                        text: "Vài nét về tiểu sử Nguyễn Khuyến ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Quan niệm nghệ thuật về con người và thế giới của Nguyễn Khuyến ",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Sự nghiệp sáng tác ",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Khái quát nội dung và nghệ thuật trong thơ Nguyễn Khuyến",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "VÀI NÉT VỀ TIỂU SỬ NGUYỄN KHUYẾN",
                image: '/conversation-images/40.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "*Một nhà thơ lớn bao giờ cũng có tư tưởng thẩm mỹ riêng, có quan niệm nghệ thuật riêng độc đáo về con người và thế giới. Và Nguyễn Khuyến cũng vậy!",
                image: '/conversation-images/41.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "*Sáng tác của Nguyễn Khuyến khá phong phú, ông để lại hơn 800 tác phẩm gồm thơ, câu đối, văn viết bằng chữ Hán và chữ Nôm. Phần lớn đều làm sau khi từ quan về ở ẩn, đến nay mới giới thiệu được khoảng 400 tác phẩm.\n" +
                    "*Các tác phẩm gồm có: Quế Sơn thi tập, Yên Đổ thi tập, Bách Liêu thi văn tập, Cẩm Ngữ, “Bạn đến chơi nhà” và 3 bài thơ hay về thu: Thu điếu, Thu ẩm, Thu Vịnh cùng nhiều bài ca, hát ả đào, văn tế, câu đối truyền miệng. \n",
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "KHÁI QUÁT VỀ NỘI DUNG VÀ NGHỆ THUẬT TRONG THƠ NGUYỄN KHUYẾN",
                image: '/conversation-images/42.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 1-2-1
    {
        id: 10,
        conversation: [
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
    // 1-2-2
    {
        id: 11,
        conversation: [
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
    // 1-2-3
    {
        id: 12,
        conversation: [
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
    // 1-3-1
    {
        id: 17,
        conversation: [
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
    // 1-4-1
    {
        id: 18,
        conversation: [
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
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé! ",
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
                ],
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một nhà văn tiêu biểu của nhóm Tự lực văn đoàn, phương thức sáng tác mang bản chất chính con người nghệ sỹ của ông: tài hoa, tinh tế và giàu chất thơ. Các bạn có đoán được đó là nhà văn nào không nhỉ?\n" +
                    "………………………………………………………………………………………. \n" +
                    "Vâng đó là nhà văn Thạch Lam. \n",
                buttons: [
                    {
                        text: "Vài nét về tiểu sử, đặc điểm con người Thạch Lam ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Quan niệm văn chương ",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Sự nghiệp văn chương",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "VÀI NÉT VỀ TIỂU SỬ, ĐẶC ĐIỂM CON NGƯỜI THẠCH LAM\n" +
                    "Đặc điểm con người Thạch Lam \n" +
                    "-\tCon người trầm tĩnh, kín đáo, thiên về đời sống nội tâm. \n" +
                    "+ Thạch Lam không thích sự ồn ào, khoa trương, ít khi phản ứng một cách bồng bột, mạnh mẽ. \n" +
                    "+ Trong từng cử chỉ, từng hành động nhỏ, ông đều cẩn trọng, chân thành, dường như đặt vào đấy rất nhiều suy nghĩ và cả thái độ nâng niu. \n" +
                    "-\tLà một con người đa cảm, có tâm hồn tinh tế. Là con người nhìn đời, nhìn người thiên về phía cái đẹp, cái thiện; ông cẩn trọng nâng niu mọi cái đẹp, điều thiện nhiều khi kín khuất, có cảm thương thì cũng nhẹ nhàng, man mác. \n",
                image: '/conversation-images/43.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "*Là người hay suy nghĩ, cẩn trọng với nghề, Thạch Lam có những ý kiến sâu sắc, cụ thể về văn chương. ",
                image: '/conversation-images/44.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "*Với đời văn chưa đầy mười năm, Thạch Lam để lại một khối lượng tác phẩm khá khiêm tốn: \n" +
                    "- Ba tập truyện ngắn: \n" +
                    "-\tTiểu thuyết Ngày mới (1939) \n" +
                    "-\tTập kí Hà Nội băm sáu phố phường (1943)\n" +
                    "-\tTập tiểu luận Theo dòng (1941) \n" +
                    "-\tHai truyện viết cho thiếu nhi: Quyển sách (1940), Hạt ngọc (1940)\n",
                image: "/conversation-images/45.png"
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Một vài đặc sắc nghệ thuật truyện ngắn của Thạch Lam",
                image: "/conversation-images/46.png"
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 2-3
    {
        id: 20,
        conversation: [
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
    // 2-4
    {
        id: 21,
        conversation: [
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
    // 2-5
    {
        id: 22,
        conversation: [
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
    // 2-2-1
    {
        id: 23,
        conversation: [
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
    // 2-3-1
    {
        id: 24,
        conversation: [
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
    // 2-4-1
    {
        id: 25,
        conversation: [
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
    // 2-5-1
    {
        id: 26,
        conversation: [
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
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự quay trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé!",
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
                ],
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác giả thuộc thời kì kháng chiến chống Pháp. Đó là tác giả Quang Dũng. Bây giờ, bạn hãy lựa chọn những điều mà bạn muốn tìm hiểu nhé!",
                buttons: [
                    {
                        text: "Tiểu sử",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Sự nghiệp văn học",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Phong cách sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Các tác phẩm tiêu biểu",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Đây là tiểu sử về tác giả Quang Dũng:\n" +
                    "- Nhà thơ Quang Dũng có tên khai sinh là Bùi Đình Diệm. Quê ở làng Phượng Trì, huyện Đan Phượng, Hà Tây (nay là huyện Đan Phượng, Hà Nội).\n" +
                    "- Ông sinh năm 1921, mất năm 1988.\n" +
                    "- Thời học sinh, nhà thơ Quang Dũng đi học tại ban Trung học ở trường Thăng Long. Sau khi tốt nghiệp, ông làm thầy giáo dạy ở Sơn Tây.\n" +
                    "- Sau năm 1945, ông tham gia nhập ngũ, đồng thời trở thành phóng viên tiền phương của tờ báo Chiến đấu.\n" +
                    "- Năm 1947, ông được cơ quan cử đi học bổ túc tại Trường trung cấp quân sự tại Sơn Tây. Sau khi hoàn thành khóa học, ông được bầu làm Đại đội trưởng tại tiểu đoàn 212, trung đoàn 52 Tây Tiến.\n" +
                    "- Một thời gian sau, nhà thơ Quang Dũng tham gia chiến dịch Tây Tiến đợt hai và được cử làm Phó đoàn tuyên truyền Lào – Việt. Cuối năm 1948, ông giữ chức vụ Trưởng tiểu ban tuyên huấn của Trung đoàn 52 Tây Tiến, sau đó được bầu làm Trưởng đoàn Văn nghệ Liên khu III. \n" +
                    "- Tháng 8 năm 1951, ông xuất ngũ và tiếp tục công tác trong ngành văn nghệ. \n" +
                    "- Từ sau năm 1954 ông làm biên tập viên của báo Văn nghệ và sau đó chuyển công tác và trở thành biên tập viên của Nhà xuất bản Văn học.\n",
                image: '/conversation-images/22.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Đây là tiểu sử về tác giả Quang Dũng:\n" +
                    "- Nhà thơ Quang Dũng có tên khai sinh là Bùi Đình Diệm. Quê ở làng Phượng Trì, huyện Đan Phượng, Hà Tây (nay là huyện Đan Phượng, Hà Nội).\n" +
                    "- Ông sinh năm 1921, mất năm 1988.\n" +
                    "- Thời học sinh, nhà thơ Quang Dũng đi học tại ban Trung học ở trường Thăng Long. Sau khi tốt nghiệp, ông làm thầy giáo dạy ở Sơn Tây.\n" +
                    "- Sau năm 1945, ông tham gia nhập ngũ, đồng thời trở thành phóng viên tiền phương của tờ báo Chiến đấu.\n" +
                    "- Năm 1947, ông được cơ quan cử đi học bổ túc tại Trường trung cấp quân sự tại Sơn Tây. Sau khi hoàn thành khóa học, ông được bầu làm Đại đội trưởng tại tiểu đoàn 212, trung đoàn 52 Tây Tiến.\n" +
                    "- Một thời gian sau, nhà thơ Quang Dũng tham gia chiến dịch Tây Tiến đợt hai và được cử làm Phó đoàn tuyên truyền Lào – Việt. Cuối năm 1948, ông giữ chức vụ Trưởng tiểu ban tuyên huấn của Trung đoàn 52 Tây Tiến, sau đó được bầu làm Trưởng đoàn Văn nghệ Liên khu III. \n" +
                    "- Tháng 8 năm 1951, ông xuất ngũ và tiếp tục công tác trong ngành văn nghệ. \n" +
                    "- Từ sau năm 1954 ông làm biên tập viên của báo Văn nghệ và sau đó chuyển công tác và trở thành biên tập viên của Nhà xuất bản Văn học.\n",
                image: '/conversation-images/22.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Đây là tiểu sử về tác giả Quang Dũng:\n" +
                    "- Nhà thơ Quang Dũng có tên khai sinh là Bùi Đình Diệm. Quê ở làng Phượng Trì, huyện Đan Phượng, Hà Tây (nay là huyện Đan Phượng, Hà Nội).\n" +
                    "- Ông sinh năm 1921, mất năm 1988.\n" +
                    "- Thời học sinh, nhà thơ Quang Dũng đi học tại ban Trung học ở trường Thăng Long. Sau khi tốt nghiệp, ông làm thầy giáo dạy ở Sơn Tây.\n" +
                    "- Sau năm 1945, ông tham gia nhập ngũ, đồng thời trở thành phóng viên tiền phương của tờ báo Chiến đấu.\n" +
                    "- Năm 1947, ông được cơ quan cử đi học bổ túc tại Trường trung cấp quân sự tại Sơn Tây. Sau khi hoàn thành khóa học, ông được bầu làm Đại đội trưởng tại tiểu đoàn 212, trung đoàn 52 Tây Tiến.\n" +
                    "- Một thời gian sau, nhà thơ Quang Dũng tham gia chiến dịch Tây Tiến đợt hai và được cử làm Phó đoàn tuyên truyền Lào – Việt. Cuối năm 1948, ông giữ chức vụ Trưởng tiểu ban tuyên huấn của Trung đoàn 52 Tây Tiến, sau đó được bầu làm Trưởng đoàn Văn nghệ Liên khu III. \n" +
                    "- Tháng 8 năm 1951, ông xuất ngũ và tiếp tục công tác trong ngành văn nghệ. \n" +
                    "- Từ sau năm 1954 ông làm biên tập viên của báo Văn nghệ và sau đó chuyển công tác và trở thành biên tập viên của Nhà xuất bản Văn học.\n",
                image: '/conversation-images/22.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Sự nghiệp văn học của tác giả Quang Dũng:\n" +
                    "Nhà thơ Quang Dũng là thế hệ thơ tài năng, trưởng thành trong kháng chiến chống Pháp. Ông đa tài, biết vẽ tranh, sáng tác nhạc, viết văn xuôi và làm thơ.\n" +
                    "Trước năm 1945, nhà thơ Quang Dũng đã làm thơ, nhưng thơ ông thực sự được biết đến rộng rãi là từ bài thơ “Tây Tiến” (1948) cùng một số tác phẩm khác trong thời kì kháng chiến chống Pháp.\n" +
                    "Năm 2001, ông được truy tặng Giải thưởng Nhà nước về Văn học nghệ thuật.\n",
                image: '/conversation-images/23.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Phong cách sáng tác: Quang Dũng là một nhà thơ mang hồn thơ phóng khoáng, hồn hậu, lãng mạn và tài hoa.",
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Tác phẩm chính: Mây đầu ô (thơ, 1986), Thơ văn Quang Dũng (tuyển thơ văn, 1988), Rừng biển quê hương (tập thơ, văn, in chung với Trần Lê Văn, 1957),…\n" +
                    "(Đọc thêm tại: https://vndoc.com/tieu-su-cuoc-doi-va-su-nghiep-sang-tac-cua-nha-tho-quang-dung-135422#mcetoc_1fdc5t1m6d)\n",
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 3-3
    {
        id: 6,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự quay trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé!",
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
                ],
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác giả thuộc thời kì kháng chiến chống Pháp. Đó là tác giả Nguyễn Đình Thi. Bây giờ, bạn hãy lựa chọn những điều mà bạn muốn tìm hiểu nhé!",
                buttons: [
                    {
                        text: "Tiểu sử",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Sự nghiệp văn học",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Phong cách sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Các tác phẩm tiêu biểu",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Nguyễn Đình Thi (1924-2003), là một nhà văn, nhà thơ, nhà phê bình văn học và nhạc sĩ Việt Nam thời hiện đại.\n" +
                    "Ông sinh ngày 20/12/1924 ở Luông Pra Băng (Lào). Tuy nhiên, nguyên quán của ông là ở làng Vũ Thạch (nay là phố Bà Triệu, Tràng Tiền, Hoàn Kiếm, Hà Nội). Cha ông là một viên chức Sở bưu điện Đông Dương, từng sang làm việc ở Lào. Sau đó, ông theo cha mẹ về nước và đi học ở Hà Nội, Hải Phòng.\n" +
                    "Từ nhỏ, Nguyễn Đình Thi đã nổi tiếng thông minh, học rất giỏi tất cả các môn, đặc biệt là môn Triết.\n" +
                    "Sau khi tốt nghiệp Tú tài, ông học Luật ở Đại học Đông Dương và trở thành một trong những cán bộ chủ chốt của Hội Văn hóa Cứu quốc. Là một trí thức yêu nước, Nguyễn Đình Thi đã sớm trở thành người chiến sĩ cách mạng trung kiên.\n" +
                    "Tháng 7/1945, Nguyễn Đình Thi được đi dự Quốc dân Đại hội tại Tân Trào và được cử vào Uỷ ban Dân tộc giải phóng Việt Nam. Từ đó cho đến cuối đời, Nguyễn Đình Thi liên tục đảm nhận những cương vị quan trọng trong lĩnh vực văn học, nghệ thuật.\n" +
                    "Đọc thêm tại: http://100years.vnu.edu.vn/BTDHQGHN/Vietnamese/C1778/C1779/2006/05/N7907/\n",
                image: '/conversation-images/24.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Nguyễn Đình Thi là người hoạt động chính trị, nhưng nhắc đến ông, mọi người thường nghĩ đến một nghệ sĩ đa tài. Ông sáng tác được nhạc, làm thơ, viết tiểu thuyết, kịch, tiểu luận phê bình.\n" +
                    "Ông dành nhiệt tâm huyết nhất cho việc làm thơ. Nguyễn Đình Thi luôn trăn trở tìm tòi hướng sáng tạo nhằm đổi mới diện mạo thơ ca. Thơ ông dạt dào cảm hứng yêu nước với những bài thơ tiêu biểu như “Đất nước”, “Nhớ”, “Lá đỏ”,...\n" +
                    "Trong lĩnh vực văn xuôi, Nguyễn Đình Thi cũng có những đóng góp rất đáng trân trọng. Ông là một nhà văn nhạt cảm và luôn có mặt trên dòng thời cuộc của dân tộc. Thành công lớn nhất ở thể loại văn xuôi phải kể đến hai tập tiểu thuyết “Vỡ bờ”.\n" +
                    "Bạn đồng hành xem thêm tại: http://100years.vnu.edu.vn/BTDHQGHN/Vietnamese/\n" +
                    "C1778/C1779/2006/05/N7907/\n" +
                    "\n" +
                    "Nguyễn Đình Thi thuộc thế hệ các nhà thơ trưởng thành trong kháng chiến chống Pháp. Sau năm 1954, ông tham gia công tác quản lý văn học nghệ thuật. Từ năm 1958 đến năm 1989, ông làm Tổng Thư ký Hội nhà văn Việt Nam. Từ năm 1995, ông là Chủ tịch Uỷ ban toàn quốc Liên hiệp các Hội Văn học nghệ thuật. Ông được nhà nước phong tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật đợt I năm 1996.\n",
                image: '/conversation-images/25.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Thơ của Nguyễn Đình Thi giản dị, giàu tính triết lý nhưng cũng không kém phần lắng đọng: đó là tình yêu quê hương, đất nước, là sự tự hào về dân tộc.\n" +
                    "Nguyễn Đình Thi đã dành cả đời để đi tìm tòi, khám phá, đổi mới hướng đi và sáng tạo thơ ca. Chính vì vậy mà những vần thơ của ông mang đậm phong cách cá nhân, đặc biệt, và hiện đại.\n",
                image: '/conversation-images/26.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Tác phẩm chính: \n" +
                    "- Triết luận: Triết học nhập môn, Siêu hình học, Triết học Kant,...\n" +
                    "- Truyện, văn xuôi: Vào lửa, Mặt trận trên cao, Trên sóng thời gian, Xung kích,...\n" +
                    "- Thơ: Việt Nam quê hương ta, Sóng reo, Người chiến sĩ, Đất nước, Trong bụi cát,...\n" +
                    "- Kịch: Con nai đen, Tiếng đàn bà hóa đá, Hòn cuội,...\n",
                image: '/conversation-images/27.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 3-2-1
    {
        id: 13,
        conversation: [
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
    // 3-3-1
    {
        id: 14,
        conversation: [
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
    // 4-1
    {
        id: 4,
        conversation: [
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Xin chào, tôi là Hướng dẫn viên trên chuyến tàu mang số hiệu ĐẤT NƯỚC ĐỔI MỚI. Bạn đã sẵn sàng khám phá cuộc hành trình này?",
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
                        text: "Bối cảnh lịch sử Việt Nam sau năm 1975",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Văn học Việt Nam sau năm 1975",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Bối cảnh Việt Nam trong thế kỉ 21",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Văn học Việt Nam thế kỉ 21",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "1. Tình hình đất nước ta sau Đại thắng mùa xuân năm 1975 và những nhiệm vụ trước mắt.\n" +
                    "a. Thuận lợi\n" +
                    "- Công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc (1954 – 1975) đã đạt được những thành tựu to lớn và toàn diện, xây dựng được những cơ sở vật chất – kĩ thuật ban đầu của chủ nghĩa xã hội.\n" +
                    "- Miền Nam được giải phóng hoàn toàn, hai miền Nam – Bắc được thống nhất. \n" +
                    "b. Khó khăn\n" +
                    "- Ở miền Bắc, hai cuộc chiến tranh phá hoại của Mĩ đã tàn phá nặng nề khiến cho nền kinh tế nông nghiệp bị lạc hậu.\n" +
                    "- Ở miền Nam. hậu quả 30 năm chiến tranh nặng nề đã để lại những tàn dư của chế độ thực dân mới.\n" +
                    "=> Chính vì vậy, nhiệm vụ đặt ra của cả hai miền là hoàn thành thống nhất đất nước về mặt nhà nước, khắc phục hậu quả của chiến tranh, khôi phục và phát triển kinh tế, xã hội.\n" +
                    "\n" +
                    "Đọc thêm về quá trình hoàn thành thống nhất đất nước về mặt nhà nước tại: https://tuyensinh.ussh.edu.vn/Mon-Su-Viet-Nam-giai-doan-1975--2000.html\n" +
                    "\n" +
                    "2. Đất nước trên đường đổi mới đi lên chủ nghĩa xã hội\n" +
                    "Trải qua 10 năm thực hiện hai kế hoạch 5 năm (1976 – 1980) và (1981 - 1985), Việt Nam đã đạt được những kết quả nhất định trên cả hai phương diện xây dựng và bảo vệ Tổ quốc, song cũng gặp nhiều khó khăn, thách thức. Để khắc phục những sai lầm, khuyết điểm, đưa đất nước vượt qua khủng hoảng, vững bước tiến lên chủ nghĩa xã hội, chúng ta phải tiến hành công cuộc đổi mới.\n" +
                    "Xem thêm về đường lối đổi mới tại:\n" +
                    "https://tuyensinh.ussh.edu.vn/Mon-Su-Viet-Nam-giai-doan-1975--2000.html\n" +
                    "\n" +
                    "3. Thành tựu bước đầu của sự nghiệp đổi mới (1986 – 2000)\n" +
                    "a. Về kinh tế\n" +
                    "- Thực hiện Ba chương trình kinh tế lớn (lương thực – thực phẩm, hàng tiêu dùng và hàng xuất khẩu).\n" +
                    "- Về lương thực, thực phẩm, từ thiếu chỗ ăn thì đến năm 1990, Việt Nam đã đáp ứng nhu cầu trong nước, có dự trữ và xuất khẩu.\n" +
                    "- Hàng tiêu dùng trên thị trường dồi dào, đa dạng mẫu mã, chất lượng ngày càng nâng cao.\n" +
                    "- Kinh tế đối ngoại ngày càng được mở rộng, hàng xuất khẩu ngày càng tăng.\n" +
                    "- Đến năm 1996, Việt Nam đã thoát khỏi tình trạng khủng hoảng về kinh tế - xã hội. \n" +
                    "b. Về chính trị - xã hội\n" +
                    "- Tình hình chính trị - xã hội cơ bản ổn định, quốc phòng an ninh được tăng cường.\n" +
                    "- Đã giải quyết tốt hơn các vấn đề về xã hội như lao động và việc làm, xóa đói, giảm nghèo, phát triển các ngành ý tế, giáo dục, khoa học và công nghệ.\n" +
                    "- Mở rộng quan hệ đối ngoại, bình thường hóa và phát triển quan hệ ngoại giao với Trung Quốc, Hoa Kì,..; chủ động hội nhập quốc tế và tham gia các tổ chức quốc tế như ASEAN, APEC, WTO,...\n",
                image: '/conversation-images/19.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "1. Giai đoạn 1975 – 1985 được coi là giai đoạn khởi động của văn học thời kỳ đổi mới. Đề tài chiến tranh và người lính vẫn là đề tài cơ bản được các nhà thơ lựa chọn. Ta có thể kể đến “Bài ca quê hương” của Tố Hữu, “Bài ca chim Chơ-rao” của nhà thơ Thu Bồn,...\n" +
                    "Khoảng thời gian mười năm sau chiến tranh, trong lĩnh vực sáng tác, khuynh hướng đổi mới chưa trở thành một phong trào rầm rộ. Những nhà văn đi tiên phong trong công cuộc đổi mới này là Nguyễn Minh Châu, Ma Văn Kháng, Lê Lựu,...Đóng góp của họ cho công cuộc đổi mới văn học ở Việt nam chủ yếu là ở lĩnh vực văn xuôi. Tập truyện ngắn “Bến quê” của Nguyễn Minh Châu, tiểu thuyết “Mùa lá rụng trong vườn” của Ma Văn Kháng,...từng gây được những tiếng vang rất lớn.\n" +
                    "\n" +
                    "2. Giai đoạn 1986 – 1991 được coi là giai đoạn sôi nổi nhất của đời sống văn nghệ ở Việt Nam trong thời kì đổi mới. Trong mọi lĩnh vực nghệ thuật, từ văn học hay sân khấu, điển ảnh, sự đổi mới diễn ra vô cùng quyết liệt. Văn học dịch vẫn tiếp tục phát triển. Và giữ vai trò chủ công trong đổi mới văn học chính là hoạt động lý luận, phê bình văn học và hoạt động sáng tác của các nhà văn, nhà thơ. \n" +
                    "Các tác giả nổi tiếng trong giai đoạn này: Phạm Thị Hoài, Bảo Ninh, Dương Thu Hương, Nguyễn Duy, Thanh Thảo,...\n" +
                    "\n" +
                    "Xem thêm tại: https://khoavanhue.husc.edu.vn/van-hoc-viet-nam-1975-1991-nhin-lai-cac-buoc-di-lang-nghe-cac-tieng-noi/ \n",
                image: '/conversation-images/20.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Bối cảnh Việt Nam trong thế kỉ XXI\n" +
                    "Nhân loại đang ở trong thế kỉ XXI, đó là giai đoạn mà toàn cầu hóa diễn ra mạnh mẽ, quan hệ song phương, đa phương giữa các quốc gia ngày càng sâu rộng và đặc biệt là cuộc cách mạng khoa học – công nghệ đã có những bước phát triển nhảy vọt, dần dần làm chuyển dịch nhanh cơ cấu kinh tế và biểu đổi sâu sắc các lĩnh vực của đời sống xã hội.  \n" +
                    "Việt Nam ta cũng không nằm ngoài sự phát triển mạnh mẽ đó. Thành tựu sau 15 năm đổi mới đã tạo thế và lực thúc đẩy công cuộc đổi mới của nước ta đi vào chiều sâu. Việt Nam đang ngày càng nỗ lực ổn định nền kinh tế vĩ mô trong thời gian dài và đồng thời hỗ trợ, tạo điều kiện cho cuộc sống của người dân ngày càng phát triển. Bên cạnh đó, chúng ta vẫn cần phải đối mặt với những thách thức như lạm phát kinh tế, nạn tham những quan liêu, “diễn biến hòa bình” do các thế lực thù địch gây ra.\n",
                image: '/conversation-images/21.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Văn học thế kỉ 21 vẫn đang trên mạch tiếp nối đổi mới quan niệm nghệ thuật về hiện thực và con người. Những thay đổi cơ cấu đời sống và những thiết chế xã hội theo cơ chế kinh tế thị trường, theo tinh thần hội nhập quốc tế cũng như những nhu cầu đổi mới, hiện đại hoá thơ ca…đã làm cho nhu cầu thể hiện tình cảm và quan hệ sống của con người cần có cách tiếp cận và lý giải khác hơn. Những nhu cầu thể hiện cá tính, thể hiện tính dục, tâm linh càng trở nên phổ biến.\n" +
                    "Một số các tác giả tiêu biểu như: Nguyễn Khắc Trường. Tạ Duy Anh, Phan Thị Vàng Anh, Vi Thùy Linh,...\n"
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 4-2
    {
        id: 27,
        conversation: [
            // không có trong kiến thức phải làm
            // {
            //     actionType: ActionType.Choose,
            //     speaker: Character.System,
            //     text: "Đã hoàn tất kiến thức, bạn có muốn quay lại để ôn tập không?",
            //     buttons: [
            //         {
            //             text: "Quay lại",
            //             action: ButtonAction.RouterConversation,
            //             pos: 0
            //         },
            //         {
            //             text: "Làm bài quiz",
            //             action: ButtonAction.PlayGame,
            //         }
            //     ]
            // },
        ]
    },
    // 4-3
    {
        id: 8,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự quay trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé!",
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
                ],
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác giả thuộc văn học hiện đại sau 1975. Đó là tác giả Trần Đăng Khoa. Bây giờ, bạn hãy lựa chọn những điều mà bạn muốn tìm hiểu nhé!",
                buttons: [
                    {
                        text: "Tiểu sử",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Sự nghiệp văn học",
                        action: ButtonAction.RouterConversation,
                        pos: 7
                    },
                    {
                        text: "Phong cách sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 10
                    },
                    {
                        text: "Các tác phẩm tiêu biểu",
                        action: ButtonAction.RouterConversation,
                        pos: 12
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Trần Đăng Khoa sinh vào tháng 4/1958 tại huyện Nam Sách, Hải Dương. Ông là nhà thơ, nhà báo và biên tập viên của Tạp chí Văn nghệ Quân đội, cũng như hội viên của Hội nhà văn Việt Nam. Hiện tại, ông đang giữ chức vụ Phó Bí thư Đảng ủy Đài tiếng nói Việt Nam.",
                image: '/conversation-images/33.png'
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                key: "audio",
                text: "Từ thuở nhỏ, Trần Đăng Khoa đã nổi tiếng với khả năng sáng tác xuất sắc và được mệnh danh là Thần đồng của thi ca Việt Nam. Năm 8 tuổi, ông đã có một số sáng tác được in trên báo. Năm 10 tuổi, ông đã cho xuất bản tập thơ đầu tiên mang tên “Từ góc sân nhà em” (1968). Cũng trong năm 1968, ông đã cho ra mắt tập thơ thứ hai là “Góc sân và khoảng trời”. Trong đó, bài thơ “Hạt gạo làng ta” là bài thơ phổ biến nhất của nhà thơ Trần Đăng Khoa.\n" +
                    "Người chơi có thể xem thêm video sau để hiểu thêm về khả năng sáng tác xuất sắc từ nhỏ của Trần Đăng Khoa ",
                image: 'https://www.youtube.com/embed/jXeZvN0TCCI?si=2Z7mxdiDcz8qvHt2'
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.MainCharacter,
                text: "Thời niên thiếu của Trần Đăng Khoa thì sao (mục nhỏ của 1)"
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Trần Đăng Khoa nhập ngũ vào ngày 26/2/1975 khi đang học lớp 10 tại trường PT cấp 3 Nam Sách. Ông tham gia chiến đấu ở Tiểu đoàn 691, Trung đoàn 2 Quân tăng cường Hải Hưng. Tuy việc tham gia chiến tranh đã ảnh hưởng đến sự nghiệp của ông nhưng đồng thời, đây cũng là nguồn cảm hứng để ông sáng tác nhiều tác phẩm về chủ đề chiến tranh. \n" +
                    "Sau 1975, Trần Đăng Khoa đã được điều về quân chủng hải quân để tiếp tục sự nghiệp của mình. Sau đó, ông được cử đi du học tại Viện Văn học Thế giới M.Gorki thuộc Viện Hàn lâm Khoa học Xã hội Nga để nâng cao kiến thức và kĩ năng về văn chương. \n" +
                    "Sau khi trở về nước, ông đã công tác tại một số đơn vị trong Quân đội rồi được điều đến làm việc tại Tạp chí Văn nghê Quân đội vào năm 1994. Từ năm 2004, ông đã chuyển về làm tại Đài Tiếng nói Việt Nam và giữ quân hàm Thượng tá.\n"
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Nhà thơ Trần Đăng Khoa không chỉ là một nhà thơ nổi bật của Việt Nam mà còn là một trong những tác giả tiêu biểu đương đại trước 1975. \n" +
                    "Trong sự nghiệp văn học của mình, ông đã sáng tác hơn 20 tập thơ và bài trường ca như “Bên cửa sổ máy bay”, “Khúc hát người anh hùng”, “Chân dung và đối thoại”,...Ngoài ra còn có một số tập bút kí và tiểu luận phê bình. \n" +
                    "Với ngòi bút mang tính cá nhân, ông đã ghi dấu ấn trong tâm trí độc giả bằng những kí ức về tuổi thơ hồn nhiên, chân thật, sâu sắc với nhiều tầng ý nghĩa khác nhau. \n",
                image: '/conversation-images/34.png'
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Một số giải thưởng ông đạt được (mục nhỏ của 2)\n" +
                    "- Ba lần đạt giải nhất thơ báo Thiếu niên Tiền phong (1968, 1969, 1971)\n" +
                    "- Giải A cuộc thi thơ báo Văn nghệ (1981 – 1982) \n" +
                    "- Giải thưởng Nhà nước về Văn học nghệ thuật, đợt I, năm 2001.\n"
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Thơ Trần Đăng Khoa không chỉ tươi trẻ, trong sáng mà còn sâu sắc, giống như những bài đồng dao với cách viết uyển chuyển và lôi cuốn.Trong những tác phẩm của ông, âm nhạc không chỉ là giai điệu của tâm hồn mà còn có khả năng gợi tả hình ảnh và tạo nét nghĩa cho câu thơ rất tinh tế. ",
                image: '/conversation-images/35.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "- Từ góc sân nhà em (thơ, 1968)\n" +
                    "- Góc sân và khoảng trời (thơ, 1973… tái bản lần thứ 99 năm 2009)\n" +
                    "- Thơ Trần Đăng Khoa (tập 1, 1970)\n" +
                    "- Khúc hát người anh hùng (trường ca, 1974)\n" +
                    "- Trừng phạt (trường ca, 1973)\n" +
                    "- Giông bão (trường ca, 1983)\n" +
                    "- Bên cửa sổ máy bay (thơ, 1986; tái bản, bổ sung 2009)\n" +
                    "- Thơ Trần Đăng Khoa (tập 2, 1983)\n" +
                    "- Chân dung và đối thoại (1998)\n" +
                    "- Người thường gặp (2000)\n" +
                    "- Đảo chìm (in lần thứ 25, 2009)\n" +
                    "và nhiều tập khác được dịch in ở nước ngoài.\n",
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
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
    // 4-2-1
    {
        id: 28,
        conversation: [
            // không có trong kiến thức phải làm
            // {
            //     actionType: ActionType.Choose,
            //     speaker: Character.System,
            //     text: "Đã hoàn tất kiến thức, bạn có muốn quay lại để ôn tập không?",
            //     buttons: [
            //         {
            //             text: "Quay lại",
            //             action: ButtonAction.RouterConversation,
            //             pos: 0
            //         },
            //         {
            //             text: "Làm bài quiz",
            //             action: ButtonAction.PlayGame,
            //         }
            //     ]
            // },
        ]
    },
    // 4-3-1
    {
        id: 15,
        conversation: [
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
]