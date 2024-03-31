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
                actionType: ActionType.NoAction,
                text: "Văn học trung đại Việt Nam bao gồm những tác phẩm được sáng tác, hình thành và phát triển trong khoảng thời gian từ TK XVI đến TK XIX (thời kỳ phong kiến Việt Nam - thời kỳ bắt đầu tự chủ của dân tộc đến khi Pháp thuộc)\n" +
                    "\n" +
                    "*Chú thích: Thời kì phong kiến- chế độ quân chủ chuyên chế- chế độ đất nước tồn tại dưới dạng Vua là người trị vì cao nhất, phản ánh hình thức truyền nối và chiếm hữu đất đai; cấu trúc xã hội xoay quanh những mối quan hệ xuất phát từ việc sở hữu đất đai để đổi lấy lao động, địa chủ bóc lột nông dân…\n",
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
                actionType: ActionType.NoAction,
                text: "Văn học trung đại Việt Nam gồm 2 bộ phận chính:\n" +
                    "+ Văn học viết bằng chữ Hán\n" +
                    "+ Văn học viết bằng chữ Nôm\n",
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
                actionType: ActionType.NoAction,
                text: "Tác giả là người Việt Nam sáng tác (chủ yếu là tầng lớp trí thức phong kiến: vua, quan, tăng lữ, Nho sĩ, nhà sư,…)",
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
                actionType: ActionType.NoAction,
                text: "-\tVăn học dân gian – lấy văn học dân gian làm nền tảng (đề tài, ngôn ngữ, thể thơ, cốt truyện, nghệ thuật trữ tình tự sự, quan niệm “bất thành văn” “phi chính thống”…) \n" +
                    "-\tVăn học cổ điển Trung Hoa (tư tưởng, thể thơ, thi liệu, quan điểm sáng tác,…)\n" +
                    "Chọn lọc, sáng tạo, biến đổi phù hợp với đặc điểm dân tộc và thời đại con người đất Việt.\n",
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
                actionType: ActionType.NoAction,
                text: "-\tChủ nghĩa yêu nước – gắn với vận mệnh đất nước \n" +
                    "-\tChủ nghĩa nhân đạo – gắn với số phận con người\n" +
                    "\tLuôn gắn bó với vận mệnh quốc gia, dân tộc, thể hiện rõ tinh thần yêu nước và đề cao các giá trị nhân văn, nhân đạo.",
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
                actionType: ActionType.NoAction,
                text: "Tính quy phạm và phá vỡ tính quy phạm luôn là những đặc trưng điển hình và nổi bật nhất trong những sáng ở thời kì này từ quan điểm sáng tác, kiểu tư duy nghệ thuật, hình thức thể loại, hệ thống thi liệu và các thủ pháp ngôn ngữ,… \n" +
                    "Tuy luôn được quy định chặt chẽ và có tính khuôn mẫu, song một số đặc điểm quy phạm bị phá vỡ vẫn thường xuất hiện, thể hiện tính dân tộc và ý thức cá tính của từng tác giả,…\n",
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
                actionType: ActionType.NoAction,
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
                actionType: ActionType.NoAction,
                text: "-\tTrần Nhân Tông (vị vua thứ 3 của đời nhà Trần, sau Trần Thánh Tông.)\n" +
                    "-\tNguyễn Trãi\n" +
                    "-\tNguyễn Du\n" +
                    "-\tHồ Xuân Hương\n" +
                    "-\tNguyễn Khuyến\n" +
                    "-\tBà Huyện Thanh Quan\n" +
                    "-\tĐoàn Thị Điểm\n" +
                    "-\tTrần Quốc Tuấn\n" +
                    "-\tChu Văn An\n",
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
                    "-\tVăn chính luận của Nguyễn Trãi luôn đạt tới trình độ mẫu mực phần lớn đều hết sức thuyết phục: sự kết hợp giữa lí lẽ sắc bén, dẫn chứng xác đáng; cách lập luận và bố cục chặt chẽ; ngôn ngữ hàm súc, kết hợp nhiều phong cách ngôn ngữ và nhiều phương thức biểu đạt, giọng điệu truyền cảm…\n" +
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm tiêu biểu của đại thi hào Nguyễn Trãi – “Bình Ngô đại cáo” – còn được coi là bản Tuyên ngôn độc lập thứ hai của dân tộc Việt Nam ta. Bây giờ, bạn hãy lựa chọn kiến thức mà bạn muốn tìm hiểu nhé!",
                buttons: [
                    {
                        text: "Thể “cáo”",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Đọc bài thơ",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Hoàn cảnh sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Nội dung",
                        action: ButtonAction.RouterConversation,
                        pos: 8
                    },
                    {
                        text: "Nghệ thuật",
                        action: ButtonAction.RouterConversation,
                        pos: 10
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
                text: "THỂ CÁO: \n" +
                    "- Là một thể văn hành chính cổ, mang tính pháp luật, có nguồn gốc từ Thượng thư (Trung Quốc), do nhà vua hoặc chủ tướng ban bố một mệnh lệnh, chủ trương, chính sách,...cho toàn dân chúng được biết.\n" +
                    "- Căn cứ vào nội dung, mục đích, phạm vi ban bố, thể văn cáo có thể phân thành nhiều loại, nhưng nhìn chung, đều có ý nghĩa tuyên bố về một sự kiện trọng đại của quốc gia. \n" +
                    "- Hình thức: có thể viết bằng văn xuôi, văn vần, biền văn.\n" +
                    "- Đặc điểm: có lập luận chặt chẽ, bố cục rõ ràng, ý tứ hùng hồn, hàm ý mệnh lệnh. \n",
                image: '/conversation-images/58.png'
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
                text: "(Vì dung lượng bài thơ rất dài nên) học sinh có thể tham khảo toàn bộ bài thơ qua các hình thức sau:\n" +
                    "\n" +
                    "-\tĐọc SGK Ngữ văn 10, Kết nối tri thức với cuộc sống, tập 2 trang 11.\n" +
                    "-\tNghe đọc: https://www.youtube.com/watch?v=5jKf73S6iUk \n" +
                    "-\tĐọc những dị bản khác nhau từ bản tiếng Hán gốc qua kênh: https://www.thivien.net/Nguy%E1%BB%85n-Tr%C3%A3i/B%C3%ACnh-Ng%C3%B4-%C4%91%E1%BA%A1i-c%C3%A1o/poem-mLEGY5d9nFI0RH280X-vIQ\n",
                image: '/conversation-images/59.png'
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
                text: "Cuối năm 1427, cuộc kháng chiến chống giặc Minh của nhân dân ta kết thúc thắng lợi, Nguyễn Trãi thừa lệnh Lê Lợi viết “Bình Ngô đại cáo”. Tác phẩm được ban bố vào tháng Chạp năm Đinh Mùi (đầu năm 1428 dương lịch). Tác phẩm mang tính chất của một bản tuyên ngôn mở đầu cho một triều đại mới, một kỉ nguyên mới của đất nước. Với mục đích tuyên bố, thông báo cho toàn thể nhân dân biết về sự kiện vô cùng trọng đại của dân tộc và đất nước ta, khẳng định độc lập chủ quyền của nước Đại Việt và vai trò của nhân dân cùng nghĩa quân Lam Sơn lúc bấy giờ…",
                image: '/conversation-images/60.png'
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
                text: "Bố cục 4 phần:\n" +
                    "1. Nguyên lí chính nghĩa của cuộc khởi nghĩa Lam Sơn\n" +
                    "a. Tư tưởng nhân nghĩa\n" +
                    "- Theo quan niệm của đạo Nho: nhân nghĩa là mối quan hệ tốt đẹp giữa người với người trên cơ sở tình thương và đạo lí. \n" +
                    "- Nhân nghĩa cũng là truyền thống tốt đẹp của dân tộc Việt Nam.\n" +
                    "- Đối với Nguyễn Trãi: nhân nghĩa chính là để “yên dân” (lo cho dân cuộc sống ấm no, hạnh phúc) và “trừ bạo”(tiêu diệt kẻ tàn bạo) -> tư tưởng mới mẻ với quan điểm “lấy dân làm gốc”, phát triển hơn so với tư tưởng của Nho giáo.\n" +
                    "=> Khẳng định lập trường chính nghĩa của ta và tính chất phi nghĩa của kẻ thù xâm lược. \n" +
                    "b. Chân lí độc lập dân tộc\n" +
                    "- Có cơ sở chắc chắn từ thực tiễn của lịch sử: mang tính hiển nhiên vốn có từ lâu đời thể hiện qua các cụm “từ trước”, “đã lâu”, “vốn xưng”,...\n" +
                    "- Nguyễn Trãi cũng đưa ra những yếu tố căn bản để xác định độc lập, chủ quyền của dân tộc: nền văn hiến lâu đời, cương vực lãnh thổ, phong tục tập quán, lịch sử, truyền thống, anh hùng hào kiệt.\n" +
                    "c. Nghệ thuật của đoạn văn\n" +
                    "- Tác giả sử dụng những từ ngữ thể hiện tính chất hiển nhiên, vốn có, lâu đời của nước Đại Việt như “từ trước”, “vốn có”,...\n" +
                    "- Sử dụng biện pháp so sánh đặt ta ngang hàng với Trung Quốc, ngang hàng về chính trị, tổ chức chế độ, quản lí quốc gia. \n" +
                    "- Câu văn biền ngẫu cân xứng, nhịp nhàng. \n" +
                    "- Cách lập luận kết hợp hài hòa giữa lí luận và thực tiễn: sau khi nên nguyên lí nhân nghĩa, đã nên chân lí khách quan bằng các sự thật lịch sử.\n" +
                    "-> Tạo nên sức thuyết phục về sức mạnh của nhân nghĩa, của chân lí.\n" +
                    "2. Tội ác của kẻ thù xâm lược\n" +
                    "- Vạch trần âm mưu của giặc Minh mượn danh nghĩa phù Trần diệt Hồ để cướp nước ta:\n" +
                    "“Nhân họ Hồ chính sự phiền hà\n" +
                    "Để trong nước lòng dân oán hận\n" +
                    "Quân cuồng Minh thừa cơ gây họa”.\n" +
                    "-> Chúng đã lấy danh nghĩa giúp nước ta nhưng thực chất là cướp nước.\n" +
                    "- Tác giả đi sâu tố cáo những chủ trương cai trị phản nhân đạo của giặc Minh:\n" +
                    "+ Hủy hoại cuộc sống của người ân bằng hành động diệt chủng, tàn sát người vô tội: “Nướng dân đen trên ngọn lửa hung tàn,\n" +
                    "Vùi con đỏ xuống dưới hầm tai vạ”.\n" +
                    "-> tội ác man rợ, tàn sát người vô tội theo hình phạt thời trung cổ.\n" +
                    "+ Lừa mị dân chúng, gây cảnh đao binh: “dối trời lừa dân, gây binh kết oán”.\n" +
                    "+ Tham lam, vơ vét của cải, bóc lột nhân dân:: “nặng thuế khoá, người bị ép xuống biển dòng lưng mò ngọc, kẻ bị đem vào núi đãi cát tìm vàng, vét sản vật, bắt chim trả, bẫy hươu đen, no nê chưa chán”.\n" +
                    "+ Huỷ hoại môi trường sống của con người: “Tàn hại cả giống côn trùng cây cỏ”.\n" +
                    "+ Nô dịch, khổ sai dân chúng: “xây nhà, đắp đất, phu phen”.\n" +
                    "- Hình ảnh kẻ thù: “Thằng há miệng, đứa nhe răng, máu mỡ bấy no nê chưa chán”.\n" +
                    "-> Khắc hoạ thành công bộ mặt khát máu của quân xâm lược.\n" +
                    "- Bốn câu thơ cuối diễn tả tội ác chất chồng của giặc và nỗi căm hờn chất chứa của ND ta:\n" +
                    "+ Lấy cái vô hạn “trúc Nam Sơn” để nói vô hạn (tội ác của giặc).\n" +
                    "+ Dùng cái vô cùng “nước Đông Hải” để nói cái vô cùng ( sự nhơ bẩn của kẻ thù).\n" +
                    "+ Câu văn đầy hình tượng và đanh thép đã lột tả được sâu sắc tội ác “Lẽ nào trời đất dung tha/ Ai bảo thần dân chịu được”.\n" +
                    "=> Tác giả đứng trên lập trường nhân bản để tố cáo tội ác của giặc.\n" +
                    "\n" +
                    "3. Ý chí, khát vọng của bậc chủ tướng\n" +
                    "* Buổi đầu khởi nghĩa\n" +
                    "- Những khó khăn ở buổi đầu khởi nghĩa:\n" +
                    "+ Địa bàn dấy nghĩa hẻo lánh\n" +
                    "+ Thế ta và giặc không cân sức\n" +
                    "+ Thiếu nhân tài\n" +
                    "+ Có lúc bị vây, lương thực hết, quân lính chỉ còn mấy người\n" +
                    "* Sức mạnh giúp nghĩa quân vượt qua những khó khăn thử thách của buổi đầu dấy nghiệp thể hiện qua hình tượng Lê Lợi - lãnh tụ của nghĩa quân.\n" +
                    "- Lê Lợi có ý thức tự giác về sứ mệnh của mình. Ông xem mối thù của nước, nỗi đau của dân như chính mình, ngày đêm canh cánh bên lòng suốt 20 năm: (Ngẫm thù lớn há đội trời chung…Nếm mật nằm gai há phải một hai sớm tối)\n" +
                    "- Lê Lợi ngày đêm suy nghiệm về lẽ hưng vong của các triều đại để tìm ra đường lối đánh giặc cứu nước\n" +
                    "+ Đó là đường lối cứu nước dựa vào toàn dân và phương châm: Đem đại nghĩa để thắng hung tàn/ Lấy chí nhân để thay cường bạo\n" +
                    "+ Đại nghĩa: là bảo vệ độc lập chủ quyền của đất nước, và đem lại cuộc sống yên ổn cho dân\n" +
                    "+ Chí nhân: là lòng nhân nghĩa ở mức cao nhất, đối với kẻ bại trận ta không giết, không gây thù oán để gây hậu họa.\n" +
                    "+ Khi đã tìm được đường lối cứu nước. Lê Lợi chủ động giải quyết ngay những khó khăn trước mắt.\n" +
                    "+ Tự ta ta phải dốc lòng, vội vã hơn cứu người chết đuối\n" +
                    "+ Ông tìm kiếm người tài: Cỗ xe cầu hiền, thường châm chăm còn dành phía tả\n" +
                    "+ Ông tập hợp nhân dân dưới cờ đại nghĩa, tạo thành một khối đoàn kết bền vững: Nhân dân bốn cõi một nhà/ Dựng cần trúc ngọn cờ phấp phới – Tướng sĩ một lòng phụ tử/ Hòa nước sông chén rượu ngọt ngào\n" +
                    "+ Lê Lợi có một chiến lược, chiến thuật đúng đắn: Thế trận xuất kì/ Lấy yếu chống mạnh; Dùng quân mai phục/ Lấy ít địch nhiều\n" +
                    "- Đoạn văn có nhiều từ ngữ diễn tả tâm trạng Lê Lợi (yếu tố biểu cảm): ngẫm, căm, đau lòng nhức óc, giận, suy xét, đắn đo, trằn trọc, băn khoăn…\n" +
                    "\n" +
                    "4. Diễn biến chính của cuộc khởi nghĩa\n" +
                    "* Giai đoạn mở màn: Cuộc phản công là 2 trận đánh lớn: Trận Bồ Đằng sấm vang chớp giật - Miền Trà Lân trúc chẻ tro bay\n" +
                    "- Đặc điểm nổi bật của 2 trận mở màn này là: Đánh nhanh, thắng nhanh. Địch thua và hoảng sợ không kịp trở tay \n" +
                    "→ Lời văn ngắn gọn sắc sảo, hình ảnh so sánh rất gợi hình, gợi cảm: “sấm vang chớp giật, trúc chẻ tro bay” còn quân giặc thì “nghe hơi mà mất vía, nín thở cầu thoát thân”.\n" +
                    "* Giai đoạn áp đảo:\n" +
                    "- Đánh ra hướng Bắc với 2 trận: Tây Kinh quân ta chiếm lại/ Đông Đô đất cũ thu về. Đây là 2 trận diễn ra quyết liệt vì quân ta áp sát sào huyệt của địch, chúng tung lực lượng lớn ra với sự chỉ huy của các danh tướng. Kết quả:\n" +
                    "+ Máu chảy thành sông tanh trôi vạn dặm\n" +
                    "+ Thây chất đầy nội, nhơ để ngàn năm\n" +
                    "+ Trần Hiệp đã phải bêu đầu\n" +
                    "+ Lí Lượng cũng đành bỏ mạng\n" +
                    "+ Sau giai đoạn này thì quân giặc đã: trí cùng lực kiệt, bó tay để đợi bại vong\n" +
                    "+ Lê Lợi phát huy chiến thuật “mưu phạt tâm công” nghĩa là phá tan mưu kế của giặc và đánh tan ý chí chiến đấu của địch, không dùng giáoq giáo mà quân địch vẫn chịu thua, hàng ngũ tan rã.\n" +
                    "- Trận diệt viện cuối cùng:\n" +
                    "+ Bốn câu văn dài kể về việc điều binh khiển tướng của đôi bên, hai câu trên kể về giặc, hai câu dưới kể về ta \n" +
                    "+ Những thắng lợi liên tiếp, giòn giã, được kể với giọng hả hê, tự hào + Sức mạnh tấn công của quân ta với thế long trời lở đất\n" +
                    "- Hình ảnh quân giặc bại trận:\n" +
                    "+ Tướng giặc thì: Đô đốc Thôi Tụ lê gối dâng tờ tạ tội/ Thượng thư Hoàng Phúc trói tay để tự xin hàng/ Tướng giặc bị cầm tù như hổ đói vẫy đuôi xin cứu mạng.\n" +
                    "+ Quân lính thì: khiếp vía vỡ mật, xéo lên nhau để chạy thoát thân, quay gót chẳng kịp, cởi giáp ra hàng\n" +
                    "+ Cảnh chiến trường thật là ghê sợ và cũng rất thương tâm: Lạng Giang, Lạng Sơn thây chất đầy nội….cỏ nội đầm đìa máu đen.\n" +
                    "* Cảnh ta đối xử với giặc bại trận (Thần vũ chẳng giết hại….để nhân dân nghỉ sức)\n" +
                    "- Lời bình phẩm của tác giả: Chẳng những mưu kế kì diệu/ Cũng là chưa thấy xưa nay.\n" +
                    "- Hình tượng Lê Lợi: Hiện lên là một thiên tài quân sự lỗi lạc.\n" +
                    "+ Ông đã học tập kinh nghiệm của ông cha, thực hiện chiến lược, chiến thuật “mưu phạt tâm công” nghĩa là đánh vào ý chí chiến đấu của giặc. Nhưng quân giặc “không biết lẽ ăn năn, nên đã thay lòng đổi dạ”. Vì vậy Lê Lợi đánh đuổi tới cùng, điều binh khiển tướng khẩn trương mau lẹ \n" +
                    "+ Lê Lợi cho quân đuổi giặc đến cùng nhưng lại “mở đường hiếu sinh”\n" +
                    "→ Ở đây ta thấy rõ vẻ đẹp nhân nghĩa trí dũng của người anh hùng Lê Lợi.\n" +
                    "\n" +
                    "5. Tuyên ngôn độc lập, đất nước thái bình \n" +
                    "- Trịnh trọng và vui mừng truyền đi lời tuyên bố nền độc lập của dân tộc đã được lập lại \n" +
                    "- Rút ra bài học lịch sử: Sự thay đổi này thực chất là sự phục hưng \n" +
                    "-> Đấy là nguyên nhân, là điều kiện để thiết lập sự vững bền đời đời.\n" +
                    "- Khẳng định viễn cảnh tươi sáng huy hoàng của đất nước \n" +
                    "-> Đấy cũng là kết quả của việc kết hợp giữa sức mạnh truyền thống và sức mạnh thời đại: có hiện thực tốt đẹp hôm nay và tương lai ngày mai tươi sáng là nhờ “trời đất tổ tông khôn thiêng ngầm giúp” và cũng nhờ vào chiến công trong quá khứ.\n" +
                    " \n",
                image: '/conversation-images/61.png'
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
                text: "- Các thủ pháp: so sánh, đối lập,… được sử dụng phổ biến và hiệu quả.\n" +
                    "- Kết hợp hài hòa 2 yếu tố: chính luận sắc bén và văn chương trữ tình.\n" +
                    "- Hình ảnh phong phú, giàu sức gợi, giàu tính biểu trưng và khái quát.\n" +
                    "- Giọng điệu, âm hưởng mang đậm cảm hứng anh hùng ca.\n" +
                    "=> Là áng “thiên cổ hùng văn”.\n",
                image: '/conversation-images/62.png'
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
    // 1-2-2
    {
        id: 11,
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
                text: "Chuyến tàu lần này sẽ đưa bạn tới ga CẢNH NGÀY HÈ để hiểu rõ hơn về ngòi bút của Nguyễn Trãi cũng như thông điệp mà ông muốn gửi gắm qua nghệ thuật. Còn bây giờ, bạn đã sẵn sàng cho chuyến đi này hay chưa, hãy cùng đoàn tàu chiếm lĩnh tri thức tiếp thôi nào!",
                buttons: [
                    {
                        text: "Thơ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Vị trí, hoàn cảnh sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Nội dung",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Nghệ thuật",
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
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Rồi hóng mát thuở ngày trường,\n" +
                    "Hoè lục đùn đùn tán rợp trương.\n" +
                    "Thạch lựu hiên còn phun thức đỏ,\n" +
                    "Hồng liên trì đã tịn mùi hương.\n" +
                    "Lao xao chợ cá làng ngư phủ,\n" +
                    "Dắng dỏi cầm ve lầu tịch dương.\n" +
                    "Lẽ có Ngu cầm đàn một tiếng,\n" +
                    "Dân giàu đủ khắp đòi phương.\n" +
                    "\n" +
                    "Nguồn: Nguyễn Trãi toàn tập, Đào Duy Anh, NXB Khoa học xã hội, 1976\n",
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
                text: "1.\tVị trí\n" +
                    "“Bảo kính cảnh giới” là chùm thơ gồm 61 bài thơ trong tổng số 254 bài thơ của tập thơ “Quốc âm thi tập”; được viết bằng thơ Nôm Đường luật; nội dung giáo huấn và chứa đựng nhiều trăn trở, suy tư về thế sự thông qua bức tranh thiên nhiên cùng nhịp sống bình dị, bình yên nơi thôn dã. Trong đó “Cảnh ngày hè” là cái tên khác của bài “Bảo kính cảnh giới số 43”.\n" +
                    "2.\tHoàn cảnh sáng tác \n" +
                    "Bài thơ cũng như tập thơ “Bảo kính cảnh giới” được Nguyễn Trãi sáng tác vào những năm ông chọn lui về quê ở ẩn tại Côn Sơn, vì những hiểu lầm mà ông không còn được vua tin dùng như trước vào những năm 1437 nhưng lòng ông vân không nguôi nỗi lo cho vận mệnh của đất nước.\n" +
                    "\n",
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
                text: "Bài thơ chia làm 2 nội dung chính:\n" +
                    "1. Bức tranh thiên nhiên, cuộc sống (6 câu đầu)\n" +
                    "- Tâm thế Nguyễn Trãi:\n" +
                    "+ Rồi: rỗi rãi\n" +
                    "+ Ngày trường: ngày dài\n" +
                    "+ Ngắt nhịp 1/2/3 chậm rãi\n" +
                    "-> bài thơ được sáng tác trong những ngày tháng mà Nguyễn Trãi ở ẩn tại Côn Sơn. Lúc này ông cảm thấy được thư thái, thảnh thơi ngắm nhìn cảnh đẹp.\n" +
                    "\n" +
                    "- Bức tranh ngày hè:\n" +
                    "+ “Hòe lục đùn đùn tán rợp giương”: hình ảnh cây hòe được miêu tả với màu lục, tán cây “đùn đùn” gợi vẻ đẹp của vòm lá xanh tươi, bừng bừng sức sống, che rợp cả không gian.\n" +
                    "+ Hoa lựu: “phun thức đỏ” -> động từ “phun” khiến màu đỏ như tuôn chảy, tô đậm sắc màu cho hoa. \n" +
                    "+ Sen hồng: tỏa ngát mùi hương.\n" +
                    "-> dùng các động từ mạnh để diễn tả sự căng tràn của cảnh vật. Khắc họa cảnh thiên nhiên quen thuộc, gần gũi với làng quê Việt Nam.\n" +
                    "\n" +
                    "- Âm thanh của ngày hè:\n" +
                    "+ Tiếng của làng nghề chài lao xao vọng lại.\n" +
                    "+ Tiếng ve lúc mặt trời sắp lặn như tiếng đàn. \n" +
                    "-> Đảo tính từ, từ láy lên đầu câu nhằm nhấn mạnh không khí rộn rã, tươi vui trong đời sống của nhân dân lao động.\n" +
                    "=> Bức tranh thiên nhiên mùa hè được miêu tả từ gần tới xa, có sự kết hợp hài hòa giữa đường nét, màu sắc với âm thanh, giữa con người và cảnh vật. Tất cả đều gần gũi, bình dị, tĩnh ở bên ngoài mà tràn đầy, ứa căng sức sống ở bên trong -> Tâm hồn tinh tế, yêu thiên nhiên, yêu cuộc sống tha thiết của tác giả. \n" +
                    "\n" +
                    "2. Tâm tư, ước nguyện của nhà thơ (2 câu cuối)\n" +
                    "“Lẽ có Ngu cầm đàn một tiếng,\n" +
                    "Dân giàu đủ khắp đòi phương”.\n" +
                    "- Điển cố “Ngu cầm”: đàn của vua Ngu Thuấn. Tương truyền vua Thuấn được vua Nghiêu ban cho cây đàn, khi rỗi rãi thường gảy khúc Nam phong. Khi tiếng đàn cất lên thì mưa thuận gió hòa, nhân dân làm ăn sung sướng no đủ. Đây cũng chính là mong ước của tác giả Nguyễn Trãi.\n" +
                    "- Câu cuối cùng là câu thơ có 6 chữ, nhịp thơ 3/3 như dồn nén cảm xúc của tác giả. Chữ “dân” được đặt lên đầu cầu nhằm nhấn mạnh tâm tư nguyện vọng của tác giả: Làm sao để dân được sống trong đất nước thái bình muôn thuở.\n" +
                    "\n" +
                    "=> Như vậy, tứ thơ vận động từ bức tranh thiên nhiên ngày hè tràn đầy sức sống đến con người cùng tình yêu thiên nhiên và kết lại là mong ước cao đẹp, mong ước nhân dân khắp nơi về hạnh phúc, ấm no của nhà thơ.\tKhi người chơi lựa chọn (3)\n",
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
                text: "- Sáng tạo thể thơ Đường luật với sự đan xen của câu 6 chữ và câu 7 chữ.\n" +
                    "- Ngôn ngữ thơ giản dị, trong sáng, gần gũi nhưng lại giàu cảm xúc, giàu sức gợi.\n" +
                    "- Bút phát tả cảnh ngụ tình đặc trưng của văn học trung đại (miêu tả thiên nhiên và cảnh sinh hoạt của con người để qua đó bộc lộ tâm tư, tình cảm của chính mình).\n",
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
    // 1-2-3
    {
        id: 12,
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
                text: "Chuyến tàu lần này sẽ đưa bạn tới ga núi Dục Thúy để hiểu rõ hơn tại sao nơi đây lại là nguồn cảm hứng sáng tác của Nguyễn Trãi cũng như thông điệp mà ông muốn gửi gắm qua nghệ thuật nhé! Còn bây giờ, bạn đã sẵn sàng cho chuyến đi này hay chưa, hãy cùng đoàn tàu chiếm lĩnh tri thức tiếp thôi nào!",
                buttons: [
                    {
                        text: "Thơ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Vị trí, hoàn cảnh sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Nội dung",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Nghệ thuật",
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
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "\n\tPhiên âm\n" +
                    "Hải khẩu hữu tiên san;\n" +
                    "Tiền niên lu vãng hoàn.\n" +
                    "Liên hoa phù thủy thượng;\n" +
                    "Tiên cảnh trụy trần gian.\n" +
                    "Tháp ảnh tram thanh ngọc;\n" +
                    "Ba quang kính thúy hoàn.\n" +
                    "Hữu hoài Trương Thiếu bảo;\n" +
                    "Bi khắc tiển hoa ban.\n" +
                    "\n" +
                    "Dịch nghĩa\n" +
                    "Cửa biển có ngọn núi tiên;\n" +
                    "Năm xưa ta đã nhiều lần qua lại nơi này.\n" +
                    "Dáng núi như đóa hoa sen nổi trên mặt nước;\n" +
                    "Tưởng như là cõi tiên rơi xuống trần gian.\n" +
                    "Bóng tháp trên núi soi xuống mặt nước giống như cái trâm ngọc xanh;\n" +
                    "Ánh sang của song nước phản chiếu ngọn núi như đang soi mái tóc biếc. \n" +
                    "Chạnh nhớ Trương Thiếu bảo,\n" +
                    "Bia đá khắc thơ văn của ông nay đã lốm đốm rêu.\n" +
                    "\n" +
                    "Dịch thơ\n" +
                    "Cửa biển có non tiên; \n" +
                    "Từng qua lại mấy phen. \n" +
                    "Cảnh tiên rơi cõi tục;\n" +
                    "Mặt nước nổi hoa sen.\n" +
                    "Bóng tháo hình trâm ngọc;\n" +
                    "Gương sông ánh tóc huyền.\n" +
                    "Nhớ xưa Trương Thiếu bảo; \n" +
                    "Bia khắc dấu rêu hoen.\n",
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
                text: "-\tBài thơ được sáng tác vào thời điểm sau cuộc kháng chiến chống giặc Minh và trước khi Nguyễn Trãi về ở ẩn tại Côn Sơn.\n" +
                    "-\tTác giả đã nhiều lần ghé qua cửa biển nơi đây nhưng lần nào cũng khiến ông mang theo những dòng tâm trạng và suy tư về sự chảy trôi của thời gian trước thiên nhiên hùng vĩ. Tức cảnh, bài thơ được ra đời.\n" +
                    "-\tBài thơ sau đó được sưu tầm và xếp vào “Ức Trai thi tập” theo thể Ngũ ngôn luật thi (Ngũ ngôn bát cú Đường luật).\n",
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
                text: "\tBài thơ chia làm 2 nội dung chính:\n" +
                    "1. 6 câu thơ đầu: Bức tranh về vẻ đẹp của núi Dục Thúy\n" +
                    "a. Hai câu đầu: Giới thiệu chung về cảnh vật trong “mối quan hệ” với tác giả.\n" +
                    "b. Bốn câu sau: Bức tranh sơn thủy hữu tình:\n" +
                    "- Bức tranh toàn cảnh núi Dục Thuý được thể hiện rõ nét trong hai câu 3 - 4, từ điểm nhìn xa, có tầm bao quát rộng. \n" +
                    "- Núi Dục Thuý được tác giả ví như đoá sen nổi trên mặt nước, hình ảnh và bút pháp mới lạ, độc đáo. Trong nguyên văn, tác giả không sử dụng từ ngữ biểu thị sự so sánh mà đồng nhất trực tiếp núi Dục Thuý với đoá sen. Hình ảnh đoá sen có ý nghĩa biểu tượng, gợi ý niệm thoát tục, như là cõi tiên rơi xuống trần gian. \n" +
                    "- Ngôn từ được sử dụng tinh xác, tạo ấn tượng: Trong nguyên văn, từ phù có nghĩa là nổi, nhưng lay động tại chỗ (khác với phiếm cũng là nổi nhưng trôi dạt); từ truỵ có nghĩa là rơi, rớt từ trên cao xuống, thể hiện sự sống động trong miêu tả.\n" +
                    "Dấu ấn riêng của tâm hồn Nguyễn Trãi thể hiện rõ nhất qua những liên tưởng xuất hiện ở cái nhìn cận cảnh (hai câu 5 -  6). \n" +
                    "- Các chi tiết đặc sắc: so sánh bóng tháp hiện trên mặt nước như chiếc trâm ngọc xanh; ánh sáng sóng nước như đang soi chiếu mái tóc biếc. \n" +
                    "- Trâm ngọc xanh và mái tóc biếc gợi hình ảnh trẻ trung, trong sáng, trữ tình, nên thơ, giúp liên tưởng đến hình ảnh người con gái. Vẻ đẹp của thiên nhiên được so sánh với vẻ đẹp của con người; lấy nét đẹp của người con gái để hình dung bóng núi trên sóng biếc. Sự liên tưởng này rất hiện đại, đặc biệt, hiếm thấy trong thơ cổ. Thơ cổ thường lấy chuẩn mực vẻ đẹp tự nhiên để so sánh với con người. Sự liên tưởng và bút pháp mới lạ này cho thấy tâm hồn trong sáng, nhạy cảm, tinh tế của nhà thơ.\n" +
                    "\n" +
                    "2. Hai câu cuối: Tâm sự hoài niệm của nhà thơ\n" +
                    "- Hai câu kết bài thơ này, cũng giống như các bài thơ khác cùng chủ đề của Nguyễn Trãi, lại thường là sự bộc lộ những suy tư về con người, về lịch sử, về dân tộc. Ý thơ thể hiện rõ sự hoài niệm, nhớ tiếc. Điều này cho thấy tâm hồn hướng nội, sâu sắc của Nguyễn Trãi.\n" +
                    " \"Dục Thúy Sơn ” là bài thơ tả cảnh ngụ tình đặc sắc. Bài thơ ngũ ngôn bát cú bằng chữ Hán. Hình tượng thơ mĩ lệ, cảnh sắc đượm vẻ thần tiên. Trong phần luận,4 hình ảnh ẩn dụ sóng nhau, đối nhau, hình ảnh này làm đẹp thêm hình ảnh kia, thể hiện cách cảm, cách tả của nhà thơ mang tâm hồn thơ mộng, tài hoa. Ức Trai, trong cảm nhận cái đẹp của thiên nhiên, sông núi, ngòi bút tài hoa của ông rất tinh tế và nhạy cảm trong gợi tả và biểu cảm.\n",
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
                text: "-\tNgôn từ thơ giàu hình ảnh, sức gợi tả.\n" +
                    "-\tSử dụng thành công các biện pháp tu từ: ẩn dụ, so sánh,…\n" +
                    "-\tTả cảnh ngụ tình\n",
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
    // 1-3-1
    {
        id: 17,
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
                text: "Chuyến tàu lần này sẽ đưa bạn tới ga  để hiểu rõ hơn tại sao nơi đây lại là nguồn cảm hứng sáng tác của Nguyễn Trãi cũng như thông điệp mà ông muốn gửi gắm qua nghệ thuật nhé! Còn bây giờ, bạn đã sẵn sàng cho chuyến đi này hay chưa, hãy cùng đoàn tàu chiếm lĩnh tri thức tiếp thôi nào!",
                buttons: [
                    {
                        text: "Thơ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Vị trí, hoàn cảnh sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Nội dung",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Nghệ thuật ",
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
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "“ Đêm khuya văng vẳng trống canh dồn,\n" +
                    "   Trơ cái hồng nhan với nước non.\n" +
                    "   Chén rượu hương đưa say lại tỉnh,\n" +
                    "   Vầng trang bóng xế khuyết chưa tròn.\n" +
                    "   Xiên ngang mặt đất, rêu từng đám, \n" +
                    "   Đâm toạc chân mây, đá mấy hòn.\n" +
                    "   Ngán nỗi xuân đi xuân lại lại,\n" +
                    "   Mảnh tình san sẻ tí con con!”\n" +
                    "\n" +
                    "Thơ Hồ Xuân Hương, NXB Văn học, Hà Nội, 1987\n",
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
                text: "-\t“Tự tình” II  nằm trong chùm thơ Nôm “Tự tình” gồm ba bài của nữ sĩ Hồ Xuân Hương trong tổng số 50 bài bà để lại.\n" +
                    "-\tBài thơ là tiếng nói quyết liệt đấu tranh cho quyền được hưởng hạnh phúc của người phụ nữ phong kiến; thể hiện nỗi thương cảm với thân phận và khẳng định, đề cao vẻ đẹp, khát vọng người phụ nữ nói chung và Hồ Xuân Hương nói riêng.\n",
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
                text: "Nội dung của bài tự tình",
                image: '/conversation-images/63.png'
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
                text: "-\tNgôn ngữ thơ điêu luyện, bộc lộ được hết tài năng và phong cách của tác giả như sử dụng từ ngữ, hình ảnh giàu sức tạo hình và giàu giá trị biểu cảm, đa nghĩa,…\n" +
                    "-\tNghệ thuật đảo, nghệ thật tả cảnh ngụ tình, sử dụng động từ mạnh, biện pháp ẩn dụ được sử dụng thường xuyên và linh hoạt…\n",
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
    // 1-4-1
    {
        id: 18,
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm tiêu biểu của nhà thơ Nguyễn Khuyến, đó là bài thơ “Câu cá mùa thu”. Bây giờ bạn hãy lựa chọn những điều mà bạn muốn khám phá về bài thơ “Câu cá mùa thu” của Nguyễn Khuyến nhé!",
                buttons: [
                    {
                        text: "Đọc tác phẩm",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Tìm hiểu chung về tác phẩm",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Khám phá tác phẩm",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Khái quát nội dung và nghệ thuật",
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
                text: "Đọc tác phẩm",
                image: '/conversation-images/64.jpg'
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
                text: "-\tXuất xứ: là bài thơ thứ 3 trong “Chùm thơ thu”: “Thu điếu”- “Thu vịnh”- “Thu ẩm”. \n" +
                    "-\tHoàn cảnh sáng tác: viết trong thời gian khi Nguyễn Khuyến về ở ẩn tại quê nhà. \n" +
                    "-\tThể loại: thơ Nôm Đường luật, viết theo thể thất ngôn bát cú \n" +
                    "-\tBố cục: Đề- thực- luận- kết \n",
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
                text: "Sau đây là sơ đồ tư duy giúp bạn khám phá tác phẩm một cách logic, khoa học và dễ nhớ hơn: ",
                image: '/conversation-images/65.png'
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
                text: "Khái quát về nội dung, nghệ thuật",
                image: '/conversation-images/66.png'
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
                    + "Sự phân hóa phức tạp thành nhiều xu hướng văn học\n"
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
                text: "Tôi đã rất vui khi thấy sự trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé!",
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác giả từng được ví như một vì sao chổi lạ xoẹt ngang bầu trời của nền thi ca Việt Nam, từng được mệnh danh là người “cai trị trường thơ Loạn” của các nhà thơ Bình Định, một thi phát lẫy lừng của phong trào Thơ Mới. Các bạn có đoán được đó là tác giả nào không nhỉ? \n" +
                    "……………………………………………………………………………………..\n" +
                    "Vâng đó là nhà thơ Hàn Mặc Tử\n",
                buttons: [
                    {
                        text: "Vài nét về tiểu sử, đặc điểm con người Hàn Mặc Tử ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Quan niệm thơ của Hàn Mặc Tử",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Sự nghiệp sáng tác ",
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
                text: "*Để hiểu thơ Hàn Mặc Tử, ta nên hiểu về con người ấy qua hồi ức của những người thân trong gia đình, của bạn bè, của đồng nghiệp\n" +
                    "*Đặc điểm con người Hàn Mặc Tử\n" +
                    "- Người luôn nhạy cảm với những mất mát, hụt hẫng đồng thời do sinh ra trong một gia đình Thiên Chúa giáo nên ông cũng là người luôn mộ đạo, khao khát sống hướng đến đức tin và những giá trị tuyệt đối. \n" +
                    "- Cuộc đời là điển hình cho kiếp tài hoa bạc mệnh: \n" +
                    "+ Nhiều cuộc tình nhưng thường kết thúc vội vã và chia tay trong bi kịch. Không ít bóng hồng đi qua cuộc đời Hàn Mặc Tử đã trở thành nguồn cảm hứng và hình tượng nghệ thuật trong thơ ông. \n" +
                    "+ Căn bệnh phong tạo nên bi kịch lớn trong cuộc đời thi sĩ, nhưng sự đau đớn tột cùng về thể xác lẫn sự tuyệt vọng về tinh thần lại khiến cảm hứng nghệ thuật của Hàn Mặc Tử thăng hoa. \n",
                image: '/conversation-images/47.png'
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
                text: "*Không chỉ để lại một di sản thơ phong phú, Hàn Mặc Tử còn để lại một hệ thống quan niệm của mình về thơ, về nghề thơ, về công việc làm thơ. ",
                image: '/conversation-images/48.png'
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
                text: "*Chỉ sáng tác trong 10 năm ngắn ngủi, nhưng với 6 tập thơ và 2 vở kịch đã giúp thi sĩ giữ một vị trí không thể thay thế trên thi đàn Việt Nam hiện đại. ",
                image: '/conversation-images/49.png'
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "*Một vài đặc sắc nghệ thuật thơ Hàn Mặc Tử: ",
                image: '/conversation-images/50.png'
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
    // 2-4
    {
        id: 21,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiêp theo nhé! ",
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một nhà thơ được đánh giá là nhà thơ “mới nhất trong các nhà thơ mới” theo tác giả Thi nhân Việt Nam, được mệnh danh là “ông hoàng thơ tình”. Và là một trong những thành viên đầu tiên của nhóm Tự lực văn đoàn. Vậy, bạn có biết tôi nói đến nhà thơ nào không nhỉ? \n" +
                    "--------------------------------------------------------------------------\n" +
                    "Vâng, đó là nhà thơ Xuân Diệu! \n",
                buttons: [
                    {
                        text: "Vài nét về tiểu sử, con người Xuân Diệu ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Khái quát sự nghiệp văn chương ",
                        action: ButtonAction.RouterConversation,
                        pos: 5
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
                text: "VÀI NÉT VỀ TIỂU SỬ, CON NGƯỜI XUÂN DIỆU",
                image: '/conversation-images/51.png'
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "*Đặc điểm con người Xuân Diệu \n" +
                    "- Trong con người ông có sự chung thủy hai truyền thống quý báu của hai miền đất nước: \n" +
                    "+ Xuân Diệu được kế thừa đức tính cần cù, tinh thần vượt khó đáng khâm phục của con người xứ Nghệ. \n" +
                    "+ Hấp thụ cái nồng nàn, dạt dào của con người vùng biển đầy nắng gió Quy Nhơn, Bình Định. \n" +
                    "-\tTuổi thanh niên ra Hà Nội học tú tài được sống giữa thiên nhiên xứ Bắc với bốn mùa giao chuyển rõ rệt, điều này lại giúp Xuân Diệu có thêm sự nhạy cảm, tinh tế. \n" +
                    "-\tVào Huế học tú tài phần thứ hai, ông được tiếp xúc cới núi sông thơ mộng, buồn lặng lặng với cái mê li, lả lướt đắm đuối… \n" +
                    "Có tâm hồn phong phú, chứa đựng nhiều cung bậc cảm xúc do từng sống, từng ở qua nhiều miền đất nước với đặc điểm thiên nhiên, truyền thống văn hóa đa dạng. \n",
                image: '/conversation-images/52.png'
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
                text: "*Với lòng say mê kính nghiệp, với khao khát cống hiến cho cuộc đời những áng thơ văn đầy sự sáng tạo, trong hơn nửa thế kỉ lao động, Xuân Diệu đã để lại cho nền văn học dân tộc một sự nghiệp đồ sộ: ",
                image: '/conversation-images/53.png'
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
    // 2-5
    {
        id: 22,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé!",
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một nhà thơ có vị trí đặc biệt trong nền thơ ca Việt Nam hiện đại, ông có môt lối đi riêng, lối đi trở về với cội nguồn dân tộc. Là nhà thơ “chân quê” không lẫn với nhà thơ nào trong phong trào Thơ mới. Bạn có đoán được đó là nhà thơ nào không nhỉ? \n" +
                    "---------------------------------------------------------------------------------------------------\n" +
                    "Vâng, đó là nhà thơ Nguyễn Bính! \n",
                buttons: [
                    {
                        text: "Vài nét về tiểu sử Nguyễn Bính",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Những cơ sở tạo nên phong cách nghệ thuật thơ Nguyễn Bính ",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Sự nghiệp văn chương ",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Một vài đặc sắc nghệ thuật và nội dung trong thơ Nguyễn Bính",
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
                text: "VÀI NÉT VỀ TIỂU SỬ NGUYỄN BÍNH",
                image: '/conversation-images/54.png'
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
                text: "*Thuật ngữ văn học: “phong cách nghệ thuật” \n" +
                    "- “Phong cách cần phải được định nghĩa như phương thức biểu hiện cách chiếm lĩnh hình tượng đối với cuộc sống như phương thức thuyết phục và thu hút độc giả.”- định nghĩa của M. Khrapchencô. \n" +
                    "- Trong cuốn Từ điển thuật ngữ văn học của nhóm tác giả Lê Bá Hán, Trần Đình Sử, Nguyễn Khắc Phi chủ biên, nêu khái niệm: “Phong cách nghệ thuật là một phạm trù thẩm mĩ, chỉ sự thống nhất tương đối ổn định của hệ thống hình tượng, của các phương tiện biểu hiện nghệ thuật, nói lên cái nhìn độc đáo trong sáng tác của một nhà văn, trong tác phẩm riêng lẻ, trong trào lưu văn học hay trong văn học dân tộc khác”. \n",
                image: '/conversation-images/55.png'
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
                text: "*Nguyễn Bính làm thơ khá sớm và rất bền bỉ\n" +
                    "- Tác phẩm được đăng báo đầu tiên của ông là bài thơ “Cô hái mơ”.\n" +
                    "- Năm 1937, Nguyễn Bính gửi tập thơ “Tâm hồn tôi” dự thi và đã được giải thưởng của Tự lực văn đoàn. \n" +
                    "- Nguyễn Bính được Nhà nước truy tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật vào năm 2000. \n",
                image: '/conversation-images/56.png'
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
                text: "MỘT VÀI ĐẶC SẮC NGHỆ THUẬT VÀ NỘI DUNG TRONG THƠ NGUYỄN BÍNH ",
                image: '/conversation-images/57.png'
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
    // 2-2-1
    {
        id: 23,
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm tiêu biểu của nhà thơ Thạch Lam, đó là truyện ngắn trữ tình “Dưới bóng hoàng lan”. Bây giờ bạn hãy lựa chọn những điều mà bạn muốn khám phá về bài thơ “Dưới bóng hoàng lan” của Thạch Lam nhé! ",
                buttons: [
                    {
                        text: "Đọc tác phẩm ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Tìm hiểu chung về tác phẩm ",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Khám phá tác phẩm",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Khái quát nội dung và nghệ thuật.",
                        action: ButtonAction.RouterConversation,
                        pos: 13
                    },
                    {
                        text: "Đã tìm hiểu hết tất cả, chơi thôi!",
                        action: ButtonAction.PlayGame,
                    }
                ]
            },
            {
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Bạn có thể đọc tác phẩm “Dưới bóng hoàng lan” ở đây nhé! \n" +
                    "Link: \n" +
                    "https://vi.wikisource.org/wiki/D%C6%B0%E1%BB%9Bi_b%C3%B3ng_ho%C3%A0ng_lan\n",
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
                text: "\t-\tThể loại: truyện ngắn trữ tình \n" +
                    "-\tXuất xứ: in trong Tuyển tập Thạch Lam \n" +
                    "-\tPhương thức biểu đạt: Tự sự kết hợp biểu cảm \n" +
                    "-\tNgười kể chuyện: Ngôi thứ ba \n" +
                    "-\tTóm tắt văn bản: \n" +
                    " “Dưới bóng hoàng lan” là truyện ngắn không có cốt truyện. Tác phẩm có 3 nhân vật: hai bà cháu, Nga. Thanh là một đứa trẻ mồ côi, người bà đã một mình nuôi nấng, chăm sóc Thanh. Thanh đi tỉnh làm, lần trở về thăm bà gần nhất cách đó đã hai năm. Mái nhà xưa và bóng bà “che mát” tâm hồn đứa cháu; hương thơm và bóng hoàng lan ướp hương và ủ ấp cho một mối tình êm đẹp “dịu ngọt chăng tơ”…\t\n" +
                    "(3)\tKHÁM PHÁ TÁC PHẨM \n" +
                    "1\tỞ tác phẩm “Dưới bóng hoàng lan” của Thạch Lan, ta có thể khám phá tác phẩm theo những khía cạnh sau: \t3.1.\tNgôi kể chuyện\n" +
                    "3.2.\tTâm trạng của Thanh khi trở về nhà bà\n" +
                    "3.3.\tTình cảm của Thanh và Nga \n",
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
                text: "Ở tác phẩm “Dưới bóng hoàng lan” của Thạch Lan, ta có thể khám phá tác phẩm theo những khía cạnh sau: ",
                buttons: [
                    {
                        text: "Ngôi kể chuyện",
                        action: ButtonAction.RouterConversation,
                        pos: 7
                    },
                    {
                        text: "Tâm trạng của Thanh khi trở về nhà bà",
                        action: ButtonAction.RouterConversation,
                        pos: 9
                    },
                    {
                        text: "Tình cảm của Thanh và Nga ",
                        action: ButtonAction.RouterConversation,
                        pos: 11
                    },
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 1
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.NoAction,
                text: "-\tTruyện được kể bằng lời của người kể chuyện ngôi thứ ba. \n" +
                    "-\tĐiểm nhìn: \n" +
                    "+ Từ người kể chuyện \n" +
                    "+ Từ nhân vật Thanh \n" +
                    "Tạo không khí trữ tình cho câu chuyện \n"
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Tâm trạng của thanh khi trở về nhà bà",
                image: '/conversation-images/67.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    }
                ]
            },
            {
                speaker: Character.System,
                actionType: ActionType.ShowImage,
                text: "Tình cảm của Thanh và Nga",
                image: '/conversation-images/68.png'
            },
            {
                speaker: Character.System,
                actionType: ActionType.Choose,
                text: "Bạn có muốn tìm hiểu thêm về những lựa chọn còn lại?",
                buttons: [
                    {
                        text: "Quay lại",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    }
                ]
            },
            {
                actionType: ActionType.ShowImage,
                speaker: Character.System,
                text: "Khái quát về nội dung tác phẩm",
                image: '/conversation-images/69.png'
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
    // 2-3-1
    {
        id: 24,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự quay trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé!  ",
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm tiêu biểu của nhà thơ Hàn Mặc Tử, đó là bài thơ “Mùa xuân chính”. Bây giờ bạn hãy lựa chọn những điều mà bạn muốn khám phá về bài thơ “Mùa xuân chín” của Hàn Mặc Tử nhé! ",
                buttons: [
                    {
                        text: "Đọc tác phẩm ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Tìm hiểu chung về tác phẩm ",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Khám phá tác phẩm",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Khái quát nội dung và nghệ thuật.",
                        action: ButtonAction.RouterConversation,
                        pos: 13
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
                text: "Đọc tác phẩm",
                image: '/conversation-images/70.png'
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
                text: "-\tTác phẩm được xếp ở phần “Hương thơm” trong tập thơ “Đau thương” (1938) \n" +
                    "-\tThể thơ: bảy chữ \n" +
                    "-\tBố cục: \n" +
                    "+ Hai khổ đầu: khung cảnh tươi mới, đầy sức sống của mùa xuân \n" +
                    "+ Hai khổ cuối: Tâm trạng của người con gái sắp lấy chồng và nhân vật trữ tình \n" +
                    "-\tNhan đề bài thơ: \n" +
                    "+ Được cấu tạo bởi những từ thuộc từ loại: Danh từ +Tính từ \n" +
                    "+ “Mùa xuân”: sinh sôi, nảy nở \n" +
                    "+ “Chín”: trạng thái lí tưởng của sự vật, hiện tượng \n" +
                    "Gợi cảm giác mùa xuân đang đi vào độ căng mọng và tươi đẹp nhất. \n",
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
                text: "Khám phá tác phẩm",
                image: '/conversation-images/71.jpg'
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
                text: "Khái quát về nội dung, nghệ thuật",
                image: '/conversation-images/72.png'
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
    // 2-4-1
    {
        id: 25,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự quay trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé! ",
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm tiêu biểu của nhà thơ Xuân Diệu, đó là bài thơ “Thơ duyên”. Bây giờ bạn hãy lựa chọn những điều mà bạn muốn khám phá về bài thơ “Thơ duyên” của Xuân Diệu nhé! ",
                buttons: [
                    {
                        text: "Đọc tác phẩm ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Tìm hiểu chung về tác phẩm",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Khám phá tác phẩm",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Khái quát nội dung và nghệ thuật ",
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
                text: "Trần Đăng Khoa sinh vào tháng 4/1958 tại huyện Nam Sách, Hải Dương. Ông là nhà thơ, nhà báo và biên tập viên của Tạp chí Văn nghệ Quân đội, cũng như hội viên của Hội nhà văn Việt Nam. Hiện tại, ông đang giữ chức vụ Phó Bí thư Đảng ủy Đài tiếng nói Việt Nam.",
                image: '/conversation-images/73.png'
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
                text: "-\tXuất xứ: in trong Tuyển tập Xuân Diệu (thơ), NXB Văn học, Hà Nội, 1986, 100-101)\n" +
                    "-\tThể thơ: thất ngôn \n" +
                    "-\tBố cục:  3 phần \n" +
                    "+ Khổ 1: Khung cảnh một buổi chiều thu \n" +
                    "+Khổ 2, 3: Sự hòa hợp trong tâm hồn nhà thơ \n" +
                    "+Khổ 4,5: Vạn vật trong thơ duyên trở nên có linh tính \n" +
                    "-\tNhan đề: \n" +
                    "+ “duyên”: bức tranh thu ở đây là sự giao hòa, giao duyên tựa như tự nhiên mà có giữa thiên nhiên với thiên nhiên, con người với thiên nhiên và con người với con người. \n" +
                    "+Thơ duyên nói về những duyên tình đẹp đẽ ấy.  \n",
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
                text: "Ở tác phẩm “Thơ duyên” của Xuân Diệu, ta có thể khám phá tác phẩm theo những khía cạnh sau: ",
                image: '/conversation-images/74.png'
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
                text: "Khái quát nội dung và nghệ thuật",
                image: '/conversation-images/75.png'
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
    // 2-5-1
    {
        id: 26,
        conversation: [
            {
                actionType: ActionType.Choose,
                speaker: Character.System,
                text: "Tôi đã rất vui khi thấy sự quay trở lại của bạn. Hãy đồng hành cùng tôi trên chặng đường tiếp theo nhé! ",
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm tiêu biểu của nhà thơ đồng quê “Nguyễn Bính”, đó là bài thơ “Xuân về”. Bây giờ bạn hãy lựa chọn những điều mà bạn muốn khám phá về bài thơ “Xuân về” của Nguyễn Bính nhé! ",
                buttons: [
                    {
                        text: "Đọc tác phẩm",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Tìm hiểu chung về tác phẩm ",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Khám phá tác phẩm ",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Khái quát nội dung và nghệ thuật ",
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
                text: "Đọc tác phẩm",
                image: '/conversation-images/76.png'
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
                text: "-\tThể thơ: tự do\n" +
                    "-\tXuất sứ: sáng tác năm 1937 trong Tuyển tập thơ Nguyễn Bính. \n" +
                    "-\tNhan đề: thể hiện rõ cảm nhận của tác giả về sự thay đổi cảnh sắc, con người khi mùa không khí mùa xuân đang bắt đầu tràn ngập khắp các con đường ngõ xóm, tất cả tạo nên một nét xuân thuần hậu, nhẹ nhàng, chất phác và mang đậm hơi thở mùa xuân đất Bắc. \n" +
                    "-\tBố cục: \n" +
                    "+ Khổ 1: vẻ đẹp khi gió xuân về\n" +
                    "+Khổ 2: vẻ đẹp khi nắng xuân về\n" +
                    "+Khổ 3: Vẻ đẹp đồng quê khi xuân về \n" +
                    "+Khổ 4: cảnh đi trẫy hội mùa xuân\n",
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
                text: "Khám phá tác phẩm",
                image: '/conversation-images/77.png'
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
                text: "Khái quát về nội dung và nghệ thuật ",
                image: '/conversation-images/78.png'
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm của nhà thơ Quang Dũng, được sáng tác trong thời kì kháng chiến chống Pháp. Bài thơ mang tên “Tây Tiến”. Bây giờ, bạn hãy lựa chọn kiến thức mà bạn muốn tìm hiểu nhé!",
                buttons: [
                    {
                        text: "Đọc bài thơ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Hoàn cảnh sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Nội dung",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Nghệ thuật",
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
                text: "Sông Mã xa rồi Tây Tiến ơi!\n" +
                    "Nhớ về rừng núi, nhớ chơi vơi.\n" +
                    "Sài Khao sương lấp đoàn quân mỏi,\n" +
                    "Mường Lát hoa về trong đêm hơi.\n" +
                    "\n" +
                    "Dốc lên khúc khuỷu dốc thăm thẳm,\n" +
                    "Heo hút cồn mây, súng ngửi trời.\n" +
                    "Ngàn thước lên cao, ngàn thước xuống,\n" +
                    "Nhà ai Pha Luông mưa xa khơi.\n" +
                    "\n" +
                    "Anh bạn dãi dầu không bước nữa,\n" +
                    "Gục lên súng mũ bỏ quên đời!\n" +
                    "Chiều chiều oai linh thác gầm thét,\n" +
                    "Đêm đêm Mường Hịch cọp trêu người.\n" +
                    "\n" +
                    "Nhớ ôi Tây Tiến cơm lên khói,\n" +
                    "Mai Châu mùa em thơm nếp xôi.\n" +
                    "\n" +
                    "Doanh trại bừng lên hội đuốc hoa,\n" +
                    "Kìa em xiêm áo tự bao giờ.\n" +
                    "Khèn lên man điệu nàng e ấp,\n" +
                    "Nhạc về Viên Chăn xây hồn thơ.\n" +
                    "\n" +
                    "Người đi Châu Mộc chiều sương ấy,\n" +
                    "Có thấy hồn lau nẻo bến bờ?\n" +
                    "Có nhớ dáng người trên độc mộc,\n" +
                    "Trôi dòng nước lũ hoa đong đưa?\n" +
                    "\n" +
                    "Tây Tiến đoàn binh không mọc tóc,\n" +
                    "Quân xanh màu lá dữ oai hùm.\n" +
                    "Mắt trừng gửi mộng qua biên giới,\n" +
                    "Đêm mơ Hà Nội dáng kiều thơm.\n" +
                    "\n" +
                    "Rải rác biên cương mồ viễn xứ,\n" +
                    "Chiến trường đi chẳng tiếc đời xanh.\n" +
                    "Áo bào thay chiếu, anh về đất,\n" +
                    "Sông Mã gầm lên khúc độc hành.\n" +
                    "\n" +
                    "Tây Tiến người đi không hẹn ước,\n" +
                    "Đường lên thăm thẳm một chia phôi.\n" +
                    "Ai lên Tây Tiến mùa xuân ấy,\n" +
                    "Hồn về Sầm Nứa chẳng về xuôi.\n" +
                    "\n" +
                    "Phù Lưu Chanh, 1948\n",
                image: '/conversation-images/79.png'
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
                text: "Binh đoàn Tây Tiến được thành lập vào năm 1947 – trong thời kì kháng chiến chống Pháp. Nhiệm vụ chính của binh đoàn là phối hợp với bộ đội Lào nhằm đánh tiêu hao sinh lực địch. Nhà thơ Quang Dũng đã từng giữ chức Đại đội trưởng.\n" +
                    "Cuối năm 1948, nhà thơ Quang Dũng nhận được lệnh chuyển sang đơn vị khác tại Phù Lưu Chanh. Trong cảm xúc nghẹn ngào, lưu luyến của giây phút chia li, ông đã sáng tác bài thơ “Tây Tiến”.\n" +
                    "Chính vì tác giả đã từng là một người lính trong đoàn binh Tây Tiến nên khi sáng tác bài thơ này, ông đã lấy từ chính trải nghiệm thực của một người lính từng cầm súng chiến đấu.\n" +
                    "Bài thơ ban đầu có tựa đề là “Nhớ Tây Tiến” in trong tập thơ “Mây đầu ô”.\n",
                image: '/conversation-images/80.png'
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
                text: "Sau đây là những kiến thức về nội dung mà bạn cần lưu ý khi tìm hiểu bài thơ “Tây Tiến”:\n" +
                    "a. Nhan đề “Tây Tiến”\n" +
                    "- Tây Tiến là tên một đơn vị quân đội được thành lập đầu năm 1947 trong thời kì kháng chiến chống Pháp.\n" +
                    "- Họ có nhiệm vụ phối hợp với bộ đội Lào để bảo vệ biên giới Việt – Lào và nhằm đánh tiêu hao sinh lực địch.\n" +
                    "- Địa bàn hoạt động của Tây Tiến khá rộng, bao gồm các tỉnh: Lai Châu, Hòa Bình, Sơn La, miền Tây Thanh Hóa và Sầm Nưa (Lào).\n" +
                    "- Các chiến sĩ thuộc binh đoàn Tây Tiến phần đông là thanh niên Hà Nội, trong đó có nhiều giới trí thức là học sinh, sinh viên như Quang Dũng. Họ phải chiến đấu trong hoàn cảnh rất khó khăn, thiếu thốn về vật chất, đặc biệt là căn bệnh sốt rét rừng. Thế nhưng, những người chiến sĩ vẫn giữ trong mình tinh thần lạc quan, yêu đời và chiến đấu dũng cảm.\n" +
                    "- Tác giả Quang Dũng đã từng làm Đại đội trưởng của binh đoàn Tây Tiến. Sau đó một thời gian, ông chuyển công tác về đơn vị mới. Khi dự hội nghị toàn quân ở Phù Lưu Chanh, tác giả bồi hồi nhớ lại kỉ niệm kháng chiến cùng đồng đội ở miền biên cương Tây Bắc mà viết nên bài thơ “Tây Tiến”.\n" +
                    "\n" +
                    "b. Nội dung khái quát bài thơ\n" +
                    "Bài thơ “Tây Tiến” của nhà thơ Quang Dũng đã thể hiện nỗi nhớ và niềm tự hào về những người đồng đội thân yêu trong đoàn binh Tây Tiến - những chiến sĩ hào hoa, dũng cảm, vượt mọi khó khăn, khắc nghiệt nơi núi rừng để chiến đấu vì hòa bình Tổ quốc.\n" +
                    "\n" +
                    "c. Hình tượng người lính Tây Tiến\n" +
                    "5\tSau đây là những kiến thức về nội dung mà bạn cần lưu ý khi tìm hiểu bài thơ “Tây Tiến”:\n" +
                    "a. Nhan đề “Tây Tiến”\n" +
                    "- Tây Tiến là tên một đơn vị quân đội được thành lập đầu năm 1947 trong thời kì kháng chiến chống Pháp.\n" +
                    "- Họ có nhiệm vụ phối hợp với bộ đội Lào để bảo vệ biên giới Việt – Lào và nhằm đánh tiêu hao sinh lực địch.\n" +
                    "- Địa bàn hoạt động của Tây Tiến khá rộng, bao gồm các tỉnh: Lai Châu, Hòa Bình, Sơn La, miền Tây Thanh Hóa và Sầm Nưa (Lào).\n" +
                    "- Các chiến sĩ thuộc binh đoàn Tây Tiến phần đông là thanh niên Hà Nội, trong đó có nhiều giới trí thức là học sinh, sinh viên như Quang Dũng. Họ phải chiến đấu trong hoàn cảnh rất khó khăn, thiếu thốn về vật chất, đặc biệt là căn bệnh sốt rét rừng. Thế nhưng, những người chiến sĩ vẫn giữ trong mình tinh thần lạc quan, yêu đời và chiến đấu dũng cảm.\n" +
                    "- Tác giả Quang Dũng đã từng làm Đại đội trưởng của binh đoàn Tây Tiến. Sau đó một thời gian, ông chuyển công tác về đơn vị mới. Khi dự hội nghị toàn quân ở Phù Lưu Chanh, tác giả bồi hồi nhớ lại kỉ niệm kháng chiến cùng đồng đội ở miền biên cương Tây Bắc mà viết nên bài thơ “Tây Tiến”.\n" +
                    "\n" +
                    "b. Nội dung khái quát bài thơ\n" +
                    "Bài thơ “Tây Tiến” của nhà thơ Quang Dũng đã thể hiện nỗi nhớ và niềm tự hào về những người đồng đội thân yêu trong đoàn binh Tây Tiến - những chiến sĩ hào hoa, dũng cảm, vượt mọi khó khăn, khắc nghiệt nơi núi rừng để chiến đấu vì hòa bình Tổ quốc.\n" +
                    "\n" +
                    "c. Hình tượng người lính Tây Tiến\n" +
                    " \n" +
                    "- Xuất thân: phần đông là thanh niên Hà Nội, trong đó có nhiều học sinh, sinh viên, trí thức trẻ. \n" +
                    "- Binh đoàn Tây Tiến hoạt động chủ yếu trên địa bàn rừng núi miền Tây Bắc sang tới Thượng Lào.\n" +
                    "- Nhiệm vụ: bảo vệ biên giới Việt – Lào và phối hợp với bộ đội Lào đánh tiêu hao sinh lực địch.\n" +
                    "- Hoàn cảnh thực hiện nhiệm vụ:\n" +
                    "+ Địa hình hiểm trở, quanh co, gập ghềnh: địa danh Sài Khao, Mường Lát gợi sự hẻo lánh, xa xôi; các từ láy giàu tính tạo hình “khúc khuỷu”, “thăm thẳm”, “heo hút”.\n" +
                    "+ Nhịp thơ bẻ đôi: “Ngàn thước lên cao, ngàn thước xuống” đã gợi tả sự nguy hiểm, trắc trở của địa hình hành quân.\n" +
                    "+ Hình ảnh “súng ngửi trời” thể hiện tầm cao của núi non mà người lính phải vượt qua.\n" +
                    "- Là những người lính trẻ có tâm hồn lãng mạn, hào hoa:\n" +
                    "+ Là những con người nặng tình.\n" +
                    "+ Thể hiện qua đêm lửa trại liên hoan tưng bừng.\n" +
                    "+ Tâm hồn người lính bay bổng, say mê trong không gian ấm áp tình quân dân.\n" +
                    "- Mang vẻ đẹp bi tráng, hào hùng:\n" +
                    "+ Họ luôn trong tâm thế sẵn sàng chiến đấu và quyết hi sinh “dãi dầu không bước nữa”, “gục lên súng mũ bỏ quên đời”.\n" +
                    "+ Sẵn sàng hi sinh tuổi trẻ của mình cho đất nước “Rải rác biên cương mồ viễn xứ”, “chiến trường đi chẳng tiếc đời xanh”.\n" +
                    "+ Cái chết được lí tưởng hóa như hình ảnh tráng sĩ xưa “áo bào”, “khúc độc hành”.\n" +
                    "=> Chốt lại: lạc quan, kiên cường, tâm hồn lãng mạn, hào hoa, mang vẻ đẹp bi hùng, bi tráng.\n" +
                    "\tKhi người chơi lựa chọn (3)\n" +
                    "\n",
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
                text: "Khái quát về nghệ thuật:\n" +
                    "- Cảm hứng và bút pháp lãng mạn mang đậm chất bi tráng.\n" +
                    "- Cách sử dụng ngôn từ đặc sắc: chỉ địa danh, từ tượng hình, từ Hán Việt,...\n" +
                    "- Kết hợp chất nhạc và chất họa.\n" +
                    "- Nhịp thơ linh hoạt, khi thì ngắt nhịp nhanh, chắc khỏe, lúc thì nhẹ bẫng tạo sự cân đối trong toàn bài thơ.\n",
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
    // 3-3-1
    {
        id: 14,
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm của nhà thơ Nguyễn Đình Thi, được sáng tác trong thời kì kháng chiến chống Pháp. Bài thơ mang tên “Đất nước”. Bây giờ, bạn hãy lựa chọn kiến thức mà bạn muốn tìm hiểu nhé!",
                buttons: [
                    {
                        text: "Đọc bài thơ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Hoàn cảnh sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Nội dung",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Nghệ thuật",
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
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Sáng mát trong như sáng năm xưa\n" +
                    "Gió thổi mùa thu hương cốm mới\n" +
                    "Tôi nhớ những ngày thu đã xa\n" +
                    "Sáng chớm lạnh trong lòng Hà Nội\n" +
                    "Những phố dài xao xác hơi may\n" +
                    "Người ra đi đầu không ngoảnh lại\n" +
                    "Sau lưng thềm nắng lá rơi đầy.\n" +
                    "\n" +
                    "Mùa thu nay khác rồi\n" +
                    "Tôi đứng vui nghe giữa núi đồi\n" +
                    "Gió thổi rừng tre phấp phới\n" +
                    "Trời thu thay áo mới\n" +
                    "Trong biếc nói cười thiết tha!\n" +
                    "Trời xanh đây là của chúng ta\n" +
                    "Núi rừng đây là của chúng ta\n" +
                    "Những cánh đồng thơm mát\n" +
                    "Những ngả đường bát ngát\n" +
                    "Những dòng sông đỏ nặng phù sa\n" +
                    "\n" +
                    "Nước chúng ta\n" +
                    "Nước những người chưa bao giờ khuất\n" +
                    "Đêm đêm rì rầm trong tiếng đất\n" +
                    "Những buổi ngày xưa vọng nói về!\n" +
                    "Ôi những cánh đồng quê chảy máu\n" +
                    "Dây thép gai đâm nát trời chiều\n" +
                    "Những đêm dài hành quân nung nấu\n" +
                    "Bỗng bồn chồn nhớ mắt người yêu.\n" +
                    "Từ những năm đau thương chiến đấu\n" +
                    "Đã ngời lên nét mặt quê hương\n" +
                    "Từ gốc lúa bờ tre hồn hậu\n" +
                    "Đã bật lên những tiếng căm hờn\n" +
                    "\n" +
                    "Bát cơm chan đầy nước mắt\n" +
                    "Bay còn giằng khỏi miệng ta\n" +
                    "Thằng giặc Tây, thằng chúa đất\n" +
                    "Đứa đè cổ, đứa lột da...\n" +
                    "\n" +
                    "Xiềng xích chúng bay không khoá được\n" +
                    "Trời đầy chim và đất đầy hoa\n" +
                    "Súng đạn chúng bay không bắn được\n" +
                    "Lòng dân ta yêu nước thương nhà!\n" +
                    "\n" +
                    "Khói nhà máy cuộn trong sương núi\n" +
                    "Kèn gọi quân văng vẳng cánh đồng\n" +
                    "Ôm đất nước những người áo vải\n" +
                    "Đã đứng lên thành những anh hùng.\n" +
                    "\n" +
                    "Ngày nắng đốt theo đêm mưa dội\n" +
                    "Mỗi bước đường mỗi bước hy sinh\n" +
                    "Trán cháy rực nghĩ trời đất mới\n" +
                    "Lòng ta bát ngát ánh bình minh.\n" +
                    "\n" +
                    "Súng nổ rung trời giận dữ\n" +
                    "Người lên như nước vỡ bờ\n" +
                    "Nước Việt Nam từ máu lửa\n" +
                    "Rũ bùn đứng dậy sáng loà.\n" +
                    "\n" +
                    "1948-1955\n",
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
                text: "Bài thơ “Đất nước” được sáng tác trong một thời gian dài (1948 – 1955), gần như trong suốt thời kỳ kháng chiến chống Pháp.\n" +
                    "- Bài thơ là một thi phẩm tiêu biểu nhất trong sự nghiệp sáng tác thơ của Nguyễn Đình Thi, có những đoạn trong “Đất nước” được lấy từ hai bài thơ “Sáng mát trong như sáng năm xưa” (1948) và “Đêm mitting” (1949). Đến năm 1955, Nguyễn Đình Thi đã viết thêm phần sau “Ôi những cánh...”\n" +
                    "Dù bài thơ đã được viết nhiều lần trong một khoảng thời gian dài nhưng tác phẩm vẫn là một chỉnh thể nghệ thuật và là một trong những bài thơ hay nhất của Nguyễn Đình Thi và văn học Việt Nam sau Cách mạng Tháng Tám.\n",
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
                text: "Dưới đây là những mục nội dung khi tìm hiểu về bài thơ “Đất nước” mà bạn cần lưu ý:\n" +
                    "a. Mùa thu đất nước trong hoài niệm của tác giả (từ đầu bài thơ đến “Những buổi ngày xưa vọng nói về”)\n" +
                    "- Hình ảnh mùa thu Hà Nội hiện lên với những nét đặc trưng quen thuộc: “sáng mát trong”, “gió”, “hương cốm mới”.\n" +
                    "+ Bức tranh mùa thu Hà Nội hiện lên chân thực, thi vị và thoáng một chút buồn qua cảm nhận của người ra đi: những buổi sáng mát trong, gió thổi, hương cốm, hơi may xao xác, phố phường Hà Nội. \n" +
                    "+ Hình ảnh người ra đi buồn bã, lưu luyến nhưng cũng đầy sự quyết tâm lên đường chiến đấu vì hòa bình, độc lập của dân tộc “Người ra đi đầu không ngoảnh lại/ Sau lưng thềm nắng lá rơi đầy”.\n" +
                    "=> Mùa thu Hà Nội đẹp nhưng buồn bởi nhân vật trữ tình phải chia xa Hà Nội để đấu tranh vì sự nghiệp giải phóng của dân tộc.\n" +
                    "\n" +
                    "- Hình ảnh mùa thu cách mạng, mùa thu của độc lập: \n" +
                    "“Trời xanh đây là của chúng ta\n" +
                    "Núi rừng đây là của chúng ta\n" +
                    "Những cánh đồng thơm mát\n" +
                    "Những ngả đường bát ngát\n" +
                    "Những dòng sông đỏ nặng phù sa\n" +
                    "\n" +
                    "Nước chúng ta\n" +
                    "Nước những người chưa bao giờ khuất\n" +
                    "Đêm đêm rì rầm trong tiếng đất\n" +
                    "Những buổi ngày xưa vọng nói về!”\n" +
                    "+ Đoạn thơ đã thể hiện niềm tự hào của tác giả đối với đất nước.\n" +
                    "+ Hình ảnh thơ giàu sức gợi, câu thơ giàu tính nhạc, phép điệp được sử dụng một cách hiệu quả.\n" +
                    "=> Thể hiện tình yêu tha thiết, niềm tự hào về đất nước có truyền thống anh hùng, bất khuất nay đã giành được độc lập.\n" +
                    "\n" +
                    "b. Hình ảnh đất nước trong kháng chiến (đoạn còn lại)\n" +
                    "- Đất nước đau thương trong chiến tranh: “những cánh đồng quê chảy máu”, “dây thép gai đâm nát trời chiều”, “bát cơm chan đầy nước mắt”,...\n" +
                    "- Chứng kiến những tội ác mà quân địch đã làm với nhân dân ta, đất nước như bật lên nỗi căm hờn mà sẵn sàng vùng lên chiến đấu: \n" +
                    "+ “Những đêm dài hành quân nung nấu”\n" +
                    "+ “Xiềng xích chúng bay không khóa được...Lòng dân ta yêu nước thương nhà”\n" +
                    "- Hình ảnh đất nước hiện lên thật chói lọi, hào hùng:\n" +
                    "+ “Ôm đất nước những người áo vải\n" +
                    "Đã đứng lên thành những anh hùng”.\n" +
                    "+ “Nước Việt Nam từ máu lửa\n" +
                    "Rũ bùn đứng dậy sáng lòa”.\n" +
                    "=> Sử dụng hình ảnh sáng tạo, đầy sức gợi tả, gợi cảm, thủ pháp đối lập cùng khuynh hướng sử thi và cảm hứng lãng mạn.\n" +
                    "c. Tổng kết giá trị nội dung\n" +
                    "- Đất nước được cảm nhận trong chiều dài của những năm tháng kháng chiến.\n" +
                    "- Cảm xúc, suy tư của tác giả về đất nước: vừa gần gũi nhưng cũng thật thiêng liêng, vĩ đại và anh hùng.\n",
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
                text: "Giá trị nghệ thuật:\n" +
                    "- Các câu thơ dài, ngắn xen kẽ nhau -> tạo nhịp điệu biến đổi linh hoạt.\n" +
                    "- Hình ảnh sinh động, biểu cảm.\n" +
                    "- Nhà thơ đã diễn tả sâu sắc, tinh tế về tâm trạng, tình cảm của nhân vật trữ tình. \n",
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
                text: "Chuyến tàu sẽ tiếp tục đưa bạn tìm hiểu về một tác phẩm của nhà thơ Trần Đăng Khoa, viết về tinh thần lạc quan, tươi trẻ, tình yêu đất nước của những người lính đảo nơi Trường Sa. Bài thơ mang tên “Lính đảo hát tình ca trên đảo”. Bây giờ, bạn hãy lựa chọn kiến thức mà bạn muốn tìm hiểu nhé!",
                buttons: [
                    {
                        text: "Đọc bài thơ",
                        action: ButtonAction.RouterConversation,
                        pos: 2
                    },
                    {
                        text: "Hoàn cảnh sáng tác",
                        action: ButtonAction.RouterConversation,
                        pos: 4
                    },
                    {
                        text: "Nội dung, Nghệ thuật",
                        action: ButtonAction.RouterConversation,
                        pos: 6
                    },
                    {
                        text: "Các tác phẩm khác viết về người lính đảo của tác giả Trần Đăng Khoa",
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
                actionType: ActionType.NoAction,
                speaker: Character.System,
                text: "Đá san hô kê lên thành sân khấu\n" +
                    "Vài tấm tôn chôn mấy cánh gà\n" +
                    "Em đừng trách bọn chúng anh tạm bợ\n" +
                    "Chẳng phông màn nào chịu nổi gió Trường Sa\n" +
                    "\n" +
                    "Gió rát mặt, đảo luôn thay hình dạng\n" +
                    "Sỏi cát bay như lũ chim hoang\n" +
                    "Cứ mặc nó. Nào hỡi các chiến hữu\n" +
                    "Ta bắt đầu thôi. Mây nước đã mở màn\n" +
                    "\n" +
                    "Sân khấu lô nhô mấy chàng đầu trọc\n" +
                    "Người xem ngổn ngang cũng rặt lính trọc đầu\n" +
                    "Nước ngọt hiếm không lẽ dành gội tóc\n" +
                    "Lính trẻ lính già đều trọc tếu như nhau\n" +
                    "\n" +
                    "Có lúc vui cứ gọi đùa sư cụ\n" +
                    "Là bà con xa với bụt ốc đây mà\n" +
                    "Thôi lặng yên nghe có gì đang sóng sánh\n" +
                    "Hoá ra là sư cụ hát tình ca\n" +
                    "\n" +
                    "Những giai điệu ngang tàng như gió biển\n" +
                    "Nhưng lời ca toàn nhớ với thương thôi\n" +
                    "Đêm buông xuống nhìn nhau không rõ nữa\n" +
                    "Cứ ngỡ như vỏ ốc cất thành lời\n" +
                    "\n" +
                    "Rằng có đêm trăng dắt em đi dạo\n" +
                    "Gương mặt em dịu dàng hàng cây cũng tươi xinh\n" +
                    "Mở mắt chung chiêng lưng trời sóng vỗ\n" +
                    "Và tay mình lại nắm lấy tay mình\n" +
                    "\n" +
                    "Người yêu chúng anh ơi, các em ở phương nào?\n" +
                    "Tóc em ngắn hay dài có trời mà biết được\n" +
                    "Những bóng dáng nào sẽ đến với chúng anh\n" +
                    "Trông bốn phía chỉ âm u mây nước\n" +
                    "\n" +
                    "Nào hát lên cho mây nước biết\n" +
                    "Rằng chúng ta là những con người\n" +
                    "Yêu em thủy chung hơn muối mặn\n" +
                    "Dù thư tình chưa biết gửi cho ai...\n" +
                    "\n" +
                    "Nào hát lên cho đêm tối biết\n" +
                    "Rằng tình yêu sáng trong ngực ta đây\n" +
                    "Ta đứng vững giữa muôn trùng sóng gió\n" +
                    "Tổ quốc Việt Nam bắt đầu từ nơi này…\n" +
                    "\n" +
                    "Điệu tình ca cứ ngân lên chót vót\n" +
                    "Bỗng bàng hoàng nhìn lại phía sau\n" +
                    "Ngoài mép biển, người đâu lên đông thế\n" +
                    "Ồ, hoá ra toàn những đá trọc đầu...\n" +
                    "\n" +
                    "Đảo Sơn Ca, tháng 5-1982\n",
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
                text: "Bài thơ “Lính đảo hát tình ca trên đảo” được nhà thơ sáng tác trong những năm 80 của thế kỉ trước, khi tác giả đang là người lính hải quân cùng đồng đội thực hiện nhiệm vụ ở ngoài Trường Sa sóng nước. Những hình ảnh, chi tiết, nhân vật trong bài thơ chính là một phần hiện thực trong cuộc sống của người lính đảo.",
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
                text: "Những kiến thức cơ bản mà bạn cần lưu ý.\n" +
                    "1. Thể thơ: Tự do\n" +
                    "2. Bố cục nội dung:\n" +
                    "Đoạn 1 (4 khổ đầu): giới thiệu về những người lính đảo\n" +
                    "Đoạn 2 (Còn lại): Bản tình ca của những người lính đảo\n" +
                    "3. Tìm hiểu chi tiết tác phẩm “Lính đảo hát tình ca trên đảo” (Sơ đồ nội dung và nghệ thuật)\n",
                image: '/conversation-images/81.png'
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
                text: "Các tác phẩm khác viết về người lính đảo của tác giả Trần Đăng Khoa.\n" +
                    "- Thơ tình người lính biển\n" +
                    "- Đợi mưa trên đảo Sinh Tồn\n",
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
]